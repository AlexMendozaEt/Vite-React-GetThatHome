import { useEffect, useState } from "react";

import TeamMembers from "../../components/TeamMembers";
import SignUpMessageSection from "../../components/SignUpMessageSection";
import BestPropertiesSection from "../../components/BestPropertiesSection";
import MeetHomeSection from "../../components/MeetHomeSection";
import FooterLanding from "../../components/FooterLanding";
import Header from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { getProperties } from "../../services/property-service";

export default function LandingPage() {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties()
      .then((properties) => {
        setProperties(properties);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header user={user} />
      <MeetHomeSection />
      <BestPropertiesSection best_properties={properties.slice(0, 3)} />
      {user ? "" : <SignUpMessageSection />}
      <TeamMembers />
      <FooterLanding />
    </>
  );
}
