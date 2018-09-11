import {getSingle} from './singleton/index'
import {createDiv} from './singleton/demo'
import {caculateBonus} from './strategy/demo'

var createSingleDiv = getSingle(createDiv)
createSingleDiv()
console.log('策略模式计算结果S',caculateBonus('S',3000))
console.log('策略模式计算结果A',caculateBonus('A',3000))
console.log('策略模式计算结果B',caculateBonus('B',3000))
