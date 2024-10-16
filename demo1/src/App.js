import './App.css';
import FunctionMyButton from './components/FunctionMyButton';
import ClassMyButton from './components/ClassMyButton';
import ClassMyInput from './components/classMyInput'
import MyList from './components/MyList';

function App() {
  return (
    <div className="App">
      <FunctionMyButton/>
      <ClassMyButton/>
      <ClassMyInput />
      <MyList/>
    </div>
  );
}

export default App;
