var getSingle = function(fn:Function) {
  var result:any
  return function () {
    return result || (result = fn.apply(this,arguments))
  }
}

var getName = function(name:String) {
  console.log(this.name);
}

export {
  getSingle,
  getName
}
