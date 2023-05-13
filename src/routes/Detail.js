import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

let Box = styled.div`
  padding : 20px;
  color : grey
`;

export default function Deatil({ shoes }) {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);
  const find = shoes.find(x => x.id == id);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  function TabContent() {
    if (tab == 0) {
      return <div>내용0</div>
    } else if (tab == 1) {
      return <div>내용1</div>
    } else if (tab == 2) {
      return <div>내용2</div>
    }
  }

  return (
    <>
      <div className="container">
        {
          alert == true
            ? <div className="alert alert-warning">
              2초이내 구매 할인
            </div>
            : null
        }

        <div className="col-md-6 mt-4" key={shoes[id].id}>
          <img src={shoes[id].url} width='80%' />
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <TabContent />

    </>
  );
}
