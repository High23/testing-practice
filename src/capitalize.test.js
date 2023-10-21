import capitalize from "./capitalize";

test('capitalize a given string', () => {
    expect(capitalize('word')).toBe('Word');
});