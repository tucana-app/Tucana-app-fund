import React from "react";
import { Container, Row, Col, Button, Table, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SocialIcons from "../components/SocialIcons";

import trip from "../assets/images/undraw_trip.svg";
import crowdfunding from "../assets/images/crowdfunding.png";
import handShake from "../assets/images/handshake.png";
import rocket from "../assets/images/rocket.png";
import volcano from "../assets/images/volcano.jpg";
import benjamin from "../assets/images/benjamin.png";
import axel from "../assets/images/axel.png";
import flora from "../assets/images/flora.png";
import iPhone from "../assets/images/iPhone.png";
import carbon from "../assets/images/carbon.png";
import beach from "../assets/images/beach.jpg";
import C02 from "../assets/images/C02.png";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row className="align-items-center mvh-100 py-5">
          <Col xs={12} md={6} className="text-center">
            <img
              src={trip}
              alt="Carpooling"
              className="img-fluid"
              width={300}
            />
          </Col>
          <Col xs={12} md={6} className="py-5 ps-md-4 text-center text-md-left">
            <h2 className="text-success font-title">
              Tucána - Your companion for all your travels in Costa Rica
            </h2>
            <p className="mb-0">
              Welcome to the crowdfunding page for the financing of Tucána, the
              first carpooling application in Costa Rica: a practical and
              ecological way to travel and meet people.
            </p>
            <div className="text-center mt-3">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
                alt=""
                target="_blank"
                className="btn btn-success btn-lg rounded-0"
                rel="noreferrer"
              >
                <i className="fas fa-hand-holding-usd me-2"></i>
                Contribute
              </a>
              <br />
              <a
                href="#start"
                alt=""
                className="btn btn-outline-success rounded-0 mt-3"
              >
                <i className="far fa-question-circle"></i>
                Learn more
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bg-light" id="start">
        <Container className="py-5">
          <Row className="align-items-center mb-3">
            <Col xs={12} md={8} lg={6} className="text-center">
              <h1 className="text-success font-title text-uppercase">
                The project
              </h1>
              <h4 className="text-black fw-light">
                We are developing a carpooling solution in Costa Rica
              </h4>

              <p className="">
                Tucána: we imagined it, and with envy we designed it, but it is
                because we need the financial means to develop it that you can
                see this page.
              </p>
            </Col>
            <Col xs={12} md={4} lg={6} className="text-center">
              <img
                src={crowdfunding}
                alt=""
                width={300}
                className="img-fluid"
              />
            </Col>
          </Row>

          <hr className="w-50 mb-5 mx-auto" />

          <Row>
            <Col xs={12} lg={6} className="text-center">
              <img
                src={handShake}
                width={50}
                alt=""
                className="img-fluid mb-3"
              />
              <p className="">
                <span className="text-success ms-5">R</span>ide.CR is a platform
                that connects travelers in Costa Rica so they can share their
                rides. Drivers and passengers can create and join routes
                proposed on the platform to move around the country.
                Conviviality and low cost rides guaranteed! Through this
                project, our objectives are to multiply encounters, encourage
                mutual aid, allow travelers to save money and on a larger scale:
                reduce CO2 emissions and our environmental impact. A philosophy
                in line with Costa Rica's...
              </p>
            </Col>

            <Col xs={12} lg={6} className="text-center">
              <img src={rocket} width={50} alt="" className="img-fluid mb-3" />
              <p className="">
                <span className="text-success ms-5">W</span>e have started the
                development of the platform; we are currently preparing its
                launch which will take place in the coming months as well as the
                creation of the company (Ouch, the administrative steps..). In
                order to carry out the next steps, our team is actively looking
                for funds to finance them.
              </p>
              <p className="mb-0">
                <span className="text-success ms-5">W</span>e thank you in
                advance for every support you can give us in this project. And
                if you are not yet convinced by the potential of Tucána, you
                will find below the presentation of our team and a detail of the
                beautiful course which awaits us.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="parallax"
        style={{ backgroundImage: `url(${volcano}` }}
      ></div>

      <Container className="py-5">
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="title text-uppercase mb-4">The team</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="text-center">
            <img
              src={benjamin}
              width="250"
              alt=""
              className="img-fluid frame"
            />
            <h2 className="font-title font-big mb-0 mt-2">Benjamin</h2>
            <h4 className="lead text-success mb-5 mb-md-0">
              CEO &amp; Developer
            </h4>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <img src={axel} width="250" alt="" className="img-fluid frame" />
            <h2 className="font-title font-big mb-0 mt-2">Axel</h2>
            <h4 className="lead text-success mb-5 mb-md-0">
              Associate &amp; Designs
            </h4>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <img src={flora} width="250" alt="" className="img-fluid frame" />
            <h2 className="font-title font-big mb-0 mt-2">Flora</h2>
            <h4 className="lead text-success mb-5 mb-md-0">
              Associate &amp; Community manager
            </h4>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col xs={12} className="text-center mx-auto">
              <h1 className="title text-uppercase mb-4">
                The adventure has just begun
              </h1>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col xs={12} md={4} className="text-center">
              <img src={iPhone} alt="" width={200} className="img-fluid" />
            </Col>

            <Col xs={12} md={8} className="text-center text-md-start">
              <p className="h4">
                <span className="h2 text-success ms-5">T</span>he first version
                of Tucána is already ready. Our developer's skills in computer
                development have allowed us to create a first version of the
                platform that just needs to be made beautiful.
              </p>
              <p className="mb-0">
                <span className="text-success ms-5">O</span>ur goal is to launch
                the project as soon as possible but especially before the
                beginning of the dry season (from the end of December to
                mid-May), the most touristic season in Costa Rica. We have a few
                months to finish the administrative procedures and the look of
                Tucána before making the platform available. The first online
                version will be free while we optimize it and then the platform
                will become paying.
              </p>
            </Col>
          </Row>

          <hr className="text-center mb-4" />

          <Row className="mb-5">
            <Col xs={12} sm={10} md={8} className="mx-auto">
              <h3 className="mb-3 text-center">
                <span className="text-success ms-5">H</span>ere are the next
                steps that await us in the coming weeks and that will be
                financed by the funds raised:
              </h3>
              <Table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Expense</th>
                    <th scope="col" className="text-center">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 | Creation of the company</td>
                    <td className="fw-bold text-center">$650</td>
                  </tr>
                  <tr>
                    <td>
                      2 | Website implementation (creation &amp; hosting){" "}
                    </td>
                    <td className="fw-bold text-center">$250</td>
                  </tr>
                  <tr>
                    <td>3 | Hiring a web designer for UX/UI</td>
                    <td className="fw-bold text-center">$500</td>
                  </tr>
                  <tr>
                    <td>4 | Publication of the app on Android and iOS</td>
                    <td className="fw-bold text-center">$125</td>
                  </tr>
                  <tr>
                    <td>5 | Creation of a marketing campaign</td>
                    <td className="fw-bold text-center">$200</td>
                  </tr>
                  <tr>
                    <td>6 | Additional costs such as legal fees</td>
                    <td className="fw-bold text-center">$500</td>
                  </tr>
                  <tr>
                    <td className="font-big text-success">Goal</td>
                    <td className="fw-bold text-center font-big text-success">
                      ~$2250 <br />
                      ~€1905
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={12} className="text-center">
              <h3 className="font-title">
                Help Costa Rica towards reducing the CO2 emission
              </h3>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
                alt=""
                target="_blank"
                className="rounded-0"
                rel="noreferrer"
              >
                <Button variant="success" size="lg">
                  <i className="fas fa-hand-holding-usd me-2"></i>Contribute
                </Button>
              </a>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} className="text-center">
              <Button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                <i className="far fa-question-circle me-2"></i>About your
                contribution
              </Button>
              <Link to="/spendings" alt="">
                <Button variant="warning">
                  <i className="fas fa-search-dollar me-2"></i>Check our
                  spendings
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} className="text-center mb-3">
            <img src={carbon} alt="" width={100} className="img-fluid" />
          </Col>

          <Col xs={12} md={8} lg={6} className="mx-auto">
            <h1 className="text-center mb-3">
              <span className="text-success">Costa Rica</span> in a few numbers
            </h1>
            <ul className="mb-0">
              <li className="mb-2">
                Costa Rica welcomes 1.7 million tourists each year, with a total
                population of approx. 5 million inhabitants
              </li>
              <li className="mb-2">
                Since 2015, 98.53% of electricity consumed in Costa Rica has
                come from renewable sources
              </li>
              <li>
                The country has over 35,000 kilometers of road (paved: 8,621 km
                | unpaved: 26,709 km)
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col md={8} className="text-center mx-auto">
              <h1 className="text-success text-uppercase">Discover Tucána</h1>

              <p className="text-center">
                Tucána is a website with an app-like design to simplify its use
                on mobile. In a second step, we want to create a real mobile
                application and publish it on all platforms (like App Store for
                Apple, or Google Play Store).
                <br />
                You can discover the first version of the Tucána website. It is
                online only for demonstration. Get started:
              </p>

              <h2 className="text-center">
                <span>Website:</span>{" "}
                <a
                  href="https://ride.cr"
                  alt=""
                  target="_blank"
                  className="link-success"
                  rel="noreferrer"
                >
                  https://tucana.app
                </a>
              </h2>

              <p>
                <i className="small">
                  The platform is online only for demonstration purposes, it is
                  still under development, the design is not done, will change
                  and we do not take any responsibilities for anything happening
                  within it.
                </i>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center mx-auto">
            <h1 className="text-success text-uppercase">Task planning</h1>
          </Col>
          <Col xs={12} md={6}>
            <ul>
              <li className="mb-2">Adding features in the platform</li>
              <li className="mb-2">Perfecting the web design</li>
              <li className="mb-2">
                Creating a communication campaign to boost popularity
              </li>
              <li className="mb-2">
                Hire developers, designers, consultants and representatives
              </li>
              <li className="mb-2">Set up a customer service department</li>
              <li>Implementing the payment process</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center mb-5 mb-md-0">
              <h1 className="text-center text-success font-title text-uppercase mb-0">
                Get in touch with us
              </h1>
              <p className="lead">
                Send us a message / follow us on social medias
              </p>

              <SocialIcons />
            </Col>

            <Col xs={12} md={6} className="text-center">
              <h1 className="text-center text-success font-title text-uppercase">
                Our newletter
              </h1>
              <p className="lead">
                Enter your email to get in the loop and check what are the
                latest news from us. No spams.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row
          className="parallax justify-content-center align-items-center"
          style={{ backgroundImage: `url(${beach}` }}
        >
          <Col className="text-center">
            <img src={C02} alt="" width={100} className="img-fluid" />

            <h1 className="text-white text-uppercase mb-0">
              Make a move towards ecology
            </h1>
          </Col>
        </Row>
      </Container>

      <div className="bg-light">
        <Container className="py-5">
          <Row>
            <Col xs={12} className="col-12 text-center mb-3">
              <h1 className="text-success text-uppercase font-title">
                Feeling inspired?
              </h1>
              <p className="text-center">
                Help us with our projects and support its growth for a good
                cause
              </p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
                alt=""
                target="_blank"
                className="btn btn-success btn-lg rounded-0"
                rel="noreferrer"
              >
                <i className="fas fa-hand-holding-usd me-2"></i>Contribute
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className="text-center">
              <p className="mb-0">Share on social medias</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal */}
      <Modal
        fade
        id="modal"
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                About the contribution
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                The whole team insists that everything that happens financially
                within the company is and will always be very clear and
                transparent. We will provide reports (frequency to be
                determined) providing as much detail as possible on anything
                that can be provided to the "public": how we are spending the
                money from this crowdfunding, or subsequent investments and
                money circulating within the platform. Please feel free to
                contact us if you have any concerns, suggestions, problems or
                feedback regarding this aspect.
              </p>
              <p>
                In return for your contribution to this crowdfunding, we will be
                very grateful and will deduct the amount you donated from any
                future shares you wish to purchase when the company is created.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger rounded-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Home;
