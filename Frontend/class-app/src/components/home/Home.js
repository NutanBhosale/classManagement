import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row title">
            <div className="col-sm-12 btn btn-warning">
              Compelted 25 years of excellence in IT training
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "350px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={"assets/img/stud.jpg"}
              />

              <Carousel.Caption>
                <h3 className="whiteTextOverride">We Build Career </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "350px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={"assets/img/stud1.jpg"}
              />

              <Carousel.Caption>
                <h3 className="whiteTextOverride">Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "350px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={"assets/img/stud3.jpg"}
              />

              <Carousel.Caption>
                <h3 className="whiteTextOverride">Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <table>
            <tr>
              <td className="td">
                {" "}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="assets/img/java.jpg" />
                  <Card.Body>
                    <Card.Title>Java</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" size="lg" block>
                      Check
                    </Button>
                  </Card.Body>
                </Card>
              </td>

              <td className="td">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="assets/img/java.jpg" />
                  <Card.Body>
                    <Card.Title>.Net</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" size="lg" block>
                      Check
                    </Button>
                  </Card.Body>
                </Card>
              </td>

              <td className="td">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="assets/img/java.jpg" />
                  <Card.Body>
                    <Card.Title>Python</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" size="lg" block>
                      Check
                    </Button>
                  </Card.Body>
                </Card>
              </td>

              <td className="td">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="assets/img/java.jpg" />
                  <Card.Body>
                    <Card.Title>Testing</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" size="lg" block>
                      Check
                    </Button>
                  </Card.Body>
                </Card>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
