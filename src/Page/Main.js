import React from "react";
import "../style/Main.scss";
import assist from "../assets/images/assist.svg";
import goal from "../assets/images/goal.svg";

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
              <span className="score-box__home-score">1</span>
              <span className="score-box__away-score">5</span>
            </div>
            {/* 날짜 구장 수정 */}
            <h1 className="center__date">10.11 20:00</h1>
            <h2 className="center__place">과천 관문체육공원 풋살장 B</h2>
          </div>
          <div className="first-dan__right">
            {/* away 이름 수정 */}
            <span className="left__team-name">풋살엔조이</span>
          </div>
        </div>
        {/* 2열 참가 인원 정보 */}
        <div className="container__secon-dan">
          <div className="secon-dan__home">
            <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">고동혁</span>
            </div>
            <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">1</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">김수겸</span>
            </div>
            {/* <span className="player-box__member">김민규</span> */}

            {/* <span className="player-box__member">김원형</span> */}
            <div className="home__player-box">
              <span className="player-box__member">김종찬</span>
            </div>
            <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">나상우</span>
            </div>
            <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">박남주</span>
            </div>
            {/* <span className="player-box__member">박한규</span> */}

            <div className="home__player-box">
              <span className="player-box__member">안주영</span>
            </div>
            {/* <span className="player-box__member">이병찬</span> */}
            <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">이준민</span>
            </div>
            <div className="home__player-box">
              <span className="player-box__text">2</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">임영훈</span>
            </div>

            {/* <span className="player-box__member blur">No Show 안주영</span> */}
          </div>
          <div className="secon-dan__away"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
