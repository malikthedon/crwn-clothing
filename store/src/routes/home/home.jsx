import Category from "../../components/category/category"


export const Home = () => {
    //this array is created to go over each category section of the web app
  //you have to destructure this and loop through it to name each category
  //this will eventually become clickable sections that sends you to the specific area like hats
  //one of the main advatages of react is it becomes simple to write and your data
  //becomes your UI
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];
  //returning a category component that takes in categories as props to display the categories via elements
    return(
        <div>
            <Category categories={categories}/>
        </div>
    )
}