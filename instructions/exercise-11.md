## The `find` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`

### Todo

- [ ] Implement the `find` function in the `src/11-find.js`file
- [ ] The `find` function takes a collection of element and a predicate and returns the first element that matches the given predicate.

```js
const collection = [1,2,3,4,5];
const isEven = num => num % 2 === 0;
console.log(find(collection, isEven));
// Output: 2

const collection = [1,3,7];
const isEven = num => num % 2 === 0;
console.log(find(collection, isEven));
// Output: undefined
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

The goal of these exercises is to teach you how to write code in JavaScript as you will in real world projects.