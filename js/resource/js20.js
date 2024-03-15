const pushBtn = document.querySelector('#pushBtn');
const popBtn = document.querySelector('#popBtn');
const shiftBtn = document.querySelector('#shiftBtn');
const unshiftBtn = document.querySelector('#unshiftBtn');
const out = document.querySelector('#out');

let starCount = 0;

const createStarDiv = () => {
    const starDiv = document.createElement('div');
    const starText = document.createTextNode('grade');

    starDiv.classList.add('material-symbols-outlined');
    starDiv.classList.add('star');
    starDiv.appendChild(starText);

    const numDiv = document.createElement('div');
    const numText = document.createTextNode(starCount++);

    numDiv.classList.add('starNum');
    numDiv.appendChild(numText);
    starDiv.appendChild(numDiv);

    return starDiv;
};

console.dir(out);

const getLastChild= () => document.querySelector('#out > div:last-child');
 
const pushChild = () => out.appendChild(createStarDiv());
const popChild = () => out.removeChild(out.lastElementChild);
const shiftChild = () => out.removeChild(out.firstElementChild);
const unshiftChild = () => out.insertBefore(createStarDiv(),out.firstElementChild);

pushBtn.addEventListener('click', (e) => pushChild());
popBtn.addEventListener('click', (e) => popChild());
shiftBtn.addEventListener('click', (e) => shiftChild());
unshiftBtn.addEventListener('click', (e) => unshiftChild());

document.body.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            shiftChild();
            break;
        case 'ArrowRight':
            e.preventDefault();
            unshiftChild();
            break;
        case 'ArrowUp':
            e.preventDefault();
            popChild();
            break;
        case 'ArrowDown':
            e.preventDefault();
            pushChild();
            break;
    }
});

// const tob = document.getElementById('top');
// tob.addEventListener('keydown', (e) => {
//     e.preventDefault();
//     if (e.key === 'up') {
//     pushChild();
//     }
// });

// // 새 요소 객체 만들어서 자식으로 추가하기
// pushBtn.addEventListener('click', (e) => {
//     // 1. Element node를 생성한다
//     const newDiv = document.createElement('div');
//     // 2. Text node를 생성한다
//     const newText = document.createTextNode('Grade');

//     // 3. Element node를 설정한다 (클래스 추가, 속성 추가, 등등)
//     newDiv.classList.add('material-symbols-outlined');
//     newDiv.style.fontSize = '30px';
//     newDiv.style.color = 'red';

//     // 4. Element node에 Text node를 부착한다
//     newDiv.appendChild(newText);
//     // 5. 새 Elenment node를 out에 추가
//     out.appendChild(newDiv);


    
//     newDiv.classList.add('material-symbols-outlined');
//     newDiv.style.fontSize = '30px';
//     newDiv.style.color = 'red';
// });

