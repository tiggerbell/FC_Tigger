import React from "react";
import "../style/Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="score_container">
        {/* 1열 팀명 스코어 구장 정보 */}
        <div className="container__first-dan">
          <div className="first-dan__left">
            <span className="left__team-name">FC_Tigger</span>
          </div>
          <div className="first-dan__center">
            <div className="center__score-box">
              {/* 스코어 수정 */}
              <span className="score-box__home-score">3</span>
              <span className="score-box__away-score">3</span>
            </div>
            {/* 날짜 구장 수정 */}
            <h1 className="center__date">10.07 09:30</h1>
            <h2 className="center__place">난지천공원 풋살장</h2>
          </div>
          <div className="first-dan__right">
            {/* away 이름 수정 */}
            <span className="left__team-name">FC 언약</span>
          </div>
        </div>
        {/* 2열 참가 인원 정보 */}
        <div className="container__secon-dan">
          <div className="secon-dan__home">
            <span className="home__member">고동혁</span>
            {/* <span className="home__member">김민규</span> */}
            <span className="home__member">김원형</span>
            <span className="home__member">김종찬</span>
            {/* <span className="home__member">나상우</span> */}
            <span className="home__member">박남주</span>
            {/* <span className="home__member">박한규</span> */}
            <span className="home__member">안주영</span>
            <span className="home__member">이병찬</span>
            <span className="home__member">임영훈</span>
            {/* <span className="home__member blur">No Show 안주영</span> */}
          </div>
          <div className="secon-dan__away"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
