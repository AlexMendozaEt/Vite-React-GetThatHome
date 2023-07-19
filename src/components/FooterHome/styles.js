import styled from "@emotion/styled";

export const StyledFooter = styled.div`
  padding: 1rem 1.9375rem;
  color: ${(props) => props.theme.colors.text.highContrast};
  font-size: 0.875rem;
  line-height: 1.125rem; /* 128.571% */
  letter-spacing: 0.00625rem;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .title {
    padding-bottom: 0.5rem;
    text-align: left;
  }

  .github {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .github__link {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    padding-right: 0.5rem;
    padding-bottom: 0.25rem;
  }
`;
