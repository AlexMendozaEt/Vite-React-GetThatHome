import TeamMembers from "../../components/TeamMembers";
import SignUpSection from "../../components/SignUpSection";
import BestPropertiesSection from "../../components/BestPropertiesSection";
import MeetHomeSection from "../../components/MeetHomeSection";
import HeaderVisitor from "../../components/HeaderVisitor";
import FooterLanding from "../../components/FooterLanding";

export default function LandingPage() {
  return (
    <>
      <HeaderVisitor />
      <MeetHomeSection />
      <BestPropertiesSection />
      <SignUpSection />
      <TeamMembers />
      <FooterLanding />
    </>
  );
}
