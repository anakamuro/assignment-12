import React, { useState } from 'react';

function Home(){

  const [data, setData] = useState([]);
  const apiGet = () => {
  let userId = 12;
    fetch(`http://localhost:8000/user/${userId}`)
    .then(res =>  res.json())
    .then(json => {
      console.log(json);
      setData(json);
  });
}
/*
useEffect(() => {
  apiGet()
},[]);
*/
  return (
    <div className="home">
     <button onClick={apiGet}>Fetch API</button>
     <br/>
     <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Home