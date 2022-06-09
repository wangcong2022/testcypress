
import './App.css';

function App () {
  return (
    <div className="App">
      <div>
        姓名: <input defaultValue={ '' } type={ 'text' } className='login-userName'></input>
      </div>
      <div>
        密码: <input defaultValue={ '' } type={ 'password' } className='login-userName'></input>
      </div>
    </div>
  );
}

export default App;
