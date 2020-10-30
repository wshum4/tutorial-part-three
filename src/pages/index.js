import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout>
    <h1>Hi! I'm building a fake Gatsby site as a part of a tutorial!</h1>
      <p>What do I like to do? Lots of course but definitely enjoy building websites.</p>
      <Footer footerText="Made with Love in Montreal ❤️" />
    </Layout>
  );
}
