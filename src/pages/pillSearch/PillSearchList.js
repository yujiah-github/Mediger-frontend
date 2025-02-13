import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import notFoundImg from '../../images/notFoundImg.png';

const PillListWrapper = styled.div`
  background-color: #ecf2f0;
  width: 75vw;
  padding: 2.2vh 5vw;
  margin: 0.5vh 0;
  border-radius: 2vw;

  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
  }

  .PillBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pillImage {
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;
  }

  img {
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;
  }

  .pillList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 49vw;
    /* background-color: aquamarine; */
  }

  .pillName {
    width: 49vw;
    font-size: 4vw;
    color: #3c7466;
    font-weight: bolder;
    margin-bottom: 1vw;
  }

  .pillCompany,
  .pillCode {
    font-size: 3vw;
    color: #3c7466;
  }

  .scrap {
    font-size: 5vw;
    color: #97a9a4;
    display: flex;
    align-items: center;
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

function PillSearchList({ itemImage, itemName, entpName, itemSeq, log }) {
  return (
    <PillListWrapper>
      <StyledLink to={`/pillSearch/detail/${itemSeq}`}>
        <div className="PillBox">
          <div className="pillImage">
            {itemImage == 'blank' ? (
              <img src={notFoundImg}></img>
            ) : (
              <img src={itemImage}></img>
            )}
          </div>
          <div className="pillList">
            <div className="pillTitle">
              <p className="pillName">{itemName}</p>
            </div>
            <div className="pillContent">
              <p className="pillCompany">업체명 : {entpName}</p>
              <p className="pillCode">품목 기준 코드 : {itemSeq}</p>
            </div>
          </div>
        </div>
      </StyledLink>
      <div className="scrap">
        {log ? <AiFillStar /> : <AiOutlineStar />}
        {/* <AiOutlineStar /> */}
      </div>
    </PillListWrapper>
  );
}

PillSearchList.ProtoTypes = {
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  entpName: PropTypes.string.isRequired,
  itemSeq: PropTypes.string.isRequired,
};

export default PillSearchList;
