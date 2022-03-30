const sliderForAccount = (target) => {
  // Variable set
  const slider = document.querySelector(`${target}`)
  const slideLis = slider.querySelectorAll('.account')

  let isDragging = false,
    startPos = 0,
    currrentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0      

  // Slider-width set
  const liWidth = slideLis[0].clientWidth
  const sliderWidth = liWidth * slideLis.length
  slider.style.width = sliderWidth + 'px'

  // Eventlistener
  slideLis.forEach((slide, index) => {
    slide.addEventListener('dragstart', (e) => e.preventDefault())
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
  })
  window.oncontextmenu = function(event) {
    event.preventDefault()
    return false
  }
  function touchStart(index) {
    return function(event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true
      animationID = requestAnimationFrame(animation)
    }
  }
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
    const movedBy = currrentTranslate - prevTranslate
    if(movedBy < -100 && currentIndex < slideLis.length - 1) currentIndex += 1
    if(movedBy > 100 && currentIndex > 0) currentIndex -= 1
    setPositionByIndex() 

    // Execute other sliders on current account page 
    let currentAccount = slideLis[currentIndex].className.split(' ')[1];
    sliderForSpend(currentAccount)
    sliderForSavings(currentAccount)
  }
  function touchMove(event) {
    if(isDragging) {
      const currentPosition = getPositionX(event)
      currrentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }
  function animation() {
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
  }
  function setSliderPosition() {
    slider.style.transform = `translateX(${currrentTranslate}px)`
  }
  function setPositionByIndex() {
    currrentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currrentTranslate
    setSliderPosition()
  }

    // Spend Board dragbar
    const sliderForSpend = (target) => {
      const currentAccount = document.querySelector(`.${target}`)
      // console.log(currentAccount)
      const spendDrag = currentAccount.querySelector(`.dragbar`)
      const spendSection = currentAccount.querySelector('.spend-section')
  
      spendDrag.addEventListener('dragstart', (e) => e.preventDefault())
      spendDrag.addEventListener('touchstart', (e) => {
        // 중첩 기능 방지
        // e.stopPropagation()
        touchStart
      })
      spendDrag.addEventListener('touchend', touchEnd)
      spendDrag.addEventListener('touchmove', touchMove)
      spendDrag.addEventListener('mousedown', touchStart)
      spendDrag.addEventListener('mouseup', touchEnd)
      spendDrag.addEventListener('mouseleave', touchEnd)
      spendDrag.addEventListener('mousemove', touchMove)
      
      function touchStart(event) {
        // event.stopPropagation()
        spendSection.classList.toggle('active')
        spendSection.style.transition = "all 0.5s"; 
      }
      function touchEnd() {}
      function touchMove(e) {}
    }
  
}


// Slider for Savings
const sliderForSavings = (target) => {
  // Variable set
  const currentAccount = document.querySelector(`.${target}`)
  const slider = currentAccount.querySelector(`.save-slider`)
  const slideLis = slider.querySelectorAll('.save-bar')
  let isDragging = false,
    startPos = 0,
    currrentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0      
  // Slider-width set
  const liWidth = slideLis[0].clientWidth
  // console.log("개체 넓이", liWidth)
  const sliderWidth = liWidth * (slideLis.length + 1)  // 저금통 만들기 부분 추가를 위해 + 1
  // console.log("슬라이드 넓이", sliderWidth)
  slider.style.width = sliderWidth + 'px'
  // Eventlistener
  slideLis.forEach((slide, index) => {
    slide.addEventListener('dragstart', (e) => e.preventDefault())
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
  })
  window.oncontextmenu = function(event) {
    event.preventDefault()
    return false
  }
  function touchStart(index) {
    return function(event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true
      animationID = requestAnimationFrame(animation)
    }
  }
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
    const movedBy = currrentTranslate - prevTranslate
    if(movedBy < -100 && currentIndex < slideLis.length - 1) currentIndex += 1
    if(movedBy > 100 && currentIndex > 0) currentIndex -= 1
    setPositionByIndex() 
  }
  function touchMove(event) {
    event.stopPropagation()
    event.preventDefault() 
    if(isDragging) {
      const currentPosition = getPositionX(event)
      currrentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }
  function animation() {
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
  }
  function setSliderPosition() {
    slider.style.transform = `translateX(${currrentTranslate}px)`
  }
  function setPositionByIndex() {
    currrentTranslate = currentIndex * -liWidth
    prevTranslate = currrentTranslate
    setSliderPosition()
  }
}