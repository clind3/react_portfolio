import React, { useState } from "react";
import HomePage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/main.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Homepage');
  const pageChange = (page) => setCurrentPage(page);
  const renderPages = () => {
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    if (currentPage === 'Homepage') {
      return <HomePage />;
    }
  }

  return (
    <body>
      <Header currentPage={currentPage} changePage={pageChange}/>
      {renderPages()}
      <Footer currentPage={currentPage} changePage={pageChange}/>
    </body>
   
  );
}

export default App;
