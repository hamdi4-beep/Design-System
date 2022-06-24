const color = 'linear-gradient(135deg, #c471f5 10%, #fa71cd 100%)'
const regex = /#[\w+]{6}/g
const result = color.match(regex)

console.log(result)