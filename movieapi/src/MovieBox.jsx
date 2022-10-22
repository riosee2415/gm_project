import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 360px;
  min-width: 360px;
  height: 190px;
  background-color: #ececec;
  margin: 20px;

  border-radius: 7px;
  box-shadow: 3px 2px 10px #d7d7d7;

  padding: 5px;

  display: flex;
  flex-direction: row;
`;

const PosterBox = styled.div`
  width: 120px;
  height: 100%;
`;

const ContentBox = styled.div`
  width: calc(100% - 120px);
  height: 100%;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  margin-top: -20px;
  margin-left: -20px;
  box-shadow: 3px 0px 10px #d7d7d7;

  object-fit: cover;
`;

const Title = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 700;
`;

const Score = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 20px;
`;

const Overview = styled.div`
  font-size: 14px;
  color: #3e3e3e;
  width: 100%;

  word-break: break-all;
`;

// https://image.tmdb.org/t/p/w500
const MovieBox = ({ title, score, overview, poster }) => {
  return (
    <Box>
      <PosterBox>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster}`} />
      </PosterBox>
      <ContentBox>
        <Title>{title}</Title>
        <Score>⭐️ {score}</Score>
        <Overview>
          {overview.length > 110
            ? overview.substring(0, 110) + "..."
            : overview}
        </Overview>
      </ContentBox>
    </Box>
  );
};

export default MovieBox;
