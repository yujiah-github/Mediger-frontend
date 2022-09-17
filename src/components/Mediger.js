import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const MedigerBox = styled.div`
  width: 37vw;
  height: 8vh;
  margin: 1vw;
  padding: 1vw;
  border-radius: 2vw;
  background-color: #ecf2f0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .MedigerImg {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    background-color: white;
  }

  .MedigerContent {
    width: 20vw;
    height: 5vh;
    // background-color: blue;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Text {
    margin: 0;
  }

  .MedigerName {
    font-size: 3vw;
    font-weight: bolder;
    margin-bottom: 0.3vw;
    color: #3c7466;
  }

  .MedigerWay {
    font-size: 1vw;
    color: #42514d;
  }
`;

const StyledLink = styled(Link)`
  color: #3c7466;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function Mediger() {
  return (
    <StyledLink to={`/pillSearch/detail`}>
      <MedigerBox>
        <div class="MedigerImg"></div>
        <div class="MedigerContent">
          <p class="MedigerName Text">약 이름</p>
          <p class="MedigerWay Text">복용 시간, 방법</p>
        </div>
      </MedigerBox>
    </StyledLink>
  );
}

export default Mediger;
