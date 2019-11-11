import React from 'react'
// import { Link } from 'react-router-dom'

const styles = {
  main: {
    margin: '15px'
  }
}

const authenticatedOptions = (
  <React.Fragment>
    <p>Create a new list, update an old list, or look at what other&aposs hope to accomplish.
    </p>
    <p>...
    </p>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <p>Create a <strong>(fake)</strong> login to get started on your first hundred accomplishments.
    </p>
  </React.Fragment>
)

const Home = ({ user }) => (
  <div style={styles.main}>
    <h1>Welcome to My First Hundred!</h1>
    <p>What are the first 100 activities that you want to accomplish?
    </p>
    <p>You can also see what other people are working towards.
    </p>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </div>
)

export default Home
