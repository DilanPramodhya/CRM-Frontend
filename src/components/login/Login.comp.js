import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  password,
}) => {
  return (
    <Container>
      <Row className="my-2 mx-2 mb-2">
        <Col>
          <h1 className="text-info text-center mt-4">Client Login </h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center text-center mt-2">
              <Button type="submit">Login</Button>
            </div>
          </Form>
          <hr />
          <Row>
            <Col>
              <a href="#!" onClick={()=> formSwitcher("reset")}>
                Forget Password ?{" "}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
