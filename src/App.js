import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>sign in</h1>
        <div class="container-inner">  
          <div class="input">
            <div class="input-div">
              <label class="input-label">아이디</label>
              <input type="text"/>
            </div>
            <div class="input-div">
                <label class="input-label">비밀번호</label>
                <input type="password"/>
            </div>
          </div>
        </div>
          <button>next</button>
      </div>
    </div>
  );
}

export default App;
