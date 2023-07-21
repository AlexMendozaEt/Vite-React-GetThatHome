import PropertiesSection from "../../components/MyPropertiesSection";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";
import Header from "../../components/Header";

export default function PropertiesPage() {
  const { user } = useAuth();

  return (
    <>
      <Header user={user} />
      <PropertiesSection />
      <Footer />
    </>
  );
}
