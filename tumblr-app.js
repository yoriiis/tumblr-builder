/**
 *
 * Plugin: 
 * @version 1.5
 *
 * @author: Joris DANIEL
 * @fileoverview: New Tumblr class js which use Tumblr API V1 and extend methods. Include infinite scroll, related posts and tag methods.
 * Thanks to Nicolas Riciotti aka Twode
 * For IE8/9, FF, Chrome, Opera, Safari
 *
 * Copyright (c) 2013 Joris DANIEL
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
**/

(function ($, window ) {

    "use strict";


    /*  
    --------------------
    UTILS METHOD
    --------------------
    */

    //Get a unique random number between min/max
    function getRandoms(numPicks, min, max) {

        if( min == 0 ){
            if( numPicks > (max + 1)  ) return;
        }else{
            if( numPicks > ( (max-min) + 1) ) return;
        }

        var len = max - min + 1,
            nums = new Array(len),
            selections = [], i;

        // initialize the array
        for (i = 0; i < len; i++) {
            nums[i] = i + min;
        }
        
        // randomly pick one from the array
        for (var i = 0; i < numPicks; i++) {

            var index = Math.floor(Math.random() * nums.length);
            selections.push( nums[index] );
            nums.splice( index, 1 );

        }

        return(selections);

    }

    //Show console.warn if function is available in the browser (FIX IE)
    function log( d ){
        if ((window.console && console.log)) console.warn(d);
    }


    /*  
    --------------------------------------------------
    RETRIEVE FROM GLOBAL OR CREATE THE _Tumblr OBJECT
    --------------------------------------------------
    */

    var _Tumblr = function( options ){

        //Params
        this.params = $.extend(true, {
            url: window.location.protocol + '//' + window.location.host,    //Optional, the script get the url of location.host
            limitPostInJSON     : 250,                                      //Limit loop to get all JSON
            sessionStorage      : true,                                     //Get the JSON once and push it in sessionStorage if possible. More fast
            postSelector        : '.post',                                  //CSS class of item with infinite scroll
            privateBlog: {                                                  //For private, pass user:password@ in url to remove the popin authentification (No IE)
                activate        : false,
                password        : ''
            },
            infiniteScroll: {
                activate        : true,                                     //Activate infinite scroll
                nearBottom      : 200,                                      //Scrolltop near bottom trigger new post load
                targetPost      : '',                                       //String for on target or array for two target (odd/even compatibility)
                appendMethod    : 'normal'                                  //Normal or isotope or masonry
            }
        }, options || {});

        _Tumblr.url = this.params.url;

        //No configurables params
        this.endPage            = false;
        this.isLoading          = false;
        this.jsonComplete       = false;
        this.currentPage        = 1;

        this.$win               = $(window);
        this.$doc               = $(document);

        this.handlers           = {};

        this.init();

    };


    /*  
    -----------------------------
    CONSTRUCTOR
    -----------------------------
    */

    _Tumblr.prototype.init = function(){

        //Clean url of tumblr if a slashe is at the end
        var self = this,
            slashe = this.params.url.charAt( this.params.url.length -1 ),
            newUrl;

        if( slashe == '/' ){
            newUrl = this.params.url.substring(0, this.params.url.length-1);
            this.params.url = newUrl;
        }

        //If blog is private, pass user:password@ in url for remove the popin authentification
        //FIX : IE doesn't allow to pass user/password in url, detect it with feature
        if( typeof window.attachEvent == 'undefined' && this.params.privateBlog.activate ){
            var newUrl;
            newUrl = this.params.url.replace('http://', 'http://user:' + this.params.privateBlog.password + '@');
            this.params.url = newUrl;
        }

        //Get JSON and push it in sessionStorage if option is active and if it's possible
        this.webStorage();

        this.$win.on('scroll', function(){
            self.fireEvent(self.events.ON_SCROLL);
        });
        this.attachEvent( this.events.JSON_COMPLETE, this.attachScroll );
        
    };


    /*  
    -----------------------------
    MANAGE EVENTS
    -----------------------------
    */

    _Tumblr.prototype.attachScroll = function(){
        this.detachEvent( this.events.JSON_COMPLETE, this.attachScroll );
        this.attachEvent( this.events.ON_SCROLL, this.onScroll );
    };

    _Tumblr.prototype.attachEvent = function( eventName, method ){
        var self = this;
        this.handlers[ method ] = function(){ method.call( self ) };
        this.$doc.on( eventName,  this.handlers[ method ] );
    };  

    _Tumblr.prototype.detachEvent = function( eventName, method ){
        this.$doc.off( eventName, this.handlers[ method ] );
    };

    _Tumblr.prototype.fireEvent = function( eventName, datas ){
        this.$doc.trigger( eventName, ( typeof datas != 'undefined' ) ? datas : [] );
    };


    /*  
    -----------------------------
    LIST OF PUBLISH EVENT
    -----------------------------
    */

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


    /*  
    ---------------------------
    JSON REQUEST 
    ---------------------------
    */

    _Tumblr.prototype.getJSON = function( url, callback ){

        var self = this;

        $.getJSON( url, function( d ) {
            callback.call( self, d );
        });

    };


    /*  
    -------------------------------------------------------
    GET THE JSON AND STORE IT IN SESSIONSTORAGE IF POSSIBLE
    -------------------------------------------------------
    */

    _Tumblr.prototype.webStorage = function(e){

        var self = this;

        //If browser support sessionStorage and sessionStorage is false
        if( typeof sessionStorage != 'undefined' && this.params.sessionStorage ){

            //Try to get JSON in sessionstorage
            var getDataFromSessionStorage = sessionStorage.getItem('_Tumblr_JSON_data');

            //If doesn't exist, get the JSON with limit (this.params.limitPostInJSON)
            if( getDataFromSessionStorage == null ){

                this.getAllJSON();
                this.attachEvent( this.events.JSON_COMPLETE, function(){

                    //On complete, store the object JSON in sessionstorage if size is lower than limit sessionStorage
                    try{
                        sessionStorage.setItem( '_Tumblr_JSON_data', JSON.stringify (this.data ) );
                    }catch( error ){

                        //JSON can't store in sessionStorage
                        if( error.code == 22 ){
                            log('JSON is too big and can\'t store in sessionStorage, please pass sessionStorage params to false or reduice limitPostInJSON');
                            sessionStorage.removeItem('_Tumblr_JSON_data');
                        }
                    
                    }
                    

                });

            }else{

                //If exist in sessionstorage, get it
                this.data = JSON.parse( sessionStorage.getItem('_Tumblr_JSON_data') );
                this.totalPost = this.data['posts-total'];
                this.jsonComplete = true;

                setTimeout(function(){
                    self.fireEvent(self.events.JSON_COMPLETE);
                }, 0);
                
            }

        }else{

            //If sessionStorage is true or browser doesn't support sessionstorage
            this.getAllJSON();

        }

    }


    /*  
    -----------------------------
    GET ALL THE JSON WITH A LIMIT
    -----------------------------
    */

    _Tumblr.prototype.getAllJSON = function(){

        var self             = this,
            nbPostPerRequest = 50;

        this.getJSON( this.params.url + '/api/read/json?callback=?&num=' + nbPostPerRequest, function(d){

            this.data = d;
            this.totalPost = this.data['posts-total'];

            var countMissingPost = parseInt( this.totalPost - this.data['posts'].length ),
                nbLoop,
                start = 0,
                k = 0;

            if( this.params.limitPostInJSON == 'all' ){
                log('Get all posts in JSON can be very long and slow down your application');
                nbLoop = Math.ceil(this.totalPost - nbPostPerRequest) / nbPostPerRequest;
            }else{
                nbLoop = Math.ceil(this.params.limitPostInJSON - nbPostPerRequest) / nbPostPerRequest;
            }

            //If JSON is complete
            if( countMissingPost == 0 ){

                this.jsonComplete = true;
                this.fireEvent(this.events.JSON_COMPLETE);

            }else{

                //Else do multiple loop to get data in JSON (limit this.params.limitPostInJSON)
                for( var i = 0; i < nbLoop; i++ ){

                    (function(i) {

                        start = nbPostPerRequest + ( nbPostPerRequest * i );

                        self.getJSON( self.params.url + '/api/read/json?callback=?&num=' + nbPostPerRequest + '&start=' + start, function(d){
                            
                            var countPost = parseInt( self.data['posts'].length );

                            for( var j = 0, len = d['posts'].length; j < len; j++ ){
                                self.data['posts'][ countPost + parseInt(j) ] = d['posts'][j];
                            }

                            k++;

                            //JSON is complete or affected limit
                            if( k == nbLoop ){
                                self.jsonComplete = true;
                                self.fireEvent(self.events.JSON_COMPLETE);
                            }

                        });

                    })(i);

                }

            }

        });

    };


    /*  
    ------------------------------------------------------------------
    INITIALIZE THE SCROLL EVENT AND GET NEXT POSTS FOR INFINITE SCROLL
    ------------------------------------------------------------------
    */

    _Tumblr.prototype.onScroll = function(e){

        var self                    = this,
            htmlNewPost             = null,
            firstContainerLoaded    = false,
            secondContainerLoaded   = false;

        //Function to push imagesloaded event for double target
        function pushLoadedEvent(){

            if( firstContainerLoaded === true && secondContainerLoaded === true ){
                self.fireEvent(self.events.IMAGES_LOADED);
                self.fireEvent(self.events.END_LOADING);
            }

        }

        if( !this.isLoading && this.params.infiniteScroll.activate && !this.endPage && this.checkPage() == 'home' ){

            if( this.$win.scrollTop() >= this.$doc.height() - this.$win.height() - this.params.infiniteScroll.nearBottom  ){

                this.fireEvent(this.events.START_LOADING);

                this.isLoading = true;

                //Check if container(s) exist
                if( typeof this.params.infiniteScroll.targetPost == 'object' && this.params.infiniteScroll.targetPost.length == 2 && ( $( this.params.infiniteScroll.targetPost[0] ).length == 0 || $( this.params.infiniteScroll.targetPost[1] ).length == 0 ) ){

                    log('Containers for new post doesn\'t exist. Please create HTML element : ' + this.params.infiniteScroll.targetPost[0] + ' or ' + this.params.infiniteScroll.targetPost[1] );
                    return;

                }else if( typeof this.params.infiniteScroll.targetPost == 'string' && $( this.params.infiniteScroll.targetPost ).length == 0 ){

                    log('The container for new post doesn\'t exist. Please create HTML element : ' + this.params.infiniteScroll.targetPost);
                    return;

                }

                if( this.currentPage >= totalPages ){

                    this.isLoading  = false;
                    this.endPage    = true;
                    this.fireEvent(this.events.END_PAGE, [{ 'appended': false }]);
                    this.fireEvent(this.events.END_LOADING);

                }else{

                    //Get post of next page
                    htmlNewPost = this.getPostOfPage( this.currentPage + 1 );

                    //On receive next post page
                    $(document).on(this.events.ON_RECEIVE_NEW_POST, function(e, d){

                        if( d != false ){

                            self.currentPage++;

                            //Push event now only for normal append method
                            if( self.params.infiniteScroll.appendMethod == 'normal' ){

                                //Double append   
                                if( typeof self.params.infiniteScroll.targetPost == 'object' && self.params.infiniteScroll.targetPost.length == 2 ){

                                    $( self.params.infiniteScroll.targetPost[0] ).append( d[0] );
                                    $( self.params.infiniteScroll.targetPost[1] ).append( d[1] );

                                //One append
                                }else if( typeof self.params.infiniteScroll.targetPost == 'string' ){
                                    $( self.params.infiniteScroll.targetPost ).append( d );     
                                }

                                self.fireEvent(self.events.POST_APPEND);

                            //For isotope or masonry method, append only on one target
                            //No push event and no double target !
                            }else if( self.params.infiniteScroll.appendMethod == 'isotope' || self.params.infiniteScroll.appendMethod == 'masonry' ){

                                if( typeof self.params.infiniteScroll.targetPost == 'string' ){
                                    $( self.params.infiniteScroll.targetPost ).append( d );
                                }else{
                                    log('You can\'t use appendMethod isotope or masonry with two targetPost. Please use normal append method or change target post. ');
                                }

                            }

                            //Reload new like button after append
                            if( !self.params.privateBlog.activate ){
                                Tumblr.LikeButton.get_status_by_page( self.currentPage );
                            }

                            //If jQuery.imagesLoaded.js is available, push a event
                            if( typeof $.fn.imagesLoaded != 'undefined' ){

                                //If user use odd/even post with two different container
                                if( typeof self.params.infiniteScroll.targetPost == 'object' && self.params.infiniteScroll.targetPost.length == 2 ){

                                    //Check images loaded on double target for normal append method
                                    if( self.params.infiniteScroll.appendMethod == 'normal' ){

                                        $( self.params.infiniteScroll.targetPost[0] ).imagesLoaded( function(){
                                            firstContainerLoaded = true;
                                            pushLoadedEvent();
                                        });

                                        $( self.params.infiniteScroll.targetPost[1] ).imagesLoaded( function(){
                                            secondContainerLoaded = true;
                                            pushLoadedEvent();
                                        });

                                    }else{
                                        log('You can\'t use appendMethod isotope or masonry with two targetPost. Please use normal append method or change target post. ');
                                    }


                                //If user has only one posts container
                                }else if( typeof self.params.infiniteScroll.targetPost == 'string' ){

                                    $( self.params.infiniteScroll.targetPost ).imagesLoaded( function(){

                                        if( self.params.infiniteScroll.appendMethod == 'isotope' ){

                                            if( typeof $.fn.isotope != 'undefined' ){

                                                $( self.params.infiniteScroll.targetPost ).isotope('appended', d, function(){
                                                    self.fireEvent(self.events.POST_APPEND);
                                                });

                                            }

                                        }else if( self.params.infiniteScroll.appendMethod == 'masonry' ){

                                            if( typeof $.fn.masonry != 'undefined' ){

                                                $( self.params.infiniteScroll.targetPost ).masonry('appended', d);
                                                self.fireEvent(self.events.POST_APPEND);

                                            }

                                        }

                                        self.fireEvent(self.events.IMAGES_LOADED);
                                        self.fireEvent(self.events.END_LOADING);

                                    });

                                }


                            }else{

                                if( self.params.infiniteScroll.appendMethod == 'normal' ){
                                    log('jQuery.imagesLoaded.js plugins is not found. It necessary to subscribe : _Tumblr.events.IMAGES_LOADED ');
                                }else{
                                    log('jQuery.imagesLoaded.js plugins is not found. The grid use ' + self.params.infiniteScroll.appendMethod + ' plugin and it necessary to subscribe : _Tumblr.events.IMAGES_LOADED ');
                                }
                                self.fireEvent(self.events.END_LOADING);

                            }

                            self.isLoading = false;
                            self.detachEvent( self.events.ON_RECEIVE_NEW_POST );

                        }

                    });

                }

            }

        }

        //If infinite scroll is disable, trigger END_PAGE event
        if( !this.params.infiniteScroll.activate && !this.endPage ){

            self.endPage = true;
            self.fireEvent(self.events.END_PAGE, [{ 'appended': false }]);

        }

    };


    /*  
    ------------------------------------------------------------------
    GETPOSTOFPAGE, USE BY INFINITE SCROLL AND GETFIRSTPUSHHOME
    ------------------------------------------------------------------
    */

    _Tumblr.prototype.getPostOfPage = function( numPage ){

        var self                = this,
            htmlNewPost         = null,
            htmlNewPostOdd      = null,
            htmlNewPostEven     = null,
            url                 = null;

        if( numPage > totalPages ){
            return false;
        }else{

            url = this.params.url + '/page/' + numPage;

            $.ajax({
                url: url,
                type: 'post',
                success: function( data ){

                    if( typeof self.params.infiniteScroll.targetPost == 'object' && self.params.infiniteScroll.targetPost.length == 2 ){

                        htmlNewPostOdd = $(data).find( self.params.infiniteScroll.targetPost[0] + ' ' + self.params.postSelector );
                        htmlNewPostEven = $(data).find( self.params.infiniteScroll.targetPost[1] + ' ' + self.params.postSelector );

                        self.fireEvent( self.events.ON_RECEIVE_NEW_POST, [{
                            0 : htmlNewPostOdd,
                            1 : htmlNewPostEven
                        }]);

                    }else if( typeof self.params.infiniteScroll.targetPost == 'string' ){

                        htmlNewPost = $(data).find( self.params.postSelector );
                        self.fireEvent(self.events.ON_RECEIVE_NEW_POST, [htmlNewPost]);

                    }   

                },
                error: function(jqXHR, textStatus){
                    console.log('error');
                }

            });

        }

    }


    /*  
    ------------------------------------------------
    GET X FIRST POST OF HOME, AND PUSH IT IN TARGET
    ------------------------------------------------
    */

    _Tumblr.prototype.getFirstPushHome = function( target ){

        var self                = this,
            _url                = null,
            htmlNewPost         = null;

        htmlNewPost = this.getPostOfPage(1);

        $(document).on(this.events.ON_RECEIVE_NEW_POST, function(e, d){

            $( target ).append( d );
            self.fireEvent(self.events.POST_APPEND);

            if( !self.params.privateBlog.activate ){
                Tumblr.LikeButton.get_status_by_page( self.currentPage );
            }

            //If jQuery.imagesLoaded.js is available, push a event
            if( typeof $.fn.imagesLoaded != 'undefined' ){
                
                $( target ).imagesLoaded( function(){

                    self.fireEvent(self.events.IMAGES_LOADED);
                    self.fireEvent(self.events.END_LOADING);

                });

            }else{

                log('jQuery.imagesLoaded.js plugins is not found. It necessary to subscribe : _Tumblr.events.IMAGES_LOADED ');
                self.fireEvent(self.events.END_LOADING);

            }

        });

    }


    /*  
    ----------------------------
    GET A RELATED POSTS
    ----------------------------
    */

    _Tumblr.prototype.getRelatedPosts = function( options ){

        var self                    = this,
            listPosts               = [],
            listID                  = [],
            randomTagsArray         = [],
            randomArray             = [],
            currentID               = 0,
            tags                    = [],
            posts                   = null,
            params = $.extend({
                limit               : 3,
                listTags            : [],
                ignoreIndex         : 'first'
        }, options || {});

        //If no tag or current page is different of page post, stop
        if( this.checkPage() != 'post' || !this.jsonComplete ){
            log('Related post can only be add on post page when _Tumblr.events.JSON_COMPLETE is published');
            return;
        }

        //If user has own tags
        if( typeof params.listTags != 'undefined' && params.listTags != '' && params.listTags != [] && params.listTags.length > 0 ){
            tags = params.listTags;
        }else{
            //Else get tags of current post
            tags = this.getTagsPost();
        }
    
        //If no tags, stop
        if( typeof tags == 'undefined' || !tags ){
            log('The current post (' + this.getIdPostPage() + ') has no tag');
            this.fireEvent(this.events.NO_RELATED);
            return;
        }
        
        //Get current ID post page
        currentID = this.getIdPostPage();

        //If tag must be ignore
        if( typeof params.ignoreIndex != 'undefined' ){

            if( tags.length > 1 && params.ignoreIndex != '' ){
                if( params.ignoreIndex == 'first' ) tags.shift();
                else if( params.ignoreIndex == 'last' ) tags.pop();
            }

        }

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
                            
                            listPosts.push(posts);
                            listID.push( posts['id'] );

                        }

                    }

                }

            }

        }

        //Get an array of random unique number
        randomArray = getRandoms(params.limit, 0, parseInt( listPosts.length) -1 );
        
        //Zero tag return
        if( listPosts.length < 1 ){
            this.fireEvent(this.events.NO_RELATED);
        }else{

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

            this.fireEvent(this.events.HAS_RELATED);

            //If limit is inquire, ajust the data
            if( typeof params.limit != 'undefined' ){

                var firstPosts = [];
                firstPosts['posts'] = [];

                for( var i = 0; i < params.limit; i++ ){
                    firstPosts['posts'].push( randomTagsArray['posts'][i] );
                }

                randomTagsArray = firstPosts;

            }

            return randomTagsArray;

        }

    };


    /*  
    ----------------------------
    GET A SORT TAB OF ALL TAGS
    ----------------------------
    */

    _Tumblr.prototype.getAllTags = function(e){

        //If JSON isn't complete, stop
        if( !this.jsonComplete ){
            log('The function getAllTags() use JSON data, please attach to _Tumblr.events.JSON_COMPLETE event to execute your code');
            return;
        }

        var data = this.data,
            listTag = [];

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


    /*  
    ----------------------------
    GET A TAB OF TAGS POST
    ----------------------------
    */

    _Tumblr.prototype.getTagsPost = function( idPost ){

        var listTags = [];

        if( typeof idPost == 'undefined' ) var idPost = this.getIdPostPage();

        for(var i = 0, lengthPost = this.data['posts'].length; i < lengthPost; i++ ){

            if( this.data['posts'][i]['id'] == idPost ){

                if( typeof this.data['posts'][i]['tags'] == 'undefined' ) return;;

                for( var j = 0, l = this.data['posts'][i]['tags'].length; j < l; j++ ){
                    listTags.push( this.data['posts'][i]['tags'][j].toLowerCase() );
                }

                return listTags

            }

        }

    }


    /*  
    ----------------------------
    GET TAG OF TAGGED PAGE
    ----------------------------
    */

    _Tumblr.prototype.getTagPage = function(e){

        if( this.checkPage() == 'tagged' ){
            var pathName =  window.location.pathname.split('/');
            return pathName[ pathName.length - 1 ];
        }

    }


    /*  
    ----------------------------
    GET ID OF POST IN POST PAGE
    ----------------------------
    */

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


    /*  
    ----------------------------
    CHECK PAGE
    ----------------------------
    */

    _Tumblr.prototype.checkPage = function(e){

        if( window.location.pathname.indexOf('/tagged/') != -1 ){
            return 'tagged';
        }else if( window.location.pathname.indexOf('/post/') != -1 ){
            return 'post';
        }else if( window.location.pathname == '/' ){
            return 'home';
        }

    }


    /*  
    ----------------------------
    EXPOSE _Tumblr TO GLOBAL
    ----------------------------
    */

    window._Tumblr = _Tumblr;

})( jQuery, window );