import './App.css';
import FunctionMyButton from './components/FunctionMyButton';
import ClassMyButton from './components/ClassMyButton';
import ClassMyInput from './components/classMyInput'

function App() {
  return (
    <div className="App">
      <FunctionMyButton/>
      <ClassMyButton/>
      <ClassMyInput />
    </div>
  );
}

export default App;
