import React from "react";

// reactstrap components
import {
  //Button,
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "../components/DemoNavbar.js";
import SimpleFooter from "../components/SimpleFooter.js";

class Portfolio extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.makeRequest();
  }

  async makeRequest() {
    try {
      const response = await fetch("/api/projects");
      const projects = await response.json();
      this.setState({
        items: projects.projectCollection.items,
      });
    } catch (error) {
      // TODO: handle error
    }
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              {this.state.items.map((item) => (
                <div key={item.title}>{item.title}</div>
              ))}
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Portfolio;
