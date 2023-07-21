import PropertiesSection from "../../components/MyPropertiesSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";

export default function MyPropertiesPage() {
  const { user } = useAuth();
  return (
    <>
      <Header user={user} />
      <PropertiesSection />
      <Footer />
    </>
  );
}
