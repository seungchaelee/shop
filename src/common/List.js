import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../common/data';

export default function List() {
  const [shoes] = useState(data);

  return (
    <>
      <div className="container">
        <div className="row">
          {shoes.map((arr, i) =>
            <div className="col-md-4" key={shoes[i].id}>
              <img src={shoes[i].url} width='80%' />
              <h4>{shoes[i].title}</h4>
              <p>{shoes[i].price}원</p>
              {/* {console.log(`${shoes[i].id}`)} */}
            </div>
          )}
        </div>
      </div>
    </>
  );

}