import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Button, Alert } from "react-bootstrap";
import { useRef, useState } from "react";

export default function Footer() {
  const [alert, setAlert] = useState(),
    ref = useRef(),
    handleSubscribe = () => {
      if (
        ref.current.value &&
        /\S+@\S+\.\S+/.test(ref.current.value.toLowerCase())
      ) {
        setAlert("outline-success");
      } else {
        setAlert("outline-danger");
      }
      ref.current.value = "";
      setTimeout(setAlert, 3500);
    };
  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol size="auto" className="mb-4 mb-md-0">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </MDBCol>

          <MDBCol md="5" size="12" className="mb-4 mb-md-0">
            <input
              ref={ref}
              type="email"
              id="typeEmail"
              className="form-control"
              placeholder="Email address"
              required
            />
          </MDBCol>

          <MDBCol size="auto" className="mb-4 mb-md-0">
            <Button variant="outline-light" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </MDBCol>
          {alert && (
            <MDBCol size="fixed">
              <Alert variant={alert} dismissible onClose={setAlert}>
                <p>
                  {alert === "outline-success"
                    ? "User Subscribed"
                    : "Enter Valid Email"}
                </p>
              </Alert>
            </MDBCol>
          )}
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://www.transitguard.com">
          www.transitguard.com
        </a>
      </div>
    </MDBFooter>
  );
}
