import forEach from "../src/09-forEach";

describe("forEach", () => {
  const callback = () => {};
  let _;
  let spyCallback;

  beforeEach(() => {
    _ = { callback };
    spyCallback = jest.spyOn(_, "callback");
  });

  describe("for Array", () => {
    const items = [1, 9, 10, "Hackages"];

    it("Should return undefined", () => {
      expect(forEach(items, callback)).toBeUndefined();
    });

    it("Should call the callback on every single item by passing the current item, the index and the initial collection", () => {
      forEach(items, _.callback);
      expect(spyCallback).toHaveBeenCalledTimes(items.length);
      expect(spyCallback).toHaveBeenCalledWith(1, 0, items);
      expect(spyCallback).toHaveBeenCalledWith(9, 1, items);
      expect(spyCallback).toHaveBeenCalledWith(10, 2, items);
      expect(spyCallback).toHaveBeenCalledWith("Hackages", 3, items);
    });
  });

  describe("for Object", () => {
    it("Should call the callback on every single key of the object", () => {
      const user = {
        name: "Victor",
        role: "Software Engineer",
        company: "Hackages",
        city: "Amsterdam",
        year: 2017,
      };
      forEach(user, _.callback);
      expect(spyCallback).toHaveBeenCalledTimes(Object.keys(user).length);
      expect(spyCallback).toHaveBeenCalledWith("Victor", "name", user);
      expect(spyCallback).toHaveBeenCalledWith(
        "Software Engineer",
        "role",
        user
      );
      expect(spyCallback).toHaveBeenCalledWith("Hackages", "company", user);
      expect(spyCallback).toHaveBeenCalledWith("Amsterdam", "city", user);
      expect(spyCallback).toHaveBeenCalledWith(2017, "year", user);
    });
  });
});
