import TeamMembers from "../../components/TeamMembers";
import SignUpMessageSection from "../../components/SignUpMessageSection";
import BestPropertiesSection from "../../components/BestPropertiesSection";
import MeetHomeSection from "../../components/MeetHomeSection";
import FooterLanding from "../../components/FooterLanding";
import Header from "../../components/Header";
import { useAuth } from "../../context/auth-context";

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <>
      <Header user={user} />
      <MeetHomeSection />
      <BestPropertiesSection />
      <SignUpMessageSection />
      <TeamMembers />
      <FooterLanding />
    </>
  );
}
