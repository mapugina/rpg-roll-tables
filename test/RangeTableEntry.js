let {RangeTableEntry} = require('..');
let expect = require('chai').expect;

const MIN = 1;
const MAX = 20;
const DESCRIPTION = 'A roll was made';


describe('RangeTableEntry', function () {
  let r;
  before(() => {
    r = new RangeTableEntry(MIN, MAX, DESCRIPTION);
  })

  describe('#constructor', function () {
    it('should assign constructor values', function () {
      expect(r.min).to.equal(MIN);
      expect(r.max).to.equal(MAX);
      expect(r.description).to.equal(DESCRIPTION);
    });

    it('should throw an error if min value exceeds max value', function () {
      expect(() => new RangeTableEntry(3, 1, '')).to.throw();
    });
  })


  describe('#matches', function () {
    it('should match numbers within the minimum and maximum numbers', () => {
      for (let i = MIN; i <= MAX; i++) {
        expect(r.matches(i)).to.be.true;
      }
    })

    it('should not match numbers below the range', () =>
      expect(r.matches(MIN - 1)).to.be.false
    )

    it('should not match numbers above the range', () =>
      expect(r.matches(MAX + 1)).to.be.false
    )

  })

  describe('#description', function () {
    it('should not be mutable', function () {
      r.description = 'something new';
      expect(r.description).to.equal(DESCRIPTION)
    });
  });
});