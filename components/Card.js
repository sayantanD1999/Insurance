import React, { useState } from "react";
import styles from "../styles/card.module.css";

function Card() {
  const [data, setData] = useState([
    {
      title: "XYZ",
      desc: "sadaduiaduia",
    },
    {
      title: "XYZ",
      desc: "sadaduiaduia",
    },
    {
      title: "XYZ",
      desc: "sadaduiaduia",
    },
    {
      title: "XYZ",
      desc: "sadaduiaduia",
    },
    {
      title: "XYZ",
      desc: "sadaduiaduia",
    },
    {
      title: "XYZ",
      desc: "sadaduiaduia",
    }
  ]);

  return (
    <>
      <div className="container">
        <h1 className={styles.cardHeading}>Perfect Insurance Designed with You in Mind</h1>
        <div className="row m-2">
          {data.map((item, index) => {
            return (
              <>
                <div className="col-4 mb-2" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* MODAL */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
