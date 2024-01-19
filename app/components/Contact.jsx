import React from "react";
const Contact = () => {
  return (
    <div className="w-full sm:w-[360px] bg-white text-gray-800 p-8 m-5">
      <h1 className="text-2xl text-center mb-3">
        Scopri subito <br /> come iniziare
      </h1>
      <input
        type="text"
        className="w-full border-b border-gray-600 py-2 mb-3"
        placeholder="Nome"
      />
      <input
        type="text"
        className="w-full border-b border-gray-600 py-2 mb-3"
        placeholder="Cognome"
      />
      <input
        type="text"
        className="w-full border-b border-gray-600 py-2 mb-3"
        placeholder="Telefono"
      />
      <input
        type="text"
        className="w-full border-b border-gray-600 py-2 mb-3"
        placeholder="Email"
      />
      <input
        type="text"
        className="w-full border-b border-gray-600 py-2 mb-3"
        placeholder="Provincia"
      />
      <input
        type="text"
        className="w-full border-b border-gray-600 py-2 mb-3"
        placeholder="Codice Postale"
      />
      <div className="flex flex-row my-5">
        <input type="checkbox" name="" id="" className="text-2xl" />
        <h1 className="ml-2 text-sm">
          Ho letto e accetto la Politica <br /> sulla privacy
        </h1>
      </div>
      <button className="w-full text-white text-lg p-2 rounded-md bg-[#ff5709b6] border border-orange-500">
        Invia
      </button>
    </div>
  );
};

export default Contact;
