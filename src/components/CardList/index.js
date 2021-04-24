import React, { useState, useRef } from "react";
import DynamicCard from "../DynamicCard";
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PropTypes from "prop-types";

const CardList = ({ cardInfo }) => {
  const { id, boxtitle, boxtext, defaultcards, cards } = cardInfo;

  const [count, setcount] = useState(defaultcards);
  const inputtext = useRef(null);

  const handleClick = () => {
    setcount(inputtext.current.value.replace(/\D/, ""));
  };

  const renderContent = (cards) => {
    return cards && cards.length >= count
      ? cards.slice(0, count).map((card) => {
          return <DynamicCard key={card.id} card={card} />;
        })
      : cards
          .slice(0, cards.length)
          .map((card) => <DynamicCard key={id} card={card} />);
  };

  return (
    <Container fluid className="content-container">
      <Row>
        <Col lg={1} className="padding-div"></Col>
        <Col>
          <h2 className="title-text">{boxtitle}</h2>
          <p className="description-text">{boxtext}</p>
          <Row className="flex-wrap">{renderContent(cards)}</Row>
        </Col>
        <Col lg={1} className="padding-div"></Col>
      </Row>
      <Row className="bottom-row">
        <Col sm={4} md={6} lg={6}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-danger" onClick={() => handleClick()}>
                Read more
              </Button>
            </InputGroup.Prepend>
            <FormControl ref={inputtext} className="input-text" />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

CardList.defaultProps = {
  id: 0,
  boxtitle: "",
  boxtext: "",
  defaultcards: 0,
  cards: [],
};

CardList.propTypes = {
  cardInfo: PropTypes.shape({
    id: PropTypes.number,
    boxtitle: PropTypes.string,
    boxtext: PropTypes.string,
    defaultcards: PropTypes.number,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        cardDate: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        buttonText: PropTypes.string,
        color: PropTypes.string,
      })
    ),
  }),
};

export default CardList;
