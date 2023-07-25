import { useState, useEffect } from "react";

import {
  PropertiesContainer,
  StyledSection,
  BoxOptions,
  StyledH2,
  StyledLinkActive,
  StyledLinkInactive,
} from "./styles";
import Container from "../../layout/Container/container";
import PropertyCard from "../PropertyCard";
import Pagination from "../Pagination";
import { getMyFavorites } from "../../services/property-service";

export default function SavedFavoritePropertiesSection() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(12);
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );

  useEffect(() => {
    const favoriteProperties = [];
    getMyFavorites()
      .then((favorites) => {
        favorites.properties.forEach((property) => {
          favoriteProperties.push(property);
        });
        sessionStorage.setItem("seekerCurrentPage", 1);
        setProducts(favoriteProperties);
      })
      .catch(console.log);
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
                <StyledLinkActive>FAVORITE</StyledLinkActive>
                <hr className="active" />
              </div>
              <div>
                <StyledLinkInactive to={"/savedproperties/contacted"}>
                  CONTACTED
                </StyledLinkInactive>
                <hr className="inactive" />
              </div>
            </BoxOptions>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {products.slice(firstIndex, lastIndex).map((property) => {
                const isOwner = false;
                const isFavorite = true;

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
