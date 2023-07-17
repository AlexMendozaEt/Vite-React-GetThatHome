import styled from "@emotion/styled";
import { fonts, typography } from "../../styles";

export const StyledButton = styled.div`
  margin: auto;
  margin-top: 20px;

  position: relative;
  width: 300px;
  height: ${(props) => (props.userRol == 1 ? "360px" : "400px")};
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.white.standard};
  font-weight: 400px;

  .data-box {
    cursor: pointer;
    padding-bottom: 16px;
  }

  .img {
    background-image: url(${(props) => props.bgUrl});
    width: 300px;
    height: 200px;
    border-radius: 8px 8px 0 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .values {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    padding-inline: 16px;
  }

  .price-data {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ${fonts.primary};
    ${typography.head.sm}
  }

  .property-data {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ${fonts.primary};
    ${typography.head.sm}
  }

  .adress {
    padding-inline: 16px;
    padding-bottom: 12px;
    font-family: ${fonts.primary};
    ${typography.text.xl}
  }
  .icons {
    display: flex;
    justify-content: space-around;
    font-family: ${fonts.primary};
    ${typography.text.xl}
  }

  .icons div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .card-header {
    position: absolute;
    display: grid;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 28px;
    border-radius: 0 8px 0 0;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  .icon-header {
    width: 20px;
    height: auto;
    margin-left: 8px;
  }

  .operation-data {
    display: grid;
    grid-template-columns: 2fr 8fr;
    align-items: center;
    gap: 4px;
    width: auto;
    font-family: ${fonts.primary};
    ${typography.text.lg}
    color: ${(props) => props.theme.colors.white.saturated};
  }

  .card-fotter {
    position: absolute;
    width: 300px;
    height: ${(props) => (props.userRol === 1 ? "7px" : "47px")};
    border-radius: 0 0 8px 8px;
    bottom: 0px;
    background-color: ${(props) => props.theme.colors.primary.standard};
    color: ${(props) => props.theme.colors.white.saturated};
    display: grid;
    align-items: center;
  }

  .fotter-main-box {
    display: flex;
    justify-content: space-evenly;
  }
  .fotter-icons {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: ${fonts.primary};
    ${typography.head.xs}
    font-weight: 500px;
  }
`;
