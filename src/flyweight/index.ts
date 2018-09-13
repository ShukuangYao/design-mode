
// 享元模式对象
var Flyweight:any = function (internalState:any) {
  if(internalState) {
    for(let i in internalState) {
      this[i] = internalState[i]
    }
  }
}

// 享元模式对象工厂——如果当前内部状态对应的对象存在，就返回该对象；否则，创建新的对象
var FlayweightFactory:any = (function () {
  var createdObjs:any = {}
  return {
    create(internalState:any) {
      // 当有内部状态时，内部状态有多少，总共就有多少个对象
      if(internalState) {
        let key:string = ''
        for(let i in internalState) {
          key += i
        }
        if(createdObjs[`${key}`]) {
          return createdObjs[`${key}`]
        }
        return createdObjs[`${key}`] = new Flyweight(internalState)
      } else {
        // 当内部状态为空时，总共只有一个对象
        if(createdObjs) {
          return createdObjs
        }
        return createdObjs = new Flyweight()
      }

    }
  }
})()

// 享元对象外部管理器
var FlyweightManager = (function () {
  var flyweigthDatabase:any = {}

  return {
    add(id:number,internalState:any,externalState:any,func?:Function) {
      var flyweightObj = FlayweightFactory.create(internalState)
      func && func(externalState)
      flyweigthDatabase.id = externalState
      return flyweightObj
    },
    setExternalState(id:number,externalState:any) {
      var flyweightData = flyweigthDatabase[`${id}`]
      for(let i in externalState) {
        flyweightData[i] = externalState[i]
      }
    }
  }
})()

export {
  Flyweight,
  FlyweightManager
}
