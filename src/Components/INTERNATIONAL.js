import React from "react";

function INTERNATIONAL() {
  return (
    <>
      <div className="shope d-flex justify-content-center mt-4">
        <h2 style={{ fontWeight: "bold" }} className="main_inter">
          <img
            src={require("../Assets/international-coverage-icon.png")}
            style={{ fontSize: "30px", marginRight: "15px" }}
          />
          INTERNATIONAL COVERAGE ON AJANTA BOTTLE
        </h2>
      </div>

      <div className="d-flex justify-content-center mt-2 arrow_bottom">
        <img src={require("../Assets/org-brd-btm.gif")} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="shadow-post">
              <div className="col-md-12">
                <div className="post_center">
                  <a href="#">
                    <img src={require("../Assets/harward-logo.jpg")} />
                  </a>
                </div>

                <div class="lt-org-bg bor-rad-rt-25 float-right w50p mh110">
                  <h3 class="text-white font-weight-bold text-uppercase  text-center inter_case">
                    Case Study
                  </h3>
                </div>
              </div>
              <div className="col-md-12  international">
                <div className=" AJANTA">
                  <span className="txt-or ">
                    AJANTA PACKAGING: Key Account Management
                  </span>
                  <p className="txt text-center">
                    In the fall of 2017, Ajanta Packaging (Ajanta) was among the
                    fastest growing glass bottle-packaging companies in India.
                    Although the company had a large buyer base of 1,700
                    customers, buyer, S.F. Foods (SF) which accounted for 15 per
                    cent of Ajanta's revenue.
                  </p>
                </div>
                <div class="col-md-12 text-center mb-5 view_btn">
                  <a
                    href="https://hbsp.harvard.edu/product/W18241-PDF-ENG"
                    class=" btn-org"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="shadow-post">
              <div className="col-md-12">
                <div className="post_center">
                  <a href="#">
                    <img src={require("../Assets/harward-logo.jpg")} />
                  </a>
                </div>

                <div class="lt-org-bg bor-rad-rt-25 float-right w50p mh110">
                  <h3 class="text-white font-weight-bold text-uppercase  text-center inter_case">
                    Case Study
                  </h3>
                </div>
              </div>
              <div className="col-md-12  international">
                <div className=" AJANTA">
                  <span className="txt-or ">AJANTA PACKAGING</span>
                  <p className="txt text-center">
                    The Indian packaging industry - represented by a mix of
                    paperboard, plastics, metals and glass - had seen great
                    change leading up to 2013. In 2012, Suppliers of glass
                    bottles in India with an employee base of more than 50 and
                    net revenues of US$100 million.
                  </p>
                </div>
                <div class="col-md-12 text-center mb-5 view_btn">
                  <a
                    href="https://hbsp.harvard.edu/product/W18241-PDF-ENG"
                    class=" btn-org"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default INTERNATIONAL;
