import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Spendings(props) {
  const { t } = useTranslation();

  var cat1total = 650;
  var cat1name = "Creation of the company";
  var cat1spent = [47];
  // var totalCat1spent = round(array_sum(cat1spent), 2);
  var buttonCat1 =
    `<span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=` +
    cat1name +
    `"><button className="btn btn-prinary" type="button">1</button>
  </span>`;

  var cat2total = 250;
  var cat2name = "Website implementation (creation & hosting)";
  var cat2spent = [2.04, 7, 79.1, 11.3, 1.76, 7.07];
  var totalCat2spent =
    cat2spent.reduce((value) => value + value) / cat2spent.length;
  var buttonCat2 =
    `<span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=` +
    cat2name +
    `">
  <button className="btn btn-secondary" type="button">2</button>
  </span>`;

  var cat3total = 500;
  var cat3name = "Hiring a web designer for UX/UI";
  var cat3spent = [];
  // var totalCat3spent = round(array_sum(cat3spent), 2);
  var cat4total = 125;
  var cat4name = "Publication of the app on Android and iOS";
  var cat4spent = [];
  // var totalCat4spent = round(array_sum(cat4spent), 2);
  var cat5total = 200;
  var cat5name = "Creation of a marketing campaign";
  var cat5spent = [];
  // var totalCat5spent = round(array_sum(cat5spent), 2);
  var cat6total = 500;
  var cat6name = "Additional costs such as legal fees";
  var cat6spent = [];
  // var totalCat6spent = round(array_sum(cat6spent), 2);
  var catTotal = 2250;

  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="mb-0">
                <span className="text-success ms-5">Y</span>ou can find a clear
                list of our spendings.
              </h3>
              <p className="text-center">
                Transparency is very important to us.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Expense</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Hosting</td>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>${cat2spent[0]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2022/04/hosting-07-2021.pdf";}" target="_blank" rel="noopener 
                                noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>01/08/2021</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hosting</td>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>${cat2spent[1]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2022/04/hosting-08-2021.pdf";}" target="_blank" rel="noopener 
                                noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>01/09/2021</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Buy domain name "ride.cr"</td>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>${cat2spent[2]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2021/09/1-2-domain.pdf";}" target="_blank" rel="noopener 
                            noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>03/09/2021</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Buy domain name "ride.cr"</td>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>${cat2spent[3]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2021/09/2-2-domain-2.pdf";}" target="_blank" rel="noopener 
                                noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>03/09/2021</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hosting</td>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>${cat2spent[4]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2022/04/hosting-09-2021.pdf";}" target="_blank" rel="noopener 
                                noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>01/10/2021</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Registering the brand</td>
                    <td>
                      <button className="btn btn-primary" type="button">
                        1
                      </button>
                    </td>
                    <td>${cat1spent[0]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2022/04/Recibo Timbros.pdf";}" target="_blank" rel="noopener 
                                noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>24/03/2021</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Hosting</td>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>${cat2spent[5]}</td>
                    <td>
                      {/* <a href="{get_site_url() . "/wp-content/uploads/2022/05/hosting-04-2022.pdf";}" target="_blank" rel="noopener 
                                noreferrer"><i className="fas fa-external-link-alt"></i>
                                </a> */}
                    </td>
                    <td>01/05/2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    <th scope="col">Spent</th>
                    <th scope="col">Rest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button className="btn btn-primary" type="button">
                        1
                      </button>
                    </td>
                    <td>{cat1name}</td>
                    <td>$47</td>
                    <td>
                      <span className="fw-bold text-success">$603</span>/$
                      {cat1total}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-secondary" type="button">
                        2
                      </button>
                    </td>
                    <td>{cat2name}</td>
                    <td>$101.20</td>
                    <td>
                      <span className="fw-bold text-success">$148.80</span>/$
                      {cat2total}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-success" type="button">
                        3
                      </button>
                    </td>
                    <td>{cat3name}</td>
                    <td>$0</td>
                    <td>
                      <span className="fw-bold text-success">$500</span>/$
                      {cat3total}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-danger" type="button">
                        4
                      </button>
                    </td>
                    <td>{cat4name}</td>
                    <td>$0</td>
                    <td>
                      <span className="fw-bold text-success">$125</span>/$
                      {cat4total}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-warning" type="button">
                        5
                      </button>
                    </td>
                    <td>{cat5name}</td>
                    <td>$0</td>
                    <td>
                      <span className="fw-bold text-success">$200</span>/$
                      {cat5total}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-info" type="button">
                        6
                      </button>
                    </td>
                    <td>{cat6name}</td>
                    <td>$0</td>
                    <td>
                      <span className="fw-bold text-success">$500 </span>/$
                      {cat6total}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>TOTAL</td>
                    <td>$148.20</td>
                    <td>
                      <span className="fw-bold text-success">$2076.80</span>/$
                      {catTotal}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spendings;
