import first from "../src/02-first";

describe("first: does not mutate the collection", () => {
  const items = [1, 9, 10, undefined];

  it("Should throw an error if no argument is passed", () => {
    expect(() => {
      first();
    }).toThrow("Collection is required");
  });

  it("Should return the first element of the collection", () => {
    expect(first(items)).toEqual(1);
  });

  it("Should return the first n elements when a second argument is passed", () => {
    expect(first(items, 0)).toEqual(1);
    expect(first(items, 1)).toEqual([1]);
    expect(first(items, 2)).toEqual([1, 9]);
  });
});
