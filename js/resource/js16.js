// (function main() {

// 배열은 []로 만든다
const fruits = ['사과', '배', '귤', '참외', '피망', '포도', '포도'];
console.log(fruits);

// push(item) : 배열의 맨 뒤에 요소를 추가한다. 추가 후 배열의 길이를 반복한다
console.log(fruits.push('apple'));
console.log(fruits.push('kiwi'));
console.log(fruits);

// pop(item) : 배열의 맨 뒤 요소를 제거한다. 제거 후 제거한 요소를 반환한다
console.log(fruits.pop());
console.log(fruits);

// shift() : 맨 앞에 값을 꺼내면서 삭제
console.log(fruits.shift());
console.log(fruits);

// undhift(item) : 맨 앞에 값을 추가
console.log(fruits.unshift('용과'));
console.log(fruits);

// reverse() : 현재 배열의 순서를 거꾸로 뒤집는다
console.log(fruits.reverse() === fruits);
console.log(fruits);

// sort() : 배열안의 내용들을 정렬한다. (가나다 순으로)
console.log('정렬 후:', fruits.sort());

// sort(compareFn) : 내가 원하는 기준으로 배열안의 내용들을 정렬한다.
const numbers = [99, 1, 3, -50, 123, 88, 14, 15];

const myComparator = function (a, b) {
    if (a > b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
};

// 내림차순으로 정렬하기...
const sorted = numbers.sort(myComparator);

console.log(sorted);

/*
    1. 배열에 랜덤으로 1 ~ 45 사이의 숫자를 1000개 추가한다

    2. 각 숫자들이 나온 횟수를 센다

    3. 가장 많이 나온 숫자 6개를 HTML에 동그란 공모양으로 출력해준다
*/

const lottoDiv = document.getElementById('lotto');

const lottoNums = [];
for (let i = 0; i < 1000; i++) {
    lottoNums.push(parseInt(Math.random() * 45 + 1));
}

const lottoCnt = [];

function LottoNum(num, cnt) {
    this.num = num;
    this.cnt = cnt;
}


// for (let i = 0; i < 45; ++i) {
//     lottoCnt[i] = {
//         num: i + 1,
//         cut: 0
//     };
// }

for (let i = 0; i < 45; ++i) {
    lottoCnt[i] = new LottoNum(i + 1, 0);
}

for (let i = 0; i < 1000; ++i) {
    lottoCnt[lottoNums[i] - 1].cnt++;
}

console.log(lottoCnt);

lottoCnt.sort((a, b) => {
    return b.cnt - a.cnt;
})

lottoDiv.innerHTML += `<div>${lottoCnt[0].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[1].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[2].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[3].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[4].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[5].num}</div>`;