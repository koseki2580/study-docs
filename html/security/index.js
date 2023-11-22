import React from "react";
import Layout from "@theme/Layout";

export default function SecurityComponent() {
  return (
    <Layout
      title="セキュリティ"
      description="Description will go into a meta tag in <head />"
    >
      <iframe
        title="セキュリティ"
        src="/study-docs/html/security/index.html"
        style={{ width: "100%", height: "90vh" }}
      />
    </Layout>
  );
}
