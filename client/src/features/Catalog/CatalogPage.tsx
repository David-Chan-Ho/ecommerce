import React from "react";
import { Row } from "../../components/Row/Row";
import { Col } from "../../components/Col/Col";
import FilterMenu from "./FilterMenu";
import Products from "./Products";

function Catalog() {
    return (
        <Row>
            <Col col={2}>
                <FilterMenu />
            </Col>
            <Col>
                <Products />
            </Col>
        </Row>
    );
}

export default Catalog;
