import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";
import Header from "../../components/Header";
import ListView from "../../components/ListView/list-view";

export default function PropertiesPage() {
  const { user } = useAuth();

  return (
    <>
      <Header user={user} />
      <ListView />
      <Footer />
    </>
  );
}
