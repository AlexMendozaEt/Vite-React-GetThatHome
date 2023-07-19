import PropTypes from "prop-types";
import { RiGithubFill, RiLinkedinBoxLine } from "react-icons/ri";

import { MemberCardContainer } from "./styles";

export default function MemberCard({ member }) {
  const { avatar, name, github_link, linkedin_link } = member;

  return (
    <MemberCardContainer>
      <img src={avatar} alt={`Image of ${name}`} className="avatar" />
      <p className="name">{name}</p>
      <div className="icons-container">
        <a href={github_link} target="_blank" rel="noreferrer">
          <RiGithubFill size={"1.5rem"} />
        </a>
        <a href={linkedin_link} target="_blank" rel="noreferrer">
          <RiLinkedinBoxLine size={"1.5rem"} />
        </a>
      </div>
    </MemberCardContainer>
  );
}

MemberCard.propTypes = {
  member: PropTypes.object,
};
