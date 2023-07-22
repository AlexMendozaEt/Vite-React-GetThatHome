import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { TbCoin } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsHouseDoor } from "react-icons/bs";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { MdOutlinePets, MdFavorite } from "react-icons/md";
import { RiCloseCircleLine, RiCoinsLine } from "react-icons/ri";

import { OwnerMenu, StyledContainer, StyledLink } from "./styles";
import Anchor from "../Anchor";
import Button from "../Button";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Image5 from "../../assets/images/image5.png";
import Image6 from "../../assets/images/image6.png";

function PropertyCard({ property, isOwner, isFavorite }) {
  const theme = useTheme();

  const {
    id,
    operation_type,
    address,
    monthly_rent,
    property_type,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    close,
  } = property;

  const photo = [Image1, Image2, Image3, Image4, Image5, Image6];

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

  return (
    <StyledContainer>
      <StyledLink to={`/property/${id}`}>
        {renderOperationType[operation_type]}
        <img
          src={photo[Math.floor(Math.random() * photo.length)]}
          className="photo"
        />
        <div className="info-title">
          <div className="info-title__rent">
            <TbCoin size={"2rem"} />
            <p>{monthly_rent}</p>
          </div>
          {renderPropertyType[property_type]}
        </div>
        <div className="info-body">{address}</div>
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
          <Anchor
            icon={<BiEdit color={theme.colors.white.standard} />}
            type="tertiary"
            to={`/property/${id}/edit`}
          >
            {close ? "RESTORE" : "EDIT"}
          </Anchor>
          <Button
            icon={
              <RiCloseCircleLine
                size={"1.5rem"}
                color={theme.colors.white.standard}
              />
            }
            type={"tertiary"}
          >
            {close ? "DELETE" : "CLOSE"}
          </Button>
        </OwnerMenu>
      ) : null}
    </StyledContainer>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object,
  isOwner: PropTypes.bool,
  isFavorite: PropTypes.bool,
  close: PropTypes.bool,
};

export default PropertyCard;
