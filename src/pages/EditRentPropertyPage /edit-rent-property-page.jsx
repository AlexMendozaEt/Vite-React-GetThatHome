import GooglePlacesAutocomplete from "react-google-autocomplete";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HeaderLandlord from "../../components/HeaderLandlord";
import Container from "../../layout/Container";
import { StyledContainer, StyledTextArea } from "./styles";
import InputWithIcon from "../../components/InputWithIcon";
import { TbCoin } from "react-icons/tb";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/auth-context";
import { createProperty } from "../../services/property-service";
import { useParams } from "react-router-dom";
import { getProperty } from "../../services/property-service";

function EditRentPropertyPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const [property, setProperty] = useState({});

  const [formData, setFormData] = useState({
    address: "",
    district: "",
    state: "",
    monthly_rent: null,
    maintenance: null,
    property_type: null,
    bedrooms: null,
    bathrooms: null,
    area: null,
    pets_allowed: null,
    about: "",
    operation_type: "sale",
    user_id: user?.id,
  });

  useEffect(() => {
    if (!id) return;

    getProperty(id)
      .then((property) => {
        setProperty(property);
        setFormData({
          address: property.address,
          district: property.district,
          state: property.state,
          monthly_rent: property.monthly_rent,
          price: property.price,
          maintenance: property.maintenance,
          property_type: property.property_type,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          area: property.area,
          pets_allowed: property.pets_allowed,
          about: property.about,
          operation_type: property.operation_type,
          user_id: property.user_id,
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(formData);

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const newValues = { ...formData, [name]: value };
    setFormData(newValues);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const propertyData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      propertyData.append(key, value);
    }

    for (let i = 0; i < images.length; i++) {
      propertyData.append("images[]", images[i]);
    }

    createProperty(propertyData)
      .then((data) => {
        navigate(`/property/detail/${data.id}`);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleImageChange(e) {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  }

  function handleAddressChange(address) {
    setFormData({
      ...formData,
      address: address.formatted_address,
    });
  }

  console.log(property);

  return (
    <>
      <HeaderLandlord />
      <main>
        <Container size="xl">
          <StyledContainer>
            <h1 className="title">Edit a property listing</h1>
            <p className="label">OPERATION TYPE</p>
            <div>
              <div className="links-container">
                <NavLink
                  to="/property/create/rent"
                  className={({ isActive }) =>
                    isActive ? "link-left active" : "link-left"
                  }
                >
                  Rent
                </NavLink>
                <NavLink
                  to="/property/create/sale"
                  className={({ isActive }) =>
                    isActive ? "link-right active" : "link-right"
                  }
                >
                  Sale
                </NavLink>
              </div>
            </div>
            <form
              className="form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label className="label">ADDRESS</label>
              <div className="container-autocomplete ">
                <HiMagnifyingGlass size={"1.25rem"} />
                <GooglePlacesAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
                  value={formData.address}
                  autocompletionRequest={{
                    types: ["address"],
                  }}
                  selectProps={{
                    name: "address",
                    onChange: handleAddressChange,
                    placeholder: "Start typing to autocomplete ",
                  }}
                />
              </div>
              <InputWithIcon
                label={"DISTRICT"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isFullWidth
                name="district"
                type="text"
                placeholder="District"
                onChange={handleChange}
                value={formData.district}
              />
              <InputWithIcon
                label={"STATE"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isFullWidth
                name="state"
                type="text"
                placeholder="STATE"
                onChange={handleChange}
                value={formData.state}
              />
              <InputWithIcon
                label="MONTHLY RENT"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                name="monthly_rent"
                placeholder="2000"
                onChange={handleChange}
                value={formData.monthly_rent}
              />
              <InputWithIcon
                label="MAINTENANCE"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                name="maintenance"
                placeholder="100"
                onChange={handleChange}
                value={formData.maintenance}
              />
              <Select
                label={"PROPERTY TYPE"}
                name="property_type"
                options={[
                  { label: "Apartment", value: "apartment" },
                  { label: "Home", value: "home" },
                ]}
                defaultValue={formData.property_type}
                onChange={handleChange}
              />
              <div className="form__property">
                <Select
                  label={"BEDROOMS"}
                  name="bedrooms"
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "7", value: "7" },
                    { label: "8", value: "8" },
                    { label: "9", value: "9" },
                    { label: "10", value: "10" },
                  ]}
                  defaultValue={formData.bedrooms}
                  onChange={handleChange}
                />
                <Select
                  label={"BATHROOMS"}
                  name="bathrooms"
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "7", value: "7" },
                    { label: "8", value: "8" },
                    { label: "9", value: "9" },
                    { label: "10", value: "10" },
                  ]}
                  defaultValue={formData.bathrooms}
                  onChange={handleChange}
                />
                <Input
                  label="AREA IN M2"
                  name="area"
                  type="number"
                  placeholder="##"
                  onChange={handleChange}
                  value={formData.area}
                />
              </div>
              <div>
                <label className="label-container">
                  <Input
                    name="pets_allowed"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  Pets Allowed
                </label>
                <blockquote className="quote">
                  Allowing pets increases the likehood of renters liking the
                  property by 9001%. It also makes you a better person.
                </blockquote>
              </div>
              <label>
                <p className="label">ABOUT THIS PROPERTY</p>
                <StyledTextArea
                  name="about"
                  placeholder="My Apartment is great because..."
                  value={formData.about}
                  onChange={handleChange}
                />
                <blockquote className="quote">
                  Renters will read this first, so highlight any features or
                  important information the apartment has.
                </blockquote>
              </label>
              <div>
                <h3 className="photos-title">Photos</h3>
                <label>
                  <p className="photos-instructions">
                    Upload as many photos as you wish
                  </p>
                  <input
                    type="file"
                    multiple
                    name="images"
                    onChange={handleImageChange}
                  />
                  <blockquote className="quote">
                    Only images, max 5MB
                  </blockquote>
                </label>
                <div className="images-container">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      className="images-container__image"
                    />
                  ))}
                </div>
              </div>
              <Button type="primary" size="lg">
                UPDATE PROPERTY LISTING
              </Button>
            </form>
          </StyledContainer>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default EditRentPropertyPage;
