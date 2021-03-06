import React, { Component } from "react";
import { withRouter , Link} from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import NavMain from "../NavMain";
import {
  FormGroup,
  Label,
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Alert
} from "reactstrap";


class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    role:"teacher", 
    message: null
  };


  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({message: 'email already taken, peace and love'})
        console.log(error);
      });
  };

  render() {

    return (

      <div className="content  d-flex justify-content-center ">
 <Col xs="4 text-center  mt-5 " >
      {
        this.state.message && <Alert color='danger'>{this.state.message}</Alert>
      } 
            <Card className="card-user mt-5">
              <CardBody className="card  ">


      <form  className="Form" onChange={this.handleChange} onSubmit={this.handleSubmit}>

        <h2 className="title">Signup</h2>
        <br/>

          <div className="form-row">
      

          <FormGroup className="col-md-6">

          <Label for="firstName">firstName</Label>
         
                  <Input
                    className="input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
           </FormGroup>

           <FormGroup className="col-md-6">

           <Label for="lastName">lasttName</Label>

                <Input
                  className="input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
            </FormGroup>

        </div>

        <div className="form-row">

        <FormGroup className="col-md-6">

            <Label className="label" htmlFor="email">
              Email
            </Label>

       
              <Input
                className="input"
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
        </FormGroup>

        <FormGroup className="col-md-6">

        <Label className="label" htmlFor="password">
          Password
        </Label>

        <Input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        </FormGroup>

        </div>

        <FormGroup>
          <Label for="exampleSelect1">Select Your Profile</Label>
          <Input   
            className="input"
            type="select"
            name="role"
            id="role"
        
            value={this.state.role}
            onChange={this.handleChange}
          >
            <option value="teacher">teacher</option>
            <option value="student">student</option>
          </Input>
        </FormGroup>
        <Button className="btn" color="primary" type="submit">Submit</Button>
        <p>
          Already have an account ?{" "}
          <Link className="link" to="/signin">
            Signin
          </Link>
        </p>
      </form>

      </CardBody>
    </Card> 
    </Col>
    </div>
   
    );
  }
}

export default withRouter(FormSignup);

