import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlinePets,
} from "react-icons/md";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";

import Container from "../../layout/Container";
import HeaderLandlord from "../../components/HeaderLandlord/header-landlord";
import FooterHome from "../../components/FooterHome";
import { StyledDetail } from "./styles";
import Button from "../../components/Button";
import Property from "../../../src/assets/images/property.png";
import GoogleMaps from "../../../src/assets/images/googlemaps.png";

const propertyTest = {
  id: 1,
  operation_type: 0,
  address: "1000 Jacob Gateway, Durganport",
  monthly_rent: 1000,
  maintanance: 100,
  district: "Miraflores",
  state: "Lima",
  property_type: 0,
  bedrooms: 4,
  bathrooms: 2,
  area: 180,
  pets_allowed: true,
  about:
    "3 Bedroom/2 Bathroom apartment available for ASAP move-in Apartment features hardwood floors throughout, virtual doorman, Central AC heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room i big enough to fit a dinner table, a couch and a tv set up.",
  photo_url: [Property, Property, Property, Property, Property],
};

function PropertyDetailContact({ property }) {
  property = propertyTest;
  const {
    address,
    monthly_rent,
    district,
    state,
    maintanance,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    photo_url,
    about,
  } = property;

  return (
    <>
      <HeaderLandlord />
      <Container size={"xl"}>
        <StyledDetail>
          <div>
            <div className="property-image-container">
              <MdOutlineKeyboardArrowLeft />
              <img
                className="property-image-container__img"
                src={photo_url[0]}
              />
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
              <p>+{maintanance}</p>
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
          <div className="login">
            <Button
              className="button"
              icon={<BiEdit size={"1.5rem"} />}
              type={"primary"}
            >
              Edit Property
            </Button>
          </div>
        </StyledDetail>
      </Container>
      <FooterHome />
    </>
  );
}

export default PropertyDetailContact;
