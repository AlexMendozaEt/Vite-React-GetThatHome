import { useState, useEffect } from "react";

import {
  PropertiesContainer,
  StyledSection,
  BoxOptions,
  StyledH2,
  StyledLinkInactive,
  StyledLinkActive,
} from "./styles";
import Container from "../../layout/Container/container";
import PropertyCard from "../PropertyCard";
import Pagination from "../Pagination";
import { getMyContacts, getMyFavorites } from "../../services/property-service";

export default function SavedContactedPropertiesSection() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(12);
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );

  useEffect(() => {
    const contactedProperties = [];
    getMyContacts()
      .then((contacts) => {
        contacts.properties.forEach((property) => {
          contactedProperties.push(property);
        });
        sessionStorage.setItem("seekerCurrentPage", 1);
        setProducts(contactedProperties);
      })
      .catch(console.log);

    getMyFavorites()
      .then((favorites) => {
        setFavorites(favorites);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const totalProducts = products.length;
    setTotalProducts(totalProducts);
    setCurrentPage(1);
  }, [products]);

  const lastIndex = currentPage * productsPerpage;
  const firstIndex = lastIndex - productsPerpage;

  return (
    <>
      <StyledSection>
        <Container size="xl">
          <>
            <BoxOptions>
              <div>
                <StyledLinkInactive to={"/savedproperties/favorites"}>
                  FAVORITE
                </StyledLinkInactive>
                <hr className="inactive" />
              </div>
              <div>
                <StyledLinkActive>CONTACTED</StyledLinkActive>
                <hr className="active" />
              </div>
            </BoxOptions>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {products.slice(firstIndex, lastIndex).map((property) => {
                const isOwner = false;
                const isFavorite = favorites.properties?.some(
                  (e) => e.id === property.id
                );
                return (
                  <PropertyCard
                    key={`property-${property.id}`}
                    property={property}
                    isOwner={isOwner}
                    isFavorite={isFavorite}
                  />
                );
              })}
            </PropertiesContainer>
          </>
        </Container>
      </StyledSection>
      <Pagination
        productsPerpage={productsPerpage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
}
