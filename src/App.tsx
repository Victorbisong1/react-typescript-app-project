import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Greeting name="Developer" />
      <hr />
      <Counter />
    </div>
  );
}

export default App;