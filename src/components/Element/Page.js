import React, { Component } from "react";

import "./Page.css";
import gyeong_white from "../../images/gyeong_white.svg";
import flagofworld from "../../images/international.svg";
import arrow_light from "../../images/arrow_light.svg";
import discord from "../../images/discord.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import atsign from "../../images/atsign.svg";
import introvideokor from "../../videos/intro2kor.mp4";

class WelcomeBox extends Component {
  render() {
    return (
      <div id="main" className="WelcomeDefault">
        <p className="welcome">{this.props.title}</p>
        <p className="welcomeDefaultDesc">{this.props.warning}</p>
      </div>
    );
  }
}
export { WelcomeBox };

class IdBox extends Component {
  render() {
    return (
      <div className="IDDefault">
        <video loop autoPlay muted>
          <source src={introvideokor} type="video/mp4" />
          현재 실행중인 브라우저에서는 비디오 태그가 지원되지 않습니다.
          브라우저를 업데이트 해주세요.
        </video>
      </div>
    );
  }
}
export { IdBox };

class IDDBox extends Component {
  render() {
    return (
      <div className="IDDDefault">
        <p className="IDDDefaultText">{this.props.title1}</p>
        <p className="IDDDefaultDesc">{this.props.desc1}</p>
        <p className="IDDDefaultDesc">{this.props.desc2}</p>
        <p className="IDDDefaultDesc">{this.props.desc3}</p>

        <p className="IDDDefaultText">{this.props.title2}</p>
        <p className="IDDDefaultDesc">{this.props.desc4}</p>
        <p className="IDDDefaultDesc">{this.props.desc5}</p>
      </div>
    );
  }
}
export { IDDBox };

class ContactBox extends Component {
  render() {
    return (
      <div className="ContactDefault">
        <p className="ContactText">{this.props.title}</p>

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
  }
}
export { ContactBox };

class Dkeywords extends Component {
  render() {
    return (
      <div className="keywordbox">
        <p>{this.props.keyword}</p>
      </div>
    );
  }
}

class Skeywords extends Component {
  render() {
    return (
      <div className="subkeywordbox">
        <p>{this.props.keyword}</p>
      </div>
    );
  }
}

class KeywordBox extends Component {
  render() {
    return (
      <div className="KDefault">
        <p className="KDefaultText">{this.props.title}</p>
        <div>
          <Dkeywords keyword="포토샵" />
          <Skeywords keyword="포스터" />
          <Skeywords keyword="카드 뉴스" />
          <Skeywords keyword="실용성" />
          <Skeywords keyword="2D 그래픽" />
        </div>
        <br />
        <div>
          <Dkeywords keyword="3ds Max" />
          <Skeywords keyword="3D 그래픽" />
          <Skeywords keyword="모델링" />
          <Skeywords keyword="사물" />
          <Skeywords keyword="캐릭터" />
          <Skeywords keyword="추상적인" />
          <Skeywords keyword="Vray" />
        </div>
        <br />
        <div>
          <Dkeywords keyword="일러스트레이터" />
          <Skeywords keyword="직관적인" />
          <Skeywords keyword="레이아웃" />
          <Dkeywords keyword="디자인" />
          <Skeywords keyword="의미" /> <Skeywords keyword="창의적인" />
          <Skeywords keyword="생산" />
          <Skeywords keyword="간단함" />
        </div>
        <br />
        <div>
          <Dkeywords keyword="비주얼 스튜디오 코드" />
          <Skeywords keyword="웹 사이트" />
          <Skeywords keyword="개발" />
          <Skeywords keyword="성장" />
          <Skeywords keyword="도전" />
        </div>
        <br />
        <div>
          <Dkeywords keyword="애프터 이펙트" />
          <Skeywords keyword="편집" />
          <Skeywords keyword="애니메이션" />
        </div>
        <br />
        <div className="Kdescdiv">
          <p className="Kdesc">{this.props.Kdesc}</p>
          <p className="Kdesc">{this.props.Kdesc2}</p>
        </div>
      </div>
    );
  }
}
export { KeywordBox };

class B2T extends Component {
  render() {
    return (
      <div>
        <a href="#">
          <div className="B2T">
            <img src={arrow_light} width="70px" alt="Back 2 Top Icon" />
          </div>
        </a>
      </div>
    );
  }
}
export { B2T };

class Footer extends Component {
  render() {
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
          <a href="https://gyeongent.github.io/webportfolio">
            <img
              className="Flag_KOR"
              src={flagofworld}
              width="30px"
              alt="International Flag"
            />
            English
          </a>
        </div>
      </footer>
    );
  }
}
export { Footer };
