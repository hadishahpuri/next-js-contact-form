import React from "react";
import states from "../../mock/states.json" with { type: "json" };
import { Filters } from "@/app/types/contact";

type SearchFormProps = {
  searchFilters: Filters;
  setSearchFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function SearchForm({
  searchFilters,
  setSearchFilters,
}: SearchFormProps) {
  const statesObj: Record<string, string> = states;

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="mb-4">
      <h4>Filter contacts</h4>
      <form>
        <input
          name="firstName"
          type="text"
          placeholder="Name"
          value={searchFilters.firstName}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          value={searchFilters.lastName}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={searchFilters.email}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          value={searchFilters.phoneNumber}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
        <input
          name="birthDate"
          type="text"
          placeholder="Date of birth (e.g 1950-10-08)"
          value={searchFilters.birthDate}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={searchFilters.city}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
        <label htmlFor="state">State</label>
        <select
          name="state"
          value={searchFilters.state}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        >
          <option value="">Select...</option>
          {Object.keys(statesObj).map((key) => (
            <option key={key} value={statesObj[key]}>
              {statesObj[key]}
            </option>
          ))}
        </select>
        <input
          name="zipCode"
          type="text"
          placeholder="Zip/Postal code"
          value={searchFilters.zipCode}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2 mt-2"
        />
        <input
          name="streetAddress"
          type="text"
          placeholder="Street address"
          value={searchFilters.streetAddress}
          onChange={handleFilterChange}
          className="border px-4 py-2 mx-2"
        />
      </form>
    </div>
  );
}
