import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        // 緑色
        main: "#8BC34A",
        dark: "#689F38",
        light: "#DCEDC8"
      },
      secondary: {
        // オレンジ
        main: "#FF5722"
      },
      text: {
        // ちょっと薄い黒
        primary: "#212121",
        secondary: "#757575"
      }
    }
  });

export default theme;