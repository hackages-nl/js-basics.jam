import last from "../src/03-last";

describe("last", () => {
  const items = [1, 9, 10, "Hackages"];

  it("Should throw an error if no collection is passed", () => {
    expect(() => {
      last();
    }).toThrow("Collection is required");
  });

  it("Should return the last element of the collection", () => {
    expect(last(items)).toEqual("Hackages");
  });

  it("Should return the last n elements when a second argument is passed", () => {
    expect(last(items, 0)).toEqual("Hackages");
    expect(last(items, 1)).toEqual(["Hackages"]);
    expect(last(items, 2)).toEqual([10, "Hackages"]);
  });
});
