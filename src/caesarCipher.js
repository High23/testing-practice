export function caesarCipher(string, shiftFactor) {
    if (typeof shiftFactor !== 'number') return;
    if (shiftFactor >= 26) {
        shiftFactor = shiftFactor % 26;
    }
    let cypheredText = []
    let regex = new RegExp("[\\s\\',]|_", "")
    for (let i = 0; i < string.length; i++) {
        if (regex.test(string[i])) {
            cypheredText.push(string[i])
            continue;
        } else {
            cypheredText.push(String.fromCharCode(string.charCodeAt(i) + shiftFactor))
        }
    }
    return cypheredText.join('')
}