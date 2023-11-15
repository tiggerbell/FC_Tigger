import React, { useState } from "react";
import "../style/Main.scss";
import assist from "../assets/images/assist.svg";
import goal from "../assets/images/goal.svg";

const Main = () => {
  const [homeTotalGoal, setHomeTotalGoal] = useState(0);
  const [homeTotalAssist, setHomeTotalAssist] = useState(0);

  const homePlayer1 = [0, 1]; // 고동혁
  const homePlayer2 = [0, 1]; // 김수겸
  const homePlayer3 = [0, 1]; // 김민규
  const homePlayer4 = [0, 1]; // 김원형
  const homePlayer5 = [0, 1]; // 김종찬
  const homePlayer6 = [0, 1]; // 민경준
  const homePlayer7 = [0, 1]; // 나상우
  const homePlayer8 = [0, 1]; // 박남주
  const homePlayer9 = [0, 1]; // 박한규
  const homePlayer10 = [0, 1]; // 안주영
  const homePlayer11 = [0, 1]; // 이병찬
  const homePlayer12 = [0, 1]; // 이준민
  const homePlayer13 = [0, 1]; // 임영훈

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
              <span className="score-box__home-score">4</span>
              <span className="score-box__away-score">1</span>
            </div>
            {/* 날짜 구장 수정 */}
            <h1 className="center__date">10.29 08:00</h1>
            <h2 className="center__place">안양천 신정교 하부 2풋살장</h2>
          </div>
          <div className="first-dan__right">
            {/* away 이름 수정 */}
            <span className="left__team-name">힐킥</span>
          </div>
        </div>
        {/* 2열 참가 인원 정보 */}
        <div className="container__secon-dan">
          <div className="secon-dan__home">
            <div className="home__player-box">
              <span className="player-box__text">5</span>
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
            {/* <div className="home__player-box">
              <span className="player-box__text">2</span>
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
              <span className="player-box__member">김민규</span>
            </div> */}
            {/* <div className="home__player-box">
              <span className="player-box__text">2</span>
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
              <span className="player-box__member">김원형</span>
            </div> */}
            {/* <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">2</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">김종찬</span>
            </div> */}
            {/* <div className="home__player-box">
              <span className="player-box__text">5</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">2</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">민경준</span>
            </div> */}
            {/* <div className="home__player-box">
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
              <span className="player-box__text">3</span>
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
              <span className="player-box__member">박남주</span>
            </div>
            <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">2</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">박한규</span>
            </div> */}

            {/* <div className="home__player-box">
              <span className="player-box__text">2</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">3</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">안주영</span>
            </div> */}
            {/* <div className="home__player-box">
              <span className="player-box__text">6</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">3</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">이병찬</span>
            </div> */}

            {/* <div className="home__player-box">
              <span className="player-box__text">1</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">이준민</span>
            </div> */}
            {/* <div className="home__player-box">
              <span className="player-box__text">3</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">4</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">임영훈</span>
            </div> */}

            {/* <span className="player-box__member blur">No Show 안주영</span> */}
          </div>
          <div className="secon-dan__away"></div>
        </div>
        {/* 3열 총 득점, 어시스트 정보 */}
        <div className="container__third-dan">
          <div className="third-dan__home">
            <span className="score-text">{homeTotalGoal}</span>
            <img className="team-goal" src={goal} alt="icon" width={24} />
            <span className="score-text">{homeTotalAssist}</span>
            <img className="team-assist" src={assist} alt="icon" width={24} />
          </div>
          <div className="third-dan__away"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
