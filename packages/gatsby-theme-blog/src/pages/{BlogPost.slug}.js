import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Post({ data }) {
  const post = data.blogPost

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
    blogPost(id: { eq: $id }) {
      body
    }
  }
`
