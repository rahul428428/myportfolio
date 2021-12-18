import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a  className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/kettoClone.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Ketto.org Clone</h3>
                      <p>Ketto is an Indian online crowdfunding platform, where any individual/organ across the country can raise funds for causes ranging from medical healthcare to disaster relief. </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a target="_blank" href="https://ketto-org-clone.netlify.app/homepage-ui/homepage"  className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a target="_blank" href="https://github.com/MukulHowale/Ketto-Clone" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                      <i className="devicon-html5-plain-wordmark colored technology"></i>
                      <i className="devicon-css3-plain-wordmark colored technology"></i>
                      <i className="devicon-javascript-plain colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a   className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/medikal.JPG" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Medikal Mobile App</h3>
                      <p>A HealthCare application. The idea is for someone to visit the app, search for the medicines available and choose some of them to buy them, theoretically, printed and shipped.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a target="_blank" href="https://medikal.netlify.app/frontend/starting/starting_page.html"  className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a target="_blank" href="https://github.com/rahul428428/ePharmacy-Clone" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                      <i className="devicon-html5-plain-wordmark colored technology"></i>
                      <i className="devicon-javascript-plain colored technology"></i>
                      <i className="devicon-spring-plain colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a   className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/easemytripProject.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>EaseMyTrip clone</h3>
                      <p>EaseMyTrip is a decade old travel booking platform catering to all your travel needs. The UI/UX is best in class and least cluttered.

If you are an app user , on flights you can enjoy the auto split screen to scroll for options best suiting your needs.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a target="_blank" href="https://ease-my-trip-booking.netlify.app/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a target="_blank" href="https://github.com/vermasuraj11011/EaseMyTrip-clone" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                      <i className="devicon-html5-plain-wordmark colored technology"></i>
                      <i className="devicon-javascript-plain colored technology"></i>
                      <i className="devicon-nodejs-plain colored technology "></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              
               
              {/* <ul className="actions">
                <li className="wide-button"><a href="https://github.com/rammazzoti2000" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul> */}
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
