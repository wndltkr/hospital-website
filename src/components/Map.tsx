'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (container: HTMLElement, options: {
          center: {
            lat: number;
            lng: number;
          };
          level: number;
        }) => {
          setCenter: (latlng: { lat: number; lng: number }) => void;
        };
        LatLng: new (lat: number, lng: number) => { lat: number; lng: number };
        Marker: new (options: {
          position: { lat: number; lng: number };
        }) => {
          setMap: (map: {
            setCenter: (latlng: { lat: number; lng: number }) => void;
          }) => void;
        };
        InfoWindow: new (options: {
          content: string;
          position: { lat: number; lng: number };
        }) => {
          open: (
            map: {
              setCenter: (latlng: { lat: number; lng: number }) => void;
            },
            marker: {
              setMap: (map: {
                setCenter: (latlng: { lat: number; lng: number }) => void;
              }) => void;
            }
          ) => void;
        };
      };
    };
  }
}

const Map = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.kakao) {
      const container = document.getElementById('map');
      if (!container) return;

      const options = {
        center: new window.kakao.maps.LatLng(35.8714354, 128.601445), // 세강병원 좌표
        level: 3
      };
      const map = new window.kakao.maps.Map(container, options);

      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(35.8714354, 128.601445);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);

      // 인포윈도우 생성
      const infowindow = new window.kakao.maps.InfoWindow({
        content: '<div style="padding:5px;">세강병원</div>',
        position: markerPosition
      });
      infowindow.open(map, marker);
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
      />
      <div id="map" className="w-full h-[400px] rounded-lg"></div>
    </>
  );
};

export default Map; 