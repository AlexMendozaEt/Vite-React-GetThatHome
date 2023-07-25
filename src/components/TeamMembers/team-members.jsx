import kevin from "../../assets/images/kevin.webp";
import daniel from "../../assets/images/daniel.webp";
import alex from "../../assets/images/alex.webp";
import gabriela from "../../assets/images/gabriela.webp";
import gerardo from "../../assets/images/gerardo.webp";
import MemberCard from "../MemberCard";
import { StyledTeamContainer, StyledH3, StyledContainer } from "./styles";
import Container from "../../layout/Container";

const team = [
  {
    avatar: kevin,
    name: "Kevin Robles",
    github_link: "https://github.com/kevinronu",
    linkedin_link: "https://www.linkedin.com/in/kevinronu/",
  },
  {
    avatar: daniel,
    name: "Daniel Martinez",
    github_link: "https://github.com/DanielMaHe",
    linkedin_link: "https://www.linkedin.com/in/damarez/",
  },
  {
    avatar: alex,
    name: "Alex Mendoza",
    github_link: "https://github.com/AlexMendozaEt",
    linkedin_link: "https://www.linkedin.com/in/alex-mendoza-etchebarne/",
  },
  {
    avatar: gabriela,
    name: "Gabriela Cruz",
    github_link: "https://github.com/gabcruzti",
    linkedin_link: "https://www.linkedin.com/in/gabcruzti/",
  },
  {
    avatar: gerardo,
    name: "Gerardo Avena",
    github_link: "https://github.com/Avenator02",
    linkedin_link: "https://www.linkedin.com/in/avenator02/,
  },
];

export default function TeamMembers() {
  return (
    <section>
      <Container size={"xl"}>
        <StyledContainer>
          <StyledH3>Meet the team</StyledH3>
          <StyledTeamContainer>
            {team.map((member, index) => (
              <MemberCard key={`member-${index}`} member={member} />
            ))}
          </StyledTeamContainer>
        </StyledContainer>
      </Container>
    </section>
  );
}
