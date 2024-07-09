import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <>
      <h1 className="p-4 tracking-wide">Contact Us</h1>
      <Form className="ps-3">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="email"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control className="email" placeholder="1234" type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            className="email"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control className="email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postal code</Form.Label>
            <Form.Control className="email" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" className="center">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;
