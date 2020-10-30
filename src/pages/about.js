import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function About() {
    return (
        <Layout>
            <Header headerText="About Me" />
            <p>I'm good enough, I'm smart enough, and gosh darn it, people like me!</p>
            <Footer footerText="Made with Love in Montreal ❤️" />
        </Layout>
    );
}