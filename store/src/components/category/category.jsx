import './categories.styles.scss';
import CategoryItem from '../category-item/category-item.component';
//this component is basically the catagories display component that shows the categories you can choose from on the main home page
const Category = ({categories}) => {
    return(
        <div className="categories-container">
        {categories.map((category) => { 
        return(
          <CategoryItem key={category.id} category={category}/>
        )
      })}
     </div>
    )

}

export default Category;