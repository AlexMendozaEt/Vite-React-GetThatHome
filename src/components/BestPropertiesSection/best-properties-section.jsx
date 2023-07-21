import PropTypes from "prop-types";

import {
  PropertiesContainer,
  StyledSection,
  StyledH2,
  StyledP,
} from "./styles";
import Container from "../../layout/Container/container";
import PropertyCard from "../PropertyCard";

const best_mock = [
  {
    id: 1,
    operation_type: 0,
    address: "1000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 1000,
    property_type: 0,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets_allowed: true,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
  {
    id: 5,
    operation_type: 1,
    address: "5000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 2000,
    property_type: 1,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets_allowed: true,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
  {
    id: 9,
    operation_type: 0,
    address: "9000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 3000,
    property_type: 0,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets_allowed: false,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
];

const favorites_mock = [
  {
    id: 1,
    operation_type: 0,
    address: "1000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 1000,
    property_type: 0,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets_allowed: true,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
  {
    id: 3,
    operation_type: 0,
    address: "3000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 1000,
    property_type: 0,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    pets_allowed: true,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
];

const contacted_mock = [
  {
    id: 6,
    operation_type: 0,
    address: "1000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 6000,
    property_type: 0,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets_allowed: true,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
  {
    id: 7,
    operation_type: 0,
    address: "7000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 1000,
    property_type: 0,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    pets_allowed: true,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
];

const own_properties_mock = [
  {
    id: 9,
    operation_type: 0,
    address: "9000 Jacob Gateway, Durganport, WV 48044",
    monthly_rent: 3000,
    property_type: 0,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets_allowed: false,
    photo_url: [
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
      "src/assets/images/background-example.jpg",
    ],
  },
];

export default function BestPropertiesSection({
  best_properties,
  favorites,
  own_properties,
}) {
  console.log(best_properties);
  best_properties = best_mock;
  favorites = favorites_mock;
  own_properties = own_properties_mock;

  return (
    <StyledSection>
      <Container size="xl">
        <>
          <StyledP>Find an Apartment you Love</StyledP>
          <StyledH2>Homes for rent at the best prices</StyledH2>
          <PropertiesContainer>
            {best_properties.map((property) => {
              const isFavorite = true;
              const isOwner = true;

              return (
                <PropertyCard
                  key={`property-${property.id}`}
                  property={property}
                  isFavorite={isFavorite}
                  isOwner={isOwner}
                />
              );
            })}
          </PropertiesContainer>
        </>
      </Container>
    </StyledSection>
  );
}

BestPropertiesSection.propTypes = {
  best_properties: PropTypes.array,
  favorites: PropTypes.array,
  own_properties: PropTypes.array,
};
