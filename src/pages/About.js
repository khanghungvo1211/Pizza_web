import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p className="text">
  Vì sao Domino’s Pizza là chuyên gia giao hàng
  Domino's Pizza có hơn 10.000 cửa hàng trên toàn thế giới tại hơn 74 quốc gia. Chúng tôi mang đến sự hài lòng cho hơn 1 triệu khách hàng mỗi ngày, hơn 400 triệu bánh pizza mỗi năm. Trong suốt 50 năm qua, lời hứa “giao hàng miễn phí trong 30 phút” của chúng tôi đã trở thành một quy chuẩn.
</p>

      </div>
    </div>
  );
}

export default About;
