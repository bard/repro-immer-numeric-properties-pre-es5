import 'core-js/features/object/get-own-property-descriptor'

const obj = {
  '_123': 'bar',
  '123': 'foo',
}

console.error('obj: ', JSON.stringify(obj))

console.error("Object.getOwnPropertyDescriptor(obj, '_123'): " +
              JSON.stringify(Object.getOwnPropertyDescriptor(obj, '_123')))
// => {"value":"bar","writable":true,"enumerable":true,"configurable":true} as expected

console.error("Object.getOwnPropertyDescriptor(obj, '123'): " +
              JSON.stringify(Object.getOwnPropertyDescriptor(obj, '123')))
// => undefined


