// Complete this function
function countBids(input) {
  if (input < 0) {
    throw new RangeError('Input cannot be negative value!');
  } else {
    const result = [];
    const bidsArray = input.toString(2).split('').reverse();
    const count1Bids = input.toString(2).replace(/0/g, '').length;
    result.push(count1Bids);

    for (let i = 0; i < bidsArray.length; i++) {
      if (bidsArray[i] === '1') {
        result.push(i);
      }
    }

    return result;
  }
}

describe("Count positive bits", function () {
  it("Should return a RangeError when a negative value is supplied", function () {
    expect(() => {
      countBids(-2);
    }).toThrow(RangeError);
  });

  it("Should return zero occurrences for input = 0", function () {
    let expected = [0];
    let actual = countBids(0);
    expect(expected).toEqual(actual);
  });

  it("Should return the expected count for input = 1", function () {
    let expected = [1, 0];
    let actual = countBids(1);
    expect(expected).toEqual(actual);
  });

  it("Should return the expected count for input = 137", function () {
    let expected = [3, 0, 3, 7];
    let actual = countBids(137);
    expect(expected).toEqual(actual);
  });
});
