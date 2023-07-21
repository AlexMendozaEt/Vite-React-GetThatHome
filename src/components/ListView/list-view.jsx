import PropertyCard from "../PropertyCard";
import FilterPrice from "../Filters/Price/filterPrice";
import FilterProperty from "../Filters/PropertyType/filterProperty";
import FilterBdBa from "../Filters/BedsAndBath/filterBdBa";
import FilterMore from "../Filters/More/filterMore";

import { newArray } from "../../assets/mockdata/datafake";
import {
  PropertiesContainer,
  StyledSection,
  StyledH2,
} from "./styles";
import {ContainerFilters, ContainerFilter, ContainerLists } from "."
import Container from "../../layout/Container/container";
import SearchByAddress from "../Filters/Search/filterSearch";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import FilterBaR from "../Filters/BuyingAndRenting/filterBaR";



  export default function ListsView() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(9);
  const [filtersProducts, setFilterProducts] = useState([])

  const [filtersProperties, setFiltersProperties] = useState({
    address : "",
    houses : true,
    apartments : true,
    bedrooms : 2,
    bathrooms : 1,
    minPrice : 0,
    maxPrice : 0,
    minArea : 400,
    maxArea : 0,
    pets_allowed: true,
    buying : true,
    renting : false,}
   )
  
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );


  useEffect(() => {
    setFilterProducts(products.map((product)=>product.address));
    setCurrentPage(1);
  }, [products]);
  
  useEffect(() => {
    favProductsValidation();
    console.log("use 101")

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
    setFiltersProperties((prevFilters) => ({
      ...prevFilters,
      address,
    }));
  };

  const handlePriceFilter = ({ minPrice, maxPrice }) => {
    setFiltersProperties((prevFilters) => ({
      ...prevFilters,
      minPrice,
      maxPrice,
    }));
  };

  const handlePropertyTypeFilter = ({houses, apartments}) => {
    setFiltersProperties((prevFilters) => ({
      ...prevFilters,
      houses,
      apartments,
    }));
  };

  const handleBdBaFilter = ({ beds, baths }) => {
    setFiltersProperties((prevFilters) => ({
      ...prevFilters,
      bedrooms: beds,
      bathrooms: baths,
    }));
  };

  const handleMoreFilter = ({ minArea, maxArea, petsAllowed }) => {
    setFiltersProperties((prevFilters) => ({
      ...prevFilters,
      minArea,
      maxArea,
      pets_allowed: petsAllowed,
    }));
  };

  // const handleBaRFilter = ({ buying, renting }) => {
  //   setFiltersProperties((prevFilters) => ({
  //     ...prevFilters,
  //     buying,
  //     renting,
  //   }));
  // };

  useEffect(() => {
    const filteredProducts = filterProducts();
    setFilterProducts(filteredProducts);
    setCurrentPage(1); 
    console.log("use 179")

  }, [filtersProperties]); //products


  function filterProducts(){  
  
    return products.filter((product)=>{

        const productAddress =  product.address.includes(filtersProperties.address);
        const minPrice = filtersProperties.minPrice > 0 ? +product.price > +filtersProperties?.minPrice : true;
        const maxPrice = filtersProperties.maxPrice > 0 ? +product.price > +filtersProperties?.maxPrice : true;
        const productHouses = filtersProperties.houses ?  (+product.property_type == 0) : false;
        const productApartments =  filtersProperties.apartments ?  (+product.property_type == 1) : false;
        const apartmentHome = productHouses || productApartments;
        const bedrooms = (filtersProperties.bedrooms > 0) ?  product.bedrooms >= filtersProperties.bedrooms : true;
        const bathrooms = (filtersProperties.bathrooms > 0) ?  product.bathrooms >= filtersProperties.bathrooms : true;
        const minArea = filtersProperties.minArea > 0 ? +product.area > +filtersProperties?.minArea : true;
        const maxArea = filtersProperties.maxArea > 0 ? +product.area > +filtersProperties?.maxArea : true;
        const pets =  filtersProperties.pets_allowed ? product.pets_allowed : true;

        const buying = filtersProperties.buying ?  (+product.operation_type == "buy") : false;
        const renting =  filtersProperties.renting ?  (+product.operation_type == "rent") : false;
        const buyingRenting = buying || renting;

        const status = productAddress && minPrice && maxPrice && apartmentHome && bedrooms && bathrooms && minArea && maxArea && pets && buyingRenting;

        return  status ;
    }) 
  }


  return(
    <ContainerLists>
    <ContainerFilters>
        <SearchByAddress filter={filtersProducts} setFilter={handleAddressFilter} />
        <ContainerFilter>
          <FilterPrice setFilter={handlePriceFilter} />
          <FilterProperty setFilter={handlePropertyTypeFilter} />
          <FilterBdBa setFilter={handleBdBaFilter} />
          <FilterMore setFilter={handleMoreFilter} />
        </ContainerFilter>
        <FilterBaR  />
      </ContainerFilters>
    <StyledSection>
        <Container size="xl">
          <>
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
    </ContainerLists>
  );
}


