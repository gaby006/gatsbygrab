import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import gtasbyLogo from "../images/gatsby-icon.png"
import netlifyIdentity from "netlify-identity-widget"

class Header extends React.Component {

componentDidMount(){
  netlifyIdentity.init()
}
  render() {

    const {siteTitle}=this.props

    return (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
 < div data-netlify-identity-menu />

    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <span>
      <img src={gtasbyLogo} style={{width:50}}/>
      
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      </span>
    </div>
    
  </header>
)
        }
      }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
