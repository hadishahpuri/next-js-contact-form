"use client";
import React, { useEffect, useState } from "react";
import ContactTable from "./components/ContactTable/ContactTable";
import SearchForm from "./components/ContactTable/SearchForm";
import contactsData from "./mock/contacts.json" with { type: "json" };
import { Contact, Filters } from "./types/contact";
import ContactForm from "./components/ContactForm/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [searchFilters, setSearchFilters] = useState<Filters>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    city: "",
    state: "",
    zipCode: "",
    streetAddress: "",
  });
  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(
    undefined,
  );

  const updateContact = (contact: Contact) => {
    setContacts((prevContacts) =>
      prevContacts.map((item) =>
        item.id == contact.id ? { ...item, ...contact } : item,
      ),
    );
    toast.success("Contact updated successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSearch = () => {
    const filtered = contacts.filter((contact) =>
      Object.entries(searchFilters).every(([key, value]) =>
        value
          ? contact[key as keyof Contact]
              ?.toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : true,
      ),
    );
    setContacts(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchFilters]);

  const columns = [
    { header: "ID", accessor: "id", unique: true },
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
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <SearchForm
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />
      <ContactTable
        columns={columns}
        data={contacts}
        onEdit={(data: Contact) => setSelectedContact(data)}
      />
      <ContactForm
        contact={selectedContact}
        setCurrentContact={setSelectedContact}
        onChange={updateContact}
      />
    </div>
  );
}
