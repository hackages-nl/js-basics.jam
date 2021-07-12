## The `extend` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`

### Todo

- [ ] Implement the `extend` function in the `src/13-extend.js`file
- [ ] The `extend` function takes a single destination object and one or multiple source objects as parameters. It does a shallow copy of every source objects to the destination object.

```js
const src1 = {name: 'Alexis', age: 25};
const src2 = {height: '185cm', message: 'Hello'};
const dst = {}
console.log(extend(dst, src1, src2));
// Output: {name: 'Alexis', age: 23, height: '185cm', message: 'Hello'}

const src1 = {name: 'Alexis', age: 25};
const src2 = {age: 23, height: '185cm'};
const src3 = {name: 'Davy'}
const dst = {}
console.log(extend(dst, src1, src2));
// Output: {name: 'Davy', age: 23, height: '185cm'}
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

The goal of these exercises is to teach you how to write code in JavaScript as you will in real world projects.