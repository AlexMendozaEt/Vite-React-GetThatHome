import { StyledFooter } from "./styles";
import { DiRuby, DiReact } from "react-icons/di";
import Container from "../../layout/Container";

function FooterVisitor() {
  return (
    <footer>
      <Container size={"xl"}>
        <StyledFooter>
          <div className="title">
            <p>© 202X - Find That Home</p>
            <p>Source Code</p>
            <p>Codeable - Cohort X Final Project</p>
          </div>

          <div className="source-code">
            <div className="source-code__info">
              <DiRuby size={"1.125rem"} />
              <p>Ruby on Rails REST API</p>
            </div>
            <div className="source-code__info">
              <DiReact size={"1.125rem"} />
              <p>React Responsive SPA</p>
            </div>
          </div>
        </StyledFooter>
      </Container>
    </footer>
  );
}

export default FooterVisitor;
