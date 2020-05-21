import React, { FC , useState, Fragment } from 'react';
import {
  Typography,
  TextField,
  OutlinedInput,
} from '@material-ui/core';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';


const LoginTypography = styled(Typography)`
  color: #0099FF;
  text-align: center;
  `;

const StyledTextField = styled(TextField)`
  width: 200px;
  text-align: center;
  `;
interface IState {
  name: string;
  password: string;
  companyName: string;
}

const Login: FC = () => {
  const[state, setState] = useState<IState>({
    name: '',
    password: '',
    companyName: '',
  });

  return (
  <Fragment>
    <LoginTypography variant="h1">
      Mach
    </LoginTypography>
    <StyledTextField
      id="outlined-basic"
      variant="outlined"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, name: e.target.value})
      }}
    />
    <div>
    <OutlinedInput
      id="outlined-adornment-weight"
      value={state.password}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.target.value})
      }}
      aria-describedby="outlined-weight-helper-text"
      labelWidth={0}
    />
    </div>
  </Fragment>
  );
}

export default Login;
