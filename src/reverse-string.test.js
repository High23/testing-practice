import reverseString from "./reverse-string";

test('reverse a string', () => {
    expect(reverseString('word')).toMatch('drow')
});