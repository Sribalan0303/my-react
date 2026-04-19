// Day -2 task:1
import Header from "./Day-02/Header.jsx"
import Main from "./Day-02/Main.jsx"
import Footer from "./Day-02/Footer.jsx"
// Day-1 task:2
import Navbar from "./Day-01/Navbar.jsx";
import Sidebar from "./Day-01/Sidebar.jsx";
import Content from "./Day-01/Content.jsx";

// Day-3 task:1
import Apple from './assets/Apple AirPods.jpg'
import Beats from './assets/Beats Solo 4.jpg'
import CMf from './assets/CMFHeadphone.jpg'
import JBL from './assets/JBL.jpg'
import Noise from './assets/NoiseHeadphon.jpg'
import Product from "./Day-03/Product.jsx";
// Day-4 task1`
import Event from "./Day-04/Events1.jsx";
import Events from "./Day-04/Events2.jsx";
function App() {
  return (
    <>

      
      <Product image={Apple} name="Apple Airpods" price={2000} />
      <Product image={Beats} name="Beats Solo" price={2000} />
      <Product image={CMf} name="CMF Headphone" price={2000} />
      <Product image={JBL} name="JBL Headphon" price={2000} />
      <Product image={Noise} name="Noise" price={2000} />
      {/* <Event/>
      <Events/> */}
    </>

  );
}
export default App
