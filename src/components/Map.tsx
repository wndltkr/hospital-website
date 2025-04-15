'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: options.center,
        });
        marker.setMap(map);

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:5px;">세강병원</div>',
        });
        infowindow.open(map, marker);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-96 rounded-lg" />;
};

export default Map; 