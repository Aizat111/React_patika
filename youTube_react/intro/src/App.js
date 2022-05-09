import  React from 'react';
import {Container,Row,Col, Nav} from 'reactstrap';

function App() {
  return (
  <>
  <Container>
    <Row>
      <Navi/>
    </Row>
    <Row>
      <Col xs="3">
      <Category/>
      </Col>
      <Col xs="3">
      <ProductList/>
      </Col>
    </Row>
  </Container>
  </>
  );
}

export default App;
