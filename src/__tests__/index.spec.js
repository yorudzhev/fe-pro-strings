import {
  replaceZAndVFromString,
  changeWord,
  truncate,
  removeStrings,
} from '../index';

describe('Strings methods', () => {
  describe('replaceZAndVFromString()', () => {
    it('returns correct string', () => {
      expect(replaceZAndVFromString('I love pizza')).toStrictEqual(
        'I lo*e pi**a'
      );
    });
  });

  describe('changeWord()', () => {
    it('returns correct string', () => {
      expect(changeWord('Hi Bohdan', 'Bohdan', 'John')).toStrictEqual(
        'Hi John'
      );
      expect(changeWord('Hi Bohdan hi', 'Bohdan', 'John')).toStrictEqual(
        'Hi John hi'
      );
    });
  });

  describe('truncate()', () => {
    it('returns correct string', () => {
      expect(truncate('Hi Bohdan', 3)).toStrictEqual('Hi ');
    });
  });
});
