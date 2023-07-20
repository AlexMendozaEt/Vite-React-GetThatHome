import { useState, useEffect } from "react";
import { newArray } from "../../assets/mockdata/datafake";
import {
  PropertiesContainer,
  StyledSection,
  BoxOptions,
  StyledInput,
  StyledLabel,
  StyledH2,
} from "./styles";
import Container from "../../layout/Container/container";
import PropertyCard from "../PropertyCard";
import Pagination from "../Pagination";

export default function SavedPropertiesSection() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(9);
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );

  useEffect(() => {
    favProductsValidation();
  }, []);

  useEffect(() => {
    const totalProducts = products.length;
    setTotalProducts(totalProducts);
    setCurrentPage(1);
  }, [products]);

  const favProductsValidation = () => {
    const favProducts = [];
    newArray.forEach((property) => {
      if (property.pets_allowed) {
        favProducts.push(property);
      }
    });
    sessionStorage.setItem("seekerCurrentPage", 1);
    setProducts(favProducts);
  };

  const noFavProductsValidation = () => {
    const contProducts = [];
    newArray.forEach((property) => {
      if (!property.pets_allowed) {
        contProducts.push(property);
      }
    });
    sessionStorage.setItem("seekerCurrentPage", 1);
    setProducts(contProducts);
  };

  const handleFilterFavorites = () => {
    favProductsValidation();
  };

  const handleFilterContacts = () => {
    noFavProductsValidation();
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFavoritesClick = () => {
    handleFilterFavorites();
    handleInputChange();
  };

  const handleContactedClick = () => {
    handleFilterContacts();
    handleInputChange();
  };

  const lastIndex = currentPage * productsPerpage;
  const firstIndex = lastIndex - productsPerpage;

  return (
    <>
      <StyledSection>
        <Container size="xl">
          <>
            <StyledInput
              type="radio"
              id="favorites"
              name="boxOptions"
              onClick={handleFavoritesClick}
            ></StyledInput>
            <StyledInput
              type="radio"
              id="contacted"
              name="boxOptions"
              onClick={handleContactedClick}
            ></StyledInput>
            <BoxOptions>
              <StyledLabel
                className={`${isChecked ? "checkedOption" : ""}`}
                htmlFor="favorites"
              >
                FAVORITES
              </StyledLabel>
              <StyledLabel
                className={`${isChecked ? "" : "checkedOption"}`}
                htmlFor="contacted"
              >
                CONTACTED
              </StyledLabel>
            </BoxOptions>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {products.slice(firstIndex, lastIndex).map((property) => {
                const isOwner = false;

                return (
                  <PropertyCard
                    key={`property-${property.id}`}
                    property={property}
                    isOwner={isOwner}
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
