import { urlCheck } from '../src/client/js/urlChecker';

test('Is a valid url', () => {
    expect(urlCheck('https://www.google.com')).toBeTruthy()
});