import React from "react";

export default function Footer(){
    return(
        <>
        <footer
  className="container-fluid text-light mt-5 pt-5 pb-3"
  style={{ background: "forestgreen" }}
>
  <div className="container">
    <div className="row">
      {/* Contact Us */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-uppercase mb-3 border-bottom pb-2">
          Contact Us
        </h5>
        <p className="mb-1">9423390308, 9420950022</p>
        <p className="mb-1">sales@virtualwhiteflame.com</p>
      </div>

      {/* About Us */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-uppercase mb-3 border-bottom pb-2">
          About Us
        </h5>
        <ul className="list-unstyled">
          <li>Vision & Mission</li>
          <li>Company History</li>
          <li>FAQ’s</li>
          <li>Blogs</li>
          <li>Feedback</li>
          <li>Terms & Condition</li>
          <li>Privacy & Policy</li>
        </ul>
      </div>

      {/* Get In Touch */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-uppercase mb-3 border-bottom pb-2">
          Get In Touch
        </h5>
        <p className="mb-1">
          🏠 Flat No.2, Plot No.1, Pushkar Appartment,
          <br />
          Savedi, Pipeline Road, Ahmednagar 414003
        </p>
        <p className="mb-0">📧 operation.virtualwhiteflame@gmail.com</p>
      </div>

      {/* Quick Links + Social Media */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-uppercase mb-3 border-bottom pb-2">
          Quick Links
        </h5>
        {/* Social Icons */}
      <div className="d-flex gap-3 fs-4 social-icons">
  <a
    href="https://wa.me/9423390308"
    className="text-light"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  <a
    href="https://www.facebook.com/virtualwhiteflame"
    className="text-light"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-facebook"></i>
  </a>

  <a
    href="https://www.instagram.com/virtualwhiteflame"
    className="text-light"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a
    href="https://www.youtube.com/@VirtualWhiteFlameTeam"
    className="text-light"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-youtube"></i>
  </a>
</div>

      </div>
    </div>

    <hr className="border-light" />

    <div className="text-center">
      <p className="mb-0 small">
        © 2025 <strong>Virtual White Flame PVT. LTD.</strong> — All rights
        reserved.
      </p>
    </div>
  </div>
</footer>
        </>
    )
}