import React, { useRef } from "react";
import Autocomplete from "react-google-autocomplete";

function AddressAutocomplete({ handleSelect }) {
  const onPlaceSelected = (place) => {
    // console.dir(place.address_components);
    handleSelect(place);
  };

  return (
    <Autocomplete
      apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      onPlaceSelected={onPlaceSelected}
      options={{ fields: ["address_components", "geometry"] }}
      fields={["address_components", "geometry"]}
      types={["address"]}
    />
  );
}

export default AddressAutocomplete;
