import Input from "../../components/Input";
import Button from "../../components/Button";
import HeaderLandlord from "../../components/HeaderLandlord";
import Container from "../../layout/Container";
import { StyledContainer } from "./styles";
import { HiMagnifyingGlass } from "react-icons/hi2";
import InputWithIcon from "../../components/InputWithIcon";
import { TbCoin } from "react-icons/tb";
function CreatePropertyPage() {
  return (
    <>
      <HeaderLandlord />
      <main>
        <Container size="xl">
          <StyledContainer>
            <h1>Create a property listing</h1>
            <div>*****operation type******</div>
            <form className="form">
              <InputWithIcon
                label={"ADDRESS"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isfullwidth={"true"}
                name="address"
                type="text"
                placeholder="start typing to autocomplete"
              />

              <InputWithIcon
                label="MONTLY RENT"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                placeholder="2000"
              />
              <InputWithIcon
                label="MAINTANANCE"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                placeholder="100"
              />
              <Input label="PROPERTY TYPE" type="checkbox" />
              <Input label="Apartment" type="checkbox" />
              <Input label="House" type="checkbox" />

              <label>
                BEDROOMS
                <select>
                  <option value="" disabled selected>
                    select...
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label>
                BATHROOMS
                <select>
                  <option value="" disabled selected>
                    select...
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label for="area">AREA IN M2</label>
              <Input type="number" id="area" placeholder="##"></Input>
              <br />
              <div>
                <label>PETS ALLOWED</label>
                <Input type="checkbox"></Input>
              </div>
              <blockquote>
                Allowing pets increases the likehood of renters liking the
                property by 9001%. It also makes you a better person.
              </blockquote>
              <label>
                ABOUT THIS PROPERTY
                <input
                  type="text"
                  placeholder="My Apartment is great because..."
                />
                <Input
                  type="text"
                  placeholder="My Apartment is great because..."
                ></Input>
                <blockquote>
                  Renters will read this first, so highlight any features or
                  important information the apartment has.
                </blockquote>
              </label>
              <h3>Photos</h3>
              <label> Upload as many photos as you wish</label>
              <br />
              <Button>choose a file</Button>

              <blockquote>Only images, max 5MB</blockquote>
              <div>aqui se cargan las fotos</div>
              <Button>PUBLISH PROPERTY LISTING</Button>
            </form>
          </StyledContainer>
        </Container>
      </main>
    </>
  );
}

export default CreatePropertyPage;
