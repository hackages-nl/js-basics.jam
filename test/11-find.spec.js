import find from "../src/11-find";

describe("find: find does not mutate the array on which it is called.", () => {
  it("Should throw an error if no predicate is passed", () => {
    expect(() => {
      find();
    }).toThrow(Error);
  });

  it("should return undefined if none of the elements matches the predicate", () => {
    const isEven = (num) => num % 2 === 0;
    const evens = find([1, 3, 7, 5], isEven);
    expect(evens).toBeUndefined();
  });

  it("should return the first element that matches the predicate", () => {
    const isOdd = (num) => num % 2 !== 0;
    const odds = find([10, 2, 3, 4, 5, 6], isOdd);
    expect(odds).toEqual(3);
  });
});
