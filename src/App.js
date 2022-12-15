
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';

function App() {
  const count = useSelector((state) => (state.counter.count))
  const voters = [
    "Anthony Gordon",
"Nmeregini Henry","Sarah Gadern ", "Lust Gerrad"
  ]
  return (
    <div className="App">
      <h1>Understanding Redux </h1>
      <h2>Total Vote: {count}</h2>
     {voters.map((voters) => {
      return(
        <Counter name={voters} />
      )
     })}
    
    </div>
  );
}

export default App;
