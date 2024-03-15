
// 자바스크립트 객체(Object)
// key:Value를 사용해 객체의 속성을 표현한다

// 자바스크립트는 객체를 표현할 수 있지만 클래스가 따로 존재하지 않는다
let person1 = {
    name: '김철수',
    age : 25,
    sayHello: function() { 
        console.log(`안녕! 내 이름은 ${this.name}야`);
    }
};

person1.sayHello();

// 객체를 생성하는 다른 방법
// let person2 = {};
let person2 = new Object();

// 나중에 속성 추가하기
person2.name = '박민호';
person2.age = 25;
person2.sayHello = function() {
    console.log(`안녕하세요! 제 이름은 ${this.name}입니다.`);
};

person2.sayHello();


// 동일한 속성을 지닌 인스턴스를 찍어낼 수 있다
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`안녕! 내 이름은 ${this.name}야`);
    };
}

let Person3 = new Person('최민영', 15);
let Person4 = new Person('최민혁', 13);

Person3.sayHello();
Person4.sayHello();


// 이미 존재하는 속성에 값 넣기
Person3.name = '김철수';
Person3.sayHello();
Person3['name'] = '김철수';
Person3.sayHello();

// 새로운 속성 추가하기
Person3.gender = 'male';
console.log(Person3.gender);

// 속성 삭제하기
delete Person3.gender;
console.log(Person3.gender);

Person4.gender = 'male';
Person4.weigth =  80.33;
Person4.exam = 1;

// for ... in으로 객체 반복 돌리기 (Java에서 Map의 keySet으로 반복 돌리는 것과 유사)
for (let key in Person4) {
    console.log(key, ':', Person4[key]);
}