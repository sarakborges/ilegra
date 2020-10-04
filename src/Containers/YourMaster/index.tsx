// Dependencies
import React, { useEffect, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

// Context
import { AppContext } from "Contexts/App";

// APIS
import SWAPI from "Apis/SWAPI";

// Interfaces
import { Master } from "Interfaces/Master";

// Components
import Container from "Components/Container";

// Themes
import DarkTheme from "Themes/Dark";
import LightTheme from "Themes/Light";

// Styles
import {
  MasterGlobalStyle,
  MasterWrapper,
  ChooseAgain,
  MasterPicture,
  MasterName,
} from "./style";

// Container StarshipsList
const YourMaster = () => {
  // Attributes
  const { state, dispatch } = useContext(AppContext);
  const [theme, setTheme] = useState<{
    masterImage: string;
  }>({
    masterImage: "",
  });

  // Functions
  const getYourMaster = async () => {
    dispatch({
      type: "SET_IS_LOADING",
      data: true,
    });

    await SWAPI.getYourMaster((res: { status: number; data: Master }) => {
      if (res.status === 200) {
        setTheme(() =>
          res.data.name === "Darth Vader" ? DarkTheme : LightTheme
        );

        dispatch({
          type: "SET_MASTER",
          data: res.data,
        });

        dispatch({
          type: "SET_IS_LOADING",
          data: false,
        });
      }
    });
  };

  useEffect(() => {
    getYourMaster();
  }, []);

  // DOM
  return (
    <Container>
      {!!state.master && (
        <ThemeProvider theme={theme}>
          <MasterGlobalStyle theme={theme} />

          <MasterWrapper>
            <ChooseAgain onClick={getYourMaster} disabled={state.isLoading}>
              choose your path again, Padawan
            </ChooseAgain>

            <MasterPicture>
              <img
                src={theme.masterImage}
                alt={`Foto de ${state.master.name}`}
              />
            </MasterPicture>

            <MasterName>
              Your master is <span>{state.master.name}</span>
            </MasterName>
          </MasterWrapper>
        </ThemeProvider>
      )}
    </Container>
  );
};

export default YourMaster;
