import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../Redux/actions'

 class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', postText: '' };
  }
  // Handlers
  handleSubmit = (e) => {
    e.preventDefault();
   
    const {title, postText} = this.state
    // check input fields
    if (!title.trim() || ! postText.trim()) {
        return;
    }
 // make body of post
    const newPost = { title, postText, id: Date.now().toString()}
    // send post to store
    this.props.createPost(newPost)
    // clear input fields
    this.setState({ title: '', postText: '' });
  };

  handleChange = (e) => {
      this.setState( prev => ({
          ...prev, ...{
              [e.target.name]: e.target.value
          }
      }))
  };
  // JSX
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Title Input */}
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        {/* Post Input */}
        <div className='mb-3'>
          <label htmlFor='post' className='form-label'>
            Post
          </label>
          <textarea
            className='form-control'
            id='post'
            name='postText'
            rows='2'
            value={this.state.postText}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <button type='submit' disabled={!this.state.title || !this.state.postText}
        className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, {createPost})(PostForm)