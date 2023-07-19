import styled from "@emotion/styled";

export const StyledFooter = styled.div`
  padding: 1rem 1.9375rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text.highContrast};
  font-size: 0.875rem;
  line-height: 1.125rem; /* 128.571% */
  letter-spacing: 0.00625rem;
  padding: 1rem 0;

  .title {
    display: flex;
    justify-content: space-between;
  }

  .source-code {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .source-code__info {
    display: flex;
    gap: 0.35rem;
  }
`;
