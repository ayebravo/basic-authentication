import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import "./index.css";
import "antd/dist/antd.css";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Router />);
