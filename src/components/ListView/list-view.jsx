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
  const [filtersProducts, setFilterProducts] = useState([]);
  const [filterAddress, setFilterAddress] = useState([]);


  const [filterRules, setFilterRules] = useState({
    address : "",
    houses : true,
    apartments : true,
    bedrooms : 0,
    bathrooms : 0,
    minPrice : 0,
    maxPrice : 0,
    minArea : 0,
    maxArea : 0,
    pets_allowed: false,
    buying : true,
    renting : true,}
   )
  
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );


  useEffect(() => {
    setFilterAddress(products.map((product)=>product.address));
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
    console.log(address)
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      address,
    }));
  };

  const handlePriceFilter = ({ minPrice, maxPrice }) => {
    console.log({ minPrice, maxPrice })
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      minPrice,
      maxPrice,
    }));
  };

  const handlePropertyTypeFilter = ({houses, apartments}) => {
    console.log("property")
    console.log({houses, apartments})
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      houses,
      apartments,
    }));
  };

  const handleBdBaFilter = ({ beds, baths }) => {
    console.log({ beds, baths })
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      bedrooms: beds,
      bathrooms: baths,
    }));
  };

  const handleMoreFilter = ({ minArea, maxArea, petsAllowed }) => {
    console.log({ minArea, maxArea, petsAllowed })
    setFilterRules((prevFilters) => ({
      ...prevFilters,
      minArea,
      maxArea,
      pets_allowed: petsAllowed,
    }));
  };

  // const handleBaRFilter = ({ buying, renting }) => {
  //   setFilterRules((prevFilters) => ({
  //     ...prevFilters,
  //     buying,
  //     renting,
  //   }));
  // };

  useEffect(() => {
    const filteredProducts = HandleFilterProducts();
    setFilterProducts(filteredProducts);
    // setCurrentPage(1); 
    // console.log("use 179")

  }, [filterRules,products]); //products


  function HandleFilterProducts(){  
  
    return products.filter((product)=>{

        const productAddress =  product.address.includes(filterRules.address);
        const minPrice = filterRules.minPrice > 0 ? +product.monthly_rent > +filterRules?.minPrice : true;
        const maxPrice = filterRules.maxPrice > 0 ? +product.monthly_rent < +filterRules?.maxPrice : true;
        const productHouses = filterRules.houses ?  (+product.property_type == 0) : false;
        const productApartments =  filterRules.apartments ?  (+product.property_type == 1) : false;
        const apartmentHome = productHouses || productApartments;
        const bedrooms = (filterRules.bedrooms > 0) ?  product.bedrooms >= filterRules.bedrooms : true;
        const bathrooms = (filterRules.bathrooms > 0) ?  product.bathrooms >= filterRules.bathrooms : true;
        const minArea = filterRules.minArea > 0 ? +product.area > +filterRules?.minArea : true;
        const maxArea = filterRules.maxArea > 0 ? +product.area > +filterRules?.maxArea : true;
        const pets =  filterRules.pets_allowed ? product.pets_allowed : true;

        const buying = (filterRules.buying  == "1")?  (+product.operation_type == "1") : false;
        const renting =  (filterRules.renting == "0") ?  (+product.operation_type == "0") : false;
        const buyingRenting = buying || renting;

        const status = productAddress && minPrice && maxPrice && apartmentHome && bedrooms && bathrooms && minArea && maxArea && pets && buyingRenting;

        return  status ;
    }) 
  }

  console.log(filtersProducts)
  console.log(products)
  console.log(filterRules)
  return(
    <ContainerLists>
    <ContainerFilters>
        <SearchByAddress filter={filterAddress} setFilter={handleAddressFilter} />
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


