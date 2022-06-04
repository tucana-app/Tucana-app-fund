import { LinkExternalIcon } from "@primer/octicons-react";
import React from "react";

import invoice1 from "../assets/invoices/1.pdf";
import invoice2 from "../assets/invoices/2.pdf";
import invoice3 from "../assets/invoices/3.pdf";
import invoice4 from "../assets/invoices/4.pdf";
import invoice5 from "../assets/invoices/5.pdf";
import invoice6 from "../assets/invoices/6.pdf";
import invoice7 from "../assets/invoices/7.pdf";
import invoice8 from "../assets/invoices/8.pdf";
import invoice9 from "../assets/invoices/9.pdf";
import invoice10 from "../assets/invoices/10.pdf";
import invoice11 from "../assets/invoices/11.pdf";
import invoice12 from "../assets/invoices/12.pdf";
import invoice13 from "../assets/invoices/13.pdf";
import { Button, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

function Spendings(props) {
  var cat1total = 650;
  var cat1name = "Creation of the company";
  var cat1spent = [47, 20.54, 15.45];
  var totalCat1spent = cat1spent.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  var buttonCat1 = (
    <OverlayTrigger placement="top" overlay={<Tooltip>{cat1name}</Tooltip>}>
      <Button variant="primary">1</Button>
    </OverlayTrigger>
  );

  var cat2total = 250;
  var cat2name = "Website implementation (creation & hosting)";
  var cat2spent = [2.04, 7.0, 79.1, 11.3, 1.76, 7.07, 14.23, 0.86];
  var totalCat2spent = cat2spent.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  var buttonCat2 = (
    <OverlayTrigger placement="top" overlay={<Tooltip>{cat2name}</Tooltip>}>
      <Button variant="secondary">2</Button>
    </OverlayTrigger>
  );

  var cat3total = 500;
  var cat3name = "Hiring a web designer for UX/UI";
  var cat3spent = [0];
  var totalCat3spent = cat3spent.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  var buttonCat3 = (
    <OverlayTrigger placement="top" overlay={<Tooltip>{cat3name}</Tooltip>}>
      <Button variant="success">3</Button>
    </OverlayTrigger>
  );

  var cat4total = 125;
  var cat4name = "Publication of the app on Android and iOS";
  var cat4spent = [25, 100];
  var totalCat4spent = cat4spent.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  var buttonCat4 = (
    <OverlayTrigger placement="top" overlay={<Tooltip>{cat4name}</Tooltip>}>
      <Button variant="danger">4</Button>
    </OverlayTrigger>
  );

  var cat5total = 200;
  var cat5name = "Creation of a marketing campaign";
  var cat5spent = [0];
  var totalCat5spent = cat5spent.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  var buttonCat5 = (
    <OverlayTrigger placement="top" overlay={<Tooltip>{cat5name}</Tooltip>}>
      <Button variant="warning">5</Button>
    </OverlayTrigger>
  );

  var cat6total = 500;
  var cat6name = "Additional costs such as legal fees";
  var cat6spent = [0];
  var totalCat6spent = cat6spent.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  var buttonCat6 = (
    <OverlayTrigger placement="top" overlay={<Tooltip>{cat6name}</Tooltip>}>
      <Button variant="info">6</Button>
    </OverlayTrigger>
  );

  var catTotal = 2250;
  var total =
    totalCat1spent +
    totalCat2spent +
    totalCat3spent +
    totalCat4spent +
    totalCat5spent +
    totalCat6spent;

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
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[0]}</td>
                    <td>
                      <a
                        href={invoice1}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>01/08/2021</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hosting</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[1]}</td>
                    <td>
                      <a
                        href={invoice2}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>01/09/2021</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Buy domain name "ride.cr"</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[2]}</td>
                    <td>
                      <a
                        href={invoice3}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>03/09/2021</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Buy domain name "ride.cr"</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[3]}</td>
                    <td>
                      <a
                        href={invoice4}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>03/09/2021</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hosting</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[4]}</td>
                    <td>
                      <a
                        href={invoice5}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>01/10/2021</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Registering the brand</td>
                    <td>{buttonCat1}</td>
                    <td>${cat1spent[0]}</td>
                    <td>
                      <a
                        href={invoice6}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>24/03/2021</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Hosting</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[5]}</td>
                    <td>
                      <a
                        href={invoice7}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>01/05/2022</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Registering the brand</td>
                    <td>{buttonCat1}</td>
                    <td>${cat1spent[1]}</td>
                    <td>
                      <a
                        href={invoice8}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>13/05/2022</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Google Developer</td>
                    <td>{buttonCat4}</td>
                    <td>${cat4spent[0]}</td>
                    <td>
                      <a
                        href={invoice9}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>16/05/2022</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Registering the brand</td>
                    <td>{buttonCat1}</td>
                    <td>${cat1spent[2]}</td>
                    <td>
                      <a
                        href={invoice10}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>26/05/2022</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Hosting</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[6]}</td>
                    <td>
                      <a
                        href={invoice11}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>1/06/2022</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Apple Developer</td>
                    <td>{buttonCat4}</td>
                    <td>${cat4spent[1]}</td>
                    <td>
                      <a
                        href={invoice12}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>2/06/2022</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Namecheap email</td>
                    <td>{buttonCat2}</td>
                    <td>${cat2spent[7]}</td>
                    <td>
                      <a
                        href={invoice13}
                        target="_blank"
                        rel="noopener 
                                noreferrer"
                      >
                        <LinkExternalIcon size={24} />
                      </a>
                    </td>
                    <td>3/06/2022</td>
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
                    <td>{buttonCat1}</td>
                    <td>{cat1name}</td>
                    <td>${totalCat1spent.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(cat1total - totalCat1spent).toFixed(0)}
                      </span>
                      /$
                      {cat1total}
                    </td>
                  </tr>
                  <tr>
                    <td>{buttonCat2}</td>
                    <td>{cat2name}</td>
                    <td>${totalCat2spent.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(cat2total - totalCat2spent).toFixed(0)}
                      </span>
                      /$
                      {cat2total}
                    </td>
                  </tr>
                  <tr>
                    <td>{buttonCat3}</td>
                    <td>{cat3name}</td>
                    <td>${totalCat3spent.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(cat3total - totalCat3spent).toFixed(0)}
                      </span>
                      /$
                      {cat3total}
                    </td>
                  </tr>
                  <tr>
                    <td>{buttonCat4}</td>
                    <td>{cat4name}</td>
                    <td>${totalCat4spent.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(cat4total - totalCat4spent).toFixed(0)}
                      </span>
                      /$
                      {cat4total}
                    </td>
                  </tr>
                  <tr>
                    <td>{buttonCat5}</td>
                    <td>{cat5name}</td>
                    <td>${totalCat5spent.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(cat5total - totalCat5spent).toFixed(0)}
                      </span>
                      /$
                      {cat5total}
                    </td>
                  </tr>
                  <tr>
                    <td>{buttonCat6}</td>
                    <td>{cat6name}</td>
                    <td>${totalCat6spent.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(cat6total - totalCat6spent).toFixed(0)}
                      </span>
                      /$
                      {cat6total}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>TOTAL</td>
                    <td>${total.toFixed(0)}</td>
                    <td>
                      <span className="fw-bold text-success">
                        ${(catTotal - total).toFixed(0)}
                      </span>
                      /$
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
