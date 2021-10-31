function fold(iterable, callback, initialValue) {
  validateArguments(iterable, callback, initialValue);
  let result = initialValue;
  let isFirstIterationWithoutInitialValue = initialValue === undefined;

  for (const currentValue of iterable) {
    if (isFirstIterationWithoutInitialValue) {
      // if no initial value is given:
      // set inital value to first value of the iterable object
      result = currentValue;
      isFirstIterationWithoutInitialValue = false;
      continue;
    }

    result = callback(result, currentValue);
  }
  return result;
}

function validateArguments(iterable, callback, initialValue) {
  if (!validateIsIterable(iterable)) {
    throw new TypeError("First argument should be an iterable object");
  }

  if (
    initialValue === undefined &&
    [iterable.length, iterable.size].includes(0)
  ) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Second argument should be a function");
  }
}

// validates if value is an iterable object (such as String, Array, Set, Map)
// see: https://stackoverflow.com/questions/18884249/checking-whether-something-is-iterable
function validateIsIterable(value) {
  if (value === null || value === undefined) {
    return false;
  }
  return typeof value[Symbol.iterator] === "function";
}

export { fold };
