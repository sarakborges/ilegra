import styled, { createGlobalStyle } from "styled-components";

interface props {
  theme: {
    bgColor: string;
    fontColor: string;
  };
}
export const MasterGlobalStyle = createGlobalStyle<props>`
  body {
    background-color: ${(props) => props.theme.bgColor};

    color: ${(props) => props.theme.fontColor};
  }
`;
