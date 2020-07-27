import React from "react"
import { graphql } from "gatsby"
// import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Post({ data }) {
  const post = data.blogPost

  return (
    <article>
      <MDXRenderer>DO THIS INSTEAD</MDXRenderer>
    </article>
  )
}

export const pageQuery = graphql`
  query BlogPostTest($id: String) {
    blogPost(id: { eq: $id }) {
      body
    }
  }
`
