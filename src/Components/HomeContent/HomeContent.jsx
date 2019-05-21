import React, { Component } from "react";
import "./HomeContent.css";

class HomeContent extends Component {
  render() {
    return (
      <div>
        <div className="partners">
          <img className="chubb" src="./images/chubb.png" alt="" />
          <img className="nationWide" src="./images/Nationwide.png" alt="" />
          <img className="qbe" src="./images/qbe.png" alt="" />
          <img className="assurant" src="./images/assurant.png" alt="" />
        </div>
        <div className="solutions">
            <h1 className="solutionHeading">
              Choose the solution that's right for your business.
            </h1>
          <div className="solutionContents">
            <h4>
              <img className="solutionImg" src="./images/codeIcon.png" alt="" />
              API
            </h4>
            <p>
              The Sure API is a set of RESTful endpoints that allow you to
              customize the look and feel for a truly native experience.
            </p>

            <h4>
              <img className="solutionImg" src="./images/plugIcon.png" alt="" />
              iFrame
            </h4>
            <p>
              The iFrame solution allows for easy integration - simply place a
              line of code to embed an insurance form anywhere on your site.
            </p>
            <h4>
              <img
                className="solutionImg"
                src="./images/screenIcon.png"
                alt=""
              />
              White Label
            </h4>
            <p>
              Sure will build and host a branded page, which you can link to
              from a webpage or an email.
            </p>
          </div>
        </div>
        <div className='coverageBg' style={{ backgroundImage: "url('./images/blue-bg.png')" }}>
            <h1 className="coveragesHeading">
              Our partners come in all shapes and sizes, just like our policies.
            </h1>
          <div className='coverages' >
            <div className="card pet">
              <img src="./images/icon-pet.svg" alt="" />
              <div>
              <h6 className='cardHeading'>Pet Coverage</h6>
              <p className='cardP'>Includes preventative, accidents, and comprehensive</p>
              </div>
            </div>
            <div className="card travel">
              <img src="./images/icon-travel.svg" alt="" />
              <div>
              <h6 className='cardHeading'>Travel Coverage</h6>
              <p className='cardP'>Includes baggage, car, rental, leisure, and flight policies</p>
              </div>
            </div>
            <div className="card property">
              <img src="./images/icon-property.svg" alt="" />
              <div>
                
              <h6 className='cardHeading'>Property Coverage</h6>
              <p className='cardP'>Includes jewelry, collectibles, and smartphones policies</p>
              </div>
            </div>
            <div className="card event">
              <img src="./images/icon-event.svg" alt="" />
              <div>
              <h6 className='cardHeading'>Catastrophic Event Coverage</h6>
              <p className='cardP'>Includes weddings, and special events policies</p>
              </div>
            </div>
            <div className="card home">
              <img src="./images/icon-home.svg" alt="" />
              <div>
                <h6 className='cardHeading'>Home Coverage</h6>
                <p className='cardP'>Includes renters, eviction, and homeowners policies</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('./images/partners-signup-bg.png')" }}
          className="contactForm"
        >
          <p>Contact our partnerships team today.</p>
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Company" type="text" />
          <input placeholder="Work Email" type="email" />
          <input className="submitBtn" type="submit" />
        </div>
      </div>
    );
  }
}

export default HomeContent;
