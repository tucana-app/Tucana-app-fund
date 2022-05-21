import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ComingSoon(props) {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          className="text-center mx-auto"
        >
          <h1 className="text-success">
            {props.pageName || t("translation:comingSoon.title")}
          </h1>
          <p className="lead">
            {t("translation:comingSoon.subTitle")}
            <br />
            {t("translation:comingSoon.thankYou")}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ComingSoon;
