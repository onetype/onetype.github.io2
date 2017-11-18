const expect = require('chai').expect;
const author = require('../src/index');

describe('One Type', function () {
  it('Technical Publications by Yair', function () {
    const actual = author();
    const expected = 'Yair';

    expect(actual).to.equal(expected);
  });
});
