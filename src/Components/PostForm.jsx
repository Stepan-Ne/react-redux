import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({value: ''})
  };
  handleChange = (e) => {
    this.setState({value: e.target.value});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='post' className='form-label'>
            Post
          </label>
          <textarea
            className='form-control'
            id='post'
            rows='2'
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
  }
}
