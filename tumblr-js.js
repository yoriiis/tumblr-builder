/**
 *
 * Plugin:
 * @version 1.8
 *
 * @author: Joris DANIEL
 * @fileoverview: New Tumblr class js which use Tumblr API V1 and extend methods. Include infinite scroll, related posts and tag methods.
 * Thanks to Nicolas Riciotti aka Twode
 * For IE8/9, FF, Chrome, Opera, Safari
 *
 * Copyright (c) 2014 Joris DANIEL
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
**/

(function ($, window ) {

    "use strict";

    //Get a unique random number between min/max
    function getRandoms(numPicks, min, max) {

        var len         = max - min + 1,
            nums        = new Array(len),
            selections  = [],
            i           = 0,
            j           = 0;

        if( min == 0 ){
            if( numPicks > (max + 1)  ) return;
        }else{
            if( numPicks > ( (max-min) + 1) ) return;
        }

        //Initialize the array
        for( i = 0; i < len; i++ ){
            nums[i] = i + min;
        }

        //Randomly pick one from the array
        for( j = 0; j < numPicks; j++ ){

            var index = Math.floor( Math.random() * nums.length );
            selections.push( nums[index] );
            nums.splice( index, 1 );

        }

        return(selections);

    }


    //Retrieve from global or create the _tumblr object
    var _Tumblr = function( options ){

        //Params
        this.params = $.extend({
            useAPI              : false,                                 //Use API to get data in JSON (to manipulate tags and related posts)
            versionAPI          : 1,                                     //Support API V1 & V2 (In private blog API V2 is unavailable)
            keyAPI              : '',                                    //api_key use by API V2
            limitData           : 250,                                   //Limit loop to get all JSON
            cache               : false,                                  //Cache data in web storage if possible. More fast
            cacheMethod         : 'sessionStorage',                      //Choose web storage to use (sessionStorage or localStorage)
            wrapperSelector     : '',                                    //Target or array for two target (odd/even compatibility)
            postSelector        : '.post',                               //Selector of item with infinite scroll
            appendMethod        : 'normal',                              //Normal | isotope | masonry
            nearBottom          : 350,                                   //Scrolltop near bottom trigger new post load
            debug               : false                                  //On debug mode, show log error and warning
        }, options || {});

        //No configurables params
        this.baseURL            = '//' + window.location.host;
        this.infiniteScroll     = true;
        this.endPage            = false;
        this.isLoading          = false;
        this.jsonComplete       = false;
        this.currentPage        = 1;
        this.totalPages         = totalPages;

        this.$win               = $(window);
        this.$doc               = $(document);

        this.handlers           = {};

        this.init();
    };


    //Constructor
    _Tumblr.prototype.init = function(){

        //Clean url of tumblr if a slashe is at the end
        var self = this;

        //Get JSON and push it in cache if option is active and if it's possible
        if( this.params.useAPI ){
            this.getAllData();
        }

        //Detect Internet Explorer 8 with features and disable infinite scroll
        if( document.all && !document.addEventListener && document.documentMode == 8 ){
            this.infiniteScroll = false;
            return;
        }

        this.$win.on('scroll', function(){
            self.trigger(self.events.ON_SCROLL);
            self.onScroll();
        });

    };


    //Manage events
    _Tumblr.prototype.on = function( eventName, method ){
        var self = this;
        this.handlers[ method ] = function(){ method.call( self ) };
        this.$doc.on( eventName,  this.handlers[ method ] );
    };

    _Tumblr.prototype.off = function( eventName, method ){
        this.$doc.off( eventName, this.handlers[ method ] );
    };

    _Tumblr.prototype.trigger = function( eventName, datas ){
        this.$doc.trigger( eventName, ( typeof datas != 'undefined' ) ? datas : [] );
    };


    //List of publish event
    _Tumblr.prototype.events = {
        ON_SCROLL           : 'onWindowScroll',
        JSON_COMPLETE       : 'onJsonComplete',
        START_LOADING       : 'startLoading',
        END_LOADING         : 'endLoading',
        END_PAGE            : 'onEndedPage',
        IMAGES_LOADED       : 'onImagesLoaded', //(Need jQuery.imagesLoaded.js)
        POST_APPEND         : 'onPostAppended',
        NO_RELATED          : 'noRelated',
        HAS_RELATED         : 'hasRelated',
        ON_RECEIVE_NEW_POST : 'onReceiveNewPost'
    };


    //Get the json and store it in cache if possible
    _Tumblr.prototype.getAllData = function(e){

        var self        = this,
            cacheTarget = window[this.params.cacheMethod];

        //If browser support web storage and cache is true
        if( typeof cacheTarget != 'undefined' && this.params.cache ){

            //Try to get JSON in cache
            var getDataFromCache = cacheTarget.getItem('TUMBLR_JSON_DATA');

            //If doesn't exist, get the JSON with limit (this.params.limitData)
            if( getDataFromCache == null ){

                this.getDataFromAPI();

                this.on( this.events.JSON_COMPLETE, function(){

                    //On complete, store the object JSON in web storage if size is lower than limit web storage
                    try{
                        cacheTarget.setItem( 'TUMBLR_JSON_DATA', JSON.stringify (this.data ) );
                    }catch( error ){

                        //JSON can't store in web storage
                        if( error.code == 22 ){
                            self.log('JSON is too big and can\'t store in web storage, please pass cache params to false or reduice limitData');
                            cacheTarget.removeItem('TUMBLR_JSON_DATA');
                        }

                    }

                });

            }else{

                //If exist in web storage, get it
                this.data = JSON.parse( cacheTarget.getItem('TUMBLR_JSON_DATA') );
                this.totalPost = this.data['posts-total'];
                this.jsonComplete = true;

                setTimeout(function(){
                    self.trigger(self.events.JSON_COMPLETE);
                }, 0);

            }

        }else{

            //If cache is false or browser doesn't support web storage
            this.getDataFromAPI();

            //Remove data in web storage if already exist
            sessionStorage.removeItem('TUMBLR_JSON_DATA');
            localStorage.removeItem('TUMBLR_JSON_DATA');

        }

    }


    //Get all the json with a limit
    _Tumblr.prototype.getDataFromAPI = function(){

        var self             = this,
            nbPostPerRequest = 0,
            urlAPI           = '';

        if( this.params.versionAPI == 1 ){

            nbPostPerRequest = 50;
            urlAPI           = this.baseURL + '/api/read/json?callback=?&num=' + nbPostPerRequest;

        }else if( this.params.versionAPI == 2 ){

            nbPostPerRequest = 50;
            urlAPI           = '//api.tumblr.com/v2/blog/' + window.location.host + '/posts/?api_key=' + this.params.keyAPI + '&limit=' + nbPostPerRequest + '&notes_info=false&callback=?';

        }

        $.getJSON(urlAPI, function(d){

            var nbLoop        = 0,
                start         = 0,
                k             = 0;

            //Fix if use API V2 in private blog
            if( self.params.versionAPI == 2 && d['response'].length == 0 ){
                self.log('Tumblr API V2 is unavailable in private blog. Please use API V1 or remove password blog.');
                return;
            }

            self.data         = (self.params.versionAPI == 1) ? d : d['response'];
            self.totalPost    = (self.params.versionAPI == 1) ? d['posts-total'] : d['response']['total_posts'];

            if( self.totalPost <= self.params.limitData ){
                //Loop until totalPosts
                nbLoop = Math.ceil( (self.totalPost - nbPostPerRequest) / nbPostPerRequest );
            }else{
                //Loop until limitData
                nbLoop = Math.ceil( (self.params.limitData - nbPostPerRequest) / nbPostPerRequest );
            }

            //If JSON is complete
            if( nbLoop <= 0 ){

                self.jsonComplete = true;
                self.trigger(self.events.JSON_COMPLETE);

            }else{

                //Else do multiple loop to get data in JSON (limit this.params.limitData)
                for( var i = 0; i < nbLoop; i++ ){

                    (function(i) {

                        start = nbPostPerRequest + ( nbPostPerRequest * i );

                        $.getJSON( urlAPI + ((self.params.versionAPI == 1) ? '&start=' : '&offset=') + start, function(d){

                            var countPost = parseInt( self.data['posts'].length );

                            for( var j = 0, len = ((self.params.versionAPI == 1) ? d['posts'].length : d['response']['posts'].length) ; j < len; j++ ){
                                self.data['posts'][ countPost + parseInt(j) ] = ((self.params.versionAPI == 1) ? d['posts'][j] : d['response']['posts'][j]);
                            }

                            k++;

                            //JSON is complete or affected limit
                            if( k == nbLoop ){
                                self.jsonComplete = true;
                                self.trigger(self.events.JSON_COMPLETE);
                            }

                        });

                    })(i);

                }

            }

        });

    };


    //Initialize the scroll event and get next posts for infinite scroll
    _Tumblr.prototype.onScroll = function(e){

        var self                    = this,
            htmlNewPost             = null,
            firstContainerLoaded    = false,
            secondContainerLoaded   = false;

        //Function to push imagesloaded event for double target
        function pushLoadedEvent(){

            if( firstContainerLoaded === true && secondContainerLoaded === true ){
                self.trigger(self.events.IMAGES_LOADED);
                self.trigger(self.events.END_LOADING);
            }

        }

        if( !this.isLoading && this.infiniteScroll && !this.endPage && this.checkPage() == 'home' || this.checkPage() == 'tagged' ){

            if( this.$win.scrollTop() >= this.$doc.height() - this.$win.height() - this.params.nearBottom  ){

                this.trigger(this.events.START_LOADING);

                this.isLoading = true;

                //Check if container(s) exist
                if( typeof this.params.wrapperSelector == 'object' && this.params.wrapperSelector.length == 2 && ( $( this.params.wrapperSelector[0] ).length == 0 || $( this.params.wrapperSelector[1] ).length == 0 ) ){

                    self.log('Containers for new post doesn\'t exist. Please create HTML element : ' + this.params.wrapperSelector[0] + ' or ' + this.params.wrapperSelector[1] );
                    return;

                }else if( typeof this.params.wrapperSelector == 'string' && $( this.params.wrapperSelector ).length == 0 ){

                    self.log('The container for new post doesn\'t exist. Please create HTML element : ' + this.params.wrapperSelector);
                    return;

                }

                if( this.currentPage >= this.totalPages ){

                    this.isLoading  = false;
                    this.endPage    = true;
                    this.trigger(this.events.END_PAGE, [{ 'appended': false }]);
                    this.trigger(this.events.END_LOADING);

                }else{

                    //Get post of next page (home and tagged page)
                    if( this.checkPage() == 'tagged' ){
                        htmlNewPost = this.getPostOfPage( this.currentPage + 1, true );
                    }else{
                        htmlNewPost = this.getPostOfPage( this.currentPage + 1, false );
                    }

                    //On receive next post page
                    $(document).on(this.events.ON_RECEIVE_NEW_POST, function(e, d){

                        if( d != false ){

                            self.currentPage++;

                            //Push event now only for normal append method
                            if( self.params.appendMethod == 'normal' ){

                                //Double append
                                if( typeof self.params.wrapperSelector == 'object' && self.params.wrapperSelector.length == 2 ){

                                    $( self.params.wrapperSelector[0] ).append( d[0] );
                                    $( self.params.wrapperSelector[1] ).append( d[1] );

                                //One append
                                }else if( typeof self.params.wrapperSelector == 'string' ){
                                    $( self.params.wrapperSelector ).append( d );
                                }

                                self.trigger(self.events.POST_APPEND);

                            //For isotope or masonry method, append only on one target
                            //No push event and no double target !
                            }else if( self.params.appendMethod == 'isotope' || self.params.appendMethod == 'masonry' ){

                                if( typeof self.params.wrapperSelector == 'string' ){
                                    $( self.params.wrapperSelector ).append( d );
                                }else{
                                    self.log('You can\'t use appendMethod isotope or masonry with two targetPost. Please use normal append method or change target post. ');
                                }

                            }

                            //Reload new like button after append
                            Tumblr.LikeButton.get_status_by_page( self.currentPage );

                            //If jQuery.imagesLoaded.js is available, push a event
                            if( typeof $.fn.imagesLoaded != 'undefined' ){

                                //If user use odd/even post with two different container
                                if( typeof self.params.wrapperSelector == 'object' && self.params.wrapperSelector.length == 2 ){

                                    //Check images loaded on double target for normal append method
                                    if( self.params.appendMethod == 'normal' ){

                                        $( self.params.wrapperSelector[0] ).imagesLoaded( function(){
                                            firstContainerLoaded = true;
                                            pushLoadedEvent();
                                        });

                                        $( self.params.wrapperSelector[1] ).imagesLoaded( function(){
                                            secondContainerLoaded = true;
                                            pushLoadedEvent();
                                        });

                                    }else{
                                        self.log('You can\'t use appendMethod isotope or masonry with two targetPost. Please use normal append method or change target post. ');
                                    }


                                //If user has only one posts container
                                }else if( typeof self.params.wrapperSelector == 'string' ){

                                    $( self.params.wrapperSelector ).imagesLoaded( function(){

                                        if( self.params.appendMethod == 'isotope' ){

                                            if( typeof $.fn.isotope != 'undefined' ){

                                                $( self.params.wrapperSelector ).isotope('appended', d, function(){
                                                    self.trigger(self.events.POST_APPEND);
                                                });

                                            }

                                        }else if( self.params.appendMethod == 'masonry' ){

                                            if( typeof $.fn.masonry != 'undefined' ){

                                                $( self.params.wrapperSelector ).masonry('appended', d);
                                                self.trigger(self.events.POST_APPEND);

                                            }

                                        }

                                        self.trigger(self.events.IMAGES_LOADED);
                                        self.trigger(self.events.END_LOADING);

                                    });

                                }


                            }else{

                                if( self.params.appendMethod == 'normal' ){
                                    self.log('jQuery.imagesLoaded.js plugins is not found. It necessary to subscribe : _Tumblr.events.IMAGES_LOADED ');
                                }else{
                                    self.log('jQuery.imagesLoaded.js plugins is not found. The grid use ' + self.params.appendMethod + ' plugin and it necessary to subscribe : _Tumblr.events.IMAGES_LOADED ');
                                }
                                self.trigger(self.events.END_LOADING);

                            }

                            self.isLoading = false;
                            self.off( self.events.ON_RECEIVE_NEW_POST );

                        }

                    });

                }

            }

        }

    };


    //Getpostofpage, use by infinite scroll
    _Tumblr.prototype.getPostOfPage = function( numPage, taggedPage ){

        var self                = this,
            htmlNewPost         = null,
            htmlNewPostOdd      = null,
            htmlNewPostEven     = null,
            url                 = null;

        if( numPage > totalPages ){
            return false;
        }else{

            //If tagged page, change url of ajax request
            if( taggedPage ){
                url = this.baseURL + '/tagged/' + this.getTagPage() + '/page/' + numPage;
            }else{
                url = this.baseURL + '/page/' + numPage;
            }

            $.ajax({
                url: url,
                type: 'post',
                success: function( data ){

                    if( typeof self.params.wrapperSelector == 'object' && self.params.wrapperSelector.length == 2 ){

                        htmlNewPostOdd = $(data).find( self.params.wrapperSelector[0] + ' ' + self.params.postSelector );
                        htmlNewPostEven = $(data).find( self.params.wrapperSelector[1] + ' ' + self.params.postSelector );

                        self.trigger( self.events.ON_RECEIVE_NEW_POST, [{
                            0 : htmlNewPostOdd,
                            1 : htmlNewPostEven
                        }]);

                    }else if( typeof self.params.wrapperSelector == 'string' ){

                        htmlNewPost = $(data).find( self.params.postSelector );
                        self.trigger(self.events.ON_RECEIVE_NEW_POST, [htmlNewPost]);

                    }

                }

            });

        }

    }


    //Get a related posts
    _Tumblr.prototype.getRelatedPosts = function( options ){

        var self                    = this,
            listPosts               = [],
            listID                  = [],
            randomTagsArray         = [],
            randomArray             = [],
            currentID               = 0,
            tags                    = [],
            posts                   = null;

        var params = $.extend({
            limit               : 3,
            ignoreTag           : null
        }, options || {});

        if( !this.params.useAPI ){
            this.log('Related post use API, please active useAPI in params.');
            return;
        }

        //If current page is different of page post or json not complete, stop
        if( this.checkPage() != 'post' || !this.jsonComplete ){
            this.log('Related post can only be add on post page when _Tumblr.events.JSON_COMPLETE is published');
            return;
        }

        //Get tags of current post
        tags = this.getTagsPost();

        //If return null, idPost is unknown in the cache
        if( tags == null ){
            this.log('The current post (' + this.getIdPostPage() + ') has no tag');
            this.trigger(this.events.NO_RELATED);
            return;
        }

        //If tag must be ignore
        if( params.ignoreTag != null && tags.length > 1 ){

            for( var l = 0, lengthTagIgnore = tags.length; l < lengthTagIgnore; l++ ){

                if( params.ignoreTag == tags[l] ){
                    tags.splice(l, 1);
                }

            }

        }

        //Get current ID post page
        currentID = this.getIdPostPage();

        //Loop in all posts
        for( var i = 0, lengthPosts = this.data['posts'].length; i < lengthPosts; i++ ){

            posts = this.data['posts'][i];

            //If post has tags
            if( typeof posts['tags'] != 'undefined' ){

                //Loop in tags of every post
                for( var j = 0, lengthTag = posts['tags'].length; j < lengthTag; j++ ){

                    //Loop in tags of current post
                    for( var k = 0, lengthCurrentTag = tags.length; k < lengthCurrentTag; k++ ){

                        if( posts['tags'][j].toLowerCase() == tags[k].toLowerCase() && posts['id'] != currentID && $.inArray( posts['id'], listID ) == -1 ){

                            listPosts.push( posts );
                            listID.push( posts['id'] );

                        }

                    }

                }

            }

        }

        //Zero tag return
        if( listPosts.length < 1 ){
            this.trigger(this.events.NO_RELATED);
        }else{

            //Get an array of random unique number
            randomArray = getRandoms(params.limit, 0, parseInt( listPosts.length) -1 );

            //Return all tag
            if( listPosts.length < params.limit ){
                randomTagsArray['posts'] = listPosts;
            }else{

                //Return random
                randomTagsArray['posts'] = [];
                for( var l = 0, lengthRandom = randomArray.length; l < lengthRandom; l++ ){
                    randomTagsArray['posts'].push( listPosts[ randomArray[l] ] );
                }

            }

            this.trigger(this.events.HAS_RELATED);
            return randomTagsArray;

        }

    };


    //Get a sort tab of all tags
    _Tumblr.prototype.getAllTags = function(e){

        if( !this.params.useAPI ){
            this.log('List of all tags use API, please active useAPI in params.');
            return;
        }

        //If JSON isn't complete, stop
        if( !this.jsonComplete ){
            this.log('The function getAllTags() use JSON data, please attach to _Tumblr.events.JSON_COMPLETE event to execute your code');
            return;
        }

        var data        = this.data,
            listTag     = [];

        for( var k = 0, lengthPost = data['posts'].length; k < lengthPost ; k++ ){

            if( typeof data['posts'][k]['tags'] != 'undefined' ){

                for( var j = 0, lengthtag = data['posts'][k]['tags'].length; j < lengthtag; j++ ){

                    if( $.inArray( data['posts'][k]['tags'][j].toLowerCase(), listTag ) == -1 ){
                        listTag.push( data['posts'][k]['tags'][j].toLowerCase() );
                    }

                }

            }

        }

        //return a sort array
        listTag.sort();
        return listTag;

    }


    //Get a tab of tags post
    _Tumblr.prototype.getTagsPost = function( idPost ){

        if( !this.params.useAPI ){
            this.log('List of tags of posts use API, please active useAPI in params.');
            return;
        }

        var listTags = [];

        if( typeof idPost == 'undefined' ) var idPost = this.getIdPostPage();

        for(var i = 0, lengthPost = this.data['posts'].length; i < lengthPost; i++ ){

            if( this.data['posts'][i]['id'] == idPost ){

                if( typeof this.data['posts'][i]['tags'] == 'undefined' ) return;

                for( var j = 0, l = this.data['posts'][i]['tags'].length; j < l; j++ ){
                    listTags.push( this.data['posts'][i]['tags'][j].toLowerCase() );
                }

                return listTags

            }else{

                if( i == ( lengthPost - 1 ) ){
                    this.log('Unknown idPost');
                    return null;
                }

            }

        }

    }


    //Get tag of tagged page
    _Tumblr.prototype.getTagPage = function(e){

        if( this.checkPage() == 'tagged' ){

            var urlToCheck = '';

            if( window.location.hash == '' ){
                urlToCheck = window.location.pathname;
            }else{
                urlToCheck = window.location.hash;
            }

            var pathName = urlToCheck.split('/');
            var tagComponent = pathName[ pathName.length - 1 ];
            return decodeURIComponent(tagComponent.replace(/-/g, ' '));

        }

    }


    //Get id of post in post page
    _Tumblr.prototype.getIdPostPage = function(e){

        var currentPostUrl = window.location.href,
            currentIdPost = null;

        if( this.checkPage() == 'post' ){
            currentPostUrl.replace(/\/post\/([0-9]+)/g, function(match, $1){
                currentIdPost = $1;
            });
            return currentIdPost;
        }
    }


    //Check page
    _Tumblr.prototype.checkPage = function(e){

        var urlToCheck = '';

        if( window.location.hash == '' ){
            urlToCheck = window.location.pathname;
        }else{
            urlToCheck = window.location.hash;
        }

        if( urlToCheck.indexOf('tagged/') != -1 ){
            return 'tagged';
        }else if( urlToCheck.indexOf('post/') != -1 ){
            return 'post';
        }else if( urlToCheck == '/' ){
            return 'home';
        }

    }


    //Disable infiniteScroll
    _Tumblr.prototype.disableInfiniteScroll = function(e){
        this.infiniteScroll = false;
    }


    //Enable infiniteScroll
    _Tumblr.prototype.enableInfiniteScroll = function(e){
        this.infiniteScroll = true;
    }

    //Show console.warn if function is available in the browser (FIX IE)
    _Tumblr.prototype.log = function( d ){
        if( !this.params.debug ) return;
        if ((window.console && console.log)) console.warn(d);
    }

    window._Tumblr = _Tumblr;

})( jQuery, window );
