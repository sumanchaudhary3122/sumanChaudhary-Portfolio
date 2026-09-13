import React, { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const [clientsData, setClientsData] = useState({ data: [] });
  const [selectedClient, setSelectedClient] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getClientsData = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await fetch("http://localhost:8000/api/user/", {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch clients");
        }

        const data = await response.json();

        console.log("Backend Response Data:", data);

        setClientsData(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    getClientsData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminToken");

    navigate("/");
  };

  // Receive the complete client object
  const handleClientClick = (client) => {
    setSelectedClient(client);
    setOpen(true);

    navigate("/adminDash/details/" + client.id);
  };

  return (
    <div className="min-h-full px-4 py-2">
      <div className="relative mx-auto max-w-290">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-3xl font-bold">
              <h2 className="text-[#15131f]">Admin</h2>

              <span className="text-[#6552e0]">Dashboard</span>
            </div>

            <p className="mt-1 text-sm text-[#625f78]">
              Manage and respond to your clients' requests
            </p>
          </div>

          {/* Total */}
          <div
            className="
              flex min-w-20 items-center justify-center
              rounded-[13px]
              border border-white/75
              bg-white/70
              px-5 py-3
              shadow-[0_6px_20px_-8px_rgba(60,45,140,0.18)]
              backdrop-blur-md
            "
          >
            <div>
              <p className="text-xs font-medium text-[#625f78]">
                Total
              </p>

              <p className="text-2xl font-bold text-[#6552e0]">
                {clientsData.data?.length || 0}
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="
              rounded-lg
              bg-red-500
              px-4
              py-2
              text-white
              transition
              hover:bg-red-600
              active:scale-95
              hover:cursor-pointer
            "
          >
            Log Out
          </button>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[390px_1fr]">
          {/* Client List */}
          <div
            className={`
              ${!open ? "block" : "hidden md:block"}
              h-[70vh]
              overflow-hidden
              rounded-[20px]
              border border-white/75
              bg-white/60
              p-3
              shadow-[0_30px_70px_-30px_rgba(60,45,140,0.35)]
              backdrop-blur-xl
            `}
          >
            {/* Client List Header */}
            <div
              className="
                mb-3
                flex
                shrink-0
                items-center
                justify-between
                px-2
              "
            >
              <h3 className="font-semibold text-[#15131f]">
                Client Requests
              </h3>

              <span
                className="
                  rounded-full
                  bg-[#ece8fe]
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-[#6552e0]
                "
              >
                {clientsData.data?.length || 0} Requests
              </span>
            </div>

            {/* Client List */}
            <div
              className="
                h-[calc(70vh-70px)]
                overflow-y-auto
                scrollbar-none
              "
            >
              <div className="space-y-3 pr-1">
                {clientsData.data?.length > 0 ? (
                  clientsData.data.map((client) => (
                    <div
                      key={client.id}
                      onClick={() => {
                        if (window.innerWidth >= 768) {
                          handleClientClick(client);
                        }
                      }}
                      className="
                        group
                        flex
                        cursor-pointer
                        items-center
                        justify-between
                        rounded-[13px]
                        border
                        border-black/9
                        bg-white/70
                        p-3
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-[#9c8dfb]
                        hover:bg-white
                        hover:shadow-[0_6px_20px_-8px_rgba(60,45,140,0.18)]
                      "
                    >
                      {/* Client Information */}
                      <div className="flex min-w-0 items-center">
                        <img
                          src={client.image}
                          alt={client.fullName}
                          className="
                            h-12
                            w-12
                            shrink-0
                            rounded-full
                            object-cover
                            ring-2
                            ring-[#ece8fe]
                          "
                        />

                        <div className="min-w-0 pl-3">
                          <h1
                            className="
                              truncate
                              font-semibold
                              text-[#15131f]
                            "
                          >
                            {client.fullName}
                          </h1>

                          <p
                            className="
                              truncate
                              text-sm
                              text-[#625f78]
                            "
                          >
                            {client.email}
                          </p>
                        </div>
                      </div>

                      {/* Mobile View Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();

                          handleClientClick(client);
                        }}
                        className="
                          ml-2
                          rounded-lg
                          bg-[#6552e0]
                          px-4
                          py-1.5
                          text-sm
                          font-semibold
                          text-white
                          transition
                          hover:bg-[#4a3ab8]
                          active:scale-95
                          md:hidden
                        "
                      >
                        View
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="py-10 text-center">
                    <p className="text-sm text-[#625f78]">
                      No clients found
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className={open ? "block" : "hidden md:block"}>
            <DetailsCard
              setOpen={setOpen}
              open={open}
              client={selectedClient}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
