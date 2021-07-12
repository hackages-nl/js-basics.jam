import identity from "../src/01-identity";

describe("identity", () => {
  it("Should return the same value that has been passed", () => {
    expect(identity(1)).toBe(1);
    expect(identity({})).toEqual({});
    expect(identity("Hackages")).toEqual("Hackages");
  });
});
