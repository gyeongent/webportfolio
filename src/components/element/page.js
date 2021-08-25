import React, { Component } from "react";

import "./page.css";
import gyeong_white from "../../images/gyeong_white.svg"
import flagofworld from "../../images/international.svg"
import arrow_light from "../../images/arrow_light.svg"
import discord from "../../images/discord.svg"
import instagram from "../../images/instagram.svg"
import facebook from "../../images/facebook.svg"
import atsign from "../../images/atsign.svg"
import introvideokor from "../../videos/intro2kor.mp4"

class WelcomeBox extends Component {
    render(){
      return(
        <div id="main" className="WelcomeDefault">
            <p className="welcome">
                {this.props.title}
            </p>
        </div>
      );
    }
}
export {WelcomeBox}

class M2B extends Component {
    render(){
        return(
            <div className="B2T">
                <p>
                    Bottom
                </p>
            </div>
        );
    }
}
export {M2B}

class Box extends Component {
    render(){
      return(
        <div className="Default">
            <p className="DefaultText">
                {this.props.title}
            </p>
            <p className="">
                {this.props.desc}
            </p>
        </div>
      );
    }
}
export {Box}

class ContactBox extends Component {
    render(){
      return(
        <div className="ContactDefault">
            <p className="ContactText">
                {this.props.title}
            </p>
            
            <ul className="contacticon">
                <li>
                    <img src={discord} width="100px" />
                    <p> GYEONG#9090 </p>
                </li>
                <li>
                    <img src={instagram} width="80px" />
                    <p> @lggm_incheon </p>
                </li>
                <li>
                    <img src={instagram} width="80px" />
                    <p> @gyeong_baw </p>
                </li>
                <li>
                    <img src={facebook} width="80px" />
                    <p> @gyeongofficialpage </p>
                </li>
                <li>
                    <img className="atsignicon" src={atsign} width="80px" filter="invert(100%)"/>
                    <p> leegyeongmin@outlook.com </p>
                </li>
            </ul>
        </div>
      );
    }
}
export {ContactBox}

class IdBox extends Component {
    render(){
        return(
            <div className="IDDefault">
                <video  loop autoPlay muted>
                    <source src= { introvideokor } type="video/mp4" />현재 실행중인 브라우저에서는 비디오 태그가 지원되지 않습니다. 브라우저를 업데이트 해주세요.
                </video>
            </div>
        );
    }
}
export {IdBox}

class IDDBox extends Component {
    render(){
      return(
        <div className="IDDDefault">
            <p className="IDDDefaultText">
                {this.props.title1}
            </p>
            <p className="IDDDefaultDesc">
                {this.props.desc1}
            </p>
            <p className="IDDDefaultDesc">
                {this.props.desc2}
            </p>
            <p className="IDDDefaultDesc">
                {this.props.desc3}
            </p>

            <p className="IDDDefaultText">
                {this.props.title2}
            </p>
            <p className="IDDDefaultDesc">
                {this.props.desc4}
            </p>
            <p className="IDDDefaultDesc">
                {this.props.desc5}
            </p>
        </div>
      );
    }
}
export {IDDBox}

class B2T extends Component {
    render(){
        return(
            <div>
                <a href="#">
                    <div className="B2T">
                        <img src={arrow_light} width="70px"/>
                    </div>
                </a>
            </div>
        );
    }
}
export {B2T}

class Footer extends Component {
    render(){
        return(
            <footer className="Footer">
                <img className="Footer_logo" src={gyeong_white} width="70px" />
                <div className="footerinfo">
                Seoul Visual Media High School 14th. GyeongMin Lee<br/>
                Designed by GyeongMin Lee (GYEONG)<br />
                © 2021. GYEONG All rights reserved.
                </div>
                <div className="langsel">
                    <a href="https://gyeongent.github.io/webportfolio">
                        <img className="Flag_KOR" src={flagofworld} width="30px"/>English
                    </a>
                </div>
            </footer>
        );
    }
}
export {Footer}