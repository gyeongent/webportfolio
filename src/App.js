// Import Libraries
import React, { useState } from "react";

// Import JavaScript Files
import Art from "components/Art.js";
import SmoothScroll from "hooks/SmoothScroll.js";
import {
  welcomekr,
  welcomeen,
  identitykr,
  identityen,
  keywordkr,
  keyworden,
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
          Designed, Develop by Gyeong-Min Lee (GYEONG)
          <br />© 2021. GYEONG All rights reserved.
        </div>
        <div className="langsel">
          {lang == "kr" ? (
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
        <p className="welcome">{lang == "kr" ? welcomekr[0] : welcomeen[0]}</p>
        <p className="welcomeDefaultDesc">
          {lang == "kr" ? welcomekr[1] : welcomeen[1]}
        </p>
      </div>
    );
  };
  const Resume = () => {
    return (
      <div className="ResumeDefault">
        <p className="IDDDefaultText">저는</p>
        <br />
        <img src={resume} width="40%" alt="이력서" />
      </div>
    );
  };
  const IDD = () => {
    return (
      <div className="IDDDefault">
        <p className="IDDDefaultText">
          {lang == "kr" ? identitykr[0] : identityen[0]}
        </p>
        <p className="IDDDefaultDesc">
          {lang == "kr" ? identitykr[1] : identityen[1]}
        </p>
        <p className="IDDDefaultDesc">
          {lang == "kr" ? identitykr[2] : identityen[2]}
        </p>
        <p className="IDDDefaultDesc">
          {lang == "kr" ? identitykr[3] : identityen[3]}
        </p>
        <p className="IDDDefaultText">
          {lang == "kr" ? identitykr[4] : identityen[4]}
        </p>
        <p className="IDDDefaultDesc">
          {lang == "kr" ? identitykr[5] : identityen[5]}
        </p>
        <p className="IDDDefaultDesc">
          {lang == "kr" ? identitykr[6] : identityen[6]}
        </p>
      </div>
    );
  };
  const Id = () => {
    return (
      <div className="IDDefault">
        <video loop autoPlay muted>
          <source
            src={lang == "kr" ? intro_video_kr : intro_video_en}
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
          {lang == "kr" ? keywordkr[0] : keyworden[0]}
        </p>
        <div>
          <D keyword="포토샵" />
          <S keyword="포스터" />
          <S keyword="카드 뉴스" />
          <S keyword="실용성" />
          <S keyword="2D 그래픽" />
        </div>
        <br />
        <div>
          <D keyword="3ds Max" />
          <S keyword="3D 그래픽" />
          <S keyword="모델링" />
          <S keyword="사물" />
          <S keyword="캐릭터" />
          <S keyword="추상적인" />
          <S keyword="Vray" />
        </div>
        <br />
        <div>
          <D keyword="디자인" />
          <S keyword="편집디자인" />
          <S keyword="제품디자인" />
          <S keyword="의미" />
          <S keyword="창의적인" />
          <S keyword="생산" />
          <S keyword="간단함" />
        </div>
        <br />
        <div>
          <D keyword="비주얼 스튜디오 코드" />
          <S keyword="웹 사이트" />
          <S keyword="개발" />
          <S keyword="성장" />
          <S keyword="도전" />
        </div>
        <br />
        <div>
          <D keyword="애프터 이펙트" />
          <S keyword="편집" />
          <S keyword="애니메이션" />
          <D keyword="일러스트레이터" />
          <S keyword="직관적인" />
          <S keyword="레이아웃" />
        </div>
        <br />
        <div className="Kdescdiv">
          <p className="Kdesc">{lang == "kr" ? keywordkr[1] : keyworden[1]}</p>
          <p className="Kdesc">{lang == "kr" ? keywordkr[2] : keyworden[2]}</p>
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
