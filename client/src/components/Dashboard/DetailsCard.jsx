import { Check, Trash } from "lucide-react";
import React from "react";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const DetailsCard = ({ setOpen, client }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    setOpen(false);
    navigate("/adminDash");
  };


  if (!client) {
    return (
      <div
        className="
          flex
          h-[70vh]
          items-center
          justify-center
          rounded-[20px]
          border
          border-white/75
          bg-white/60
          shadow-[0_30px_70px_-30px_rgba(60,45,140,0.35)]
          backdrop-blur-xl
        "
      >
        <p className="text-center text-[#625f78]">
          Select a client to see their details.
        </p>
      </div>
    );
  }

  
  return (
    <div
      className="
        rounded-[20px]
        border border-white/75
        bg-white/60
        p-8
        shadow-[0_30px_70px_-30px_rgba(60,45,140,0.35)]
        backdrop-blur-xl
        md:h-[70vh]
        md:p-7
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-black/10
          pb-5
        "
      >
        <div className="flex items-center">
          <img
            src={client.profileImage}
            alt={client.fullName}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="pl-3">
            <h1 className="font-bold text-[#15131f]">{client.fullName}</h1>
            <p className="text-sm text-[#625f78]">{client.email}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="
              rounded
              bg-green-300
              p-1
              text-white
              hover:bg-green-400
            "
          >
            <Check size={20} />
          </button>
          <button
            type="button"
            className="
              rounded
              bg-red-400
              p-1
              text-white
              hover:bg-red-500
            "
          >
            <Trash size={20} />
          </button>
        </div>
        <button
          onClick={handleBack}
          className="
            rounded
            bg-blue-400
            px-2
            py-1
            text-white
            hover:cursor-pointer
            hover:shadow-[0_6px_20px_-8px_rgba(60,45,140,0.18)]
            hover:-translate-y-0.5
            md:hidden
          "
        >
          Back
        </button>
      </div>
      <div className="space-y-5 py-6">
        <div>
          <label className="mb-2 block text-xs font-semibold">EMAIL</label>
          <input
            type="email"
            value={client.email || ""}
            readOnly
            className="
              h-10
              w-full
              rounded-[13px]
              border
              bg-white/80
              px-4
            "
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold">PHONE</label>
          <input
            type="tel"
            value={client.phone || ""}
            readOnly
            className="
              h-10
              w-full
              rounded-[13px]
              border
              bg-white/80
              px-4
            "
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold">LOCATION</label>
          <input
            type="text"
            value={client.location || ""}
            readOnly
            className="
              h-10
              w-full
              rounded-[13px]
              border
              bg-white/80
              px-4
            "
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold">
            PROJECT DESCRIPTION
          </label>
          <textarea
            value={client.description || ""}
            readOnly
            className="
              w-full
              resize-none
              rounded-[13px]
              border
              bg-white/80
              p-4
            "
          />
        </div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            client.email || "",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mx-auto
            flex
            h-10
            w-1/2
            items-center
            justify-center
            gap-2
            rounded-[13px]
            bg-[#6552e0]
            font-semibold
            text-white
            md:w-1/3
          "
        >
          <CiMail />
          Reply via Mail
        </a>
      </div>
    </div>
  );
};
export default DetailsCard;