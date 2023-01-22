import { BrowserRouter } from 'react-router-dom'; // Route
import Data from './services/Data';


function App() {
  return (
    <BrowserRouter>
      <>
        <Data />
      </>
    </BrowserRouter>
  );
}

export default App;
