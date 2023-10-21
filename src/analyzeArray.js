export default function analyzeArray(arrOfNumbers) {
    if (Array.isArray(arrOfNumbers) !== true) return;
    arrOfNumbers.sort();
    let obj = {}
    obj.average = arrOfNumbers.reduce((prev, current) => prev + current, 0) / arrOfNumbers.length
    obj.min = arrOfNumbers[0];
    obj.max = arrOfNumbers[arrOfNumbers.length - 1]
    obj.length = arrOfNumbers.length;
    return obj
}