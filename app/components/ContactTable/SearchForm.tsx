import React, { useState } from "react";
import states from "../../mock/states.json" with { type: "json" };

type SearchFormProps = {
  nameSearchTerm: string;
  setNameSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  lastNameSearchTerm: string;
  setLastNameSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  emailSearchTerm: string;
  setEmailSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  phoneNumberSearchTerm: string;
  setPhoneNumberSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  birthDateSearchTerm: string;
  setBirthDateSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  citySearchTerm: string;
  setCitySearchTerm: React.Dispatch<React.SetStateAction<string>>;
  stateSearchTerm: string;
  setStateSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  zipCodeSearchTerm: string;
  setZipCodeSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  streetSearchTerm: string;
  setStreetSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({
  nameSearchTerm,
  setNameSearchTerm,
  lastNameSearchTerm,
  setLastNameSearchTerm,
  emailSearchTerm,
  setEmailSearchTerm,
  phoneNumberSearchTerm,
  setPhoneNumberSearchTerm,
  birthDateSearchTerm,
  setBirthDateSearchTerm,
  citySearchTerm,
  setCitySearchTerm,
  stateSearchTerm,
  setStateSearchTerm,
  zipCodeSearchTerm,
  setZipCodeSearchTerm,
  streetSearchTerm,
  setStreetSearchTerm,
}: SearchFormProps) {
  const setTerm = (e: any, setter: any) => {
    setter(e.target.value);
  };

  return (
    <div className="mb-4">
      <h4>Filter contacts</h4>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={nameSearchTerm}
          onChange={(e: any) => setTerm(e, setNameSearchTerm)}
          className="border px-4 py-2 mx-2"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastNameSearchTerm}
          onChange={(e: any) => setTerm(e, setLastNameSearchTerm)}
          className="border px-4 py-2 mx-2"
        />
        <input
          type="text"
          placeholder="Email"
          value={emailSearchTerm}
          onChange={(e: any) => setTerm(e, setEmailSearchTerm)}
          className="border px-4 py-2 mx-2"
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumberSearchTerm}
          onChange={(e: any) => setTerm(e, setPhoneNumberSearchTerm)}
          className="border px-4 py-2 mx-2"
        />
        <input
          type="text"
          placeholder="Date of birth (e.g 1950-10-08)"
          value={birthDateSearchTerm}
          onChange={(e: any) => setTerm(e, setBirthDateSearchTerm)}
          className="border px-4 py-2 mx-2"
        />
        <input
          type="text"
          placeholder="City"
          value={citySearchTerm}
          onChange={(e: any) => setTerm(e, setCitySearchTerm)}
          className="border px-4 py-2 mx-2"
        />
        <label htmlFor="state">State</label>
        <select
          name="state"
          value={stateSearchTerm}
          onChange={(e: any) => setTerm(e, setStateSearchTerm)}
          className="border px-4 py-2 mx-2"
        >
          <option value="">Select...</option>
          {Object.keys(states).map((key) => (
            <option key={key} value={states[key]}>
              {states[key] as string}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Zip/Postal code"
          value={zipCodeSearchTerm}
          onChange={(e: any) => setTerm(e, setZipCodeSearchTerm)}
          className="border px-4 py-2 mx-2 mt-2"
        />
        <input
          type="text"
          placeholder="Street address"
          value={streetSearchTerm}
          onChange={(e: any) => setTerm(e, setStreetSearchTerm)}
          className="border px-4 py-2 mx-2"
        />
      </form>
    </div>
  );
}
