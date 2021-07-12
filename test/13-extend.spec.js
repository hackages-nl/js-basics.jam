import extend from "../src/13-extend";

describe("extend", () => {
  it("returns the first argument", () => {
    const to = {};
    const from = {};
    const extended = extend(to, from);

    expect(extended).toEqual(to);
  });

  it("should extend an object with the attributes of another", () => {
    const to = {};
    const from = {
      a: "b",
    };
    const extended = extend(to, from);

    expect(extended.a).toEqual("b");
  });

  it("should override properties found on the destination", () => {
    const to = {
      a: "x",
    };
    const from = {
      a: "b",
    };
    const extended = extend(to, from);

    expect(extended.a).toEqual("b");
  });

  it("should not override properties not found in the source", () => {
    const to = {
      x: "x",
    };
    const from = {
      a: "b",
    };
    const extended = extend(to, from);

    expect(extended.x).toEqual("x");
  });

  it("should extend from multiple source objects", () => {
    const extended = extend(
      {
        x: 1,
      },
      {
        a: 2,
      },
      {
        b: 3,
      }
    );

    expect(extended).toEqual({
      x: 1,
      a: 2,
      b: 3,
    });
  });

  it("in the case of a conflict, it should use the last property's values when extending from multiple source objects", () => {
    const extended = extend(
      {
        x: "x",
      },
      {
        a: "a",
        x: 2,
      },
      {
        a: 1,
      }
    );
    expect(extended).toEqual({
      x: 2,
      a: 1,
    });
  });

  it("should copy undefined values", () => {
    const extended = extend(
      {},
      {
        a: void 0,
        b: null,
      }
    );

    expect("a" in extended && "b" in extended).toBe(true);
  });
});
