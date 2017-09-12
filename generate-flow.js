const compiler = require('flowgen').default.compiler
const fs = require('fs')

const libDir = './lib/model'

fs.readdirSync(libDir)
	.filter(name => name.endsWith('.d.ts'))
	.map(name => libDir + '/' + name)
	.forEach(path => {
		const flowContent = compiler.compileDefinitionFile(path)

		const result = '// @flow \n' + flowContent.toString()
			.replace(/declare export/g, '')

		fs.writeFileSync(path.substring(0, path.length - 5) + '.js.flow', result)
	})
