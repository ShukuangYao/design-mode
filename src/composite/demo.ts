import {Composition, Single} from './index'

Composition.prototype.scan = function () {
  console.log('开始扫描文件夹：'+this.fileName);
  for(let i = 0,files = this.children,file;file = files[i++];) {
    file.scan()
  }
}

Single.prototype.scan = function () {
  console.log('开始扫描文件22：'+this.fileName);
}

export {
  Composition,
  Single
}
