import styled from "@emotion/styled";
import { fonts, typography } from "../../styles";

export const StyledSection = styled.section`
  padding: 4rem 0;
`;

export const StyledInput = styled.input`
  all: unset;
  display: none;
`;

export const StyledLabel = styled.label`
  height: 2rem;
  padding: 0px 4px 0px 4px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const BoxOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${typography.text.sm}
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.lighter};
  .checkedOption {
    border-bottom: 2px solid ${(props) => props.theme.colors.pink[400]};
    color: ${(props) => props.theme.colors.text.highContrast};
  }
`;

export const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  ${typography.head.xs}
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 3rem;
`;

export const ContainerFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify: space-between;
  max-width: 100%;
  // height: 40px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: auto;
  // background: white;
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify: space-between;
  max-width: 518px;
  min-height: 40px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const ContainerLists = styled.div`
  display: block:
  // background: gray;
  width: 100%px;
  margin: auto;
  padding: 2rem;
  gap: 1rem;
`;
