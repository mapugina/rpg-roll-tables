let {SimpleRollTable} = require('..');
let expect = require('chai').expect;

describe('SimpleRollTable', () => {
  let mockData, first, second;
  beforeEach(() => {
    first = {description: 'first', matches: x => x === 1};
    second = {description: 'second', matches: x => x === 2};
    mockData = [first, second];
  });
  describe('#constructor', () => {
    it('should initialize given valid data', () =>
      (new SimpleRollTable(mockData))
    )
  });
  describe('#lookup', () => {
    let table;
    beforeEach(() => {
      table = new SimpleRollTable(mockData);
    })
    it('should lookup items in the table given a number', () => {
      expect(table.lookup(1)).to.equal(first.description);
    })

    it(
      'should return null if there are no item at a location in the table',
      () => expect(table.lookup(0)).to.be.null
    )
  })
})