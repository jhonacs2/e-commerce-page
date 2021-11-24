import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  ButtonWrapper,
  OdinButton,
  OdinSection,
  OdinText,
  OdinVideo,
} from "./OdinStyles";

export const Odin = () => {
  return (
    <OdinSection>
      <OdinVideo src="./assets/odin.mp4" loop autoPlay muted />
      <Container>
        <MainHeading>The Best Shop in Asgard </MainHeading>
        <OdinText>We Provide The Best CLothes in The Galaxy</OdinText>
        <ButtonWrapper>
          <Link to="">
            <OdinButton>Shop Now !</OdinButton>
          </Link>
          <OdinButton>Contact us</OdinButton>
        </ButtonWrapper>
      </Container>
    </OdinSection>
  );
};
