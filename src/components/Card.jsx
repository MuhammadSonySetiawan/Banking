import React from 'react'
import { BsImage } from "react-icons/bs";
function myCard() {
  return (
    <>
      <div
        style={{
          width: "474px",
          height: "905px",
          margin: "40px 0",
          borderRadius: "12px",
          padding: "24px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3>My Card </h3>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* 1 */}
              <div
                style={{
                  width: "426px",
                  height: "242px",
                  borderRadius: "12px",
                  backgroundColor: "#4EB7F2",
                  backgroundImage: "url(Mask-group.png)",
                  backgroundRepeat: "no-repeat, repeat",
                  backgroundSize: "cover",
                  padding: "24px",
                }}
              >
                <div className="d-flex justify-content-between d-flex align-items-center">
                  <div className="d-flex flex-column">
                    <label style={{ color: "#ffffff" }}>Name card</label>
                    <label style={{ color: "#ffffff" }}>Syah bandi</label>
                  </div>
                  <BsImage
                    style={{
                      textAlign: "center",
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <div className="d-flex flex-column ">
                    <label style={{ color: "#ffffff" }}>
                      0918 8124 0042 8129
                    </label>
                    <label style={{ color: "#ffffff" }}>12/20 - 124</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* 2 */}
              <div
                style={{
                  width: "426px",
                  height: "242px",
                  borderRadius: "12px",
                  backgroundColor: "#4EB7F2",
                  backgroundImage: "url(Mask-group.png)",
                  backgroundRepeat: "no-repeat, repeat",
                  backgroundSize: "cover",
                  padding: "24px",
                }}
              >
                <div className="d-flex justify-content-between d-flex align-items-center">
                  <div className="d-flex flex-column">
                    <label style={{ color: "#ffffff" }}>Name card</label>
                    <label style={{ color: "#ffffff" }}>Syah bandi</label>
                  </div>
                  <BsImage
                    style={{
                      textAlign: "center",
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <div className="d-flex flex-column ">
                    <label style={{ color: "#ffffff" }}>
                      0918 8124 0042 8129
                    </label>
                    <label style={{ color: "#ffffff" }}>12/20 - 124</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* 3 */}
              <div
                style={{
                  width: "426px",
                  height: "242px",
                  borderRadius: "12px",
                  backgroundColor: "#4EB7F2",
                  backgroundImage: "url(Mask-group.png)",
                  backgroundRepeat: "no-repeat, repeat",
                  backgroundSize: "cover",
                  padding: "24px",
                }}
              >
                <div className="d-flex justify-content-between d-flex align-items-center">
                  <div className="d-flex flex-column">
                    <label style={{ color: "#ffffff" }}>Name card</label>
                    <label style={{ color: "#ffffff" }}>Syah bandi</label>
                  </div>
                  <BsImage
                    style={{
                      textAlign: "center",
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <div className="d-flex flex-column ">
                    <label style={{ color: "#ffffff" }}>
                      0918 8124 0042 8129
                    </label>
                    <label style={{ color: "#ffffff" }}>12/20 - 124</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div
            className="carousel-indicators d-flex justify-content-start"
            style={{ marginLeft: "0" }}
          >
            <button
              style={{ color: "green", backgroundColor: "#4EB7F2" }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              style={{ color: "green", backgroundColor: "#4EB7F2" }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              style={{ color: "green", backgroundColor: "#4EB7F2" }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
        <hr />

        <div>
          <div className="d-flex justify-content-between">
            <h5>Transaction History</h5>
            <label style={{ color: "#4EB7F2" }}>See all</label>
          </div>
          <div
            style={{
              width: "426px",
              height: "294px",
            }}
          >
            <p style={{ color: "#AAAAAA" }}>13 April 2022</p>
            <div
              style={{
                width: "426px",
                height: "258px",
              }}
            >
              <div
                style={{
                  width: "426px",
                  height: "78px",
                  borderRadius: "12px",
                  padding: "16px",
                  backgroundColor: "#FAFAFA",
                }}
                className="mb-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <label
                    className="d-flex flex-column"
                    style={{ color: "#064061" }}
                  >
                    Cash Withdrawal
                  </label>
                  <label style={{ color: "#AAAAAA" }}>13 Apr, 2022</label>
                </div>
                <label style={{ color: "#F3735E" }}>$20,129</label>
              </div>

              <div
                style={{
                  width: "426px",
                  height: "78px",
                  borderRadius: "12px",
                  padding: "16px",
                  backgroundColor: "#FAFAFA",
                }}
                className="mb-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <label
                    className="d-flex flex-column"
                    style={{ color: "#064061" }}
                  >
                    Landing Page project
                  </label>
                  <label style={{ color: "#AAAAAA" }}>
                    13 Apr, 2022 at 3:30 PM
                  </label>
                </div>
                <label style={{ color: "#7DD97B" }}>$2,000</label>
              </div>
              <div
                style={{
                  width: "426px",
                  height: "78px",
                  borderRadius: "12px",
                  padding: "16px",
                  backgroundColor: "#FAFAFA",
                }}
                className="mb-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <label
                    className="d-flex flex-column"
                    style={{ color: "#064061" }}
                  >
                    Juni Mobile App project
                  </label>
                  <label style={{ color: "#AAAAAA" }}>
                    13 Apr, 2022 at 3:30 PM
                  </label>
                </div>
                <label style={{ color: "#7DD97B" }}>$20,129</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default myCard