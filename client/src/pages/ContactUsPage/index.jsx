import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import contact_page_logo from "../../assets/black_white_houses.jpg";
import "./styles.css";

const ContactUsPage = (props) => {
  return (
    <div>
      <section>
        {/* <h2>Creating an Overlay with an Absolutely Positioned Element</h2> */}
        <div className="overlay">
          <Form className="input">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First & Last Name</Form.Label>
              <Form.Control type="text" placeholder="First & Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Email Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type Subject here ..."
                as="textarea"
                rows={8}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <div className="box-1">Email</div>
          <div className="box-2">Phone</div>
          <div className="box-3">Social Media</div>
          <div className="box-4">Location</div>
        </div>

        {/* <div class="modal">Lorem Ipsum is simply dummy text </div> */}
        <img
          src={contact_page_logo}
          className="w-full flex flex-col h-[800px] items-center justify-center bg-cover bg-center"
        />
        
      </section>
    </div>
  );
};

export default ContactUsPage;
