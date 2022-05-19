import React from 'react';

const Table = (props) => {
    
console.log(props,'###')

  return (

<table className="table">
<thead>
    <tr>
      <th scope="col" className="table-dark">id</th>
      <th scope="col" className="table-light">title</th>
      <th scope="col" className="table-info">release_date</th>
      <th scope="col" className="table-warning">box_office</th>
      <th scope="col" className="table-danger">duration</th>
      <th scope="col" className="table-success">overview</th>
      <th scope="col" className="table-secondary">cover_url</th>
      <th scope="col" className="table-primary">trailer_url</th>
      <th scope="col" className="table-light">directed_by</th>
      <th scope="col" className="table-warning">phase</th>
      <th scope="col" className="table-success">saga</th>
      <th scope="col" className="table-primary">chronology</th>
      <th scope="col" className="table-danger">post_credit_scenes</th>
      <th scope="col" className="table-dark">imdb_id</th>
    </tr>
  </thead>
  <tbody>
  {
              props?.data?.data?.map((value)=>{
                  return(
                     
                      <tr>
            <td className="table-primary">{value.id}</td>             
            <td className="table-secondary">{value.title}</td>     
            <td className="table-success">{value.release_date}</td>     
            <td className="table-danger">{value.box_office}</td>     
            <td className="table-warning">{value.duration}</td>
            <td className="table-info">{value.overview}</td>
            <td className="table-dark">{value.cover_url}</td>
            <td className="table-light">{value.trailer_url}</td>
            <td className="table-dark">{value.directed_by}</td>
            <td className="table-warning">{value.phase}</td>
            <td className="table-success">{value.saga}</td>
            <td className="table-primary">{value.chronology}</td>
            <td className="table-danger">{value.post_credit_scenes}</td>
            <td className="table-light">{value.imdb_id}</td>
                      </tr>
                      
                  )
              })
          }
  </tbody>
</table>
  );
}

export default Table