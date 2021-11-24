import styled from "styled-components";
import { Button } from "../../globalStyles";

export const OdinSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;

export const OdinVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const OdinText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 11.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const OdinButton = styled(Button)`
  color: #fff9f7;
  &:before {
    background: #e1e3d4;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
