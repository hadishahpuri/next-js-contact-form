"use client";
import React, { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactTable from "./components/ContactTable/ContactTable";
import SearchForm from "./components/ContactTable/SearchForm";
import contactsData from "./mock/contacts.json" with { type: "json" };

export default function ContactPage() {
  const [nameSearchTerm, setNameSearchTerm] = useState("");
  const [streetSearchTerm, setStreetSearchTerm] = useState("");
  const [citySearchTerm, setCitySearchTerm] = useState("");
  const [stateSearchTerm, setStateSearchTerm] = useState("");
  const [contacts, setContacts] = useState(contactsData);

  const handleSearch = (term: string) => {
    setNameSearchTerm(term);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()),
  );

  const columns = [
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Email", accessor: "email" },
    { header: "Phone Number", accessor: "phoneNumber" },
    { header: "Date of birth", accessor: "birthDate" },
    { header: "City", accessor: "city" },
    { header: "State", accessor: "state" },
    { header: "Zip code", accessor: "zipCode" },
    { header: "Street address", accessor: "streetAddress" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <ContactForm
        onAdd={(newContact) => setContacts([...contactsData, newContact])}
      />
      <SearchForm onSearch={handleSearch} />
      <ContactTable columns={columns} data={filteredContacts} />
    </div>
  );
}
