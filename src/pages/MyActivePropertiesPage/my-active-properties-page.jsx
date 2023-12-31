import MyActivePropertiesSection from "../../components/MyActivePropertiesSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";
import Anchor from "../../components/Anchor";
import Container from "../../layout/Container";
import { StyledDiv } from "./styles";

export default function MyActivePropertiesPage() {
  const { user } = useAuth();
  return (
    <>
      <Header user={user} />
      <Container size="xl">
        <StyledDiv>
          <Anchor to={"/property/create"} type="primary">
            Create Property
          </Anchor>
          <MyActivePropertiesSection />
        </StyledDiv>
      </Container>
      <Footer />
    </>
  );
}
