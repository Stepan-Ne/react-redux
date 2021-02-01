import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const styles = {
  post: {
    maxWidth: '50%',
    margin: '0 auto',
    marginTop: '1rem'
  }
}

function Post({ id, body, ...rest}) {
  return (
    <div className="container border border-1 p-3" style={styles.post}>
    <p className="card-text">{body}</p> 
    <Link className='link_post' to={`/list/${id}`}>
    <button type="button" className="btn btn-primary">Select</button>
    </Link>
  </div>
  )
}

export default Post;
