import React from "react";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-light">
            <div
              id="sl"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              {/* ✅ Carousel indicators */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#sl"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                ></button>
                <button type="button" data-bs-target="#sl" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#sl" data-bs-slide-to="2"></button>
              </div>

              {/* ✅ Carousel images */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/home-slider1.webp"
                    className="d-block w-100 h-50"
                    alt="Slide 1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="images/home-slider2.webp"
                    className="d-block w-100 h-50"
                    alt="Slide 2"
                  />
                </div>
              </div>

              {/* ✅ Carousel controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#sl"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#sl"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* about  */}
     <div className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-6 mb-4 mb-md-0">
      <img
        src="/images/aboout.webp"
        alt="About Virtual White Flame"
        className="img-fluid rounded shadow"
      />
    </div>

    <div className="col-md-6">
      <h3 className="text-success fw-bold fs-4">About Us</h3>
      <h1 className="text-warning fw-bold mb-3">
        Virtual White Flame PVT. LTD.
      </h1>

      <p className="fw-semibold fs-5 text-justify">
        Virtual White Flame PVT. LTD. is a leading Biomass Briquettes/Biomass
        Pellets manufacturer & supplier covering major regions of India.
        The company was established in 2013 under the name Seva Bio Brikets
        with a dynamic management team. All directors have more than 12 years
        of business experience. We help in converting all types of industrial,
        agricultural, and forestry waste into solid fuel. Considering the
        market demand for Briquettes and to improve customer service, Virtual
        White Flame PVT. LTD. was established in 2017.
      </p>

      <button className="btn2 btn-outline-success mt-3 px-4 py-2 fw-bold">
        Read More
      </button>
    </div>
  </div>
</div>


{/* plants  */}
<div className="container">
  <div className="row">
    <div className="col-12">
      <h1 className="text-center text-danger">Plants</h1>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-6">
      <div className="allcard card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://tse2.mm.bing.net/th/id/OIP.XrGVljajcLZhvJGUD-Sc7gHaE7?pid=Api&P=0&h=180" className="img-fluid rounded-start " alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Balaji Bio Fuels</h5>
        <p className="card-text">📍 Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122</p>
        <p>📞 9322165092</p>
        <p>✉️ operation.virtualwhiteflame@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>

        <div className="col-6">
      <div className="allcard card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://tse4.mm.bing.net/th/id/OIP.31XUP0_m5y1AMeRoI44lkgHaHG?pid=Api&P=0&h=180" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
         <h5 className="card-title">
Virtual White Flame PVT. LTD.</h5>
        <p className="card-text">📍  Bodhegoan, Shevgoan, Ahmednagar , Maharashtra </p>
        <p>📞 9322165092</p>
        <p>✉️  Bodhegoan, Shevgoan, Ahmednagar , Maharashtra 414001</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>

  <div className="row">
    <div className="col-6">
      <div className="allcard card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://graphicdesignjunction.com/wp-content/uploads/2024/06/logo-design-7.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
          <h5 className="card-title">Seva Bio Brikets     </h5>
        <p className="card-text">📍 Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122</p>
        <p>📞 9322165092</p>
        <p>✉️ operation.virtualwhiteflame@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>

        <div className="col-6">
      <div className="allcard card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://static.vecteezy.com/system/resources/previews/000/619/466/original/vector-house-home-buildings-logo-icons-template.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
         <h5 className="card-title">Virtual Green Energy </h5>
        <p className="card-text">📍 Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122</p>
        <p>📞 9322165092</p>
        <p>✉️ operation.virtualwhiteflame@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  
  <div className="row">
    <div className="col-6">
      <div className="allcard card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://static.vecteezy.com/system/resources/previews/010/210/269/original/agm-triangle-letter-logo-design-with-triangle-shape-agm-triangle-logo-design-monogram-agm-triangle-logo-template-with-red-color-agm-triangular-logo-simple-elegant-and-luxurious-logo-agm-vector.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Bharati Biocoal</h5>
        <p className="card-text">📍 Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122</p>
        <p>📞 9322165092</p>
        <p>✉️ operation.virtualwhiteflame@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>

        <div className="col-6">
      <div className="allcard card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://www.nextdesign.in/images/portfolio/logodesign/logo-design-20.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
       <h5 className="card-title">Dhanashree Bio Fuel</h5>
        <p className="card-text">📍 Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122</p>
        <p>📞 9322165092</p>
        <p>✉️ operation.virtualwhiteflame@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>

<div className="container-fluid bg-success py-5 mt-5">
  <div className="container">
    <div className="row text-center text-white">
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 border-end border-light">
        <h2 className="fw-bold mb-0">10X</h2>
        <p className="fs-5 mb-0">Yearly Growth</p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 border-end border-light">
        <h2 className="fw-bold mb-0">950+</h2>
        <p className="fs-5 mb-0">Supplier Network</p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 border-end border-light">
        <h2 className="fw-bold mb-0">100+</h2>
        <p className="fs-5 mb-0">Customers</p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <h2 className="fw-bold mb-0">7000+ Tons</h2>
        <p className="fs-5 mb-0">Supply Capacity</p>
      </div>
    </div>
  </div>
</div>


<h1 className="text-center text-warning mt-5">Working Process Of Biomass Briquettes</h1>


<div className="container mt-5">
  <div className="row">
    <div className="col-3 ">
      <div class="card border border-success" style={{width: "18rem;"}}>
  <img src="https://virtualwhiteflame.com/uploads/172067998482032509.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title  text-success  border-success">Farmers</h3>
  </div>
</div>
    </div>
      <div className="col-3 ">
      <div class="card border border-success" style={{width: "18rem;"}}>
  <img src="https://virtualwhiteflame.com/uploads/172068000758813670.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title text-success ">Local Agents</h3>
  </div>
</div>
    </div>
      <div className="col-3 ">
      <div class="card border border-success" style={{width: "18rem;"}}>
  <img src="https://virtualwhiteflame.com/uploads/172067903734900349.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title text-success ">Briquettes</h3>
  </div>
</div>
    </div>
      <div className="col-3 ">
      <div class="card border border-success" style={{width: "18rem;"}}>
  <img src="https://virtualwhiteflame.com/uploads/172067998482032509.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title text-success">Boiler Industries</h3>
  </div>
</div>
    </div>
  </div>
</div>



{/* client testimony  */}<div className="container-fluid mt-5 bg-success text-white py-5" >
  <div className="container p-4" style={{background:"darkgreen"}} >
    <div className="row">
      <div className="col-6" style={{background:"darkgreen"}}>
        <h1>Clients Testimonials</h1>

        {/* Carousel inside this col-6 */}
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

          {/* Indicators (dots) */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            {/* Add more buttons for more slides */}
          </div>

          <div className="carousel-inner">

            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center text-center p-3">
                <img 
                  src="https://virtualwhiteflame.com/uploads/172067989116424415.jpeg" 
                  className="w-50 rounded-circle mb-3" 
                  alt="Client 1"
                />
                <p>
                  "Virtual White Flame PVT. LTD. has been an outstanding partner in the Biomass briquettes industry. Their products are high quality, and their service is exceptional. They have consistently delivered on time and exceeded our expectations"
                </p>
                <h5>- Theremex PVT LTD</h5>
                <p>Pune</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-3">
                <img 
                  src="https://virtualwhiteflame.com/uploads/172067942661401094.jpeg" 
                  className="w-50 rounded-circle mb-3" 
                  alt="Client 2"
                />
                <p>
                  ""We are extremely satisfied with Virtual White Flame PVT. LTD. Their biomass pellets have helped us optimize our production process and reduce costs. Professional, reliable, and committed to excellence!""
                </p>
                <h5>- Green Energy Solutions</h5>
                <p>Mumbai</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-3">
                <img 
                  src="https://virtualwhiteflame.com/uploads/17206805367295455.jpeg" 
                  className="w-50 rounded-circle mb-3" 
                  alt="Client 3"
                />
                <p>
                  ""The team at Virtual White Flame PVT. LTD. is knowledgeable and supportive. They guided us through the best solutions for our energy needs. Highly recommended for anyone in the renewable energy sector.""
                </p>
                <h5>- EcoFuel Industries</h5>
                <p>Bangalore</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-6" style={{  backgroundColor: "forestgreen",
  width: "50%",
  height: "50%",
  borderRadius: "50%"}}>
        <img src="https://virtualwhiteflame.com/assest/img/testimonial/qq-removebg-preview.png"/>
      </div>
    </div>
  </div>
</div>



{/* news and blogs  */}
<div className="container mt-5">
  <div className="row align-items-center">
    {/* Left Side */}
    <div className="col-6 text-center">
      <img
        src="https://virtualwhiteflame.com/uploads/172076984656299339.jpeg"
        className="biogasimg img-fluid rounded h-75"
        alt="Biogas Fuel"
      />
      <h5 className="biomass-line  fw-bold text-success">
        BIOMASS FUELS OVER FOSSIL FUELS
      </h5>

      <button className="btn3">View More</button>
    </div>

    {/* Right Side */}
    <div className="col-6">
      <div
        className="allcard card mb-3 border-0 shadow-sm"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://virtualwhiteflame.com/uploads/172076982567383209.jpeg"
              className="img-fluid rounded-start"
              alt="Biomass Process"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <p className="biomass-line card-text">
                HOW BIOMASS RESIDUE AND BIOFUEL RECYCLE WASTE BY BRIQUETTES AND
                PELLETS WORKS
              </p>

              {/* Date tag */}
              <time
                dateTime="2025-11-08"
              >
                November 8, 2025
              </time>

              <p className="mt-2 text-success fw-semibold" style={{ cursor: "pointer" }}>
                Read More →
              </p>
            </div>
          </div>
           <div className="col-md-4">
            <img
              src="https://virtualwhiteflame.com/uploads/172507979618002753.png"
              className="img-fluid rounded-start"
              alt="Biomass Process"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <p className="biomass-line card-text">
                HOW BIOMASS RESIDUE AND BIOFUEL RECYCLE WASTE BY BRIQUETTES AND
                PELLETS WORKS
              </p>

              {/* Date tag */}
              <time
                dateTime="2025-11-08"
              >
                November 8, 2025
              </time>

              <p className="mt-2 text-success fw-semibold" style={{ cursor: "pointer" }}>
                Read More →
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>



{/* Machinaries  */}
<div
  className="container-fluid mt-5"
  style={{
    background: "darkgreen",
    padding: "40px 40px 120px 40px", // top, right, bottom, left
  }}
>

  <div className="container">
         <h1 className="text-light mt-0">Machineries</h1>
    <div className="row justify-content-center mt-0">
 
      {/* Card 1 */}
      <div className="col-4 mt-0 position-relative">
        <img
          src="https://virtualwhiteflame.com/uploads/172068741636308291.jpeg"
          className="w-75 h-100 rounded"
          alt="Briquette Machine"
        />
        <div
          className=" machinecard position-absolute w-75 bg-light p-3"
        >
          <h5 className="mb-1">Briquette Machines</h5>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            We have 30+ Machines installed for briquette manufacturing.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-4 mt-0 position-relative">
        <img
          src="https://virtualwhiteflame.com/uploads/17173982374653638.png"
          className="w-75 h-100 rounded"
          alt="Pellet Machine"
        />
        <div
          className=" machinecard position-absolute w-75 bg-light p-3"
        >
          <h5 className="mb-1">Pellet Machines</h5>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Over 50+ Pellet Machines actively running nationwide.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-4 mt-0 position-relative">
        <img
          src="https://virtualwhiteflame.com/uploads/172068725745993707.jpeg"
          className="w-75 h-100 rounded"
          alt="Boiler Setup"
        />
        <div
          className=" machinecard position-absolute w-75 bg-light p-3"
        >
          <h5 className="mb-1">Boiler Installations</h5>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            100+ eco-friendly boiler systems installed successfully.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
}
