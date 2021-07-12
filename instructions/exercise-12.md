## The `find` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`

### Todo

- [ ] Implement the `reduce` function in the `src/12-reduce.js`file
- [ ] The `reduce` function takes a collection of element and a predicate and returns the accumulated result from the last call of the predicate function.

```js
const collection = [1, 2, 3];
const add = (total, item) => total + item;
console.log(reduce(collection, add));
// Output: 6
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

The goal of these exercises is to teach you how to write code in JavaScript as you will in real world projects.