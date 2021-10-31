import test from "ava";

// TODO: import implemented fold function
const fold = () => {};

test("returns expected result when passed numbers array and inital number", async (t) => {
  const res = fold(
    [1, 2, 3],
    (a, b) => {
      return a + b;
    },
    100
  );
  t.is(await res, 106);
});

test("returns expected result when passed numbers array with no inital value", async (t) => {
  const res = fold([1, 2, 3], (a, b) => {
    return a + b;
  });
  t.is(await res, 6);
});

test("returns expected result when passed numbers as a set and inital number", async (t) => {
  const res = fold(
    new Set([1, 1, 2, 2, 3, 3]),
    (a, b) => {
      return a + b;
    },
    0
  );
  t.is(await res, 6);
});

test("returns expected result when passed numbers as values of a map and inital number", async (t) => {
  const res = fold(
    new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]),
    (a, b) => {
      return a + b[1];
    },
    0
  );
  t.is(await res, 6);
});

test("throws error when passed empty array with no inital value", async (t) => {
  const error = t.throws(
    () => {
      fold([], (a, b) => {
        return a + b;
      });
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, "Reduce of empty array with no initial value");
});

test("throws error when passed a number as first argument", async (t) => {
  const error = t.throws(
    () => {
      fold(100, (a, b) => {
        return a + b;
      });
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, "First argument should be an iterable object");
});

test("throws error when passed a number as second argument", async (t) => {
  const error = t.throws(
    () => {
      fold([100, 200], 2);
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, "Second argument should be a function");
});
