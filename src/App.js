import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./App"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => []);

  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://mcuapi.herokuapp.com/api/v1/movies")
        .then((response) => {
          console.log(response.data.data);
          setData(response.data.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);


  const onChange=(e)=>{
    setValue(e.target.value)  
  }

  const filterData = data.filter(da=> 
    {
    if(value === ''){
        return data
    }else{
        return da?.title?.toLowerCase().includes(value?.toLowerCase())
    }
} )


console.log(filterData,'filterDatafilterData')

  return (
    <div className="App">
         <input type='text' placeholder='search' className='search' onChange={onChange}/>
         <ul className="list">
             {
                 filterData.length > 0 ?
                 <>      {filterData?.map((movie) => (
                    <li key={movie.id} className='listItem'>
                        {movie.title}
                    </li>
                ))}
                 
                 </>
                 :
                 null
             }
       
         </ul>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
          
        <Table columns={columns} data={data} />
      )} 
        </div>
  );
}

export default App;