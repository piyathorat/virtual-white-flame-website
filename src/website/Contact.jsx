import React from "react";

export default function Contact(){
    return(
        <>
        <div className="container-fluid" style={{background:"#f4f5f0"}}>
            <div className="row">
                <div className="col-12">
                    <img src="/images/contact.webp" alt="contact" className="w-100 h-75"/>
                </div>
            </div>
        </div>

      <div className="container " style={{background:"#f4f5f0"}} >
  <div className="row">
    <div className="col-6">
      <div className="card shadow border-success" style={{ width: "30rem" }}>
        <div className="card-body">
          <h3 className="card-title text-success mb-3">
            <i className="fa-solid fa-address-card me-2"></i>
            Email/Phone
          </h3>
          <p className="card-text">
            <i className="fa-solid fa-envelope text-success me-2"></i>
            sales@virtualwhiteflame.com
            <br />
            <i className="fa-solid fa-envelope-open text-success me-2"></i>
            operation.virtualwhiteflame@gmail.com
            <br />
            <i className="fa-solid fa-phone text-success me-2"></i>
            9423390308, 9420950022
          </p>
        </div>
      </div>

       <div className="card shadow border-success mt-5" style={{ width: "30rem" }}>
        <div className="card-body">
          <h3 className="card-title text-success mb-3">
            <i className="fa-solid fa-address-card me-2"></i>
             Head Office 1
          </h3>
          <p className="card-text">
            <i className="fa-solid fa-envelope text-success me-2"></i>
            sales@virtualwhiteflame.com
            <br />
             <i className="fa-solid fa-location-dot text-success me-2"></i>
          flat no.2, Plot No.1, Pushkar Appartment, Savedi, Pipeline Road, Ahmednagar 414003
          </p>
        </div>
      </div>

       <div className="card shadow border-success mt-5" style={{ width: "30rem" }}>
        <div className="card-body">
          <h3 className="card-title text-success mb-3">
            <i className="fa-solid fa-address-card me-2"></i>
            Head Office2
          </h3>
          <p className="card-text">
            <i className="fa-solid fa-location-dot text-success me-2"></i>
         Shoop no  01, Plot No. 97, Sector 20, Ulwe Node, Navi Mumbai - 41020
          </p>
        </div>
      </div>
    </div>

    <div className="col-6">
         <div className="card shadow border-success">
        <div className="card-body">
          <h4 className="card-title text-success mb-4 text-center">
            <i className="fa-solid fa-paper-plane me-2"></i>
            Send A Message
          </h4>

          <form>
            <div className="mb-3">
              <label className="form-label">
                <i className="fa-solid fa-user me-2 text-success"></i>
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name Here"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa-solid fa-envelope me-2 text-success"></i>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Here"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa-solid fa-heading me-2 text-success"></i>
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa-solid fa-comment-dots me-2 text-success"></i>
                Comments
              </label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Comments"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">
                <i className="fa-solid fa-paper-plane me-2"></i>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  </div>



        </>
    )
}