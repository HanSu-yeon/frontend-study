import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let [modal, setModal] = useState(true);
  let [cnt, setCnt] = useState(0);

  useEffect(() => {
    //2초 후에 내부 코드 실행
    let a = setTimeout(() => {
      console.log(2);
      setModal(false);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(a); //타이머 제거해주는 함수
    };
  });

  let { id } = useParams();
  let findShoe = props.shoes.find(function (x) {
    return x.id == id;
  });
  // console.log(findShoe);
  return (
    <div className="container">
      {/* 2초 지나면 div숨김 */}
      {modal ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : (
        <div>없음</div>
      )}
      {cnt}
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findShoe.title}</h4>
          <p>{findShoe.content}</p>
          <p>{findShoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
