
const numbers = [];

for (let i = 0; i < 10; ++i) {
    numbers[i] = i;
}

console.log(numbers);

 /*
    # 배열.prontotype.forEach : 

    - 배열의 모든 값을 하나씩 순서대로 꺼내서 전달한 함수를 실행
    - 전달한 함수에 첫 번째 인자로 해당번째 요소를 전달한다
    - 전달한 함수에 두 번째 인자로 인덱스가 전달된다
    - 전달한 함수에 세 번째 인자로 원본 배열이 전달된다
    - 반그시 모든 인자를 다 받을 필요는 없다 (필요한 경우에만 꺼내서 사용)
*/
const myFuntion = function (item, index, srcArr) {
    // console.log(item * 10, `${index}번째 실행입니다,`, '원본:', srcArr);
    console.log(`numbers[${index}]: ${item}`);
}
numbers.forEach(myFuntion);

/*
    # 배열.prototype

    - 값을 하나씩 순서대로 꺼내면서 해당 값을 사용해 결과를 리턴한다
    - 리턴한 결과들로 구성된 새로운 배열을 리턴
    - map에 전달하는 콜백함수는 반드시 결과를 리턴해야 한다
*/
const scores = [50, 66, 60, 99, 100, 72, 30];

const resultArr = numbers.map((item, index) => {
    return item + 5;
});

// 점수 배열로 등급 배열 생성해보기
const grades = scores.map((score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F'
    }
});

const getGrade = (score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F'
    }
};

const stutents = scores.map((score) => ({
        score: score,
        grade: getGrade(score)
}));

console.log(resultArr);
console.log(grades);
console.log(stutents);

/*
    # 배열.prototype.filter

    - 배열의 모든 값을 순차적으로 하나씩 꺼내면서 전달한 함수의 기준을 통과하는 것만 남겨놓는 함수
    - filter에 전달하는 콜백함수는 반드시 boolean타입 값을 리턴해야 한다
    - true를 리턴하는 요소는 남게 되고 false를 리턴하는 요소는 걸리지게 된다
*/

// 60점 이하인 점수만 남겨놓고 싶은 경우
const filtered = scores.filter((score) => {
    return score < 60;
});

// 등급이 F인 객체만 남겨놓고 싶은 경우
const fs = stutents.filter((stutent) => {
    return stutent.grade === 'F';
});

console.log(filtered);
console.log(fs);

/*
    # 배열.prototype.reduce

    - 배열의 모든 요소를 하나로 취급한다
    - 전달한 함수의 결과를 다음 반복에 계속해서 사용한다
*/

// 총합 구하기
const sum = scores.reduce((prevScore, currScore, index) => {
    console.log(`## ${index}번째 반복 ##`);
    console.log('prev:', prevScore);
    console.log('curry', currScore);

    return prevScore + currScore;
});

const minScore = scores.reduce((minScore, currScore) => {
    return minScore < currScore ? minScore : currScore;
});

const maxScore = scores.reduce((maxScore, currScore) => {
    return maxScore > currScore ? maxScore : currScore;
});

console.log('총합:', sum);
console.log('가장 못한 사람 점수:', minScore);
console.log('가장 높은 점수:', maxScore);

/*
    # 배열.some

    - 조건을 만족하는 요소가 하나 이상 있는지 검사한다
*/
const fruits = ['apple', 'banana', 'orange', 'malon'];

// 과일 주엥 참외가 있는지 검사해보기
const result1 = fruits.some((fruit) => {
    return fruit === '참외;'
});

// 과일 중에 apple이 있는지 검사해보기
const result2 = fruits.some((fruit) => fruit === 'apple');

// 과일 중에 apple이 포함된 과일이 있는 지 검사해보기
const result3 = fruits.some(fruit => fruit.includes('apple'));

console.log(result1);
console.log(result2);
console.log(result3);

/*
    1. 100명의 랜덤 학생 정보를 생성한다
    (학생 객체는 학번, 이름, 국어, 영어, 수학을 가지고 있음)

    2. 모든 학생 객체에 평균 점수 속성을 추가해보기

    3. 평균 점수 60점 미만인 학생들로만 이루어진 배열을 생성해보기

    4. 모든 학생들의 각 과목 평균 점수를 계산해보기

    5. 3번 4번의 내용을 HTML에 테이블 형식으로 정리해놓기
*/

// const studentDiv = document.getElementById('student');

const last_names = ['김', '이', '박', '최'];
const first_names = ['철수', '민수', '영희', '순자', '순옥', '칠득', '만득'];

let stuNum = 0;

const getFirstName = () =>
    first_names[parseInt(Math.random() * first_names.length)];

const getLastName = () =>
    last_names[parseInt(Math.random() * last_names.length)];

const getRandomName = () => getLastName() + getFirstName();

const getRandomScore = () => parseInt(Math.random() *101);

function student() {
    this.stuNum = 'STU' + stuNum++;
    this.name = getRandomName();
    this.math = getRandomScore();
    this.eng = getRandomScore();
    this.kor = getRandomScore();
}

const students2 = [];

for (let i = 0; i < 100; ++i) {
    students2.push(new student());
}

students2.forEach(stu => stu.avg = (stu.kor + stu.eng + stu.math) / 3);

console.log(students2);

// 평균 점수 60점 미만 학생 배열 만들기
const fstus = students2.filter(stu => stu.avg < 60);

console.log(fstus);

// 각 과목 평균점수 계산해보기
// 1. 총점을 구하는 함수
// 2. 총점을 잔체 길이로 나눠서 평균을 구하는 함수

// 총합 결과에 .kor을 할 수 없으므로 문제가 샐김
// student2.reduce((stu1, stu2) => stu1.kor + stu2.kor);

// reduce에 두 번째 인자값으로 초기값을 전달해주면
// 첫 번째 반복을 초기값으로 진행할 수 있음
const getTotal = (sub) => students2.reduce((tot, stu) => tot + stu[sub], 0);

// console.log('국어 점수 총합:', getTotal('kor'));
// console.log('영어 점수 총합:', getTotal('eng'));
// console.log('수학 점수 총합:', getTotal('math'));

const getSubjectAvg = sub => getTotal(sub) / students2.length;

console.log(getSubjectAvg('kor'));
console.log(getSubjectAvg('eng'));
console.log(getSubjectAvg('math'));

const allStudentsTable = document.getElementById('all-students');
const badStudentsTable = document.getElementById('bad-students');

const addRow = (table, stu) => {
    table.innerHTML += 
          `<div>${stu.stuNum}</div>`
        + `<div>${stu.name}</div>`
        + `<div>${stu.kor}</div>`
        + `<div>${stu.eng}</div>`
        + `<div>${stu.math}</div>`
        + `<div>${stu.avg}</div>`
}

students2.forEach(stu => addRow(allStudentsTable, stu));
fstus.forEach(stu => addRow(badStudentsTable, stu));