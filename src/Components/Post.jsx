import React from 'react';
import { Message } from 'semantic-ui-react';

const styles = {
  posts: {
    marginTop: '1rem',
    maxWidth: '400px'
  }
}

function Post(props) {

  const {body, id, title} = props.post;
  
  return (
    <div style={styles.posts}>
   <Message
   onDismiss={() => {}}
   header={title}
   content={body}
   />
      <div>
      <button className="ui mini blue button">Change</button>
        </div>
    </div>
  )
}

export default Post
