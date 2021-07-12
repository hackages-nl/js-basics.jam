## The `map` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`

### Todo

- [ ] Implement the `map` function in the `src/10-map.js`file
- [ ] The `map` function takes a collection of elements and a callback as parameters.
      It returns a collection containing the newly calculated items

```js
const array = [1, 2, 3, 4, 5];
const myCallback = item => item + 1;
console.log(map(array, myCallback));
// Output: [2, 3, 4, 5, 6]
```


### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

The goal of these exercises is to teach you how to write code in JavaScript as you will in real world projects.