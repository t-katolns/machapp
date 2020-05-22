import React, { FC , useState, Fragment } from 'react';
import {
  Typography,
  TextField,
  Link,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

const TextTypography = styled(Typography)`
  color: #0099FF;
  text-align: center;
  padding: 30px;
`;

const StyledTextField = styled(TextField)`
  width: 600px;
  text-align: center;
`;

const SubmitButtom = styled(Button)`
  width: 200px;
  text-align: center;
  background: #0099FF;
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
    <TextTypography variant="h1">
      Mach
    </TextTypography>
      <TextTypography variant="h5">
        ID
      </TextTypography>
      <StyledTextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, name: e.target.value})
        }}
      />
      <TextTypography variant="h5">
          パスワード
      </TextTypography>
      <StyledTextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, password: e.target.value})
        }}
      />
      <SubmitButtom>
        ログイン
      </SubmitButtom>
      <Link
        onClick={() => {}}
      >
        新規登録はこちら
      </Link>
  </Fragment>
  );
}

export default Login;
