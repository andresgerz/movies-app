import * as React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Movies from '../components/Movies'


import 'bootstrap/dist/css/bootstrap.min.css';


class IndexPage extends React.Component {
  
  static async getInitialProps({ query }) {
    const page = query.page ? Number(query.page) : 1;
    const req = await axios.get(`http://www.omdbapi.com/?apikey=8515fd33&s=batman&page=${page}`);

    const movies = req.data.Search;
    console.log(movies);
    return { movies, page }
  }

  render() {
  
  return(
          <Layout>
            <Head>
              <title>Movies App</title>
            </Head>
            <div>

              <div className="movies">
                { this.props.movies.map((p) => <Movies {...p} />) }

                <style jsx>{`
                  
                  .movies {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                  }

                                 
                `}</style>
              </div>
              
            
              { this.renderPage() }
              </div>
            <p className="display-1">Next.js</p>
          </Layout>
)

}

  renderPage() {
    const back = this.props.page > 1 ? 
      <Link href={`/?page=${this.props.page - 1 }`}><a>Back</a></Link> : null;

    return (
      <div className="control">
        { back }
        <Link href={`/?page=${this.props.page + 1 }`}><a>Next</a></Link>

        <style jsx>{`
          .control {
            text-align: center;

          }

          .control a {
            padding: 0 10px;
          }
        `}</style>
      </div>
    )
  }


}

export default IndexPage