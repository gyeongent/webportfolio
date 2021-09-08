import React from "react";
import Youtube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import pierrot_thumb from "images/Arts/pierrot_thumb.jpg";
import tripofmemory_thumb from "images/Arts/trip_of_memory_thumb.jpg";
import missing_thumb from "images/Arts/missing_thumb.jpg";
import kirby_thumb from "images/Arts/kirby_thumb.jpg";
import hufo_thumb from "images/Arts/part_time_ufo_thumb.jpg";
import distanceofscent_thumb from "images/Arts/distance_of_scent_thumb.jpg";
import typo from "images/Arts/typo_thumb.png";
import ex_facebook from "images/Arts/EX_Facebook.png";
import color_palette_thumb from "images/Arts/color_palette_thumb.png";

import distanceofscent from "images/Arts/distance_of_scent.png";
import tripofmemory from "images/Arts/trip_of_memory.png";
import whyrano from "images/Arts/whyrano_front.jpg";
import pierrot from "images/Arts/pierrot_ori.png";
import missing from "images/Arts/missing.png";
import kirby from "images/Arts/kirby.png";
import smm from "images/Arts/super_mario_maker.jpg";
import hufo from "images/Arts/part_time_ufo.png";
import lscardnews from "images/Arts/life_saves_card_news.png";
import circles from "images/Arts/circles.jpg";
import wasteeffect from "images/Arts/waste_effect.jpg";
import fgpolygonart from "images/Arts/fallguys_polygonart.png";
import tretion from "images/Arts/tretion_1000.png";
import tretion_mockup from "images/Arts/tretion_mockup.png";
import detectivepipe from "images/Arts/detective_pipe.jpg";
import ex_mockup from "images/Arts/EX_Mockup.png";
import color_palette from "images/Arts/color_palette.png";

import "styles/Art.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 7, 1),
  },
}));

