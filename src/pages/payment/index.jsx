import { useEffect } from "react";
import "../../../src/globals.css";

const Payment = () => {
  useEffect(() => {
    // 카카오맵 그리기
    printKakaomap();
  }, []);

  function printKakaomap() {
    if (window.kakao) {
      var container = document.getElementById("map");
      var options = {
        center: new window.kakao.maps.LatLng(
          37.365264512305174,
          127.10676860117488
        ),
        level: 3,
      };
      var map = new window.kakao.maps.Map(container, options);
    }
  }
  return (
    <div className="container-col p-4">
      <h1>Payment</h1>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Payment;
