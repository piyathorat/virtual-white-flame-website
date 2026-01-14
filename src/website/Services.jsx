import React from "react";
import { useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();

  const isUnderWorking =
    location.pathname === "/services/operation" ||
    location.pathname === "/services/other";

  // 🚧 Under Working view
  if (isUnderWorking) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/images/under-working.webp"
          alt="Under Working"
          style={{ maxWidth: "800px", width: "100%" }}
        />
        <h3 className="mt-3 text-secondary">
          This service is under development 🚧
        </h3>
      </div>
    );
  }

  // ✅ MAIN SERVICES CONTENT (तुझा existing code)
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <img
              src="https://virtualwhiteflame.com/uploads/172086021849659198.jpeg"
              alt="Biomass Supply"
              className="w-100"
              style={{
                height: "60vh",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <h1 className="text-success fw-bold">
              Biomass Supply Management
            </h1>
            <p className="mt-3 text-secondary" style={{ textAlign: "justify" }}>
              We work closely with Biomass producers, suppliers, and growers to
              source high-quality biomass feedstocks, including agricultural
              residues, forestry residues, energy crops, and organic waste.
            </p>
            <img
              src="https://virtualwhiteflame.com/uploads/172129166320610805.jpeg"
              alt="Biomass Supply"
              className="img-fluid rounded shadow mt-4"
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <h2 className="text-center mb-4 text-success fw-bold">
              Service Category
            </h2>

            <table className="table table-hover text-center align-middle shadow-lg rounded overflow-hidden">
              <thead>
                <tr className="bg-success text-white">
                  <th scope="col">Service Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Biomass Supply Management</td>
                </tr>
                <tr className="table-light">
                  <td>Biomass Briquettes &amp; Pellets Manufacture</td>
                </tr>
                <tr>
                  <td>
                    Build Own Operate &amp; Transfer for Boiler &amp;
                    Co-Generation Plant
                  </td>
                </tr>
                <tr className="table-light">
                  <td>Operation &amp; Management</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
