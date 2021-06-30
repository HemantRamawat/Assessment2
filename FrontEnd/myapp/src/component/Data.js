import React from 'react';
import apidata from './apidata';

const Data = () => {


return(
    <div className="dataS">
          {apidata.api.map(data => (
        <div>
        <div className="flex">
 <div className="box">
 <div className="id" >ID:  </div>
        <div className="id1">{data.id}</div>
        {/* <Link to={'/dataScreen/' + data.id}> */}
 {/* <img src={data.image_url} alt="image available" />
 </Link> */}
 <div className="id" >Title Is</div> 
 <div className="tagline">
     {data.title}</div>

     <div className="id" >Comments:  </div>
 {/* <div className="Heading">ABV</div> */}
 <div className="comments">{data.body}</div>
 {/* <div className="Heading">Description</div>
 <div className="description">{data.description}</div> */}
 


      </div>
       </div>
       </div>
      ))}
 
  </div>
  
 
)
    
 
}

export default Data;