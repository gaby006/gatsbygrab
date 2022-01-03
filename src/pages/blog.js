import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { node } from 'prop-types'

const markdownQuery = graphql`
query MyQuery2 {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

export default () => {
    return (

        <Layout>
            <>
                <h1 style={{ borderBottom: "solid 1px gray" }}>My first gatbsy blog</h1>

                <StaticQuery query={markdownQuery} render={
                    (data) => (
                        <>
                            <h2>{data.allMarkdownRemark.totalCount} count</h2>

                            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                                <div>
                                    <h4>{node.frontmatter.title} - <span style={{ color: "gray" }}>{node.frontmatter.date}</span></h4>
                                    <p>{node.excerpt}</p>
                                </div>
                            ))
                            }

                        </>
                    )


                } />

            </>
        </Layout>

    )
}