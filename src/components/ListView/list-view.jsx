import { getProperties } from "../../services/property-service";

import PropertyCard from "../PropertyCard";
import FilterPrice from "../Filters/Price/filterPrice";
import FilterProperty from "../Filters/PropertyType/filterProperty";
import FilterBdBa from "../Filters/BedsAndBath/filterBdBa";
import FilterMore from "../Filters/More/filterMore";

import { newArray } from "../../assets/mockdata/datafake";
import { PropertiesContainer, StyledSection, StyledH2 } from "./styles";
import { ContainerFilters, ContainerFilter, ContainerLists } from ".";
import Container from "../../layout/Container/container";
import SearchByAddress from "../Filters/Search/filterSearch";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import FilterBaR from "../Filters/BuyingAndRenting/filterBaR";
import { useParams } from "react-router-dom";

export default function ListsView(filter) {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(9);
  const [filtersProducts, setFilterProducts] = useState([]);
  const [filterAddress, setFilterAddress] = useState([]);
  const params = useParams();
  const [filterRules, setFilterRules] = useState({
    address: false,
    houses: true,
    apartments: true,
      bedrooms: 0,
      bathrooms: 0,
      minPrice: 0,
      maxPrice: 0,
      minArea: 0,
      maxArea: 0,
      pets_allowed: false,
      buying: true,
      renting: true,
    });
  
  useEffect(() => {
    const getFilterRules = () => {
      const localStorageFilter = localStorage.getItem('filter');
      if (localStorageFilter) {
        return JSON.parse(localStorageFilter);
      }
      console.log(params)


      if (Object.keys(params).length > 0) {

        const paramsFilter = {
          address: params.address === "false" ? false : params.address,
          houses: params.houses === "true",
          apartments: params.apartment === "true",
          buying: params.buying === "true",
          renting: params.renting === "true",
        };
        return paramsFilter
      }

      return filter;
    };

    const selectFilters = getFilterRules();
    setFilterRules((prevFilterRules) => ({
      ...prevFilterRules,
      ...selectFilters,
    }));
  }, [params]);

  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );

  useEffect(() => {
    getProperties()
      .then((properties) => {
        setProducts(properties);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setFilterAddress(products.map((product) => product.address));
    setCurrentPage(1);
  }, [products]);

  useEffect(() => {
    favProductsValidation();
  }, []);

  useEffect(() => {
    const totalProducts = filtersProducts.length;
    setTotalProducts(totalProducts);
  }, [filtersProducts]);

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

  const lastIndex = currentPage * productsPerpage;
  const firstIndex = lastIndex - productsPerpage;

  const handleAddressFilter = (address) => {
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      address,
    }));
  };

  const handlePriceFilter = ({ minPrice, maxPrice }) => {
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      minPrice,
      maxPrice,
    }));
  };

  const handlePropertyTypeFilter = ({ houses, apartments }) => {
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      houses,
      apartments,
    }));
  };

  const handleBdBaFilter = ({ beds, baths }) => {
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      bedrooms: beds,
      bathrooms: baths,
    }));
  };

  const handleMoreFilter = ({ minArea, maxArea, petsAllowed }) => {
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      minArea,
      maxArea,
      pets_allowed: petsAllowed,
    }));
  };

  const handleBaRFilter = ({ buying, renting }) => {
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      buying,
      renting,
    }));
  };

  useEffect(() => {
    const filteredProducts = HandleFilterProducts();
    setFilterProducts(filteredProducts);
  }, [filterRules, products]);

  function HandleFilterProducts() {
    console.log(filterRules)
    return products.filter((product) => {
      let productAddress;
      if(!filterRules.address){ 
        productAddress = true;          
      }else{
        productAddress = product.address.search(filterRules.address.toLocaleLowerCase)
      }
      const minPrice =
        filterRules.minPrice > 0
          ? +product.monthly_rent > +filterRules?.minPrice
          : true;
      const maxPrice =
        filterRules.maxPrice > 0
          ? +product.monthly_rent < +filterRules?.maxPrice
          : true;
      const productHouses = filterRules.houses
        ? product.property_type == "home"
        : false;
      const productApartments = filterRules.apartments
        ? product.property_type == "apartment"
        : false;
      const apartmentHome = productHouses || productApartments;
      const bedrooms =
        filterRules.bedrooms > 0
          ? product.bedrooms >= filterRules.bedrooms
          : true;
      const bathrooms =
        filterRules.bathrooms > 0
          ? product.bathrooms >= filterRules.bathrooms
          : true;
      const minArea =
        filterRules.minArea > 0 ? +product.area > +filterRules?.minArea : true;
      const maxArea =
        filterRules.maxArea > 0 ? +product.area > +filterRules?.maxArea : true;
      const pets = filterRules.pets_allowed ? product.pets_allowed : true;

      const buying = filterRules.buying
        ? product.operation_type === "sale"
        : false;
      const renting = filterRules.renting
        ? product.operation_type === "rent"
        : false;
      const buyingRenting = buying || renting;

      const status =
        productAddress &&
        minPrice &&
        maxPrice &&
        apartmentHome &&
        bedrooms &&
        bathrooms &&
        minArea &&
        maxArea &&
        pets &&
        buyingRenting;

      return status;
    });
  }

  return (
    <ContainerLists>
      <Container size="xl">
        <ContainerFilters>
          <SearchByAddress
            filter={filterAddress}
            setFilter={handleAddressFilter}
          />
          <ContainerFilter>
            <FilterPrice setFilter={handlePriceFilter} />
            <FilterProperty setFilter={handlePropertyTypeFilter} />
            <FilterBdBa setFilter={handleBdBaFilter} />
            <FilterMore setFilter={handleMoreFilter} />
          </ContainerFilter>
          <FilterBaR setFilter={handleBaRFilter} />
        </ContainerFilters>
      </Container>
      <StyledSection>
        <Container size="xl">
          <>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {filtersProducts.slice(firstIndex, lastIndex).map((property) => {
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
    </ContainerLists>
  );
}
