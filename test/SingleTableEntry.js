let {SingleTableEntry} = require('..');
let expect = require('chai').expect;

describe('SingleTableEntry', function () {
  let t;
  const ENTRY = 1
  const DESCRIPTION = 'A roll was made'
  before(() => {
    t = new SingleTableEntry(ENTRY, DESCRIPTION)
  })

  describe('#constructor', () => {
    it('should assign constructor values', function () {

      let t = new SingleTableEntry(ENTRY, DESCRIPTION)

      expect(t.point).to.equal(ENTRY)
      expect(t.description).to.equal(DESCRIPTION)
    })
  })

  describe('#matches', function () {
    it('should match numbers within the minimum and maximum numbers', () =>
      expect(t.matches(ENTRY)).to.be.true
    )

    it('should not match numbers below the entry', () =>
      expect(t.matches(ENTRY - 1)).to.be.false
    )

    it('should not match numbers above the entry', () =>
      expect(t.matches(ENTRY + 1)).to.be.false
    )
  })

  describe('#description', function () {
    it('should not be mutable', function () {
      t.description = 'something new';
      expect(t.description).to.equal(DESCRIPTION)
    });
  });
});