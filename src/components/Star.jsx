import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const Star = ({ starr, review }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {starr >= index + 1 ? (
          <FaStar className="icon" />
        ) : starr >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <p>({review} customer reviews)</p>
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.icon-style{
    display:flex;
    gap:0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon{
        font-size:2rem;
        color: yellow;
    }
    .empty-icon {
        font-size: 2.6rem;
      }
      p{
        margin:0;
        padding-left: 1.2rem;
      }
}

`

export default Star;
