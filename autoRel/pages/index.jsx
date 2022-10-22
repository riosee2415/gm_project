import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import QuickMenu from "../components/QuickMenu";
import Fade from "react-reveal/Fade";

const datum = [
  {
    name: "INTRO",
    target: "/intro",
  },
  {
    name: "CONTACT",
    target: "/contact",
  },
  {
    name: "TEAM",
    target: "/team",
  },
  {
    name: "PROJECT",
    target: "/project",
  },
];

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .react-reveal {
    width: 100%;
    padding: 0px !important;
  }
`;

const ImageSection = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: 400px;

  object-fit: cover;
  box-shadow: 3px 3px 7px #999;
  transition: 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;

const QuickSection = styled.section`
  width: 100%;
  padding: 20px 0px;
`;

const App = () => {
  return (
    <Wrapper>
      <Fade>
        <ImageSection>
          <Image
            src="https://cdn.aitimes.com/news/photo/202204/143777_149131_434.jpg"
            alt="메인이미지1"
          />
          <Image
            src="https://img.hankyung.com/photo/202104/01.26068926.1.jpg"
            alt="메인이미지2"
          />
        </ImageSection>
      </Fade>

      <Fade bottom>
        <QuickSection>
          <QuickMenu datum={datum} />
        </QuickSection>
      </Fade>
    </Wrapper>
  );
};

export default App;
