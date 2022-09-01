import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email().required(),
  city: yup.string().required(),
  state: yup.string(),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted!"),
});

function HearFromU({ variants }) {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        state: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          style={{ paddingRight: 0, color: "wheat" }}
        >
          <h3>We want to hear from you</h3>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <motion.div variants={variants} whileHover={{ scale: 1.2 }}>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  placeholder="First Name"
                />
              </motion.div>
              <Form.Control.Feedback type="invalid" tooltip>
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <motion.div variants={variants} whileHover={{ scale: 1.2 }}>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  placeholder="Last Name"
                />
              </motion.div>

              <Form.Control.Feedback type="invalid" tooltip>
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Email</Form.Label>
              <motion.div variants={variants} whileHover={{ scale: 1.2 }}>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </motion.div>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <motion.div variants={variants} whileHover={{ scale: 1.2 }}>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
              </motion.div>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>State</Form.Label>
              <motion.div variants={variants} whileHover={{ scale: 1.2 }}>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
              </motion.div>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="position-relative">
              <motion.div variants={variants} whileHover={{ scale: 1.2 }}>
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik106"
                  feedbackTooltip
                />
              </motion.div>
            </Form.Group>
          </Row>
          <motion.button
            variants={variants}
            whileHover={{ scale: 1.2 }}
            type="submit"
            className="btn btn-outline-light mb-5"
          >
            {" "}
            Submit form
          </motion.button>
        </Form>
      )}
    </Formik>
  );
}

export default HearFromU;
