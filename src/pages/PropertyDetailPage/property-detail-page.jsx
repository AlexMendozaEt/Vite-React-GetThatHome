import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

import PropTypes from "prop-types";
import { RiUserReceived2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlinePets, MdFavorite } from "react-icons/md";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../../layout/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ButtonFavorite, DivInfo, StyledDetail } from "./styles";
import Button from "../../components/Button";
import {
  createFavorite,
  deleteFavorite,
  getMyFavorites,
} from "../../services/favorite-service";
import { getMyContacts, createContact } from "../../services/contacts-service";
import { getProperty } from "../../services/property-service";
import { useAuth } from "../../context/auth-context";
import { ImagesSlider } from "../../components/ImagesSlider/images-slider";
import Anchor from "../../components/Anchor";
import { useTheme } from "@emotion/react";

const containerStyles = {
  "min-width": "360px",
  "min-height": "360px",
  "max-width": "760px",
  "max-height": "760px",
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
  const theme = useTheme();
  const navigate = useNavigate();
  const { handleModal } = useAuth();
  const { id } = useParams();
  const { user } = useAuth();

  const [property, setProperty] = useState({});
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [contacts, setContacts] = useState([]);

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

    getMyFavorites()
      .then((favorites) => {
        setFavorites(favorites);
      })
      .catch((e) => console.log(e));

    getMyContacts()
      .then((contacts) => {
        setContacts(contacts);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const {
    address,
    monthly_rent,
    district,
    state,
    price,
    maintenance,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    about,
    images,
  } = property;

  function handleCreateContact() {
    const contact_data = {
      property_id: id,
      user_id: user.id,
    };
    createContact(contact_data).catch(console.log);
  }

  function handleCreateFavorite() {
    const favorite_data = {
      property_id: id,
      user_id: user.id,
    };
    createFavorite(favorite_data).then(navigate(0)).catch(console.log);
  }

  function handleDeleteFavorite() {
    const temporalFavorite = favorites.favorites?.find(
      (e) => e.property_id === Number(id)
    );
    deleteFavorite(temporalFavorite.id).then(navigate(0)).catch(console.log);
  }

  function viewBox() {
    if (!user) {
      return (
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
      );
    } else if (user.role === "landlord") {
      return (
        <div className="edit-container">
          <Anchor
            className="Anchor"
            icon={<RiUserReceived2Line />}
            type={"primary"}
            to={`/property/edit/${id}`}
          >
            EDIT PROPERTY
          </Anchor>
        </div>
      );
    } else {
      let firstPart;
      let secondPart;
      if (contacts.properties?.some((e) => e.id === Number(id))) {
        const temp_contact = contacts.contacts.find(
          (e) => e.user_id === user.id
        );
        const { user_email, user_phone } = temp_contact;
        firstPart = (
          <DivInfo>
            <h3 className="title">Contact Information</h3>
            <div className="email">
              <p className="email__title">Email</p>
              <p>{user_email}</p>
            </div>
            <div className="phone">
              <p className="phone__title">Phone</p>
              <p>{user_phone}</p>
            </div>
          </DivInfo>
        );
      } else {
        firstPart = (
          <Button onClick={handleCreateContact} type={"primary"}>
            CONTACT ADVISER
          </Button>
        );
      }
      if (favorites.properties?.some((e) => e.id === Number(id))) {
        secondPart = (
          <ButtonFavorite onClick={handleDeleteFavorite}>
            <MdFavorite size={"1.5rem"} fill={theme.colors.pink[500]} />
            Remove from Favorites
          </ButtonFavorite>
        );
      } else {
        secondPart = (
          <ButtonFavorite onClick={handleCreateFavorite}>
            <MdFavorite size={"1.5rem"} />
            Add to Favorites
          </ButtonFavorite>
        );
      }

      return (
        <div className="action-container">
          {firstPart}
          {secondPart}
        </div>
      );
    }
  }

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
                <p>{monthly_rent || price}</p>
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
              <div className="simple-tet">{about}</div>
            </div>
            <div>
              <div className="title-pink">Location</div>
              <div className="simple-text">
                {address}, {district}, {state}
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
          {viewBox(user, favorites, contacts)}
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
