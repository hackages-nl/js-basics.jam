import isArray from "../src/04-isArray";

describe("isArray", function () {
  const items = [10, false, "Hacklunch"];

  it("should be defined", () => {
    expect(isArray).toBeDefined();
  });

  it("should throw an error if no argument is passed", () => {
    expect(() => {
      isArray();
    }).toThrow("collection is required");
  });

  it("Should return true when passed a collection of elements", () => {
    expect(isArray(items)).toEqual(true);
    expect(isArray([])).toEqual(true);
  });

  it("Should return false when passed anything else", () => {
    expect(isArray("Bootcamp by Hackages")).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray(12)).toEqual(false);
    expect(isArray(false)).toEqual(false);
  });
});
