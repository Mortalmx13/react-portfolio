import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

//calls header and footer every time
function App() {
  return (
    <div>
      <Header />
      <Footer/>
    </div>
  );
}

export default App;