var strategies:any = {
  'S': (salary:number) => {
    return salary * 4
  },
  'A': (salary:number) => {
    return salary * 3
  },
  'B': (salary:number) => {
    return salary * 2
  }
}

var caculateBonus:Function = function (level:string,salary:number) {
  return strategies[level](salary)
}

export {
  caculateBonus
}
