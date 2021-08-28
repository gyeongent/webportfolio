import React, { Component } from "react";
import Youtube from "react-youtube";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import testimage from "../../images/Arts/testimage.png"
import distanceofscent from "../../images/Arts/distanceofscent.png"
import tripofmemory from "../../images/Arts/tripofmemory.png"
import whyrano from "../../images/Arts/whyrano_front.jpg"
import pierrot from "../../images/Arts/Pierrot_ori.png"
import missing from "../../images/Arts/missing.png"
import kirby from "../../images/Arts/kirby.png"
import smm from "../../images/Arts/SMM.jpg"
import hufo from "../../images/Arts/HUFO.png"
import lscardnews from "../../images/Arts/lscardnews.png"
import circles from "../../images/Arts/CIRCLES.jpg"
import wasteeffect from "../../images/Arts/wasteeffect.jpg"
import fgpolygonart from "../../images/Arts/fallguys_polygonart.png"
import tretion from "../../images/Arts/tretion_1000.png"

import "./Art.css";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 7, 1),
    },
}));

export function ArtBoxWide(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className="ArtWide">
        <div className="ModalClick" onClick={handleOpen}>
            <img src={props.img} width="450px" height="253px;" />
        </div>
        <div className="Artinfo">
            <p className="atitle">
                제목 : {props.title}
            </p>
            <p className="atitle">
                프로그램 : {props.program}
            </p>
            <p className="atitle">
                작업기간 : {props.length}
            </p>
            <p className="adescp">
                {props.adesc}
            </p>
        </div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 100,
          }}
        >
          <Fade in={open}>
            <div className="ModalBox">
                <img src={props.modalImg} width="100%" />        
            </div>
          </Fade>
        </Modal>
      </div>
    );
}

export function ArtBoxDefault(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className="ArtBox">
        <div className="ModalClickS" onClick={handleOpen}>
            <img src={props.img} width="450px" height="253px;" />
        </div>
        <div className="Artinfo">
            <p className="atitle">
                제목 : {props.title}
            </p>
            <p className="atitle">
                프로그램 : {props.program}
            </p>
            <p className="atitle">
                작업기간 : {props.length}
            </p>
            <p className="adescp">
                {props.adesc}
            </p>
        </div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 100,
          }}
        >
          <Fade in={open}>
            <div className="ModalBoxS">
                <img src={props.modalImg} width="100%" />
            </div>
          </Fade>
        </Modal>
      </div>
    );
}

class ArtBoxYoutube extends Component {
    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
        };
        return(
            <div className="ArtVideo">
                <Youtube className="Youtube_api" videoId={this.props.url}/>
                <div>
                    <p className="atitle">
                        제목 : {this.props.title}
                    </p>
                    <p className="atitle">
                        프로그램 : {this.props.program}
                    </p>
                    <p className="atitle">
                        작업기간 : {this.props.length}
                    </p>
                    <p className="adescp">
                        {this.props.adesc}
                    </p>
                </div>
            </div>
        );
    }
}

