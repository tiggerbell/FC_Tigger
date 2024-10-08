import React, { useEffect, useState } from "react";
import "../style/Main.css";
import assist from "../assets/images/assist.svg";
import goal from "../assets/images/goal.svg";
import html2canvas from "html2canvas";

const Main = () => {
  const handleDownloadScreenshot = () => {
    const container = document.querySelector(".score_container");

    html2canvas(container).then((canvas) => {
      // 스크린샷을 Canvas로 생성한 후 다운로드합니다.
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "screenshot.png";
      link.click();
    });
  };

  const [homeTotalGoal, setHomeTotalGoal] = useState(0);
  const [homeTotalAssist, setHomeTotalAssist] = useState(0);

  // 배열 첫번째 골, 두번째 어시
  const homePlayer1 = [0, 0]; // 고동혁
  const homePlayer2 = [0, 0]; // 김수겸
  const homePlayer3 = [0, 0]; // 김민규
  const homePlayer4 = [2, 0]; // 김원형
  const homePlayer5 = [1, 1]; // 김종찬
  const homePlayer6 = [0, 0]; // 민경준
  const homePlayer7 = [0, 0]; // 나상우
  const homePlayer8 = [0, 1]; // 박남주
  const homePlayer9 = [0, 0]; // 박한규
  const homePlayer10 = [2, 3]; // 안주영
  const homePlayer11 = [1, 0]; // 이병찬
  const homePlayer12 = [3, 2]; // 임영훈
  //커밋

  // 홈 팀 골 합
  useEffect(() => {
    const homeGoalSum = [
      homePlayer1, // 고동혁
      homePlayer2, // 김수겸
      homePlayer3, // 김민규
      homePlayer4, // 김원형
      homePlayer5, // 김종찬
      homePlayer6, // 민경준
      homePlayer7, // 나상우
      homePlayer8, // 박남주
      homePlayer9, // 박한규
      homePlayer10, // 안주영
      homePlayer11, // 이병찬
      homePlayer12, // 임영훈
    ].reduce((total, player) => total + player[0], 0);

    setHomeTotalGoal(homeGoalSum);

    const homeAssistSum = [
      homePlayer1, // 고동혁
      homePlayer2, // 김수겸
      homePlayer3, // 김민규
      homePlayer4, // 김원형
      homePlayer5, // 김종찬
      homePlayer6, // 민경준
      homePlayer7, // 나상우
      homePlayer8, // 박남주
      homePlayer9, // 박한규
      homePlayer10, // 안주영
      homePlayer11, // 이병찬
      homePlayer12, // 임영훈
    ].reduce((total, player) => total + player[1], 0);

    setHomeTotalAssist(homeAssistSum);
  }, []);
  // 커밋용
  // 커밋용1

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
              <span className="score-box__home-score">2</span>
              <span className="score-box__away-score">5</span>
            </div>
            {/* 날짜 구장 수정 */}
            <h1 className="center__date">08.24 08:00</h1>
            <h2 className="center__place">용산 아이파크 풋살장</h2>
          </div>
          <div className="first-dan__right">
            {/* away 이름 수정 */}
            <span className="left__team-name">FC 한세</span>
          </div>
        </div>
        {/* 2열 참가 인원 정보 */}
        <div className="container__secon-dan">
          <div className="secon-dan__home">
            {/* <div className="home__player-box">
              <span className="player-box__text">{homePlayer1[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer1[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">고동혁</span>
            </div> */}

            {/* <div className="home__player-box">
              <span className="player-box__text">{homePlayer2[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer2[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">김수겸</span>
            </div> */}

            {/* <div className="home__player-box">
              <span className="player-box__text">{homePlayer3[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer3[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">김민규</span>
            </div> */}

            <div className="home__player-box">
              <span className="player-box__text">{homePlayer4[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer4[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">김원형</span>
            </div>

            <div className="home__player-box">
              <span className="player-box__text">{homePlayer5[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer5[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">김종찬</span>
            </div>

            {/* <div className="home__player-box">
              <span className="player-box__text">{homePlayer6[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer6[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">민경준</span>
            </div> */}

            {/* <div className="home__player-box">
              <span className="player-box__text">{homePlayer7[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer7[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">나상우</span>
            </div> */}

            <div className="home__player-box">
              <span className="player-box__text">{homePlayer8[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer8[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">박남주</span>
            </div>

            {/* <div className="home__player-box">
              <span className="player-box__text">{homePlayer9[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer9[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">박한규</span>
            </div> */}

            <div className="home__player-box">
              <span className="player-box__text">{homePlayer10[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer10[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">안주영</span>
            </div>

            <div className="home__player-box">
              <span className="player-box__text">{homePlayer11[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer11[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">이병찬</span>
            </div>

            <div className="home__player-box">
              <span className="player-box__text">{homePlayer12[0]}</span>
              <img
                className="player-box__goal"
                src={goal}
                alt="icon"
                width={24}
              />
              <span className="player-box__text">{homePlayer12[1]}</span>
              <img
                className="player-box__assist"
                src={assist}
                alt="icon"
                width={24}
              />
              <span className="player-box__member">임영훈</span>
            </div>

            {/* <span className="player-box__member blur">No Show [노쇼네임]</span> */}
          </div>
          <div className="secon-dan__away">
            {/* <div className="away__player-box">이명서</div>
            <div className="away__player-box">양찬재</div>
            <div className="away__player-box">박정환</div>
            <div className="away__player-box">김강회</div>
            <div className="away__player-box">남경완</div>
            <div className="away__player-box">박기태</div>
            <div className="away__player-box">임경현</div>
            <div className="away__player-box">황창인</div> */}
          </div>
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
        {/*<button onClick={handleDownloadScreenshot}>스크린샷 다운로드</button>*/}
      </div>
    </div>
  );
};

export default Main;
