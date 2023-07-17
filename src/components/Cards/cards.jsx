import PropTypes from "prop-types";
import { TbCoin } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsHouseDoor } from "react-icons/bs";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { MdOutlinePets, MdFavorite } from "react-icons/md";
import { RiCloseCircleLine, RiCoinsLine } from "react-icons/ri";

import { StyledButton } from "./styles";

function Card({
  operationType,
  adress,
  price,
  propertyType,
  beds,
  bath,
  area,
  pets,
  fav,
  ...props
}) {
  const typeProperty = {
    0: (
      <div className="property-data">
        <HiOutlineBuildingOffice2 />
        <div>Apartment</div>
      </div>
    ),
    1: (
      <div className="property-data">
        <BsHouseDoor />
        <div>House</div>
      </div>
    ),
  };

  const typeOperation = {
    0: (
      <div className="operation-data">
        <RiCoinsLine className="icon-header"></RiCoinsLine>
        <div>For Rental</div>
      </div>
    ),
    1: (
      <div className="operation-data">
        <TbCoin className="icon-header" fill="white" color="#f9a8d4"></TbCoin>
        <div>For Sale</div>
      </div>
    ),
  };

  const typeRole = {
    0: (
      <div className="fotter-main-box">
        <div className="fotter-icons">
          <BiEdit />
          <a>EDIT</a>
        </div>
        <div className="fotter-icons">
          <RiCloseCircleLine />
          <button>CLOSE</button>
        </div>
      </div>
    ),
    1: null,
  };

  return (
    <StyledButton {...props}>
      <div className="card-header">{typeOperation[operationType]}</div>
      <div className="data-box">
        <div className="img"></div>
        <div className="values">
          <div className="price-data">
            <TbCoin></TbCoin>
            <div>{price}</div>
          </div>
          {typeProperty[propertyType]}
        </div>
        <div className="adress">{adress}</div>
        <div className="icons">
          <div>
            <BiBed></BiBed>
            <div>{beds}</div>
          </div>
          <div>
            <BiBath></BiBath>
            <div>{bath}</div>
          </div>
          <div>
            <BiArea></BiArea>
            <div>{area}</div>
          </div>
          {pets ? (
            <div>
              <MdOutlinePets></MdOutlinePets>
            </div>
          ) : null}
          {fav ? (
            <div>
              <MdFavorite></MdFavorite>
            </div>
          ) : null}
        </div>
      </div>
      <div className="card-fotter">{typeRole[props.userRol]}</div>
    </StyledButton>
  );
}

Card.propTypes = {
  bgUrl: PropTypes.string,
  propertyType: PropTypes.number,
  operationType: PropTypes.number,
  price: PropTypes.number,
  adress: PropTypes.string,
  beds: PropTypes.number,
  bath: PropTypes.number,
  area: PropTypes.number,
  pets: PropTypes.bool,
  fav: PropTypes.bool,
  userRol: PropTypes.number,
};
export default Card;
