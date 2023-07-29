import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./BusinessCardForm.module.scss";
import { addCard, editCard, getCardDetails } from "../services/cardService";
import { successMsg } from "../services/feedbacksService";
import { useNavigate } from "react-router-dom";

interface NewCardFormProps {}

interface NewCardValues {
  image: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  zipCode: string;
}

const BusinessCardForm: React.FC<NewCardFormProps> = () => {
  const [cardId, setCardId] = useState<number | null>(null);

  const navigate = useNavigate();

  const initialValues: NewCardValues = {
    image: "",
    name: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    zipCode: "",
  };

  const validationSchema = yup.object({
    image: yup.string().required().min(2),
    name: yup.string().required().min(4),
    description: yup.string().required().min(10),
    email: yup.string().required().email(),
    phone: yup.string().required().min(10),
    address: yup.string().required().min(7),
    state: yup.string().required(),
    zipCode: yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      if (cardId) {
        editCard(cardId, values);
      } else {
        addCard({ ...values }).then(() => {
          successMsg(`${values.name} was added`);
        });
      }

      navigate("/home");
    },
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const queryParams = new URLSearchParams(url.search);
    const cardIdParam = queryParams.get("cardId");

    if (cardIdParam) {
      setCardId(Number(cardIdParam));
      getCardDetails(Number(cardIdParam)).then((res) => {
        formik.setValues(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={formik.handleSubmit} className={styles.cardForm}>
            <Form.Group controlId="name">
              <Form.Label>Business name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.touched.name && formik.errors.name)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.touched.image && formik.errors.image)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.touched.description && formik.errors.description
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.email && formik.errors.email)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.phone && formik.errors.phone)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.address && formik.errors.address)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.state && formik.errors.state)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.zipCode && formik.errors.zipCode)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export { BusinessCardForm };
