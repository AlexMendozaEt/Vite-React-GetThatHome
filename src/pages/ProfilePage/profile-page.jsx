import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";
import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <ProfileSection />
      <Footer />
    </>
  );
}
