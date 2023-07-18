import styled from "@emotion/styled";

export const MemberCardContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;

  .avatar {
    max-width: 11.25rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${(props) => props.theme.colors.background.dark};
  }

  .name {
    font-size: 1.5rem;
    text-align: center;
  }

  .icons-container {
    width: 11.25rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
