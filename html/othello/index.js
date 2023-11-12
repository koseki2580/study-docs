import React from "react";
import Layout from "@theme/Layout";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const IframeComponent = ({ props }) => {
  const path = props.pathname;
  return path.endsWith("/") ? (
    <iframe
      title="オセロ"
      src="/study-docs/html/othello/index.html"
      style={{ width: "100%", height: "90vh" }}
    />
  ) : (
    <iframe
      title="オセロ"
      src="html/othello/index.html"
      style={{ width: "100%", height: "90vh" }}
    />
  );
};

export default function OthelloComponent() {
  return (
    <Layout
      title="オセロ"
      description="Description will go into a meta tag in <head />"
    >
      <Router>
        <Route
          path="/study-docs/othello"
          render={(path) => <IframeComponent props={path.location} />}
        />
      </Router>
    </Layout>
  );
}
