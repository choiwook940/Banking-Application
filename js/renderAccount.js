window.renderAccount = (accountName) => {
  const accountSlider = document.querySelector('.slider')
  // Render Account-page
  accountSlider.insertAdjacentHTML('beforeend', `
    <div class="account ${accountName}">
    <!-- 헤더 -->
    <header>
      <a href=""><img src="./image/profile.jpg" alt="프로필 이미지" /></a>
      <h1>Kim</h1>
      <div class="btn-cont">
        <button class="btn btn-qr">
          <span>바코드</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
            <line x1="3" y1="10" x2="20" y2="10" stroke="#FF5F00" stroke-width="2"/>
            <path d="M0 6V0H6V1.5H1.5V6H0ZM1.5 15V19.5H6V21H0V15H1.5ZM22.5 19.5V15H24V21H18V19.5H22.5ZM18 0H24V6H22.5V1.5H18V0Z" fill="#FF5F00"/>
          </svg>
        </button>
        <button class="btn btn-search">
          <span>검색</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <g clip-path="url(#clip0_2112_320)"><path d="M15.75 0.5C16.5078 0.5 17.2383 0.597656 17.9414 0.792969C18.6445 0.988281 19.3008 1.26562 19.9102 1.625C20.5195 1.98438 21.0742 2.41406 21.5742 2.91406C22.0742 3.41406 22.5078 3.97266 22.875 4.58984C23.2422 5.20703 23.5195 5.86328 23.707 6.55859C23.8945 7.25391 23.9922 7.98438 24 8.75C24 9.50781 23.9023 10.2383 23.707 10.9414C23.5117 11.6445 23.2344 12.3008 22.875 12.9102C22.5156 13.5195 22.0859 14.0742 21.5859 14.5742C21.0859 15.0742 20.5273 15.5078 19.9102 15.875C19.293 16.2422 18.6367 16.5195 17.9414 16.707C17.2461 16.8945 16.5156 16.9922 15.75 17C14.7734 17 13.8398 16.8359 12.9492 16.5078C12.0586 16.1797 11.2344 15.707 10.4766 15.0898L1.27734 24.2773C1.12891 24.4258 0.953125 24.5 0.75 24.5C0.546875 24.5 0.371094 24.4258 0.222656 24.2773C0.0742188 24.1289 0 23.9531 0 23.75C0 23.5469 0.0742188 23.3711 0.222656 23.2227L9.41016 14.0234C8.79297 13.2734 8.32031 12.4531 7.99219 11.5625C7.66406 10.6719 7.5 9.73438 7.5 8.75C7.5 7.99219 7.59766 7.26172 7.79297 6.55859C7.98828 5.85547 8.26562 5.19922 8.625 4.58984C8.98438 3.98047 9.41406 3.42578 9.91406 2.92578C10.4141 2.42578 10.9727 1.99219 11.5898 1.625C12.207 1.25781 12.8633 0.980469 13.5586 0.792969C14.2539 0.605469 14.9844 0.507812 15.75 0.5ZM15.75 15.5C16.6797 15.5 17.5547 15.3242 18.375 14.9727C19.1953 14.6211 19.9102 14.1367 20.5195 13.5195C21.1289 12.9023 21.6094 12.1875 21.9609 11.375C22.3125 10.5625 22.4922 9.6875 22.5 8.75C22.5 7.82031 22.3242 6.94531 21.9727 6.125C21.6211 5.30469 21.1367 4.58984 20.5195 3.98047C19.9023 3.37109 19.1875 2.89062 18.375 2.53906C17.5625 2.1875 16.6875 2.00781 15.75 2C14.8203 2 13.9453 2.17578 13.125 2.52734C12.3047 2.87891 11.5898 3.36328 10.9805 3.98047C10.3711 4.59766 9.89062 5.3125 9.53906 6.125C9.1875 6.9375 9.00781 7.8125 9 8.75C9 9.67969 9.17578 10.5547 9.52734 11.375C9.87891 12.1953 10.3633 12.9102 10.9805 13.5195C11.5977 14.1289 12.3125 14.6094 13.125 14.9609C13.9375 15.3125 14.8125 15.4922 15.75 15.5Z" fill="#FF5F00"/></g>
            <defs><clipPath id="clip0_2112_320"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"/></clipPath></defs>
          </svg>  
        </button>
      </div>
    </header>
    <!-- 계좌번호 섹션 -->
    <section class="account-section">
      <div class="account-cont">
        <strong class="account-num"></strong>
        <span class="account-money"><strong></strong>원</span>
        <div class="progress-cont">
          <div class="bar">
            <div class="progress"><span class="progress-rate">이번달 생활비 사용율</span></div>
          </div>
          <button class="btn btn-manage">
            <span>지출관리</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M0 4.2H3V14H0V4.2ZM5.6 0H8.4V14H5.6V0ZM11.2 8H14V14H11.2V8Z" fill="black"/>
            </svg>
          </button>
          <div class="manage-table">
            <h2>지출 관리</h2>
            <div class="manage-limit">
              <h3>기준금액 설정</h3>
              <span></span>
            </div>
            <div class="manage-report">
              <h3>일간 리포트</h3>
              <canvas class="report-chart" width="100%"></canvas>
            </div>
            <div class="manage-pattern">
              <h3>6월 지출 패턴</h3>
            </div>
            
            
            
            <button class="btn btn-manage-close">닫기</button>
          </div>
        </div>
        <span class="account-desc"></span>
        <button class="btn btn-send">이체</button>
      </div>
      <!-- 이체 섹션 -->
      <div class="send-table">
        <h2>이체</h2>
        <button class="btn btn-send-enter">직접입력</button>
        <ul class="recipients">
          <li class="recipient">
            <img src="./image/profile.jpg" alt="프로필 이미지" />
            <div class="recipient-data">
              <strong class="recipient-name">정을수</strong>
              <span class="recipient-account">신한 112048393002</span>
            </div>
            <span class="material-icons">star_border</span>
          </li>
          <li class="recipient">
            <img src="./image/profile.jpg" alt="프로필 이미지" />
            <div class="recipient-data">
              <strong class="recipient-name">정을수</strong>
              <span class="recipient-account">신한 112048393002</span>
            </div>
            <span class="material-icons">star_border</span>
          </li>
          <li class="recipient">
            <img src="./image/profile.jpg" alt="프로필 이미지" />
            <div class="recipient-data">
              <strong class="recipient-name">정을수</strong>
              <span class="recipient-account">신한 112048393002</span>
            </div>
            <span class="material-icons">star_border</span>
          </li>          
          <li class="recipient">
            <img src="./image/profile.jpg" alt="프로필 이미지" />
            <div class="recipient-data">
              <strong class="recipient-name">정을수</strong>
              <span class="recipient-account">신한 112048393002</span>
            </div>
            <span class="material-icons">star_border</span>
          </li>
          <li class="recipient">
            <img src="./image/profile.jpg" alt="프로필 이미지" />
            <div class="recipient-data">
              <strong class="recipient-name">정을수</strong>
              <span class="recipient-account">신한 112048393002</span>
            </div>
            <span class="material-icons">star_border</span>
          </li>
          <li class="recipient">
            <img src="./image/profile.jpg" alt="프로필 이미지" />
            <div class="recipient-data">
              <strong class="recipient-name">정을수</strong>
              <span class="recipient-account">신한 112048393002</span>
            </div>
            <span class="material-icons">star_border</span>
          </li>
        </ul>
        <button class="btn btn-send-cancel">취소</button>
      </div>
      <aside>
        <span>지금 낮은 이자로 생활대출을 신청하세요!</span>
        <a href="#">Go</a>
      </aside>
    </section>
    <!-- 지출내역 섹션 -->
    <section class="spend-section">
      <div class="dragbar"></div>
      <div class="save-cont">
        <div class="save-slider">
          <ul class="save-list">
            <li class="save-bar">
              <div class="save-progress"></div>
              <span class="save-name">노트북</span>
              <span class="save-money">842,000원</span>
            </li>
            <li class="save-bar">
              <div class="save-progress"></div>
              <span class="save-name">여행가자</span>
              <span class="save-money">842,000원</span>
            </li>
          </ul>
          <div class="save-add">
            <button class="btn btn-add">
              <span class="material-icons">add_circle</span>
              <span>저금통 만들기</span>
            </button>
          </div>
        </div>
      </div>
      <ul class="day-cont">
      </ul>
    </section>
    </div>
  `)
}


