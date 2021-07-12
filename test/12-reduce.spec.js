import reduce from "../src/12-reduce";

describe("reduce", () => {
  it("should be defined", () => {
    expect(reduce).toBeDefined();
  });

  it("should throw if no argument is passed", () => {
    expect(() => {
      reduce();
    }).toThrow(Error);
  });

  it("should be able to sum up an array of numbers, the initial value is the 3rd argument passed to the reduce function", () => {
    const add = (tally, item) => tally + item;
    const total = reduce([1, 2, 3], add, 0);
    expect(total).toEqual(6);
  });

  it("should be able to sum up an array of numbers, if no initial value is not provided, use the first element of the collection as initial value", () => {
    const add = (tally, item) => tally + item;
    const total = reduce([2, 3, 4], add);
    expect(total).toEqual(9);
  });
});
