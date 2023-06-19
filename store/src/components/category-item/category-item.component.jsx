import './category-item.styles.scss';

//this component is for the item in the category since you are looping
//over each item to make an element it would be easier and more legible to just loop over 
//each category and return a component with the elements instead of elements in the main app.js file
const CategoryItem = ({category}) => {
    const {imageUrl, title } = category;
    return(
        <div className="category-container">
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>

    )

}

export default CategoryItem;