var Composition:any = function (props?:any) {
  if(props) {
    for(let i in props) {
      this[i] = props[i]
    }
  }
  this.children = []

}

var Single:any = function (props?:any) {
  if(props) {
    for(let i in props) {
      this[i] = props[i]
    }
  }
}

Composition.prototype.add = function (child:any):void {
  this.children.push(child)
}

Single.prototype.add = function (child:any):never {
  throw new Error('不能添加子对象')
}

export {
  Composition,
  Single
}
