var programinglanguages = ['Javascript','PHP','Python'];

console.log(programinglanguages)

programinglanguages.push('Java')
console.log('After push: ', programinglanguages)

programinglanguages.pop();
console.log('After pop: ', programinglanguages)

programinglanguages.unshift('c#', 'c++')
console.log('After unshift: ', programinglanguages)

programinglanguages.shift('Java')
console.log('After shift: ', programinglanguages)

programinglanguages.splice('Java')
console.log('After spilce: ', programinglanguages)