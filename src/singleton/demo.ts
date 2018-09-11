var createDiv = function () {
  var div = document.createElement('div')
  div.innerHTML = '这个是单例模式创建的div'
  document.body.appendChild(div)
  return div
}

export {
  createDiv
}
