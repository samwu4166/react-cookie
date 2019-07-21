import React,{useState} from 'react';
import {useCookies} from 'react-cookie';

const Member = ()=>{
  const [name, setName] = useState('');
  const [cookie,setCookie] = useCookies(["name"]);
  const handleChange = event => setName(event.target.value);
  const handleSubmit = event => {
      event.preventDefault();
      setCookie("name",name,{path : '/'})
      setName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          member Input : 
          <input type="text" onChange={handleChange} />
        </label>
      </form>
      <p>
        {cookie.name && <h1>Hello {cookie.name}!</h1>}
      </p>
      <p>
         <strong>Output:{name}</strong>
      </p>
    </div>
  );
}

export default Member;