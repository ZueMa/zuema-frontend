import React  from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 no-padding">
          <CategoryCard/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard/> 
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 no-padding">
          <CategoryCard/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard/> 
        </div>
      </div>
    </div>
  )
}

export default Categories;