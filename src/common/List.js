import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function List({ shoes, setShoes }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {shoes.map((arr, i) => {
            return (
              <div className="col-md-4" key={shoes[i].id}>
                <img src={arr.url} width='80%' />
                <h4>{shoes[i].title}</h4>
                <p>{shoes[i].price}원</p>
              </div>
            );
          })}
        </div>
        <button onClick={() => {
          axios.get('https://codingapple1.github.io/shop/data2.json').then((data) => {
            let copy = [...shoes, ...data.data];
            setShoes(copy);
          }).catch(() => {
            console.log('실패');
          })
        }}>더보기</button>
      </div>
    </>
  );
}
