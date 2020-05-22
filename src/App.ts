import React from "react";
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from "@material-ui/styles";
import styled, {
  ThemeProvider as StyledThemeProvider
} from "styled-components";
import theme from "./theme";

const App = () => (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
            // ここからメインのコンポーネントを記載する
            // <Main></Main> とか
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
)