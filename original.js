function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row align-items-center mvh-100 py-5">
          <div className="col-12 col-md-6 text-center">
            <img
              src="<?php echo wp_get_attachment_url(11); ?>"
              alt=""
              className="img-top-banner img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 py-5 ps-md-4 text-center text-md-left">
            <h2 className="text-success font-title">
              Ride.CR - Your companion for all your travels in Costa Rica
            </h2>
            <p className="text-white mb-0">
              Welcome to the crowdfunding page for the financing of Ride.CR, the
              first carpooling application in Costa Rica: a practical and
              ecological way to travel and meet people.
            </p>
            <div className="text-center mt-3">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
                alt=""
                target="_blank"
                className="btn btn-success btn-lg text-white"
                rel="noreferrer"
              >
                Contribute
              </a>
              <br />
              <a href="#start" alt="" className="btn btn-outline-success mt-3">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light" id="start">
        <div className="container py-5">
          <div className="row align-items-center mb-3">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h1 className="text-success font-title text-uppercase">
                The project
              </h1>
              <h4 className="text-black fw-light">
                We are developing a carpooling solution in Costa Rica
              </h4>

              <p className="">
                Ride.CR: we imagined it, and with envy we designed it, but it is
                because we need the financial means to develop it that you can
                see this page.
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-6 text-center">
              <img
                src="<?php echo wp_get_attachment_url(17); ?>"
                alt=""
                id="img-money"
                className="img-fluid"
              />
            </div>
          </div>
          <hr className="w-50 mb-5 mx-auto" />
          <div className="row">
            <div className="col-12 col-lg-6 text-center">
              <img
                src="<?php echo wp_get_attachment_url(34); ?>"
                alt=""
                id="img-sign"
                className="img-fluid"
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
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img
                src="<?php echo wp_get_attachment_url(35); ?>"
                alt=""
                id="img-sign"
                className="img-fluid"
              />
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
                if you are not yet convinced by the potential of Ride.CR, you
                will find below the presentation of our team and a detail of the
                beautiful course which awaits us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="parallax"
        style={{ backgroundImage: `url("./public/favicon.ico")` }}
      ></div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-success font-title text-uppercase mb-4">
              The team
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 text-center">
            <img
              src="<?php echo wp_get_attachment_url(29); ?>"
              width="250"
              heigth="350"
              alt=""
              className="img-fluid img-thumbnail"
            />
            <h2 className="text-white font-title font-big mb-0 mt-2">
              Benjamin
            </h2>
            <h4 className="lead text-success mb-5 mb-md-0">CEO & Developer</h4>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src="<?php echo wp_get_attachment_url(33); ?>"
              width="250"
              heigth="350"
              alt=""
              className="img-fluid img-thumbnail"
            />
            <h2 className="text-white font-title font-big mb-0 mt-2">Axel</h2>
            <h4 className="lead text-success mb-5 mb-md-0">
              Associate & Designs
            </h4>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src="<?php echo wp_get_attachment_url(32); ?>"
              width="250"
              heigth="350"
              alt=""
              className="img-fluid img-thumbnail"
            />
            <h2 className="text-white font-title font-big mb-0 mt-2">Flora</h2>
            <h4 className="lead text-success mb-5 mb-md-0">
              Associate & Community manager
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mx-auto">
              <h1 className="text-success font-title text-uppercase mb-4">
                The adventure has just begun
              </h1>
            </div>
          </div>
          <div className="row align-items-center mb-4 mb-md-0">
            <div className="col-12 col-md-4 text-center">
              <img
                src="<?php echo wp_get_attachment_url(16); ?>"
                alt=""
                id="img-iphone"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-8 text-center text-md-start">
              <p className="h4">
                <span className="h2 text-success ms-5">T</span>he first version
                of Ride.CR is already ready. Our developer's skills in computer
                development have allowed us to create a first version of the
                platform that just needs to be made beautiful.
              </p>
              <p className="mb-0">
                <span className="text-success ms-5">O</span>ur goal is to launch
                the project as soon as possible but especially before the
                beginning of the dry season (from the end of December to
                mid-May), the most touristic season in Costa Rica. We have a few
                months to finish the administrative procedures and the look of
                Ride.CR before making the platform available. The first online
                version will be free while we optimize it and then the platform
                will become paying.
              </p>
            </div>
          </div>
          <hr className="text-center mb-4" />
          <div className="row mb-5">
            <div className="col-12 col-sm-10 col-md-8 mx-auto">
              <h3 className="mb-3 text-center">
                <span className="text-success ms-5">H</span>ere are the next
                steps that await us in the coming weeks and that will be
                financed by the funds raised:
              </h3>
              <table className="table table-hover">
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
                    <td>|1| Creation of the company</td>
                    <td className="fw-bold text-center">$650</td>
                  </tr>
                  <tr>
                    <td>|2| Website implementation (creation & hosting) </td>
                    <td className="fw-bold text-center">$250</td>
                  </tr>
                  <tr>
                    <td>|3| Hiring a web designer for UX/UI</td>
                    <td className="fw-bold text-center">$500</td>
                  </tr>
                  <tr>
                    <td>|4| Publication of the app on Android and iOS</td>
                    <td className="fw-bold text-center">$125</td>
                  </tr>
                  <tr>
                    <td>|5| Creation of a marketing campaign</td>
                    <td className="fw-bold text-center">$200</td>
                  </tr>
                  <tr>
                    <td>|6| Additional costs such as legal fees</td>
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
              </table>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 text-center">
              <h3 className="font-title">
                Help Costa Rica towards reducing the CO2 emission
              </h3>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
                alt=""
                target="_blank"
                className="btn btn-success btn-lg"
                rel="noreferrer"
              >
                Contribute
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 text-center">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                About your contribution
              </button>
              <a href="/spendings" alt="" className="btn btn-warning">
                Check our spendings
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 text-center mb-3">
            <img
              src="<?php echo wp_get_attachment_url(18); ?>"
              alt=""
              id="img-sign"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <h1 className="text-center text-white mb-3">
              <span className="text-success">Costa Rica</span> in a few numbers
            </h1>
            <ul className="text-white mb-0">
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
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row mb-3"></div>
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <div className="col-12 text-center">
                <h1 className="text-success text-uppercase">
                  Discover Ride.CR
                </h1>
              </div>
              <p className="">
                Ride.CR is a website with an app-like design to simplify its use
                on mobile. In a second step, we want to create a real mobile
                application and publish it on all platforms (like App Store for
                Apple, or Google Play Store).
                <br />
                You can discover the first version of the Ride.CR website. It is
                online only for demonstration. Get started:
              </p>

              <p className="font-big mb-0">
                <span>Website:</span>{" "}
                <a
                  href="https://ride.cr"
                  alt=""
                  target="_blank"
                  className="link-success"
                  rel="noreferrer"
                >
                  https://ride.cr
                </a>
              </p>

              <p>
                <i className="small">
                  The platform is online only for demonstration purposes, it is
                  still under development, the design is not done, will change
                  and we do not take any responsibilities for anything happening
                  within it.
                </i>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="col-12 text-center">
                <h1 className="text-success text-uppercase">Task planning</h1>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
            <h1 className="text-center text-success font-title text-uppercase mb-0">
              Get in touch with us
            </h1>
            <p className="lead text-white">
              Send us a message / follow us on social medias
            </p>

            <a
              href="https://urlgeni.us/facebook/5F2a"
              alt=""
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img
                src="<?php echo wp_get_attachment_url(39); ?>"
                alt=""
                className="img-fluid me-2"
              />
            </a>

            <a
              href="https://urlgeni.us/instagram/h6Pt"
              alt=""
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img
                src="<?php echo wp_get_attachment_url(36); ?>"
                alt=""
                className="img-fluid me-2"
              />
            </a>

            <a
              href="https://wa.me/50660164300"
              alt=""
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img
                src="<?php echo wp_get_attachment_url(38); ?>"
                alt=""
                className="img-fluid me-2"
              />
            </a>

            <a
              href="https://urlgeni.us/twitter/NN6n"
              alt=""
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img
                src="<?php echo wp_get_attachment_url(40); ?>"
                alt=""
                className="img-fluid me-2"
              />
            </a>

            <a
              href="mailto:ride.cr.app@gmail.com"
              alt=""
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img
                src="<?php echo wp_get_attachment_url(42); ?>"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 text-center">
            <h1 className="text-center text-success font-title text-uppercase">
              Our newletter
            </h1>
            <p className="lead text-white">
              Enter your email to get in the loop and check what are the latest
              news from us. No spams.
            </p>
          </div>
        </div>
      </div>

      <div className="parallax border border-end-0 border-start-0 border-top-0 text-center pt-3">
        <img
          src="<?php echo wp_get_attachment_url(27); ?>"
          alt=""
          id="img-sign"
          className="img-fluid"
        />

        <h1 className="text-white font-title text-uppercase mb-0">
          Make a move towards ecology
        </h1>
      </div>

      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center mb-3">
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
                className="btn btn-success btn-lg text-white"
                rel="noreferrer"
              >
                Contribute
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">Share on social medias</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="modal"
        tabindex="-1"
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
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
