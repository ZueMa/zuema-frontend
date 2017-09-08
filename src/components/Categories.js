import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

class Categories extends Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-4 NoPadding`}>
            <CategoryCard/> 
          </div>
          <div className={`col-md-4 NoPadding`}>
            <CategoryCard/> 
          </div>
          <div className={`col-md-4 NoPadding`}>
            <CategoryCard/> 
          </div>
        </div>
        <div className="row">
          <div className={`col-md-4 NoPadding`}>
            <CategoryCard/> 
          </div>
          <div className={`col-md-4 NoPadding`}>
            <CategoryCard/> 
          </div>
          <div className={`col-md-4 NoPadding`}>
            <CategoryCard/> 
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;