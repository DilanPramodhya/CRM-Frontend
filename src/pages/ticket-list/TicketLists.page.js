import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";

export function TicketLists() {
  const [str, setStr] = useState("");
  const [displayTickets, setDisplayTickets] = useState(tickets);

  useEffect(() => {}, [str, displayTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTickets(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Tickets List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTickets} />
        </Col>
      </Row>
    </Container>
  );
}
