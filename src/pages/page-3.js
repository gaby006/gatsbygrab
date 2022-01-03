import React from 'react'
import Layout  from '../components/layout'
import {useStaticQuery,graphql, Link, StaticQuery} from 'gatsby'
import { node } from 'prop-types'

const filesQuery=graphql`
query MyQuery {
    allFile {
      edges {
        node {
          name
          extension
          relativePath
          size
        }
      }
    }
  }
`


export default ()=> {

    const data = useStaticQuery(filesQuery)

  return  (<Layout>

        <div>
            <h1>My first page developed with Gatsby</h1>
        </div>

       
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>extension</th>
                        <th>relativePath</th>
                        <th>size</th>
                    </tr>
                </thead>
                <tbody>

                    {
                       

                       
                            data.allFile.edges.map(({node},index)=>(
                                <tr>
                                    <td>{node.name}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.relativePath}</td>
                                    <td>{node.size}</td>
                                </tr>))
                        
                      
                            }
                </tbody>
            </table>

        <Link to='/'>Home</Link>
    </Layout>
)

                }