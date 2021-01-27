import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', postText: '' };
  }
  // Handlers
  handleSubmit = (e) => {
    e.preventDefault();
    // make body of post
    const {title, postText} = this.state
    const newPost = { title, postText, id: Date.now().toString()}
    
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
