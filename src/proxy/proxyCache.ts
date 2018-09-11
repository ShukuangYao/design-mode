var createProxyFactory:any = function(fn:any) {
  var cache:object = {}
  return function () {
    var args:string = Array.prototype.join.call(arguments,',')
    if(args in cache) {
      return cache[args]
    }
    return cache[args] =fn.apply(this, arguments);
  }
}
