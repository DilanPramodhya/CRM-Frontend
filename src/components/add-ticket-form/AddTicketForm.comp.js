import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmData,
  frmDataError,
}) => {
  console.log(frmData);
  return (
    <Card className="mt-3 py-4 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit} className="px-4">
        <Form.Group as={Row} className="py-4 ">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
            //   minLength="3"
              maxLength="40"
              onChange={handleOnChange}
              placeholder="Enter Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "Subject is Required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="py-4">
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="py-4">
          <Form.Label>Date</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows={5}
            value={frmData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <div className="d-grid gap-2 mb-4">
          <Button type="submit" variant="info">
            Login
          </Button>
        </div>
      </Form>
    </Card>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
};
