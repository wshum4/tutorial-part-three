import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contact() {
    return (
        <Layout>
            <Header headerText="I'd love to talk! Email at the address below" />
            <p><a href="mailto:me@example.com">me@example.com</a></p>
            <Footer footerText="Made with Love in Montreal ❤️" />
        </Layout>
    )
}