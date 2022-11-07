const mapFn = (person) => ({ ...person, age: person.age * 2 });

const conditionFn = (person) => person.age > 7;

// Complete this function
const customMap = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]))
  }
  return result;
};

// Complete this function
const customFilter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

describe("Array map test", function () {
  it("Should return the expected array for the people list given", function () {
    const people = [
      { name: "Alex", age: 2 },
      { name: "Luis", age: 12 },
      { name: "Marco", age: 4 },
    ];

    const expected = people
      .map((item) => mapFn(item))
      .filter((item) => conditionFn(item));

    const actual = customFilter(customMap(people, mapFn), conditionFn);

    expect(expected.toString() == actual.toString());
  });
});
