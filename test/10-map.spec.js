import map from "../src/10-map";

describe("map", () => {
  it("should apply a function to every value in an array", () => {
    const mappedValues = map([4, 2, 3, 9], (item) => item * item);
    expect(mappedValues).toEqual([16, 4, 9, 81]);
  });
  it("should apply a function to every key in an object", () => {
    const mappedValues = map(
      { name: "Davy", company: "Hackages" },
      (item) => item
    );
    expect(mappedValues).toEqual(["Davy", "Hackages"]);
  });
});
