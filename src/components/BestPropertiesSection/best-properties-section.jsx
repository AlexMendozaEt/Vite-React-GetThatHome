import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  PropertiesContainer,
  StyledSection,
  StyledH2,
  StyledP,
} from "./styles";
import Container from "../../layout/Container/container";
import PropertyCard from "../PropertyCard";
import { getMyFavorites } from "../../services/favorite-service";
import {
  getMyProperties,
  getProperties,
} from "../../services/property-service";

export default function BestPropertiesSection() {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [ownProperties, setOwnProperties] = useState([]);

  useEffect(() => {
    getProperties()
      .then((properties) => {
        setProperties(properties);
      })
      .catch((e) => console.log(e));

    getMyFavorites()
      .then((favorites) => {
        setFavorites(favorites);
      })
      .catch((e) => console.log(e));

    getMyProperties()
      .then((ownProperties) => {
        setOwnProperties(ownProperties);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <StyledSection>
      <Container size="xl">
        <>
          <StyledP>Find an Apartment you Love</StyledP>
          <StyledH2>Homes for rent at the best prices</StyledH2>
          <PropertiesContainer>
            {properties.slice(0, 3).map((property) => {
              const isOwner = ownProperties.some((e) => e.id === property.id);
              const isFavorite = favorites.properties?.some(
                (e) => e.id === property.id
              );

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
