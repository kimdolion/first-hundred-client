import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Row, Col } from 'react-bootstrap'

const styles = {
  header: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  listsEach: {
    display: 'flex',
    alignItems: 'center',
    height: '15rem',
    justifyContent: 'center',
    margin: '4rem 1rem',
    padding: '0',
    textAlign: 'center'
  },
  link: {
    color: 'black',
    display: 'inline-block',
    width: '70%'
  },
  lists: {
    justifyContent: 'center',
    margin: '2px'
  }
}

const Lists = ({ user, alert }) => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/lists`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => setLists(responseData.data.lists))
  }, [])

  const listsJsx = lists.map(list => (
    <Col xs='12' md='6' lg='3' xl='2' key={list._id} style={ styles.listsEach }>
      <Link to={`/lists/${list._id}`} style={ styles.link }>List</Link>
    </Col>
  ))

  return (
    <React.Fragment>
      <Row style={ styles.header }>
        <Col>
          <h1>Lists</h1>
        </Col>
      </Row>
      <Row style={ styles.lists }>
        {listsJsx}
      </Row>
    </React.Fragment>
  )
}

export default Lists
