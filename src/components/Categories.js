import React  from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 no-padding">
          <CategoryCard text="Cosmetics" url="#cosmetics"/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard text="Clothes" url="#clothes"/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard text="Electronics" url="#electronics"/> 
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 no-padding">
          <CategoryCard text="Home & Garden" url="#home-garden"/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard text="Kids" url="#kids"/> 
        </div>
        <div className="col-md-4 no-padding">
          <CategoryCard text="Sports" url="#sports"/> 
        </div>
      </div>
    </div>
  )
}

export default Categories;