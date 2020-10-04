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
import { MasterGlobalStyle } from "./style";

// Container StarshipsList
const YourMaster = () => {
  // Attributes
  const { state, dispatch } = useContext(AppContext);
  // Functions
  const getYourMaster = async () => {
    await SWAPI.getYourMaster((res: { status: number; data: Master }) => {
      if (res.status === 200) {
        dispatch({
          type: "SET_MASTER",
          data: res.data,
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
        <ThemeProvider
          theme={state.master.name === "Darth Vader" ? DarkTheme : LightTheme}
        >
          <MasterGlobalStyle
            theme={state.master.name === "Darth Vader" ? DarkTheme : LightTheme}
          />

          <div>{state.master.name}</div>
        </ThemeProvider>
      )}
    </Container>
  );
};

export default YourMaster;