export function ArtBoxWide(a) {
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
        <img
          src={a.img}
          width="450px"
          height="253px;"
          alt="작품 이미지 불러오기 실패"
        />
      </div>
      <div className="Artinfo">
        <p className="atitle">제목 : {a.title}</p>
        <p className="atitle">프로그램 : {a.program}</p>
        <p className="atitle">작업기간 : {a.length}</p>
        <p className="adescp">{a.adesc}</p>
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
            <img
              src={a.modalImg}
              width="100%"
              alt="모달 이미지 불러오기 실패"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export function ArtBoxDefault(a) {
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
        <img src={a.img} height="100%;" alt="작품 이미지 불러오기 실패" />
      </div>
      <div className="Artinfo">
        <p className="atitle">제목 : {a.title}</p>
        <p className="atitle">프로그램 : {a.program}</p>
        <p className="atitle">작업기간 : {a.length}</p>
        <p className="adescp">{a.adesc}</p>
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
            <img
              src={a.modalImg}
              width="100%"
              alt="모달 이미지 불러오기 실패"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export function ArtBoxDefaulturl(a) {
  return (
    <div className="ArtBox">
      <div className="ModalClickS">
        <a href={a.url} target="_blank" rel="noreferrer">
          <img src={a.img} height="100%;" alt="작품 이미지 불러오기 실패" />
        </a>
      </div>
      <div className="Artinfo">
        <p className="atitle">제목 : {a.title}</p>
        <p className="atitle">프로그램 : {a.program}</p>
        <p className="atitle">작업기간 : {a.length}</p>
        <p className="adescp">{a.adesc}</p>
      </div>
    </div>
  );
}

const ArtBoxYoutube = (a) => {
  return (
    <div className="ArtVideo">
      <Youtube
        className="Youtube_api"
        videoId={a.url}
        alt="Youtube API 불러오기 실패"
      />
      <div>
        <p className="atitle">제목 : {a.title}</p>
        <p className="atitle">프로그램 : {a.program}</p>
        <p className="atitle">작업기간 : {a.length}</p>
        <p className="adescp">{a.adesc}</p>
      </div>
    </div>
  );
};

function Art() {
  return (
    <div>
      <div className="ArtContent">
        <p className="DefaultText" />
        <p className="ATitle">2D Design</p>
        <ul>
          <li>
            <ArtBoxDefaulturl
              img={lscardnews}
              title={"라이프 세이브스 카드뉴스"}
              program={"포토샵"}
              length={"각 작품당 1~3일"}
              adesc={
                "라이프 세이브스는 바쁜 현대인의 삶 속에서, 코로나로 인해 혼란한 삶 속에서 잊혀져 가는 목소리를 대변하기 위해 결성된 “후원 목적 프로젝트 팀”입니다. 그들의 이야기를 담은 카드뉴스와 제품을 제작하여 세상에 알리고, 모은 금액을 기부하여 많은 사람들이 간접적으로나마 도움의 손길을 내밀 수 있도록 기획하였습니다."
              }
              url={"https://www.instagram.com/life_saves._"}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={circles}
              title={"CIRCLES"}
              program={"포토샵, 애프터 이펙트"}
              length={"2일"}
              adesc={"우주의 모든 것은 원으로 시작되어 있음을 표현하였습니다."}
              modalImg={circles}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={fgpolygonart}
              title={"폴 가이즈 폴리곤 아트"}
              program={"일러스트레이터"}
              length={"2주"}
              adesc={
                "아케이드 게임 Fall Guys: Ultimate Knockout 의 캐릭터가 바나나 의상을 입고 떨어지거나 얇은 다리를 건너는 등, 게임 제목에 맞게 아슬아슬한 연출을 표현하였습니다."
              }
              modalImg={fgpolygonart}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={tretion}
              title={"음악 스트리밍 플랫폼 - Tretion"}
              program={"일러스트레이터"}
              length={"3주"}
              adesc={
                "음계의 최고 음역인 Treble과 차세대 Generation가 결합한 가상 음악 스트리밍 플랫폼 입니다. 실용적이고 간단한 디자인을 주제로 로고 및 데스크탑, 모바일의 앱 UI/UX를 제작하였습니다."
              }
              modalImg={tretion_mockup}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={typo}
              title={"레터링 디자인"}
              program={"일러스트레이터"}
              length={"각 레터링당 1일"}
              adesc={
                "세븐틴(SEVENTEEN)의 홈런이라는 곡을 듣고 야구장과 야구 배트에 영감을 받아 속도감을 주제로 타이포를 제작하였습니다. 또한 End of the World의 Fangs라는 곡을 듣고 어금니라는 주제로 날카로운 디자인으로 타이포를 제작하였습니다."
              }
              modalImg={typo}
            />
          </li>
        </ul>
        <ul>
          <li>
            <ArtBoxWide
              img={ex_facebook}
              title={"익스트루드 채널아트"}
              program={"3ds Max, 포토샵"}
              length={"3일"}
              adesc={
                "2020년 서울영상고등학교의 3D 및 2D 동아리인 '익스트루드'의 프로필과 채널아트를 제작하였습니다. 익스트루드를 대표하는 캐릭터인 '에덱스'를 주제로 잡아 선을 따, 친근함을 돋보이게 표현하였고 붉은 자주색과 주황색을 메인 컬러로 선정해 '활발함'을 표현하였습니다."
              }
              modalImg={ex_mockup}
            />
          </li>
          <li>
            <ArtBoxWide
              img={color_palette_thumb}
              title={"컬러 팔레트"}
              program={"포토샵"}
              length={"1주"}
              adesc={
                "여름의 시원함과 활기참을 형광빛이 도는 초록색으로 표현하여 느낌을 부각시켰으며, 활기찬 녹색(Activity Green)이라는 네이밍을 하였습니다."
              }
              modalImg={color_palette}
            />
          </li>
        </ul>

        <p className="ATitle">3D Design</p>
        <ul>
          <li>
            <ArtBoxDefault
              img={smm}
              title={"슈퍼마리오메이커"}
              program={"3ds Max"}
              length={"2일"}
              adesc={
                "어릴 적 많이 즐겨 했었던 닌텐도 사의 게임을 떠올리며 작업한 시리즈 작품중 첫번째 작품입니다. 마리오 라는 친숙한 게임에서 게이머가 직접 레벨을 제작하고 창의력을 폼낼수 있다는 점에서 신박함을 얻어 작업하였습니다."
              }
              modalImg={smm}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={kirby_thumb}
              title={"별의 커비"}
              program={"3ds Max, 포토샵"}
              length={"2일"}
              adesc={
                "어릴 적 많이 즐겨 했었던 닌텐도 사의 게임을 떠올리며 작업한 시리즈 작품중 두번째 작품입니다. 먹을 것을 좋아하는 커비와 먹을 것을 지키려는 적들을 커비 레벨의 대표적인 초원을 배경으로 표현하였습니다."
              }
              modalImg={kirby}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={hufo_thumb}
              title={"열일하는 UFO"}
              program={"3ds Max, 포토샵"}
              length={"1일"}
              adesc={
                "어릴 적 많이 즐겨 했었던 닌텐도 사의 게임을 떠올리며 작업한 시리즈 작품중 마지막 작품입니다. 외지에서 한푼도 없이 살아가는 UFO가 아르바이트를 하면서 돈을 벌며 살아가는 컨셉의 게임입니다, 게임을 하면서 나 또한 어려울 수록 힘내자는 생각을 가지고 작품을 제작하였습니다."
              }
              modalImg={hufo}
            />
          </li>
          <li>
            <ArtBoxDefault
              img={whyrano}
              title={"whyrano"}
              program={"3ds Max"}
              length={"1일"}
              modalImg={whyrano}
              adesc={
                "악당 토끼와 악당 북극곰의 천방지축 와이라노 (Original by Hae-Min Jung / 3D Remaked by Gyeong-Min Lee)"
              }
            />
          </li>
          <li>
            <ArtBoxDefault
              img={distanceofscent_thumb}
              title={"향기의 거리"}
              program={"3ds Max"}
              length={"1일"}
              adesc={
                "향기는 언젠가 사라지지만 멀리 퍼져 사람들에게 그 형태를 기억하게 합니다. 독창적이고 어디까지 퍼질지 모르는 향기처럼 사람들에게 기억되고 싶습니다."
              }
              modalImg={distanceofscent}
            />
          </li>
        </ul>
        <ul>
          <li>
            <ArtBoxDefault
              img={wasteeffect}
              title={"낭비 효과"}
              program={"3ds Max, 포토샵"}
              length={"3일"}
              adesc={
                "제 27회 커뮤니케이션국제디자인 공모전 입선작 (정해민, 이경민)"
              }
              modalImg={wasteeffect}
            />
          </li>
          <li>
            <ArtBoxWide
              img={missing_thumb}
              title={"01. Missing"}
              program={"3ds Max, 포토샵"}
              length={"2일"}
              adesc={
                "음악을 듣고 떠오르는 장면을 만든 시리즈 첫번째 작품 입니다. 우리는 자신을 모른채 살아가고 있다, 우리는 자신을 찾으려 떠나고 있다."
              }
              modalImg={missing}
            />
          </li>
          <li>
            <ArtBoxWide
              img={pierrot_thumb}
              title={"02. Pierrot"}
              program={"3ds Max, 포토샵"}
              length={"4일"}
              adesc={
                "음악을 듣고 떠오르는 장면을 만든 시리즈 두번째 작품 입니다. 나는 삐에로, 어떤 숲속에서 펼쳐지는 환상의 무대, 위험할지도 모르지만 열심히 해보려한다 / 미니어처 컨셉으로 제작한 3D 그래픽 작품, 서커스의 아기자기함과 환상의 느낌을 미니어처의 느낌과 자주색 계열의 조명으로 표현하였습니다."
              }
              modalImg={pierrot}
            />
          </li>
        </ul>
        <ul>
          <li>
            <ArtBoxWide
              img={tripofmemory_thumb}
              title={"trip of memory"}
              program={"3ds Max"}
              length={"2일"}
              adesc={
                "고등학생의 마지막 해를 맞아 2019년부터 2021년까지의 작품들의 대부분을 모아, 이제 마지막 종점을 찍는다는 의미로 제작하였습니다. '추억의 기차' 를 타고 작품을 제작하면서의 많은 추억들을 되돌아보고 이제 마지막을 맞이 해야합니다."
              }
              modalImg={tripofmemory}
            />
          </li>
          <li>
            <ArtBoxWide
              img={detectivepipe}
              title={"디테피(Detective Pipe)"}
              program={"3ds Max, 포토샵, Substacne Painter"}
              length={"2일"}
              adesc={
                "디테피는 탐정의 상징인 파이프 담배와 탐정 모자, 돋보기를 참고하여 만든 캐릭터입니다. 생각에 잠기거나 무언가를 알아차렸을 때에는 담배 연기가 뿜어져 나오고 자세히 살펴볼 무언가가 있을 때에는 모자 위에 달려져 있는 돋보기를 이용하여 수사를 합니다."
              }
              modalImg={detectivepipe}
            />
          </li>
        </ul>

        <p className="ATitle">Other</p>
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
        <ul>
          <li>
            <ArtBoxYoutube
              title="대한민국(大韓民國)"
              program="포토샵, 애프터 이펙트"
              length="2주"
              adesc="2020 불독국제영화제 청소년부 장려상 수상작 (이승미, 오상민, 이경민)"
              url="kcWdlqLfRSY"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Art;
