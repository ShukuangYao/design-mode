import {getSingle} from './singleton/index'
import {createDiv} from './singleton/demo'
import {caculateBonus} from './strategy/demo'
import {startUpload} from './flyweight/demo'

var createSingleDiv = getSingle(createDiv)
createSingleDiv()
console.log('策略模式计算结果S',caculateBonus('S',3000))
console.log('策略模式计算结果A',caculateBonus('A',3000))
console.log('策略模式计算结果B',caculateBonus('B',3000))

// 享元模式的文件上传例子
startUpload(
  [
    {
      uploadType: 'A',
      fileName: '1.txt',
      fileSize: 2000
    },
    {
      uploadType: 'A',
      fileName: '2.txt',
      fileSize: 2000
    },
    {
      uploadType: 'B',
      fileName: '3.txt',
      fileSize: 3000
    }
  ]
)
// class Person {
//   public name:String
//   constructor(name:String) {
//     this.name = name
//   }

// }

// Object.assign(Person.prototype,{
//   getName() {
//     console.log(this.name);
//   },
//   setName(name:String) {
//     this.name = name
//   }
// })
// console.log(Person.prototype);
