import React from 'react';
import Formulario from '../components/Formulario';
import Navbar from '../components/Navbar';

const App: React.FC = () => {
  return (
    <div
      className="container"
      style={{
      fontFamily: "Jost, sans-serif",
      marginTop: "100px",
      }}
    >
        < Navbar />
        < Formulario />
    </div>
  );
};

export default App;
