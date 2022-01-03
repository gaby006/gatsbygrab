import * as React from "react"
import {graphql,Link} from 'gatsby'
import Layout from "../components/layout"




const ProductTemplate = ({data : {contentfulProduct}, location}) =>(
 <Layout>
     <Link to="/products-page">Product page</Link>
     <div>
         
         <h2>{contentfulProduct.name} -<span style={{color: "#ccc"}} >
             Added on {contentfulProduct.createdAt}
         </span></h2>
         <p>{contentfulProduct.description}</p>
                          <img style={{width: "200px"}} src={contentfulProduct.image.file.url} /> 
                          <button className="snipcart-add-item"
                          data-item-id={contentfulProduct.slug}
                          data-item-price={contentfulProduct.price}
                          data-item-image={contentfulProduct.image.file.url}
                          data-item-name={contentfulProduct.name}
                          data-item-url={location.pathname} >Add item</button>
     </div>
 </Layout>

)

export const query= graphql`
query ProductQuery($slug: String!) {
    contentfulProduct(slug: {eq: $slug}) {
      name
      private
      price
      slug
      description
      createdAt(formatString: "MMM Do YYYY")
      image {
        file {
          url
        }
      }
    }
  }`
  

export default ProductTemplate
