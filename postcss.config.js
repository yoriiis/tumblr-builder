const path = require('path')

module.exports = {
	plugins: [
		require('postcss-import')({
			resolve (id) {
				let aliasFound = false
				const listAlias = [
					{
						alias: '@commonVars',
						path: './src/shared/assets/styles/vars.css'
					}
				]

				listAlias.forEach(item => {
					if (id.match(new RegExp(item.alias, 'g'))) {
						aliasFound = path.resolve(__dirname, item.path, id.slice(16))
					}
				})

				return aliasFound || id
			}
		}),
		require('postcss-preset-env')({
			stage: 2,
			features: {
				'custom-properties': {
					warnings: true,
					preserve: false
				}
			}
		}),
		require('postcss-nested')(),
		require('postcss-custom-media')()
	]
}
