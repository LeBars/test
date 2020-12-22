const rimraf = require('rimraf')
const path = require('path')
const ncp = require('ncp').ncp

const basePath = path.resolve(__dirname, '../../template/resources/')
const currentBuildPath = path.resolve(__dirname, '../dist/template/resources/')
const currentSourcePath = path.resolve(__dirname, '../src/')
const resources = [
  {
    name: 'js',
    path: currentBuildPath
  },
  {
    name: 'css',
    path: currentBuildPath
  },
  {
    name: 'images',
    path: currentSourcePath
  }
]

const postBuild = () => {
  resources.forEach(resource => {
    const destPath = path.resolve(basePath, resource.name)
    const sourcePath = path.resolve(resource.path, resource.name)
    console.log('Clean:', resource.name)
    rimraf.sync(destPath)
    console.log('Clean done. Copying...')
    ncp(sourcePath, destPath, () => {
      console.log('Copy:', resource.name)
      console.log('Done')
    })
  })
}

module.exports = postBuild