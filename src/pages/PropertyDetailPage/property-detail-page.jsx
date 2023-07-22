import PropTypes from "prop-types";
import {
  RiUserReceived2Line,
  RiMoneyDollarCircleLine,
  RiContactsBookLine,
} from "react-icons/ri";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlinePets,
} from "react-icons/md";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../../layout/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledDetail } from "./styles";
import Button from "../../components/Button";
import Property from "../../../src/assets/images/property.png";
import GoogleMaps from "../../../src/assets/images/googlemaps.png";
import { getProperty } from "../../services/property-service";
import Image1 from "../../assets/images/image1.png";
import { useAuth } from "../../context/auth-context";

function PropertyDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();

  const [property, setProperty] = useState({});
  useEffect(() => {
    if (!id) return;

    getProperty(id)
      .then((property) => setProperty(property))
      .catch((error) => console.log(error));
  }, [id]);

  const {
    address,
    monthly_rent,
    district,
    state,
    maintenance,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    about,
  } = property;

  const viewBox = {
    0: (
      <div className="login">
        <div className="login__card">
          <p className="login__title">
            Log in or Join to contact the advertiser
          </p>
          <Button
            className="button"
            icon={<RiUserReceived2Line />}
            type={"primary"}
          >
            LOGIN
          </Button>
        </div>
      </div>
    ),
    1: (
      <div className="login">
        <div className="login__card">
          <p className="login__title">
            Log in or Join to contact the advertiser
          </p>
          <Button
            className="button"
            icon={<RiUserReceived2Line />}
            type={"primary"}
          >
            LANDLORD
          </Button>
        </div>
      </div>
    ),
    2: (
      <div className="login">
        <div className="login__card">
          <p className="login__title">
            Log in or Join to contact the advertiser
          </p>
          <Button
            className="button"
            icon={<RiUserReceived2Line />}
            type={"primary"}
          >
            HOMESEEKER
          </Button>
        </div>
      </div>
    ),
  };

  return (
    <>
      <Header user={user} />
      <Container size={"xl"}>
        <StyledDetail>
          <div>
            <div className="property-image-container">
              <MdOutlineKeyboardArrowLeft />
              <img className="property-image-container__img" src={Image1} />
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="info-address-price">
              <p>{address}</p>
              <div className="info-address-price__price">
                <RiMoneyDollarCircleLine />
                <p>{monthly_rent}</p>
              </div>
            </div>
            <div className="info-district">
              <p>
                {district}, {state}
              </p>
              <p>+{maintenance}</p>
            </div>
            <hr className="line"></hr>
            <div className="info-property">
              <div className="info-property__child">
                <BiBed />
                {bedrooms} bedrooms
              </div>
              <div className="info-property__child">
                <BiBath />
                {bathrooms} bathrooms
              </div>
              <div className="info-property__child">
                <BiArea />
                {area} m2
              </div>
              {pets_allowed ? (
                <div className="info-property__child">
                  <MdOutlinePets />
                  Pets allowed
                </div>
              ) : null}
            </div>
            <hr className="line"></hr>
            <div>
              <div className="title-pink">About this property</div>
              <div className="simple-text">{about}</div>
            </div>
            <div>
              <div className="title-pink">Location</div>
              <div className="simple-text">
                {address}, {district}, {state}
              </div>
              <img src={GoogleMaps} />
            </div>
          </div>
          {user === null
            ? viewBox[0]
            : user?.role === "landlord"
            ? viewBox[1]
            : viewBox[2]}
        </StyledDetail>
      </Container>
      <Footer />
    </>
  );
}

PropertyDetailPage.propTypes = {
  user: PropTypes.object,
};

export default PropertyDetailPage;
