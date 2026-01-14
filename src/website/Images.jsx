import React, { useState } from "react";

export default function Images() {
  const [category, setCategory] = useState("all");

  // 🖼️ Gallery images with categories
  const images = [
    { src: "https://images.theconversation.com/files/365954/original/file-20201027-23-192ozcj.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=400&fit=crop&dpr=2", category: "social" },
    { src: "https://c8.alamy.com/comp/BP77B8/vintage-threshing-machine-BP77B8.jpg", category: "machineries" },
    { src: "https://tse2.mm.bing.net/th/id/OIP.TmT3E9hnc4-gBz9seA-IJAHaE7?pid=Api&P=0&h=180", category: "machineries" },
    { src: "https://tse2.mm.bing.net/th/id/OIP.TmT3E9hnc4-gBz9seA-IJAHaE7?pid=Api&P=0&h=180", category: "machineries" },
    { src: "https://live.staticflickr.com/4664/39657057445_6a751c8210_b.jpg", category: "social" },
    { src: "https://tse4.mm.bing.net/th/id/OIP.P6cSo03XNhhX7Mx1OnVkxAHaEK?pid=Api&P=0&h=180", category: "social" },
     { src: "https://cf.ltkcdn.net/seniors/images/orig/235654-1600x1030-ideas-fun-activities-elderly.jpg", category: "social" },

     { src: "https://www.indianpeopletimes.com/wp-content/uploads/2018/07/organic-farming-future-india.png", category: "product" },
     { src: "https://tse1.mm.bing.net/th/id/OIP.Zbi1EHMZU9_K4R4uXSaXpQHaE8?pid=Api&P=0&h=180", category: "product" },

     { src: "https://tse4.mm.bing.net/th/id/OIP.i19xXHsn9bLaUEgmoYv60wHaE8?pid=Api&P=0&h=180", category: "product" },
     { src: "https://tse4.mm.bing.net/th/id/OIP.lRKS8NpDp-mlRRp7XG_y8QHaE8?pid=Api&P=0&h=180", category: "product" },
     { src: "https://plantly.io/wp-content/uploads/2023/12/var.webp", category: "product" },
{ src: "https://static.vecteezy.com/system/resources/previews/003/115/104/non_2x/asian-rice-in-wooden-spoon-free-photo.jpg", category: "product" },
  ];

  // ✅ Filter logic
  const filteredImages =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);

  return (
    <>
      {/* Top Banner */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 position-relative">
            <img
              src="https://virtualwhiteflame.com/uploads/172085244537382017.png"
              alt="Gallery Banner"
              className="w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <h1
              className="position-absolute text-white fw-bold"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "60px",
              }}
            >
              Gallery
            </h1>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container text-center my-5">
        <button
          className={`btn mx-2 ${category === "all" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("all")}
        >
          Show All
        </button>
        <button
          className={`btn mx-2 ${category === "machineries" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("machineries")}
        >
          Machineries
        </button>
        <button
          className={`btn mx-2 ${category === "social" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("social")}
        >
          Social Activities
        </button>
        <button
          className={`btn mx-2 ${category === "product" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("product")}
        >
          Product
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="container">
        <div className="row">
          {filteredImages.map((img, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src={img.src}
                  alt="gallery"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>



    </>
  );
}
