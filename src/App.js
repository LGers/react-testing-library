import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';

const Search = ({value, onChange, children}) => (
  <div>
    <label htmlFor='search'>{children}</label>
    <input id="search" type="text" value={value} onChange={onchange} placeholder='search text...'></input>
  </div>
)

const App = () => {

  const [search, setSearch] = useState("")

  const handleChange = ({ target }) => {
    setSearch(target.value)
  }

  return (
    <div>
      <img src='' alt='search image'/>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React testing library
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;
