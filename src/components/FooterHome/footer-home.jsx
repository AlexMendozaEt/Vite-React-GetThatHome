import { StyledFooter } from "./styles";
import { DiRuby, DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import Container from "../../layout/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

function FooterHome() {
  return (
    <footer>
      <Container size={"xl"}>
        <div>
          <StyledFooter>
            <div>
              <Logo />
              <div>© 2023 - Get That Home</div>
              <div>Codeable - Cohort 10 Final Project</div>
            </div>
            <div>
              <div className="title">
                Build with <span>❤</span> by:
              </div>
              <div className="github">
                <Link className="github__link">
                  <AiFillGithub />
                  Kevin Robles
                </Link>
                <Link className="github__link">
                  <AiFillGithub />
                  Gabriela Cruz
                </Link>
                <Link className="github__link">
                  <AiFillGithub />
                  Alex Mendoza
                </Link>
                <Link className="github__link">
                  <AiFillGithub />
                  Daniel Martinez
                </Link>
                <Link className="github__link">
                  <AiFillGithub />
                  Gerardo Avena
                </Link>
              </div>
            </div>
            <div>
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
