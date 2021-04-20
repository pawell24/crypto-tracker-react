import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = ({
  id,
  image,
  name,
  symbol,
  current_price,
  market_cap,
  price_change_percentage_24h,
  addToPortfolio = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToPortfolio = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <StyledListItem>
        <StyledImageItem src={image} alt={name} />
        <StyledText>{name}</StyledText>
        <StyledText>{symbol.toUpperCase()}</StyledText>
        <StyledText>${current_price}</StyledText>
        <StyledTextPrice price={price_change_percentage_24h}>
          {price_change_percentage_24h.toFixed(2)}%
        </StyledTextPrice>
        <StyledButton onClick={handleAddToPortfolio} data-name={id}>
          Add to portfolio
        </StyledButton>
        <StyledLink to={`/cryptocurrency/${id}`}>About</StyledLink>
      </StyledListItem>
      {isOpen && <StyledDropdown></StyledDropdown>}
    </>
  );
};

const StyledListItem = styled.li`
  display: flex;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7811f7;
  margin: 20px;
  border-radius: 10px;
  @media (max-width: 1920px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    margin: 10px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    margin: 8px;
  }
`;

const StyledImageItem = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 450px) {
    width: 15px;
    height: 15px;
  }
`;

const StyledText = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
  width: 15%;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 400px) {
    font-size: 8px;
  }
`;
const StyledTextPrice = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
  width: 15%;
  text-align: center;
  color: ${({ price }) => (price > 0 ? "#00ff00" : "red")};
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 390px) {
    font-size: 6px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
  }
  @media (max-width: 350px) {
    font-size: 6px;
  }
`;

const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: none;
  border: 2px solid #7811f7;
  background-color: #7811f7;
  color: white;
  cursor: pointer;
  outline: none;
`;

const StyledDropdown = styled.div`
  @keyframes growing {
    0% {
      height: 0;
    }
    100% {
      height: 40px;
    }
  }
  animation: growing 0.5s forwards;
`;

export default React.memo(ListItem);
