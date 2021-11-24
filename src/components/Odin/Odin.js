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
      <OdinVideo />
      <Container>
        <MainHeading>The Best Shop in Asgard </MainHeading>
        <OdinText>We Provide</OdinText>
        <ButtonWrapper>
          <Link to="">
            <Button>Shopping Now !</Button>
          </Link>
          <OdinButton>Contact us</OdinButton>
        </ButtonWrapper>
      </Container>
    </OdinSection>
  );
};
