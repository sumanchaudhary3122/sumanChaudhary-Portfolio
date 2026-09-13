import { Check, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const DetailsCard = ({ setOpen }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await fetch("http://localhost:8000/api/user/", {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch client");
        }
        const database = await response.json();
        setData(database);
        
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  const handleBack = () => {
    setOpen(false);
    navigate("/adminDash");
  };
  if (loading) {
    return <p>Loading client...</p>;
  }
  if (!data) {
    return (
      <p className="text-center">
        Select the Clients to see their Data...........
      </p>
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
      <div className="flex items-center justify-between border-b border-black/10 pb-5">
        <div className="flex items-center">
          <img
            src={data.profileImage}
            alt={data.fullName}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="pl-3">
            <h1 className="font-bold">{data.name}</h1>
          </div>
        </div>
        <div className="flex space-x-2">
          <Check className="bg-green-300 text-white" />
          <Trash className="bg-red-400 text-white px-1" />
        </div>
        <button
          onClick={handleBack}
          className="rounded bg-blue-400 px-2 py-1 text-white md:hidden    hover:shadow-[0_6px_20px_-8px_rgba(60,45,140,0.18)]  hover:-translate-y-0.5
                        hover:border-[#9c8dfb] hover:cursor-pointer "
        >
          Back
        </button>
      </div>
      <div className="space-y-5 py-6">
        <div>
          <label className="mb-2 block text-xs font-semibold">EMAIL</label>
          <input
            type="email"
            value={data.email}
            readOnly
            className="h-10 w-full rounded-[13px] border bg-white/80 px-4"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold">PHONE</label>
          <input
            type="tel"
            value={data.phone || ""}
            readOnly
            className="h-10 w-full rounded-[13px] border bg-white/80 px-4"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold">LOCATION</label>
          <input
            type="text"
            value={data.location || ""}
            readOnly
            className="h-10 w-full rounded-[13px] border bg-white/80 px-4"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold">
            PROJECT DESCRIPTION
          </label>
          <textarea
            value={data.description || ""}
            readOnly
            className="w-full resize-none rounded-[13px] border bg-white/80 p-4"
          />
        </div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            data.email,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex h-10 w-1/2 items-center justify-center gap-2 rounded-[13px] bg-[#6552e0] font-semibold text-white md:w-1/3"
        >
          <CiMail />
          Reply via Mail
        </a>
      </div>
    </div>
  );
};
export default DetailsCard;
