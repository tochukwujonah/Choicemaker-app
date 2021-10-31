import './App.css';
import {CreateQuestionView} from './components';


window.addEventListener('scroll', ()=> {
  window.scrollTop = window.outerHeight;
})

function App() {
  return (
    <div className="App">
      {/* <ModalView /> */}
      <CreateQuestionView />
      
    </div>
  );
}

export default App;
