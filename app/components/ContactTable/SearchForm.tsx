import React, { useState } from "react";

type SearchFormProps = {
  onSearch: (term: string) => void;
};

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [term, setTerm] = useState("");

  const handleSearch = (e: any) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <form>
        <input
          type="text"
          placeholder="Search contacts..."
          value={term}
          className="border px-4 py-2 w-full"
        />
        <button onClick={handleSearch}></button>
      </form>
    </div>
  );
}
