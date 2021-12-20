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

const getDate = () => {
  fetch(`https://gist.githubusercontent.com/himchan94/a539fd8c884477a314044e8b423b9653/raw/4703f3ad54d707c1baec154783d3f1f382671d5a/myAccount.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    })
}

