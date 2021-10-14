// Import Libraries
import React, { useState } from "react";

// Import JavaScript Files
import Art from "components/Art.js";
import SmoothScroll from "hooks/SmoothScroll.js";
import {
  welcomekr,
  welcomeen,
  iamkr,
  iamen,
  identitykr,
  identityen,
  keywordkr,
  keyworden,
  subkeywordkr,
  subkeyworden,
  contact,
} from "Data.js";

// Import SVG Files
import gyeong_white from "images/gyeong_white.svg";
import flag_of_world from "images/international.svg";
import flag_of_south_korea from "images/flag_of_south_korea.svg";
import arrow_light from "images/arrow_light.svg";
import discord from "images/discord.svg";
import instagram from "images/instagram.svg";
import facebook from "images/facebook.svg";
import atsign from "images/atsign.svg";

// Import Image Files
import resume from "images/resume.png";

// Import Video Files
import intro_video_kr from "videos/intro2kor.mp4";
import intro_video_en from "videos/intro2.mp4";

// Import Cascading StyleSheet Files
import "styles/App.css";

const App = () => {
  const warp = "#";
  const [lang, setLang] = useState("kr");

  const Footer = () => {
    return (
      <footer className="Footer">
        <img
          className="Footer_logo"
          src={gyeong_white}
          width="70px"
          alt="Logo"
        />
        <div className="footerinfo">
          Seoul Visual Media High School 14th. Gyeong-Min Lee
          <br />
          Designed, Developed by Gyeong-Min Lee (GYEONG)
          <br />© 2016-2021. GYEONG All rights reserved.
        </div>
        <div className="langsel">
          {lang === "kr" ? (
            <div
              onClick={() => {
                setLang("en");
              }}
            >
              <img
                className="Flag_KOR"
                src={flag_of_world}
                width="30px"
                alt="International Flag"
              />
              English
            </div>
          ) : (
            <div
              onClick={() => {
                setLang("kr");
              }}
            >
              <img
                className="Flag_KOR"
                src={flag_of_south_korea}
                width="30px"
                alt="International Flag"
              />
              한국어
            </div>
          )}
        </div>
      </footer>
    );
  };
  const Welcome = () => {
    return (
      <div id="main" className="WelcomeDefault">
        <p className="welcome">{lang === "kr" ? welcomekr[0] : welcomeen[0]}</p>
        <p className="welcomeDefaultDesc">
          {lang === "kr" ? welcomekr[1] : welcomeen[1]}
        </p>
      </div>
    );
  };
  const Resume = () => {
    return (
      <div className="ResumeDefault">
        <p className="IDDDefaultText">{lang === "kr" ? iamkr[0] : iamen[0]}</p>
        <br />
        <img src={resume} width="40%" alt="이력서" />
      </div>
    );
  };
  const IDD = () => {
    return (
      <div className="IDDDefault">
        <p className="IDDDefaultText">
          {lang === "kr" ? identitykr[0] : identityen[0]}
        </p>
        <p className="IDDDefaultDesc">
          {lang === "kr" ? identitykr[1] : identityen[1]}
        </p>
        <p className="IDDDefaultDesc">
          {lang === "kr" ? identitykr[2] : identityen[2]}
        </p>
        <p className="IDDDefaultDesc">
          {lang === "kr" ? identitykr[3] : identityen[3]}
        </p>
        <p className="IDDDefaultText">
          {lang === "kr" ? identitykr[4] : identityen[4]}
        </p>
        <p className="IDDDefaultDesc">
          {lang === "kr" ? identitykr[5] : identityen[5]}
        </p>
        <p className="IDDDefaultDesc">
          {lang === "kr" ? identitykr[6] : identityen[6]}
        </p>
      </div>
    );
  };
  const Id = () => {
    return (
      <div className="IDDefault">
        <video loop autoPlay muted>
          <source
            src={lang === "kr" ? intro_video_kr : intro_video_en}
            type="video/mp4"
          />
          현재 실행중인 브라우저에서는 비디오 태그가 지원되지 않습니다.
          브라우저를 업데이트 해주세요.
        </video>
      </div>
    );
  };
  const Keywords = () => {
    const D = ({ keyword }) => {
      return (
        <div className="keywordbox">
          <p>{keyword}</p>
        </div>
      );
    };
    const S = ({ keyword }) => {
      return (
        <div className="subkeywordbox">
          <p>{keyword}</p>
        </div>
      );
    };
    return (
      <div className="KDefault">
        <p className="KDefaultText">
          {lang === "kr" ? keywordkr[0] : keyworden[0]}
        </p>
        <div>
          <D keyword={lang === "kr" ? subkeywordkr[0] : subkeyworden[0]} />
          <S keyword={lang === "kr" ? subkeywordkr[1] : subkeyworden[1]} />
          <S keyword={lang === "kr" ? subkeywordkr[2] : subkeyworden[2]} />
          <S keyword={lang === "kr" ? subkeywordkr[3] : subkeyworden[3]} />
          <S keyword={lang === "kr" ? subkeywordkr[4] : subkeyworden[4]} />
        </div>
        <br />
        <div>
          <D keyword={lang === "kr" ? subkeywordkr[5] : subkeyworden[5]} />
          <S keyword={lang === "kr" ? subkeywordkr[6] : subkeyworden[6]} />
          <S keyword={lang === "kr" ? subkeywordkr[7] : subkeyworden[7]} />
          <S keyword={lang === "kr" ? subkeywordkr[8] : subkeyworden[8]} />
          <S keyword={lang === "kr" ? subkeywordkr[9] : subkeyworden[9]} />
          <S keyword={lang === "kr" ? subkeywordkr[10] : subkeyworden[10]} />
          <S keyword={lang === "kr" ? subkeywordkr[11] : subkeyworden[11]} />
        </div>
        <br />
        <div>
          <D keyword={lang === "kr" ? subkeywordkr[12] : subkeyworden[12]} />
          <S keyword={lang === "kr" ? subkeywordkr[13] : subkeyworden[13]} />
          <S keyword={lang === "kr" ? subkeywordkr[14] : subkeyworden[14]} />
          <S keyword={lang === "kr" ? subkeywordkr[15] : subkeyworden[15]} />
          <S keyword={lang === "kr" ? subkeywordkr[16] : subkeyworden[16]} />
          <S keyword={lang === "kr" ? subkeywordkr[17] : subkeyworden[17]} />
          <S keyword={lang === "kr" ? subkeywordkr[18] : subkeyworden[18]} />
        </div>
        <br />
        <div>
          <D keyword={lang === "kr" ? subkeywordkr[19] : subkeyworden[19]} />
          <S keyword={lang === "kr" ? subkeywordkr[20] : subkeyworden[20]} />
          <S keyword={lang === "kr" ? subkeywordkr[21] : subkeyworden[21]} />
          <S keyword={lang === "kr" ? subkeywordkr[22] : subkeyworden[22]} />
          <S keyword={lang === "kr" ? subkeywordkr[23] : subkeyworden[23]} />
        </div>
        <br />
        <div>
          <D keyword={lang === "kr" ? subkeywordkr[24] : subkeyworden[24]} />
          <S keyword={lang === "kr" ? subkeywordkr[25] : subkeyworden[25]} />
          <S keyword={lang === "kr" ? subkeywordkr[26] : subkeyworden[26]} />
          <D keyword={lang === "kr" ? subkeywordkr[27] : subkeyworden[27]} />
          <S keyword={lang === "kr" ? subkeywordkr[28] : subkeyworden[28]} />
          <S keyword={lang === "kr" ? subkeywordkr[29] : subkeyworden[29]} />
        </div>
        <br />
        <div className="Kdescdiv">
          <p className="Kdesc">{lang === "kr" ? keywordkr[1] : keyworden[1]}</p>
          <p className="Kdesc">{lang === "kr" ? keywordkr[2] : keyworden[2]}</p>
        </div>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div className="ContactDefault">
        <p className="ContactText">{contact[0]}</p>
        <ul className="contacticon">
          <li>
            <img src={discord} width="100px" alt="Discord 아이콘" />
            <p> GYEONG#9090 </p>
          </li>
          <li>
            <img src={instagram} width="80px" alt="Instagram 아이콘" />
            <p> @lggm_incheon </p>
          </li>
          <li>
            <img src={instagram} width="80px" alt="Instagram 아이콘" />
            <p> @gyeong_baw </p>
          </li>
          <li>
            <img src={facebook} width="80px" alt="E-mail 아이콘" />
            <p> @gyeongofficialpage </p>
          </li>
          <li>
            <img
              className="atsignicon"
              src={atsign}
              width="80px"
              filter="invert(100%)"
              alt="E-mail 아이콘"
            />
            <p> leegyeongmin@outlook.com </p>
          </li>
        </ul>
      </div>
    );
  };
  const Back2Top = () => {
    return (
      <div>
        <a href={warp}>
          <div className="B2T">
            <img src={arrow_light} width="70px" alt="Back 2 Top Icon" />
          </div>
        </a>
      </div>
    );
  };

  return (
    <div
      className="App"
      onDragStart={() => {
        return true;
      }}
    >
      <Footer />
      <SmoothScroll>
        <Welcome />
        <Resume />
        <IDD />
        <Id />
        <Keywords />
        <Art />
        <Contact />
      </SmoothScroll>
      <Back2Top />
    </div>
  );
};

export default App;
