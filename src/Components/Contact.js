import React, { Component } from "react";
import "./Contact.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
      show: false,
    };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-me", ...this.state }),
    })
      .then(() => {
        this.showModal();
        this.setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => alert(error));
    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  showModal = () => {
    // if (this.name == "" || this.email == "" || this.message == "") {
    //   return;
    // }
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="contactName"
                    name="name"
                    value={this.state.name}
                    required
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    size="35"
                    id="contactEmail"
                    name="email"
                    value={this.state.email}
                    required
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="message"
                    value={this.state.message}
                    required
                    onChange={this.handleChange}
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="submit">
                    Submit
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Rahul Meena
                <br />
                <br />
                Jaipur, Rajasthan 302025
                <br />
                <span>+918683923360</span>
                <br />
                <span>
                  <a
                    href={`mailto:1996meenarahul@gmail.com?subject=The%20subject%20of%20the%20mail`}
                  >
                    {" "}
                    1996meenarahul@gmail.com{" "}
                  </a>
                </span>
              </p>
            </div>
          </aside>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>
            Thanks for your query.
            <br /> Your message has been sent.
          </p>
        </Modal>
      </section>
    );
  }
}

export default Contact;
