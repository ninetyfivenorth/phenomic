// @flow

import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Title2 = styled.h1`
  font-size: 2em;
  text-align: right;
  color: blue;
`;

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={() => <Title>Hello World!</Title>} />
    <Route path="/2" component={() => <Title2>Hello again!</Title2>} />
  </Router>
));
