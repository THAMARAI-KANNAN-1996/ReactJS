import logo from './logo.svg';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Frontend from './responsive/hooks/frontend';
import Feedback from '../src/responsive/hooks/feedback';
//import Feedbackpage from './responsive/hooks/feedbackpage';
//import Fruitscounter from './responsive/hooks/fruitscounter';
// import Increment from './responsive/hooks/increment';
// import Test from './responsive/testimonial';
// import Animals from './responsive/animals';
// import Products from './responsive/products';
// import Farm from './responsive/farm';
// import Works from './responsive/works';
// //import About from './responsive/about';
// //import Home from './responsive/home';
// import Hello from './files/hello';
//import Congratscard from './congratscard';  //assignment 2
//import Superover from './superover';        //assignment 3
//import Social from './files/social';        //assignment 4
//import Notify from './files/notify';        //assignment 5
//import Login from './files/login';
//import Technology from './files/technology';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './responsive/main';
import Home from './responsive/home';
import About from './responsive/about';
import Works from './responsive/works';
import Farm from './responsive/farm';
import Animals from './responsive/animals';
import Products from './responsive/products';
import Test from './responsive/testimonial';
import Portfolio from './responsive/portfolio';


import Menu from './menu';
import Congratscard from './congratscard';
import Superover from './superover';
import Login from './files/login';
import Notify from './files/notify';
import Social from './files/social';
import Technology from './files/technology';
import Hello from './files/hello';
//import Portfolio from './responsive/portfolio';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Feedbackpage from '../src/responsive/hooks/feedbackpage';
import Increment from './responsive/hooks/increment';
import Fruitscounter from './responsive/hooks/fruitscounter';
import Datee from './responsive/hooks/date';
import Fackstore from './responsive/hooks/fakestore';
import Productdetails from './responsive/hooks/productdetails';
import Table from './responsive/hooks/table';
import Sassdemo from './responsive/hooks/sassdemo';

//import Datee from './responsive/hooks/date';
//import Frontend from './responsive/hooks/frontend';

function App() {
  return (
    //assignment 1:
    // <div className="App">
    //   <h1>Hello World!!!!</h1>
    //   <h1>I am Thamarai kannan</h1>
    // </div>

    //assignment 2:
    // <>
    // <Congratscard/>
    // </>

    //assignment 3:
    // <>
    // <Superover/>
    // </>

    //assignment 4
    // <>
    // <Social/>
    // </>
    
    //assignment 5
    // <>
    // <Notify/>
    // </>

    //assignment 6
      // <>
      //  <Login/>
      //  </>

    //assignment 7
    // <>
    // <Technology/>
    // </>

    // <>
    // <Hello/>
    // </>

    <>
      <BrowserRouter>
      <Routes>
        <Route path='/hello' element={<Hello/>}/>
        <Route path='/' element={<Menu/>}/>
        <Route path='/congratscard' element={<Congratscard/>}/>
        <Route path='/superover' element={<Superover/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/notify' element={<Notify/>}/>
        <Route path='/social' element={<Social/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/portfolio' element={[<Menu/>,<Main/>,<Portfolio/>]}/>
        <Route path='/feedback' element={[<Menu/>,<Feedback/>]}/>
        <Route path='/feedback1' element={[<Menu/>,<Feedbackpage/>]}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={[<Main/>,<Home/>,<Menu/>]}/>
        <Route path='/about' element={[<Main/>,<About/>,<Menu/>]}/>
        <Route  path='/works' element={[<Main/>,<Works/>,<Menu/>]}/>
        <Route path='/farm' element={[<Main/>,<Farm/>,<Menu/>]}/>
        <Route path='/animals' element={[<Main/>,<Animals/>,<Menu/>]}/>
        <Route path='/products' element={[<Main/>,<Products/>,<Menu/>]}/>
        <Route path='/testimonial' element={[<Main/>,<Test/>,<Menu/>]}/>

        <Route path='/increment' element={[<Menu/>,<Increment/>]}/>
        
        <Route path='/fruitscounter' element={[<Menu/>,<Fruitscounter/>]}/>
        <Route path='/frontend' element={[<Menu/>,<Frontend/>]}/>
        <Route path='/date' element={[<Menu/>,<Datee/>]}/>
        <Route path='/fakestore' element={[<Menu/>,<Fackstore/>]}/>
        <Route path='/details/:id' element={<Productdetails/>}/>
        <Route path='/table' element={[<Menu/>,<Table/>]}/>
        <Route path='/sassdemo' element={[<Menu/>,<Sassdemo/>]}/>
      </Routes>
      </BrowserRouter>
     </>

//responsive
    // <>
    // <Home/>
    // </>

    // <>
    // <About/>
    // </>

    // <>
    // <Works/>
    // </>

    // <>
    // <Farm/>
    // </>

    // <>
    // <Animals/>
    // </>

    // <>
    // <Products/>
    // </>

    // <>
    // <Test/>
    // </>

    // <>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Main/>}/>
    //   <Route path='/home' element={<Home/>}/>
    //   <Route path='/about' element={<About/>}/>
    //   <Route  path='/works' element={<Works/>}/>
    //   <Route path='/farm' element={<Farm/>}/>
    //   <Route path='/animals' element={<Animals/>}/>
    //   <Route path='/products' element={<Products/>}/>
    //   <Route path='/testimonial' element={<Test/>}/>
    //   <Route path='/portfolio' element={<Portfolio/>}/>
    // </Routes>
    // </BrowserRouter>
    // </>

    // <>
    // <Portfolio/>
    // </>

    // <>
    // <Increment/>
    // </>

    // <>
    // <Fruitscounter/>
    // </>

    // <>
    //   <Feedback/>
    // </>

    // <>
    // <Feedbackpage/>
    // </>

    // <>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Feedback/>}/>
    //   <Route path='/feedback1' element={<Feedbackpage/>}/>
    // </Routes>
    // </BrowserRouter>
    // </>


    // <>
    // <Datee/>
    // </>

    // <>
    // <Frontend/>
    // </>
  );
}

export default App;
