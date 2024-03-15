const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

// setTimeout : 한 번만 실행, 메서드 실행 후 타이머 ID를 반환 (타이머 취소에 ID가 필요)
const timeout_id1 = setTimeout(() => box1.style.backgroundColor = 'blue', 1000); // 색이 1초 뒤에 바뀜
const timeout_id2 = setTimeout(() => box2.style.backgroundColor = 'orange', 2000); // 색이 2초 뒤에 바뀜

// setInterval : 정해진 초마다 계속 실행, 메서드 실행 후 인터벌 ID를 반환
let x = 0, y = 0;

const interval_id1 = setInterval(() => box1.style.left = x++ + 'px', 500); // 왼쪽에서 오른쪽
const interval_id2 = setInterval(() => box2.style.right = y++ + 'px', 100); // 오른쪽에서 왼쪽

// clearTimeout(handler) : 해당 타임아웃 삭제
document.getElementById('clear1').addEventListener('click', () => {
    clearTimeout(timeout_id1);
    clearTimeout(timeout_id2);
}); 

// clearInterval(handler) : 해당 인터벌 삭제
document.getElementById('clear2').addEventListener('click', () => {
    clearInterval(interval_id1);
    clearInterval(interval_id2);
});
