import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { TbCoin } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsHouseDoor, BsArrowBarUp, BsFillTrashFill } from "react-icons/bs";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { MdOutlinePets, MdFavorite } from "react-icons/md";
import { RiCloseCircleLine, RiCoinsLine } from "react-icons/ri";

import DefaultImage from "../../assets/images/default-image.png";
import { OwnerMenu, StyledContainer, StyledLink } from "./styles";
import Anchor from "../Anchor";
import Button from "../Button";
import {
  deleteProperty,
  updateCloseProperty,
  updateRestoreProperty,
} from "../../services/property-service";

function PropertyCard({ property, isOwner, isFavorite, handleDeleteProperty }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    id,
    operation_type,
    address,
    district,
    state,
    monthly_rent,
    property_type,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    close,
    images,
  } = property;

  const handleRestore = () => {
    updateRestoreProperty(id)
      .then(navigate(0))
      .catch((e) => console.log(e));
  };

  const handleClose = () => {
    updateCloseProperty(id)
      .then(navigate(0))
      .catch((e) => console.log(e));
  };

  const handleDelete = () => {
    deleteProperty(id)
      .then(() => handleDeleteProperty(id))
      .catch((e) => console.log(e));
  };

  const renderPropertyType = {
    apartment: (
      <div className="info-title__type">
        <HiOutlineBuildingOffice2 size={"1.5rem"} />
        <p>Apartment</p>
      </div>
    ),
    home: (
      <div className="info-title__type">
        <BsHouseDoor size={"1.5rem"} />
        <p>House</p>
      </div>
    ),
  };

  const renderOperationType = {
    rent: (
      <div className="operation-type">
        <RiCoinsLine color={theme.colors.white.standard} size={"1.25rem"} />
        <p>For Rental</p>
      </div>
    ),
    sale: (
      <div className="operation-type">
        <TbCoin color={theme.colors.white.standard} size={"1.25rem"} />
        <p>For Sale</p>
      </div>
    ),
  };

  const renderFirstElement = {
    edit: (
      <Anchor
        icon={<BiEdit color={theme.colors.white.standard} size={"1.5rem"} />}
        type="tertiary"
        to={`/property/edit/${id}`}
      >
        EDIT
      </Anchor>
    ),
    restore: (
      <Button
        icon={
          <BsArrowBarUp size={"1.5rem"} color={theme.colors.white.standard} />
        }
        type={"tertiary"}
        onClick={handleRestore}
      >
        RESTORE
      </Button>
    ),
  };

  const renderSecondElement = {
    close: (
      <Button
        icon={
          <RiCloseCircleLine
            size={"1.5rem"}
            color={theme.colors.white.standard}
          />
        }
        type={"tertiary"}
        onClick={handleClose}
      >
        CLOSE
      </Button>
    ),
    delete: (
      <Button
        icon={
          <BsFillTrashFill
            size={"1.5rem"}
            color={theme.colors.white.standard}
          />
        }
        type={"tertiary"}
        onClick={handleDelete}
      >
        DELETE
      </Button>
    ),
  };

  return (
    <StyledContainer>
      <StyledLink
        to={`/property/detail/${id}`}
        className={isOwner ? "property-with-owner-menu" : ""}
      >
        {renderOperationType[operation_type]}
        {images ? (
          <img src={images[0]} className="photo" />
        ) : (
          <img src={DefaultImage} className="photo" />
        )}
        <div className="info-title">
          <div className="info-title__rent">
            <TbCoin size={"2rem"} />
            <p>{monthly_rent}</p>
          </div>
          {renderPropertyType[property_type]}
        </div>
        <div className="info-address">{`${address}, ${district}, ${state}`}</div>
        <div className="info-footer">
          <div className="info-footer__icons">
            <div className="info-footer__icon">
              <BiBed size={"1.5rem"} />
              <p>{bedrooms}</p>
            </div>
            <div className="info-footer__icon">
              <BiBath size={"1.5rem"} />
              <div>{bathrooms}</div>
            </div>
            <div className="info-footer__icon">
              <BiArea size={"1.5rem"} />
              <div>{area}</div>
            </div>
            {pets_allowed ? <MdOutlinePets /> : null}
          </div>
          {isFavorite ? (
            <MdFavorite size={"1.5rem"} color={theme.colors.pink[500]} />
          ) : null}
        </div>
      </StyledLink>
      {isOwner ? (
        <OwnerMenu>
          {close ? renderFirstElement.restore : renderFirstElement.edit}
          {close ? renderSecondElement.delete : renderSecondElement.close}
        </OwnerMenu>
      ) : null}
    </StyledContainer>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object,
  handleDeleteProperty: PropTypes.func,
  setProperties: PropTypes.func,
  isOwner: PropTypes.bool,
  isFavorite: PropTypes.bool,
  close: PropTypes.bool,
};

export default PropertyCard;
