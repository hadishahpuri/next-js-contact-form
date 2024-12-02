"use client";
import React, { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactTable from "./components/ContactTable/ContactTable";
import SearchForm from "./components/ContactTable/SearchForm";
import contactsData from "./mock/contacts.json" with { type: "json" };

export default function ContactPage() {
  const [nameSearchTerm, setNameSearchTerm] = useState("");
  const [lastNameSearchTerm, setLastNameSearchTerm] = useState("");
  const [emailSearchTerm, setEmailSearchTerm] = useState("");
  const [phoneNumberSearchTerm, setPhoneNumberSearchTerm] = useState("");
  const [birthDateSearchTerm, setBirthDateSearchTerm] = useState("");
  const [citySearchTerm, setCitySearchTerm] = useState("");
  const [stateSearchTerm, setStateSearchTerm] = useState("");
  const [zipCodeSearchTerm, setZipCodeSearchTerm] = useState("");
  const [streetSearchTerm, setStreetSearchTerm] = useState("");
  const [contacts, setContacts] = useState(contactsData);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) &&
      contact.lastName
        .toLowerCase()
        .includes(lastNameSearchTerm.toLowerCase()) &&
      contact.email.toLowerCase().includes(emailSearchTerm.toLowerCase()) &&
      contact.phoneNumber
        .toLowerCase()
        .includes(phoneNumberSearchTerm.toLowerCase()) &&
      contact.birthDate.includes(birthDateSearchTerm) &&
      contact.city.toLowerCase().includes(citySearchTerm.toLowerCase()) &&
      contact.state.toLowerCase().includes(stateSearchTerm.toLowerCase()) &&
      contact.zipCode.toLowerCase().includes(zipCodeSearchTerm.toLowerCase()) &&
      contact.streetAddress
        .toLowerCase()
        .includes(streetSearchTerm.toLowerCase()),
  );

  const columns = [
    { header: "ID", accessor: "id" },
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
      <SearchForm
        nameSearchTerm={nameSearchTerm}
        setNameSearchTerm={setNameSearchTerm}
        lastNameSearchTerm={lastNameSearchTerm}
        setLastNameSearchTerm={setLastNameSearchTerm}
        emailSearchTerm={emailSearchTerm}
        setEmailSearchTerm={setEmailSearchTerm}
        phoneNumberSearchTerm={phoneNumberSearchTerm}
        setPhoneNumberSearchTerm={setPhoneNumberSearchTerm}
        birthDateSearchTerm={birthDateSearchTerm}
        setBirthDateSearchTerm={setBirthDateSearchTerm}
        citySearchTerm={citySearchTerm}
        setCitySearchTerm={setCitySearchTerm}
        stateSearchTerm={stateSearchTerm}
        setStateSearchTerm={setStateSearchTerm}
        zipCodeSearchTerm={zipCodeSearchTerm}
        setZipCodeSearchTerm={setZipCodeSearchTerm}
        streetSearchTerm={streetSearchTerm}
        setStreetSearchTerm={setStreetSearchTerm}
      />
      <ContactTable columns={columns} data={filteredContacts} />
    </div>
  );
}
