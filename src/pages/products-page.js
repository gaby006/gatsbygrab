import * as React from 'react'
import { graphql, graphsql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

class Products extends React.Component {

state ={
    products: []
}

    componentDidMount() {
    
        this.getProducts()
    }

    getProducts=()=>{

        const allProducts=this.props.data.allContentfulProduct.edges;

        const products=netlifyIdentity.currentUser()!==null?allProducts:allProducts.filter(({node})=>!node.private)


         this.setState({products})

    }

    render() {
        const {products}=this.state
        return (<Layout>
              {
                products.map(({ node }) => (


                    <div key={node.id}>
                        <h1>{node.name}</h1>
                        <Link to={`/products/${node.slug}`}>{node.slug}</Link>
                        <img style={{ width: "50px" }} src={node.image.file.url} />
                    </div>



                ))

            }

        </Layout>

        )
    }
}

export const query = graphql`
query MyQuery5 {
    allContentfulProduct(limit: 10) {
      totalCount
      edges {
        node {
          id
          slug
          name
          price
          spaceId
          description
          private
          image {
            file {
              url
              contentType
            }
          }
          createdAt
        }
      }
    }
  }
  
`

export default Products