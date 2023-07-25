import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";
import Anchor from "../../components/Anchor";
import Container from "../../layout/Container";
import { StyledDiv } from "./styles";
import MyClosedPropertiesSection from "../../components/MyClosedPropertiesSection";

export default function MyClosedPropertiesPage() {
  const { user } = useAuth();
  return (
    <>
      <Header user={user} />
      <Container size="xl">
        <StyledDiv>
          <Anchor to={"/property/create"} type="primary">
            Create Property
          </Anchor>
          <MyClosedPropertiesSection />
        </StyledDiv>
      </Container>
      <Footer />
    </>
  );
}
