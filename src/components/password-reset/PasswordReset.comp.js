import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <Container>
      <Row className="my-2 mx-2 mb-2">
        <Col>
          <h1 className="text-info text-center mt-4">Reset Password </h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

            <div className="d-flex align-items-center justify-content-center text-center mt-2">
              <Button type="submit">Reset Password</Button>
            </div>
          </Form>
          <hr />
          <Row>
            <Col>
              <a href="#!" onClick={() => formSwitcher("login")}>
                Login Now
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
