import React from "react";
import { Button } from "../Button";
import {
  BtnWrap,
  Col1,
  Col2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElement";

const Info = ({ data }) => {
  return (
    <>
      {data.map((info) => {
        const {
          id,
          lightBg,
          lightText,
          topLine,
          headLine,
          description,
          buttonLabel,
          imgStart,
          img,
          alt,
          dark,
          primary,
          darkText,
        } = info;
        return (
          <InfoContainer key={id} lightBg={lightBg} id="discover">
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Col1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <Button
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  </TextWrapper>
                </Col1>
                <Col2>
                  <ImgWrap>
                    <Img src={img.default} alt={alt} />
                  </ImgWrap>
                </Col2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        );
      })}
    </>
  );
};

export default Info;
