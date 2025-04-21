'use client';

import React, { useEffect } from 'react';

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
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: options.center,
        });

        marker.setMap(map);

        const infoWindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:5px;">세강병원</div>',
          position: options.center,
        });

        infoWindow.open(map, marker);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-[400px]"></div>;
};

export default Map; 