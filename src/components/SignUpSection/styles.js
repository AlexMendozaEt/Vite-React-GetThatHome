import styled from "@emotion/styled";
import { fonts, typography } from "../../styles";

export const StyledSection = styled.section`
  padding: 4rem 0;
  position: relative;
  height: 80vh;
  display: grid;
  place-items: center;

  ::after {
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    height: 50%;
    content: "";
    background-color: ${(props) => props.theme.colors.background.lighter};
  }

  ::before {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 50%;
    content: "";
    background-color: ${(props) => props.theme.colors.primary.lighter};
  }
`;

export const StyledH3 = styled.h3`
  text-align: center;
  font-family: ${fonts.primary};
  ${typography.head.sm}
`;

export const StyledH4 = styled.h4`
  text-align: center;
  font-family: ${fonts.primary};
  ${typography.head.xxl}
`;

export const OptionsMainBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

export const OptionsBox = styled.div`
  width: 280px;
  height: 274px;
  border-radius: 8px;
  padding: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  cursor: pointer;

  .img {
    width: 240px;
    height: 180px;
  }
`;

export const StyledP1 = styled.p`
  text-align: center;
  font-family: ${fonts.primary};
  ${typography.text.xl}
`;

export const StyledP2 = styled.p`
  text-align: center;
  font-family: ${fonts.primary};
  ${typography.text.sm}
`;

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
`;

export const InputBox = styled.div`
  width: 388px;
  height: 468px;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
`;
