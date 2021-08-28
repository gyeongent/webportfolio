import React, { Component } from "react";
import "./App.css";
import {
  WelcomeBox,
  IDDBox,
  IdBox,
  ContactBox,
  KeywordBox,
  B2T,
  Footer,
} from "./components/Element/Page";
import Art from "./components/Element/Art";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

class App extends Component {
  render() {
    return (
      <div className="App" ondragstart="return true">
        <Footer />
        <SmoothScroll>
          <WelcomeBox
            title="환영합니다"
            warning="현재 본 웹 사이트는 PC 환경에서 정상작동 합니다."
          />
          <IDDBox
            title1="저는"
            desc1="'GYEONG'이라는 닉네임은 공경함을 뜻하는 '경(敬)'의 이름을 따서 지었습니다."
            desc2="로고는 'GYEONG'의 앞뒤 글자인 두 개의 G를 형상화 하여 제작했으며,"
            desc3="로고의 자세한 의미는 아래 섹션에서 확인하실 수 있습니다."
            title2="디자인에 공감을 더하다."
            desc4="저는 의미를 더하고 공감대를 형성하는 작품을 제작하는 아티스트 입니다."
            desc5="또한, 2D 및 3D 디자인과 여러 분야들을 다루는 디자이너 입니다."
          />
          <IdBox />
          <KeywordBox
            title="주요 키워드"
            Kdesc="작품을 제작하면서 제가 추구하는 방향이나, 생각 등을 키워드로 정리하였습니다."
            Kdesc2="붉은 키워드는 프로그램이나 키워드의 큰 묶음으로 표시하였습니다."
          />
          <Art />
          <ContactBox title="Contact here" />
        </SmoothScroll>
        <B2T />
      </div>
    );
  }
}

export default App;
