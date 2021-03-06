import React, {Component, useState} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'
import InfoSection from './infoact'
import InfoComp from './infocomp'
import Sidebar from'./sidebar'
import Tester from './testclick'
const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
        <Navbar toggle={toggle}/>
        <Hero/>
        <InfoSection/>
        <InfoComp/>
        <Footer/>
        </>
    )
}

export default App


// class App extends Component{
//   constructor(props){
//       super(props);
//       this.state={
//         clicked: false  
//       };
//   }

//       toggle = () => {
//       this.setState({
//           clicked: !this.state.clicked
//       });
//   }
//   render(){
//       return(
//         <>
//         <Tester/>
//         <Sidebar></Sidebar>
//         <Navbar/>
//         <Hero/>
//         <InfoSection/>
//         <InfoComp/>
//         <Footer/>
        
//         </>
        

//       )
//   }
// }
// export default App;