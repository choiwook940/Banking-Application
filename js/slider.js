window.slider = function(target) {
  // Variants set
  const slider = document.querySelector(`${target}`);
  const slideLis = Array.from(slider.children);
  // console.log(slideLis)
  let isDragging = false,
    startPos = 0,
    currrentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0      

  // Slider-width set
  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * slideLis.length;
  slider.style.width = sliderWidth + 'px';
  // console.log(slider.style.width)

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
    event.stopPropagation()
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
}
