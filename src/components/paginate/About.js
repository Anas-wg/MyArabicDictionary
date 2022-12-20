import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
      <h1>About</h1>
      <p>이미지를 클릭하면 이동합니다.</p>
      <ImgBox>
        <div className='github'>
          <p>코드 확인</p>
          <a href='https://github.com/Anas-wg/MyArabicDictionary' target='blank'>
            <img src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU' alt='github images' />
          </a>
        </div>
        <div className='box'>
          <p>기획의도 및 개발 과정 확인</p>
          <a href='https://blog.naver.com/false90/222917690190'target='blank'>
            <img src='https://downloadr2.apkmirror.com/wp-content/uploads/2019/08/5d522ce24df00.png' alt='naver blog' />
          </a>
        </div>
        <div className='box'>
          <p>디자인 확인</p>
          <a href='https://www.figma.com/community/file/1167458727684417937'target='blank'>
            <img src='https://yt3.googleusercontent.com/ytc/AMLnZu9WFZ1kTBuy0mo3cVlo17QFXNT_55y2W_QMoRWLFw=s900-c-k-c0x00ffffff-no-rj' alt='figma'/>
          </a>
        </div>
      </ImgBox>
    </Container>
  )
}

const Container = styled.div`
  margin : 0 20px;
  p{
    color: gray;
  }
`

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    text-align: center;
  }
  img{
    width: 200px;
    heigth: 200px;
    margin: 0 20px;
  }
`

export default About
