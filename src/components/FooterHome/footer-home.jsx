import { StyledFooter } from "./styles";
import { DiRuby, DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import Container from "../../layout/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function FooterHome() {
  return (
    <footer>
      <Container size={"xl"}>
        <div>
          <StyledFooter>
            <div className="logo">
              <Logo size="sm" />
              <p>© 2023 - Get That Home</p>
              <p>Codeable - Cohort 10 Final Project</p>
            </div>
            <div className="team">
              <p className="title">
                Build with <span className="title__icon">❤</span> by:
              </p>
              <div className="github-1">
                <a
                  href={"https://github.com/kevinronu"}
                  target="_blank"
                  rel="noreferrer"
                  className="github__link"
                >
                  <AiFillGithub />
                  Kevin Robles
                </a>
                <a
                  href={"https://github.com/DanielMaHe"}
                  target="_blank"
                  rel="noreferrer"
                  className="github__link"
                >
                  <AiFillGithub />
                  Daniel Martinez
                </a>
                <a
                  href={"https://github.com/AlexMendozaEt"}
                  target="_blank"
                  rel="noreferrer"
                  className="github__link"
                >
                  <AiFillGithub />
                  Alex Mendoza
                </a>
              </div>
              <div className="github-2">
                <a
                  href={"https://github.com/gabcruzti"}
                  target="_blank"
                  rel="noreferrer"
                  className="github__link"
                >
                  <AiFillGithub />
                  Gabriela Cruz
                </a>
                <a
                  href={"https://github.com/Avenator02"}
                  target="_blank"
                  rel="noreferrer"
                  className="github__link"
                >
                  <AiFillGithub />
                  Gerardo Avena
                </a>
              </div>
            </div>
            <div className="source-code">
              <p className="title">Source code:</p>
              <Link className="github__link">
                <DiRuby size={"1.125rem"} />
                <p>Ruby on Rails REST API</p>
              </Link>
              <Link className="github__link">
                <DiReact size={"1.125rem"} />
                <p>React Responsive SPA</p>
              </Link>
            </div>
          </StyledFooter>
        </div>
      </Container>
    </footer>
  );
}

export default FooterHome;
