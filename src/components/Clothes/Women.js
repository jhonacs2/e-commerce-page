import React from "react";
import { IconContext } from "react-icons";
import { Heading, TextWrapper } from "../../globalStyles";
import { ClotheSection, ClothesgWrapper } from "./ClotheStyle";

export const Women = () => {
  return (
    <IconContext.Provider value={{ color: "#ac8c35", size: "1rem" }}>
      <ClotheSection id="women">
        <ClothesgWrapper>
          <Heading>Pick Your Best Option</Heading>
          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
          >
            Create, maintain and store your data with Delta.
          </TextWrapper>
        </ClothesgWrapper>
      </ClotheSection>
    </IconContext.Provider>
  );
};
