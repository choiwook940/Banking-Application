window.mainFunction = () => {

  const btnQr = document.querySelector('.btn-qr')
  const btnSearch = document.querySelector('.btn-search')
  const btnSend = document.querySelector('.btn-send')
  const btnSendEnter = document.querySelector('.btn-send-enter')
  const btnSendCancel = document.querySelector('.btn-send-cancel')
  const btnManage = document.querySelector('.btn-manage')
  const btnManageClose = document.querySelector('.btn-manage-close')
  const btnAdd = document.querySelector('.btn-add')
  const btnHome = document.querySelector('.btn-home')
  const btnArrow = document.querySelector('.btn-arrow')
  const btnMessage = document.querySelector('.btn-message')
  const btnMore = document.querySelector('.btn-more')

  btnQr.addEventListener("click", () => {console.log("btnQr")})
  btnSearch.addEventListener("click", () => {console.log("btnSearch")})
  // Send Money
  btnSend.addEventListener("click", () => {
    console.log("btnSend")
    document.querySelector('.send-table').classList.add('show')
  })
  btnSendEnter.addEventListener("click", () => {

  })
  btnSendCancel.addEventListener("click", () => {
    document.querySelector('.send-table').classList.remove('show')
  })
  // Manage Expenditure
  btnManage.addEventListener("click", () => {
    console.log("btnManage")
    document.querySelector('.manage-table').classList.add('show')
  })
  btnManageClose.addEventListener("click", () => {
    document.querySelector('.manage-table').classList.remove('show')
  })
  btnAdd.addEventListener("click", () => {console.log("btnAdd")})
  btnHome.addEventListener("click", () => {console.log("btnHome")})
  btnArrow.addEventListener("click", () => {console.log("btnArrow")})
  btnMessage.addEventListener("click", () => {console.log("btnMessage")})
  btnMore.addEventListener("click", () => {console.log("btnMore")})
}
