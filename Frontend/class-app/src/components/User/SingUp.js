import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../../redux/User/userActions";
import classnames from "classnames";
import SingIn from "./SingIn";

class SingUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username,
    };

    // console.log(newUser);
    this.props.createUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    // className="form-control form-control-lg "
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <p class="invalid-feedback">{errors.username}</p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    // className="form-control form-control-lg "
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />

                  <p class="invalid-feedback">{errors.email}</p>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg "
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <p class="invalid-feedback">{errors.password}</p>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg "
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.confirmPassword,
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  <p class="invalid-feedback">{errors.confirmPassword}</p>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createUser })(SingUp);
// export default connect(null, { createUser })(SingUp);
// export default SingUp;
