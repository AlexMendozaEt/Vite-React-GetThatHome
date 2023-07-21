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
import { getMyProperties } from "../../services/property-service";

export default function PropertiesSection() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(9);
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );

  useEffect(() => {
    activeProductsValidation();
  }, []);

  useEffect(() => {
    const totalProducts = products.length;
    setTotalProducts(totalProducts);
    setCurrentPage(1);
  }, [products]);

  const activeProductsValidation = () => {
    const actProducts = [];

    getMyProperties()
      .then((property) => {
        property.forEach((property) => {
          if (!property.close) {
            actProducts.push(property);
          }
        });
        sessionStorage.setItem("seekerCurrentPage", 1);
        setProducts(actProducts);
      })
      .catch(console.log);
  };

  const closeProductsValidation = () => {
    const clsProducts = [];
    getMyProperties()
      .then((property) => {
        property.forEach((property) => {
          if (property.close) {
            clsProducts.push(property);
          }
        });
        sessionStorage.setItem("seekerCurrentPage", 1);
        setProducts(clsProducts);
      })
      .catch(console.log);
  };

  const handleFilterActive = () => {
    activeProductsValidation();
  };

  const handleFilterClose = () => {
    closeProductsValidation();
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  const handleActiveClick = () => {
    handleFilterActive();
    handleInputChange();
  };

  const handleCloseClick = () => {
    handleFilterClose();
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
              onClick={handleActiveClick}
            ></StyledInput>
            <StyledInput
              type="radio"
              id="contacted"
              name="boxOptions"
              onClick={handleCloseClick}
            ></StyledInput>
            <BoxOptions>
              <StyledLabel
                className={`${isChecked ? "checkedOption" : "unCheckedOption"}`}
                htmlFor="favorites"
              >
                ACTIVE
              </StyledLabel>
              <StyledLabel
                className={`${isChecked ? "unCheckedOption" : "checkedOption"}`}
                htmlFor="contacted"
              >
                CLOSED
              </StyledLabel>
            </BoxOptions>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {products.slice(firstIndex, lastIndex).map((property) => {
                const isOwner = true;

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
