import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DynamicCard = ({ card }) => {
  const { cardDate, title, description, buttonText, color, bgcolor } = card;
  return (
    <Col className="cards">
      <Card
        style={{ backgroundColor: `${bgcolor}`, color: `${color}` }}
        className="singlecard"
      >
        <Card.Header className="zeroborder">
          <h5>{cardDate}</h5>
          <h3 className="desrciption-text">{title}</h3>
        </Card.Header>
        <Card.Body className="desrciption-text">
          <p className="description-text">{description}</p>
        </Card.Body>
        <Card.Footer className="zeroborder">
          <Button variant="outline-light">{buttonText}</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

DynamicCard.propTypes = {
  cardInfo: PropTypes.shape({
    cardDate: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    color: PropTypes.string,
  }),
};

DynamicCard.defaultProps = {
  cardDate: "",
  title: "",
  description: "",
  buttonText: "",
  color: "",
};

export default DynamicCard;
