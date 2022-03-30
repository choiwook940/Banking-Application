window.renderData = (json) => {
  const accountBody = document.querySelector(`.${json.account}`)
  let data = json.data;
  // Get Date 
  let now = new Date();
  let currentYear = now.getFullYear()
  let currentMonth = now.getMonth() + 1
  let currentDate = now.getDate()
  let lastDate = new Date(now.getYear(), now.getMonth()+1, 0)
  let currentMonthLastDate = lastDate.getDate()
  let today = currentYear * 10000 + currentMonth * 100 + currentDate
  let yesterday = today - 1;      

  // Account Board
  const accountName = accountBody.querySelector('header h1')
  const accountNum = accountBody.querySelector('.account-num')
  const accountMoney = accountBody.querySelector('.account-money > strong')
  const spendProgress = accountBody.querySelector('.bar .progress')
  const accountDesc = accountBody.querySelector('.account-desc')

  accountName.textContent = data.accountName
  accountNum.textContent = data.accountNumber
  accountMoney.textContent = commaInNum(data.accountMoney)
  spendProgress.style.backgroundColor = data.progressColor

  // Savings Board
  const savings = accountBody.querySelectorAll('.save-bar')

  savings.forEach((saving, index) => {
    saving.children[0].style.backgroundColor = data.saveList[index].color
    saving.children[0].style.width = `${data.saveList[index].money / data.saveList[index].target * 100}%`
    saving.children[1].textContent = data.saveList[index].name
    saving.children[2].textContent = `${commaInNum(data.saveList[index].money)}원`
  })

  // Spend Board
  const dailyCont = accountBody.querySelector('.day-cont')
  let baseDate // Variable for grouping cashflows on same date
  let date // Variable for rendering cashflow date
  let dailyTotal = 0

  const monthlyCashFlow = data.bankList.reduce((accumulator, item) => {
    // Cut by month & delete unnecessary data
    let cashflowMonth = item.date % 10000 / 100 | 0
    let cashflowDate = item.date % 100
    let pastDate = currentDate - cashflowDate;
    if(cashflowMonth !== currentMonth || cashflowDate > currentDate) return accumulator;
    // Create daily list
    if(item.date === today) {
      date = '오늘'
    } else if(item.date === yesterday) {
      date = '어제'
    } else {
      date = `${pastDate}일 전`
    }
    if(baseDate !== item.date) {
      dailyCont.insertAdjacentHTML('beforeend', 
        `
          <li class="day-list">
            <strong class="day">${date}</strong>
            <span class="total"></span>
            <ul class="spend-cont">
            </ul>
          </li>
        `        
      )
      dailyTotal = 0
    }
    // Create daily list details
    const spendCont = dailyCont.querySelector('.day-list:last-child .spend-cont')
    spendCont.insertAdjacentHTML('beforeend',
      `
        <li class="spend-list">
          <span class="spend-title">${item.history}</span>
          <span class="spend-cost">${commaInNum(item.price)}</span>
        </li>
      `
    )
    // Calculate income & outcome
    if(item.income === "in") {
      const spendCost = spendCont.querySelector('.spend-list:last-child .spend-cost')
      spendCost.classList.add('income')
      accumulator += item.price  
      dailyTotal += item.price      
    } else {
      accumulator -= item.price
      dailyTotal -= item.price   
    }
    // Calculate Daily Total Cash-flow
    const dailyTotalRender = dailyCont.querySelector('.day-list:last-child .total')
    if(dailyTotal >= 0) {
      dailyTotalRender.textContent = `+ ${commaInNum(dailyTotal)}원 수입`
    } else {
      dailyTotalRender.textContent = `- ${commaInNum(-dailyTotal)}원 지출`
    }
    baseDate = item.date
    return accumulator;
  }, 0) // .reduce End

  // console.log(`총 지출은 ${-monthlyCashFlow}원`)
  // console.log(`생활비 ${data.accountMoney}원`)
  // Account Baord
  const spendRate = -monthlyCashFlow / data.accountMoney
  if(spendRate > 1) {
    spendProgress.style.width = `${100}%`
    accountDesc.textContent = `${commaInNum(-(data.accountMoney + monthlyCashFlow))}원 초과 사용`  
  } else {
    spendProgress.style.width = `${spendRate * 100}%`
    accountDesc.textContent = `${currentMonthLastDate - currentDate + 1}일 동안 ${commaInNum(data.accountMoney + monthlyCashFlow)}원 남음`  
  }
  // console.log(`지출 비율은 ${(-monthlyCashFlow) / data.accountMoney * 100}%`)
}

const commaInNum = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}