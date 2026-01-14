import React from "react";

export default function Videos(){
    return(
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
             Videos
            </h1>
          </div>
        </div>
      </div>


       <div className="container my-5">
  <div className="row g-4">
    <div className="col-md-4">
      <iframe
        className="w-100"
        height="250"
        src="https://www.youtube.com/embed/O1SKLsfcppU?si=hwxp73RlTidLgJeS"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="col-md-4">
      <iframe
        className="w-100"
        height="250"
        src="https://www.youtube.com/embed/Jl4zIPp2Uzo?si=00JQK9oBTCkoOGSP" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="col-md-4">
      <iframe
        className="w-100"
        height="250"
        src="https://www.youtube.com/embed/O1SKLsfcppU?si=hwxp73RlTidLgJeS"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="col-md-4">
      <iframe
        className="w-100"
        height="250"
        src="https://www.youtube.com/embed/Jl4zIPp2Uzo?si=00JQK9oBTCkoOGSP" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="col-md-4">
      <iframe
        className="w-100"
        height="250"
        src="https://www.youtube.com/embed/O1SKLsfcppU?si=hwxp73RlTidLgJeS"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>


        </>
    )
}