const btnQr = document.querySelector(".btn-qr")
const btnSearch = document.querySelector(".btn-search")
const btnSend = document.querySelector(".btn-send")
const btnManage = document.querySelector(".btn-manage")
const btnAdd = document.querySelector(".btn-add")
const btnHome = document.querySelector(".btn-home")
const btnArrow = document.querySelector(".btn-arrow")
const btnMessage = document.querySelector(".btn-message")
const btnMore = document.querySelector(".btn-more")

btnQr.addEventListener("click", () => {console.log("btnQr")})
btnSearch.addEventListener("click", () => {console.log("btnSearch")})
btnSend.addEventListener("click", () => {console.log("btnSend")})
btnManage.addEventListener("click", () => {console.log("btnManage")})
btnAdd.addEventListener("click", () => {console.log("btnAdd")})
btnHome.addEventListener("click", () => {console.log("btnHome")})
btnArrow.addEventListener("click", () => {console.log("btnArrow")})
btnMessage.addEventListener("click", () => {console.log("btnMessage")})
btnMore.addEventListener("click", () => {console.log("btnMore")})


// slider for accounts
window.onload = function() {
// 변수 준비
  const kindWrap = document.querySelector('.kind_wrap');
  const slider = kindWrap.querySelector('.slider');
  const slideLis = slider.querySelectorAll('.account');
  const moveButton = kindWrap.querySelector('.arrow');
  let moveDist = 0;
  let currentNum = 0;


  // 아이템을 합산한 넓이주기 준비
  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * slideLis.length;
  slider.style.width = sliderWidth + 'px';

  // 처음 위치 잡기
  // 이걸 해줘야 첫번째 애니메이션이 안되는 현상이 사라진다. 전장면의 수치가 필요하기 때문이다.
  slider.style.left = '0';

  // 이벤트 리스너
  moveButton.addEventListener('click', moveSlide)

  function moveSlide(e) {
      e.preventDefault();
      slider.style.transition = 'all 500ms ease'; // 애니메이션
      if (e.target.className === 'next') { // 다음일때
          if (currentNum === slideLis.length - 1) return; 
          // 슬라이더의 갯수를 이용해 마지막 숫자를 구한다. 즉 마지막이면 return해라.
          currentNum++; // 숫자를 업데이트 한다.
          moveDist += -liWidth;
          console.log(slideLis.length - 1);
          console.log(currentNum);
          slider.style.left = moveDist + 'px';
      } else { // 이전일때
          if (currentNum === 0) return; // 처음이면 return해라.
          currentNum--; // 숫자를 업데이트 한다.
          moveDist += liWidth;
          console.log(currentNum);
          slider.style.left = moveDist + 'px';
      }
  }
}