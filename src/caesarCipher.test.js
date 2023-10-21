import { caesarCipher } from "./caesarCipher";

test('properly shift an lowercase string by the shift factor number', () => {
    expect(caesarCipher('apple', 57)).toMatch("fuuqj");
});

test('properly shift an uppercase string by the shift factor number', () => {
    expect(caesarCipher('APPLE', 57)).toMatch("FUUQJ");
});

test('properly shift a string with both lower and upper characters by the shift factor number', () => {
    expect(caesarCipher('aPpLe', 57)).toMatch("fUuQj");
});

test('properly shift a string with punctuation by the shift factor number', () => {
    expect(caesarCipher('aPpLe, bAnAnA', 57)).toMatch("fUuQj, gFsFsF");
});