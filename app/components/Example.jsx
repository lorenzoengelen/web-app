import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div 
          className={this.props.value}
          onClick={this.props.onValueClick}
          >
          {this.props.value}
        </div>
        <input input={this.props.onEdit} />
        <button className='delete' onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  };
};

export default Example;