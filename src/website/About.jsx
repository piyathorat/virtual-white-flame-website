
import React, { useState } from "react";
export default function About(){

     // Track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What different do we provide?",
      answer:
        "1. We offer consultation services for start-up plant setup. Our primary focus is to educate start-up teams by providing valuable insights and expert advice to ensure their successful establishment. Additionally, we support with legal procedures such as licensing, subsidies, and certifications 2. We also provide guidance on manufacturing processes, ensuring efficiency and effectiveness. Our organization ensures that every entity in our partnership experiences a growing sales graph. We assist in branding and provide strategic consultancy for sales growth, marketing techniques, and brand establishment planning.",
    },
    {
      question: "Why choose us?",
      answer:
        "1. We have been working in the biomass sector from the last 12 years We implemented new innovative ideas for raw material collection and manufacturing unit We are manufacturing all type of briquettes and pallets at our own Manufacturing company .Also our own total 15 Manufacturing companies was installed at various location Our aim is to be give biomass briquettes & pallets availability at minimum price than market rate as well as good quality",
    },
    {
      question: "What do we do?",
      answer:
        "1. We ensure the timely availability of biomass fuel to our customers, meeting their requirements and adhering to scheduled delivery times. Our commitment extends to supplying customers with high-quality materials at competitive prices, ensuring their satisfaction with every transaction. 2. In addition to material provision, we offer comprehensive technical guidance to customers, equipping them with the necessary knowledge and systems to efficiently operate boilers and related equipment. 3. Our energy solutions prioritize efficiency and sustainability, harnessing the power of renewable resources to meet both environmental and operational needs. 4. We provide comprehensive service, including ash disposal — ensuring that our customers experience a seamless and hassle-free process from start to finish. 5. Customers have access to a wide range of materials, all produced and sourced from our facilities,"
    },
    {
      question: "What lies ahead?",
      answer:
        "1. We ensure the timely availability of biomass fuel to our customers, meeting their requirements and adhering to scheduled delivery times. Our commitment extends to supplying customers with high-quality materials at competitive prices, ensuring their satisfaction with every transaction. 2. In addition to material provision, we offer comprehensive technical guidance to customers, equipping them with the necessary knowledge and systems to efficiently operate boilers and related equipment. 3. Our energy solutions prioritize efficiency and sustainability, harnessing the power of renewable resources to meet both environmental and operational needs. 4. We provide comprehensive service, including ash disposal — ensuring that our customers experience a seamless and hassle-free process from start to finish. 5. Customers have access to a wide range of materials, all produced and sourced from our facilities,"
    },
  ];
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <img src="/images/about.jpg" className="w-100 "/>
                </div>
            </div>
        </div>


        <div className="container mt-5">
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



{/* comapny history  */}
 <div className="container my-5">
      <h1 className="text-center text-success mb-4">Company History</h1>
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="card shadow border-success h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Our Beginning</h5>
              <p className="card-text">
                Virtual White Flame PVT. LTD. is a leading Biomass Briquettes/Biomass
                Pellets manufacturer & supplier covering major regions of India. The
                company was established in 2013 under the name "Seva Bio Brikets"
                with a dynamic and diverse management team. Considering the rising
                demand for Briquettes and improving customer service, the company
                officially became "Virtual White Flame PVT. LTD." in 2017.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="card shadow border-success h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Our Mission</h5>
              <p className="card-text">
                Virtual White Flame PVT. LTD. is a leading manufacturer specializing
                in the production of biomass briquettes and biomass pellets. Our
                company is dedicated to providing sustainable energy solutions by
                utilizing renewable resources and reducing carbon emissions. With a
                strong focus on quality, innovation, and customer satisfaction, we
                contribute to the global transition toward cleaner and greener
                energy alternatives.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6">
          <div className="card shadow border-success h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Our Commitment</h5>
              <p className="card-text">
                At Virtual White Flame PVT. LTD., we recognize the pressing demand
                for renewable energy sources to combat climate change and promote
                sustainable development. As a prominent manufacturer in the biomass
                industry, we are dedicated to producing high-quality biomass
                briquettes and biomass pellets to replace traditional fossil fuels.
                By leveraging biomass, we deliver efficient and eco-friendly energy
                solutions for a variety of applications.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6">
          <div className="card shadow border-success h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Our Vision</h5>
              <p className="card-text">
                Virtual White Flame PVT. LTD. is a trusted manufacturer of biomass
                briquettes and pellets, providing sustainable energy solutions for
                diverse industries. With our steadfast commitment to quality,
                innovation, and environmental responsibility, we aim to pave the way
                for a cleaner and greener future. Partner with us to embrace
                renewable energy and make a positive impact on the world. For more
                information or business collaborations, please reach out to us using
                our contact details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* question answer */}
     <div className="container my-5">
      <h1 className="text-center text-success mb-4">Frequently Asked Questions</h1>
      <div className="accordion">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="card mb-3 shadow-sm border border-success"
            style={{ borderRadius: "10px" }}
          >
            <div
              className="card-header d-flex justify-content-between align-items-center bg-success text-white"
              style={{ cursor: "pointer" }}
              onClick={() => toggle(index)}
            >
              <h5 className="mb-0">{item.question}</h5>
              <span className="fs-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="card-body">
                <p className="mb-0">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>





        </>
    )
}