function Art() {
        return (
            <div>
                <div className="ArtContent">
                    <p className="DefaultText" />
                    <p className="ATitle">
                        2D Design
                    </p>
                    <ul>
                        
                        <li>
                            <ArtBoxDefault img={lscardnews}
                            title={"라이프 세이브스 카드뉴스"}
                            program={"포토샵"}
                            length={"각 작품당 1~3일"}
                            adesc={"정리를 아직 못하였어요"}
                            url={"https://www.instagram.com/life_saves._"}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={circles}
                            title={"CIRCLES"}
                            program={"포토샵, 애프터 이펙트"}
                            length={"2일"}
                            adesc={"우주의 모든 것은 원으로 시작되어 있음을 표현하였습니다."}
                            modalImg={circles}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={fgpolygonart}
                            title={"폴 가이즈 폴리곤 아트"}
                            program={"일러스트레이터"}
                            length={"2주"}
                            adesc={"아케이드 게임 Fall Guys: Ultimate Knockout 의 캐릭터가 바나나 의상을 입고 떨어지거나 얇은 다리를 건너는 등, 게임 제목에 맞게 아슬아슬한 연출을 표현하였습니다."}
                            modalImg={fgpolygonart}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={tretion}
                            title={"음악 스트리밍 플랫폼 - Tretion"}
                            program={"일러스트레이터"}
                            length={"3주"}
                            adesc={"음계의 최고 음역인 Treble과 차세대 Generation가 결합한 가상 음악 스트리밍 플랫폼 입니다."}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={testimage}
                            title={"이상한 웃음"}
                            program={"그림판"}
                            length={"3초"}
                            adesc={"그냥 테스트 이미지 그냥 테스트 이미지 그냥 테스트 이미지 그냥 테스트 이미지 그냥 테스트 이미지"}
                            modalImg={testimage}
                            />
                        </li>
                    </ul>
                    

                    <p className="ATitle">
                        3D Design
                    </p>
                    <ul>
                    <li>
                            <ArtBoxDefault img={smm}
                            title={"슈퍼마리오메이커"}
                            program={"3ds Max"}
                            length={"2일"}
                            adesc={'어릴 적 많이 즐겨 했었던 닌텐도 사의 게임을 떠올리며 작업한 시리즈 작품중 첫번째 작품입니다. 마리오 라는 친숙한 게임에서 게이머가 직접 레벨을 제작하고 창의력을 폼낼수 있다는 점에서 신박함을 얻어 작업하였습니다.'}
                            modalImg={smm}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={kirby}
                            title={"별의 커비"}
                            program={"3ds Max, 포토샵"}
                            length={"2일"}
                            adesc={"어릴 적 많이 즐겨 했었던 닌텐도 사의 게임을 떠올리며 작업한 시리즈 작품중 두번째 작품입니다. 먹을 것을 좋아하는 커비와 먹을 것을 지키려는 적들을 커비 레벨의 대표적인 초원을 배경으로 표현하였습니다."}
                            modalImg={kirby}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={hufo}
                            title={"열일하는 UFO"}
                            program={"3ds Max, 포토샵"}
                            length={"1일"}
                            adesc={"어릴 적 많이 즐겨 했었던 닌텐도 사의 게임을 떠올리며 작업한 시리즈 작품중 마지막 작품입니다. 외지에서 한푼도 없이 살아가는 UFO가 아르바이트를 하면서 돈을 벌며 살아가는 컨셉의 게임입니다, 게임을 하면서 나 또한 어려울 수록 힘내자는 생각을 가지고 작품을 제작하였습니다."}
                            modalImg={hufo}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={whyrano}
                            title={"whyrano"}
                            program={"3ds Max"}
                            length={"1일"}
                            modalImg={whyrano}
                            />
                        </li>
                        <li>
                            <ArtBoxDefault img={distanceofscent}
                            title={"향기의 거리"}
                            program={"3ds Max"}
                            length={"1일"}
                            adesc={"향기는 언젠가 사라지지만 멀리 퍼져 사람들에게 그 형태를 기억하게 합니다. 독창적이고 어디까지 퍼질지 모르는 향기처럼 사람들에게 기억되고 싶습니다."}
                            modalImg={distanceofscent}
                            />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ArtBoxWide img={missing}
                            title={"01. Missing"}
                            program={"3ds Max, 포토샵"}
                            length={"2일"}
                            adesc={"음악을 듣고 떠오르는 장면을 만든 시리즈 첫번째 작품 입니다. 우리는 자신을 모른채 살아가고 있다, 우리는 자신을 찾으려 떠나고 있다."}
                            modalImg={missing}
                            />
                        </li>
                        <li>
                            <ArtBoxWide img={pierrot}
                            title={"02. Pierrot"}
                            program={"3ds Max, 포토샵"}
                            length={"4일"}
                            adesc={"음악을 듣고 떠오르는 장면을 만든 시리즈 두번째 작품 입니다. 나는 삐에로, 어떤 숲속에서 펼쳐지는 환상의 무대, 위험할지도 모르지만 열심히 해보려한다."}
                            modalImg={pierrot}
                            />
                        </li>
                        <li>
                            <ArtBoxWide img={tripofmemory}
                            title={"trip of memory"}
                            program={"3ds Max"}
                            length={"2일"}
                            adesc={"고등학생의 마지막 해를 맞아 2019년부터 2021년까지의 작품들의 대부분을 모아, 이제 마지막 종점을 찍는다는 의미로 제작하였습니다. '추억의 기차' 를 타고 작품을 제작하면서의 많은 추억들을 되돌아보고 이제 마지막을 맞이 해야합니다."}
                            modalImg={tripofmemory}
                            />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ArtBoxDefault img={wasteeffect}
                            title={"낭비 효과"}
                            program={"3ds Max, 포토샵"}
                            length={"3일"}
                            adesc={"제 27회 커뮤니케이션국제디자인 공모전 입선작"}
                            />
                        </li>
                    </ul>

                    <p className="ATitle">
                        Other
                    </p>
                    <ul>
                        <li>
                            <ArtBoxYoutube
                            title="깃발 - 유치환"
                            program="언리얼 엔진 4, 애프터 이펙트"
                            length="3일"
                            adesc="2020 서울영상고등학교 시 영상 공모대회 장려상 수상작."
                            url="UXksIXIJdfY"
                            />
                        </li>
                        <li>
                            <ArtBoxYoutube
                            title="와이 아트? 북 트레일러"
                            program="애프터 이펙트"
                            length="4일"
                            adesc="도서출판 밝은세상 '와이 아트?' 북트레일러 제작"
                            url="ZmddxkELzEE"
                            />
                        </li>
                        <li>
                            <ArtBoxYoutube
                            title="마음을 읽는 아이 오로르 북 트레일러"
                            program="애프터 이펙트"
                            length="3일"
                            adesc="도서출판 밝은세상 '마음을 읽는 아이 오로르' 북트레일러 제작"
                            url="uALk95g4qLQ"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        )
}



export default Art;