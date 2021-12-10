import React from "react";
import App from "next/app";
import Head from "next/head";
import Index from "./index.js"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
// import 'bootstrap/dist/css/bootstrap.css';

export default class MyApp extends App {
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>포트폴리오</title>
        </Head>
        <Index />
      </React.Fragment>
    );
  }
}
