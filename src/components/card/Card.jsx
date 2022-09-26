/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Card = ({ image }) => {
  const cardStyle = css`
    height: 30rem;
    width: 20rem;
    margin: 2rem;
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.75rem #a6a6a6;
  `;

  const TopImage = styled.img`
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 0.75rem 0.75rem 0 0;
    border-bottom: 1px solid grey;
  `;

  const Title = styled.h1`
    text-align: center;
    margin-block: 1rem;
  `;

    const cardContentStyle = css`
        padding-inline: 1rem;
        color: #777777;
    `;

  return (
    <div css={cardStyle}>
      <TopImage src={image} alt="" />
      <Title>My Card</Title>
      <div css={cardContentStyle}>
        <h2>secondary text</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Card;
