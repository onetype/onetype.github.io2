import { expect } from 'chai';
import author from '../src/index';

describe('One Type', () => {
  it('Technical Publications by Yair', () => {
    const actual = author();
    const expected = 'Yair';

    expect(actual).to.equal(expected);
  });
});
