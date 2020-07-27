import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Post({ data }) {
  const post = data.mdx

  return (
    <Layout>
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`
