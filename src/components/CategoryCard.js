import React, { Component } from 'react'

class CategoryCard extends Component {
  constructor(props) {
    super(props)
    this.text = props.text
    this.url = props.url
  }

  render() {
    return (
      <a href={this.url}><div className="category-card">{this.text}</div></a>
    )
  }
}

export default CategoryCard;