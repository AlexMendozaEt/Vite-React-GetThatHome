import HeaderVisitor from "../../components/HeaderVisitor";
import FooterLanding from "../../components/FooterLanding";
import styled from "@emotion/styled";
import PropertyCard from "../PropertyCard";
import FilterPrice from "../Filters/Price/filterPrice";
import FilterProperty from "../Filters/PropertyType/filterProperty";
import FilterBdBa from "../Filters/BedsAndBath/filterBdBa";
import FilterMore from "../Filters/More/filterMore";

const ContainerFilters = styled.div`
display: flex;
flex-direction: row;
justify: space-between;
width: 100%;
height: 40px;
gap: 8px;
justify-content: center;
align-items: center;
margin: auto;
background: white;

`;

const ContainerFilter = styled.div`
display: flex;
flex-direction: row;
justify: space-between;
width: 100%;
height: 40px;
gap: 8px;
justify-content: center;
align-items: center;
margin: auto;

`;

const ContainerFilterAddres = styled.div`
background: gray;
width: 240px;
height: 40px;
padding: 8px;
border-radius: 8px;
border: 1px;
gap: 8px;
`;

const ContainerFilterBaR = styled.div`
background: gray;
min-width: 160px;
height: 40px;
padding: 8px;
border-radius: 8px;
border: 1px;
gap: 8px;
`;

const ContainerLists = styled.div`
  background: gray;
  width: 100%px;
  height: 1371px;
  padding: 32px;
  gap: 16px;
  margin: auto;
  padding: 32px;
  gap: 16px;

`;

const Lists = styled.div`
  background: white;
  width: 100%;
  height: 1207px;
  padding: 32px;
  gap: 16px;
  margin: auto;
  padding: 0px 32px 0px 32px;
  gap: 32px;


`;

function ListFilter(){
  return(
    <Lists>
      Filters
    </Lists>

  )
};

function Filter(){

  return(
    <ContainerLists>
    <ContainerFilters>
      <ContainerFilterAddres>
        Filter Addres
      </ContainerFilterAddres>
    <ContainerFilter>
      <FilterPrice/>
      <FilterProperty/>
      <FilterBdBa/>
      <FilterMore/>
    </ContainerFilter>
    <ContainerFilterBaR>
      Buying & Renting
    </ContainerFilterBaR>
    </ContainerFilters>
    <ListFilter/>
    </ContainerLists>
  );
}


export default function ListView() {
  return (
    <>
      <HeaderVisitor />
      <Filter/>
      <FooterLanding />
    </>
  );
}
