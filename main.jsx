import {createRoot} from 'react-dom/client';
import RecipeCard from './App';
import Data from './Compnents/Data';
import './index.css';
// import './App.css';
const root = createRoot(document.getElementById('root'));

export default function Cards() {
  return (
    <>  
    <header className='mainheading'><h1>&#11088; Usha Star Family Restaurant Menu Items &#11088;</h1></header>
    <div className="cards">
            {Data.map((item, index) => (
              <RecipeCard key={index} {...item} />
            ))}
    </div>
    </>
  );
}
root.render(<Cards />);