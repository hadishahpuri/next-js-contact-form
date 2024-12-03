import { Contact } from "@/app/types/contact";
import React from "react";
import states from "../../mock/states.json" with { type: "json" };

type ContactFormProps = {
  contact: Contact | undefined;
  setCurrentContact: React.Dispatch<React.SetStateAction<Contact | undefined>>;
  onChange: (contact: Contact) => void;
};

export default function ContactForm({
  contact,
  setCurrentContact,
  onChange,
}: ContactFormProps) {
  const statesObj: Record<string, string> = states;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setCurrentContact((prev) =>
      prev ? { ...prev, [name]: value } : undefined,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const values: Partial<Contact> = {};
    formData.forEach((value, key) => {
      (values as Record<string, string>)[key] = value as string;
    });

    onChange(values as Contact);
  };

  const labelClass =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <form onSubmit={handleSubmit} className={contact ? "mt-4" : "mt-4 hidden"}>
      <h3>Update contact #{contact?.id}</h3>
      <input type="hidden" name="id" id="id" value={contact?.id} />
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name
          </label>
          <input
            name="firstName"
            type="text"
            value={contact?.firstName}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name
          </label>
          <input
            name="lastName"
            type="text"
            value={contact?.lastName}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            name="email"
            type="email"
            value={contact?.email}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className={labelClass}>
            Phone number
          </label>
          <input
            name="phoneNumber"
            type="text"
            value={contact?.phoneNumber}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="birthDate" className={labelClass}>
            Date of birth
          </label>
          <input
            name="birthDate"
            type="text"
            value={contact?.birthDate}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input
            name="city"
            type="text"
            value={contact?.city}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>
            State
          </label>
          <select
            name="state"
            value={contact?.state}
            className={inputClass}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            {Object.keys(statesObj).map((key) => (
              <option
                key={key}
                value={statesObj[key]}
                selected={contact?.state === statesObj[key]}
              >
                {statesObj[key]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zipCode" className={labelClass}>
            Zip code
          </label>
          <input
            name="zipCode"
            type="text"
            value={contact?.zipCode}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="streetAddress" className={labelClass}>
            Street address
          </label>
          <input
            name="streetAddress"
            type="text"
            value={contact?.streetAddress}
            className={inputClass}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Update Contact
      </button>
    </form>
  );
}
