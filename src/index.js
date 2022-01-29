const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let digitArray = expr.split('').reduce((a, e, i)=> a + e + (i % 10 === 9 ? ' ' : ''), '').split(' ').filter(n => n);
    let morseArray = [];
    let str = '';
    digitArray.forEach((element, index) => {
        let digit = element.split('').reduce((a, e, i)=> a + e + (i % 2 === 1 ? ' ' : ''), '').split(' ').filter(n => +n > 0);
        morseArray[index] = digit.map(value => value == '10' ? '.' : '-')
    });
    morseArray.map(element => {
        str += element.length == 0 ? ' ' : MORSE_TABLE[element.join('')];
    })
    return str
}
module.exports = {
    decode
}