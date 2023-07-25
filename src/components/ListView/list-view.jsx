import {
  getMyFavorites,
  getMyProperties,
  getProperties,
} from "../../services/property-service";

import PropertyCard from "../PropertyCard";
import FilterPrice from "../Filters/Price/filterPrice";
import FilterProperty from "../Filters/PropertyType/filterProperty";
import FilterBdBa from "../Filters/BedsAndBath/filterBdBa";
import FilterMore from "../Filters/More/filterMore";

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
  const [favorites, setFavorites] = useState([]);
  const [ownProperties, setOwnProperties] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(10);
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
    // const locals = localStorage.getItem("filter")
    // if(locals){
    //   console.log("LOCALS")
    //   console.log(locals)
    //   // localStorage.setItem("filter", JSON.stringify(filterRules))
    // }else
    if (!Object.keys(params).length === 0) {
      // localStorage.setItem("filter", JSON.stringify(filterRules))

    }
  }, [filterRules]);

  useEffect(() => {
    const getFilterRules = () => {
      // const localStorageFilter = localStorage.getItem("filter");
      // if (localStorageFilter) {
      //   console.log("local Storage")
      //   return JSON.parse(localStorageFilter);
      // }else
      if (Object.keys(params).length > 0) {
        const paramsFilter = {
          address: params.address === "false" ? false : params.address,
          houses: params.houses === "true",
          apartments: params.apartment === "true",
          buying: params.buying === "true",
          renting: params.renting === "true",
        };

        // localStorage.setItem("filter", JSON.stringify(paramsFilter))
        return paramsFilter;
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

  useEffect(() => {
    setFilterAddress(products.map((product) => product.address));
    setCurrentPage(1);
  }, [products]);

  useEffect(() => {
    const totalProducts = filtersProducts.length;
    setTotalProducts(totalProducts);
    // localStorage.setItem("filter", JSON.stringify(filterRules))
  }, [filtersProducts]);

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
    // localStorage.setItem("filter", JSON.stringify(filterRules))
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
    return products.filter((product) => {
      
      const productAddress =
        filterRules.address === false ||
        !product.address.search(filterRules.address);

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

  const setCurrentFilterType = () => {
    return filterRules.apartments && !filterRules.houses
      ? ["apartments"]
      : !filterRules.apartments && filterRules.houses
      ? ["houses"]
      : [];
  };

  const setCurrentFilterBaR = () => {
    return filterRules.renting && !filterRules.buying
      ? "renting"
      : !filterRules.renting && filterRules.buying
      ? "buying"
      : "";
  };

  return (
    <ContainerLists>
      <Container size="xl">
        <ContainerFilters>
          <SearchByAddress
            filter={filterAddress}
            setFilter={handleAddressFilter}
            currentSearch={filterRules.address.toString()}
          />
          <ContainerFilter>
            <FilterPrice setFilter={handlePriceFilter} />
            <FilterProperty
              setFilter={handlePropertyTypeFilter}
              currentFilter={setCurrentFilterType()}
            />
            <FilterBdBa setFilter={handleBdBaFilter} />
            <FilterMore setFilter={handleMoreFilter} />
          </ContainerFilter>
          <FilterBaR
            setFilter={handleBaRFilter}
            currentFilter={setCurrentFilterBaR()}
          />
        </ContainerFilters>
      </Container>
      <StyledSection>
        <Container size="xl">
          <>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {filtersProducts.slice(firstIndex, lastIndex).map((property) => {
                const isOwner = ownProperties.some((e) => e.id === property.id);
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
    </ContainerLists>
  );
}
