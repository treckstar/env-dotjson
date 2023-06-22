import { json2env, ConvertOptions } from '../src';

describe('index', () => {
  describe('json2env', () => {
    it('should return a string containing the message', () => {
      const message = '.env file created successfully!';
      const options: ConvertOptions = {
        inputFilename: 'test.json',
        outputFilename: '.env'
      };

      const result = json2env(options);

      expect(result).toMatch(message);
    });
  });
});
