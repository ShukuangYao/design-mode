var getSingle = function(fn:Function) {
  var result:any
  return function () {
    return result || (result = fn.apply(this,arguments))
  }
}

export {
  getSingle
}
