import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace 'Switch' with 'Routes'

// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Section from './components/Section';
// import RightBar from './components/RightBar';
// import Mobile from './components/Mobile';
// import MainComponents from './components/MainComponents';
import Items from '../src/pages/Items'
import Newmain from './components/Newmain';



function App() {
	return (
		<div className="App bg-gray-100  ">

			<Router>
			<Routes> 	
			<Route path="/" element={	<Newmain/>} /> {/* Use 'element' prop */}
			<Route path="/items" element={<Items />} />

		{/* <MainComponents/> */}

		
 </Routes> 	
 		</Router>
		</div>
	);
}

export default App;
