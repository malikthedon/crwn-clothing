import  {Routes, Route} from 'react-router-dom';
import { Home } from "./routes/home/home";
import { Navbar } from './routes/navigation/navbar';
import { SignIn } from './routes/sign-in/sign-in';


const App = () =>  {
  
  //the app component aka the main component returns the routes of the app
  //using the Routes component and inside the Routes component, theres the Route for each page
  //each route needs to be linked to a path and to an element. 
  //the path is the url that would be called, and element is the component that the url leads to
  //think of components as pages cause thats what they technically are at times
  //nesting routes inside of a route is a good way to have them on the page simultaneously,
  //like for example a navbar, nesting routes inside of a navbar route is the best thing to do 
  //because it will allow the navbar to be shown at all times
  //this react stuff really easy man
  //but also if you nest routes inside of a route you have to use <Outlet/>
  //and make sure you place is at the top or bottom depending on where you want it to render on screen
  //and using index also displays the component 

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path='SignIn' element={<SignIn />}/>
      </Route>
    </Routes>
    
      
  );
}

export default App;
