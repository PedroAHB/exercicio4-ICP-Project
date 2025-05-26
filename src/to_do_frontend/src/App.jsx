import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './index';
import Tarefas from './tarefas';

function App(){

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />        
        <Route path="/tarefas/" element={<Tarefas/>} />        
      </Routes>
    </Router>

  );

}

export default App;  