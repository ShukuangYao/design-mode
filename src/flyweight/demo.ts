import {
  FlyweightManager
} from './index'

var id = 0

function func(externalState:any) {
  var dom = document.createElement('div')
  dom.innerText = externalState['fileName']
  document.body.appendChild(dom)
}

var startUpload = function(files:Array<any>) {
  for(var i = 0,file;file = files[i++];) {
    let internalState:any = {uploadType:file.uploadType}
    let externalState:any = {
      fileName: file.fileName,
      fileSize: file.fileSize
    }
    var uploadObj = FlyweightManager.add(++id,internalState,externalState,func)
    console.log('uploadObj',uploadObj);
  }
}

export {
  startUpload
}
