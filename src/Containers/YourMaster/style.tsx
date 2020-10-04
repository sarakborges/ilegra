import styled, { createGlobalStyle } from "styled-components";

export const IClinicChallengeWrapper = styled.div`
  padding: 210px 0;

  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const ChallengeTitle = styled.div`
  font-size: 72px;

  span {
    font-weight: 700;
  }
`;

export const ChallengeSubTitle = styled.div`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 14px;
`;

export const ChallengeStart = styled.button`
  height: 56px;
  margin-top: 160px;
  padding: 0 50px;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.buttonBgColor};
  background-color: ${(props) => props.theme.buttonBgColor};

  color: ${(props) => props.theme.buttonFontColor};
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;

  transition: color 0.3s, background-color 0.3s, opacity 0.3s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.buttonFontColor};

    color: ${(props) => props.theme.fontColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

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

export const MasterWrapper = styled.div`
  display: grid;

  padding: 105px 0;

  text-align: center;
`;

export const ChooseAgain = styled.button`
  grid-row: 1;

  height: 56px;
  margin: auto;
  padding: 0 30px;

  background-color: ${(props) => props.theme.buttonColor};
  border: 2px solid ${(props) => props.theme.buttonColor};
  border-radius: 10px;

  color: ${(props) => props.theme.buttonFontColor};
  font-weight: 700;

  transition: color 0.3s, background-color 0.3s, opacity 0.3s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.bgColor};

    color: ${(props) => props.theme.fontColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media (max-width: 800px) {
    grid-row: 3;

    margin-top: 35px;
  }

  @media (max-width: 420px) {
    padding: 0 15px;

    font-size: 14px;
  }
`;

export const MasterPicture = styled.div`
  grid-row: 2;

  max-width: 100%;
  margin: 90px auto 0;
  overflow: hidden;

  border-radius: 100%;

  @media (max-width: 800px) {
    grid-row: 1;

    margin-top: 0;
  }
`;

export const MasterName = styled.div`
  grid-row: 3;

  margin-top: 55px;

  font-size: 36px;
  line-height: 1.2;

  span {
    font-weight: 700;
  }

  @media (max-width: 800px) {
    grid-row: 2;

    margin-top: 35px;
  }

  @media (max-width: 360px) {
    font-size: 30px;

    span {
      display: block;
    }
  }
`;
