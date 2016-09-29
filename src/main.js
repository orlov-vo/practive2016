import './style.scss';

console.log('hello world!');

const ED = [
    '',
    'один',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
    'десять',
    'одиннадцать',
    'двенадцать',
    'тринадцать',
    'четырнадцать',
    'пятнадцать',
    'шестнадцать',
    'семнадцать',
    'восемнадцать',
    'девятнадцать',
    'двадцать',
];
const EDT = [
    '',
    'одна',
    'две',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
    'десять',
    'одиннадцать',
    'двенадцать',
    'тринадцать',
    'четырнадцать',
    'пятнадцать',
    'шестнадцать',
    'семнадцать',
    'восемнадцать',
    'девятнадцать',
    'двадцать',
];

const DE = [
    'десять',
    'двадцать',
    'тридцать',
    'сорок',
    'пятьдесят',
    'шестьдесят',
    'семьдесят',
    'восемьдесят',
    'девяносто',
];

const ST = [
    '',
    'сто',
    'двести',
    'триста',
    'четыреста',
    'пятьсот',
    'шестьсот',
    'семьсот',
    'восемьсот',
    'девятьсот',
];

function onUpdate(fieldNumber, fieldAnwser) {
    const num = +fieldNumber.value;

    if (num > 0) {
        const ml = Math.floor(num / 1000000);
        const th = Math.round(num / 1000) % 1000;
        const ed = num % 1000;

        let strEd = `${ST[Math.floor(ed / 100)]} `;
        if (ed - Math.floor(ed / 100) * 100 < 21) {
            strEd += ED[ed - Math.floor(ed / 100) * 100];
        } else {
            strEd += `${DE[Math.floor((ed - Math.floor(ed / 100) * 100) / 10) - 1]} ${ED[ed % 10]}`;
        }

        let strTh = `${ST[Math.floor(th / 100)]} `;
        if (th - Math.floor(th / 100) * 100 < 21) {
            strTh += EDT[th - Math.floor(th / 100) * 100];
        } else {
            strTh += `${DE[Math.floor((th - Math.floor(th / 100) * 100) / 10) - 1]} ${EDT[th % 10]}`;
        }

        if (th > 0) {
            if ((th - Math.floor(th / 100) * 100 > 10) && (th - Math.floor(th / 100) * 100 < 15)) {
                strTh += ' тысяч';
            } else if (th % 10 === 0) {
                strTh += ' тысяч';
            } else if (th % 10 === 1) {
                strTh += ' тысяча';
            } else if (th % 10 < 5) {
                strTh += ' тысячи';
            } else {
                strTh += ' тысяч';
            }
        }

        let strMl = `${ST[Math.floor(ml / 100)]} `;
        if (ml - Math.floor(ml / 100) * 100 < 21) {
            strMl += ED[ml - Math.floor(ml / 100) * 100];
        } else {
            strMl += `${DE[Math.floor((ml - Math.floor(ml / 100) * 100) / 10) - 1]} ${ED[ml % 10]}`;
        }

        if (ml > 0) {
            if ((ml - Math.floor(ml / 100) * 100 > 10) && (ml - Math.floor(ml / 100) * 100 < 15)) {
                strMl += ' миллионов';
            } else if (ml % 10 === 0) {
                strMl += ' миллионов';
            } else if (ml % 10 === 1) {
                strMl += ' миллион';
            } else if (ml % 10 < 5) {
                strMl += ' миллиона';
            } else {
                strMl += ' миллионов';
            }
        }

        let strAnswer = ` ${strMl} ${strTh} ${strEd}`;
        fieldAnwser.value = strAnswer.replace(/\s+/g, ' ').substr(1);
    } else {
        fieldAnwser.value = 'ноль';
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const fieldNumber = document.getElementById('number');
    const fieldAnwser = document.getElementById('anwser');

    onUpdate(fieldNumber, fieldAnwser);
    fieldNumber.addEventListener('input', onUpdate.bind(null, fieldNumber, fieldAnwser));
})