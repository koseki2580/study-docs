import React from "react";
import Layout from "@theme/Layout";
export default function OthelloComponent() {
  return (
    <Layout
      title="オセロ"
      description="Description will go into a meta tag in <head />"
    >
      <iframe
        title="オセロ1"
        src="/study-docs/html/othello/index.html"
        style={{ width: "100%", height: "90vh" }}
      />
    </Layout>
  );
}
