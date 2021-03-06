import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";

// import { Link } from 'react-router-dom'
// import face3 from "../assets/img/faces/face-3.jpg"

/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class UserProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    description: "",
    language: "",
  };

  componentDidMount() {
    apiHandler
      .getUser()
      .then((apiRes) => {
        const user = apiRes.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          email: user.email,
          description: user.description,
          language: user.language,
        });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }

  updateUser = () => {
    apiHandler
      .updateOne("/api/users/profile", this.state)
      .then((apiRes) => {
        this.props.context.setUser(apiRes.data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.updateUser();
  };

  handleChange = (event) => {
    const key = event.target.name;
    // console.log(key);
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.type === "file"
        ? event.target.files[0]
        : event.target.value;

    this.setState({ [key]: value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="content d-flex justify-content-center">
        <Col>
          <Col lg="12">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>

              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="">First Name</label>
                        <Input
                          type="text"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="">Last Name</label>
                        <Input
                          type="text"
                          value={this.state.lastName}
                          name="lastName"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pl-md-1" md="12">
                      <FormGroup>
                        <label htmlFor="email">Email address</label>
                        <Input
                          type="email"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          value={this.state.description}
                          name="description"
                          onChange={this.handleChange}
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>

              <CardFooter>
                <Button
                  className="btn-fill"
                  color="primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Col>
      </div>
    );
  }
}

export default withUser(UserProfile);
