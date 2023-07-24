import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";

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

function CreateRentalPropertyPage() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    address: "",
    district: "",
    state: "",
    montly_rent: null,
    maintenance: null,
    property_type: null,
    bedrooms: null,
    bathrooms: null,
    area: null,
    pets_allowed: null,
    about: "",
    operation_type: "rent",
    user_id: user?.id,
  });

  const [images, setImages] = useState([]);

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
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
  }

  function handleImageChange(e) {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  }

  return (
    <>
      <HeaderLandlord />
      <main>
        <Container size="xl">
          <StyledContainer>
            <h1 className="title">Create a property listing</h1>
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
              <InputWithIcon
                label={"ADDRESS"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isFullWidth
                name="address"
                type="text"
                placeholder="start typing to autocomplete"
                onChange={handleChange}
              />
              <InputWithIcon
                label={"DISTRICT"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isFullWidth
                name="district"
                type="text"
                placeholder="District"
                onChange={handleChange}
              />
              <InputWithIcon
                label={"STATE"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isFullWidth
                name="state"
                type="text"
                placeholder="STATE"
                onChange={handleChange}
              />
              <InputWithIcon
                label="MONTLY RENT"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                name="montly_rent"
                placeholder="2000"
                onChange={handleChange}
              />
              <InputWithIcon
                label="MAINTENANCE"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                name="maintenance"
                placeholder="100"
                onChange={handleChange}
              />
              <Select
                label={"PROPERTY TYPE"}
                name="property_type"
                options={[
                  { label: "Apartment", value: "apartment" },
                  { label: "Home", value: "home" },
                ]}
                defaultValue={"Select..."}
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
                  defaultValue={"Select..."}
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
                  defaultValue={"Select..."}
                  onChange={handleChange}
                />
                <Input
                  label="AREA IN M2"
                  name="area"
                  type="number"
                  placeholder="##"
                  onChange={handleChange}
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
                PUBLISH PROPERTY LISTING
              </Button>
            </form>
          </StyledContainer>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default CreateRentalPropertyPage;
