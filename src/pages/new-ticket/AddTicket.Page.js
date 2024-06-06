import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation.js";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";

const initialFrmDta = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDta);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {}, [frmData, setFrmDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log("Form Submit received", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            frmDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
