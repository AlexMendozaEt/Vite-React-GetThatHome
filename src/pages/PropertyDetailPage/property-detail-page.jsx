import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

import PropTypes from "prop-types";
import { RiUserReceived2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../../layout/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledDetail } from "./styles";
import Button from "../../components/Button";
import { getProperty } from "../../services/property-service";
import { useAuth } from "../../context/auth-context";
import { ImagesSlider } from "../../components/ImagesSlider/images-slider";

const containerStyles = {
  width: "375px",
  height: "375px",
  margin: "auto",
};

const getCoordinates = async (address) => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: address,
          key: import.meta.env.VITE_GOOGLE_API_KEY,
        },
      }
    );

    if (
      response.data &&
      response.data.results &&
      response.data.results.length > 0
    ) {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    }
  } catch (error) {
    console.error("Error from google maps", error);
  }

  return null;
};

function PropertyDetailPage() {
  const { handleModal } = useAuth();
  const { id } = useParams();
  const { user } = useAuth();

  const [property, setProperty] = useState({});
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (!id) return;

    getProperty(id)
      .then((property) => {
        setProperty(property);

        if (property.images && property.images.length > 0) {
          setAreImagesLoaded(true);
        }

        getCoordinates(
          `${property.address}, ${property.district}, ${property.state}`
        ).then((coords) => {
          if (coords) {
            setCoordinates(coords);
          }
        });
      })
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
    images,
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
            onClick={handleModal}
          >
            LOGIN
          </Button>
        </div>
      </div>
    ),
    1: (
      <div className="login">
        <div className="login__card">
          {user ? (
            <>
              <p className="login__title">{user.name}</p>
              <p className="login__title">{user.email}</p>
              <p className="login__title">{user.phone}</p>
            </>
          ) : null}
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
            {areImagesLoaded ? <ImagesSlider slides={images} /> : null}
            <div className="info-address-price">
              <p>{address}</p>
              <div className="info-address-price__price">
                <div className="container-dollar">
                  <RiMoneyDollarCircleLine />
                </div>
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
                {property.address}, {property.district}, {property.state}
              </div>
              {coordinates && (
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
                >
                  <GoogleMap
                    mapContainerStyle={containerStyles}
                    center={coordinates}
                    zoom={14}
                  >
                    <Marker position={coordinates} />
                  </GoogleMap>
                </LoadScript>
              )}
              {coordinates ? null : <p>Loading map...</p>}
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
