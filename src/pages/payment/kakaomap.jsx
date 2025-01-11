import React, { useEffect, useState, useCallback, useRef } from 'react';
import PlacesList from '../../components/PlacesList';
import SearchForm from '../../components/SearchForm';
import locationIcon from '../../assets/icons/curpos.svg';

const Kakaomap = () => {
    const [currentMarker, setCurrentMarker] = useState(null);
    const [map, setMap] = useState(null);
    const [ps, setPs] = useState(null);
    const [infowindow, setInfowindow] = useState(null);
    const [places, setPlaces] = useState([]);
    const [userPosition, setUserPosition] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    // useRef를 사용하여 최신 값을 참조
    const mapRef = useRef(null);
    const currentMarkerRef = useRef(null);

    // 값이 변경될 때마다 ref 업데이트
    useEffect(() => {
        mapRef.current = map;
        currentMarkerRef.current = currentMarker;
    }, [map, currentMarker]);

    // 거리 계산 함수
    const getDistance = useCallback((pos1, pos2) => {
        const poly = new window.kakao.maps.Polyline({
            path: [pos1, pos2],
        });
        return poly.getLength();
    }, []);

    // 거리순 정렬 함수
    const sortPlacesByDistance = useCallback(
        currentPos => {
            setPlaces(prevPlaces => {
                return [...prevPlaces]
                    .map(place => {
                        const placePos = new window.kakao.maps.LatLng(place.y, place.x);
                        const distance = getDistance(currentPos, placePos);
                        return { ...place, distance };
                    })
                    .sort((a, b) => a.distance - b.distance);
            });
        },
        [getDistance]
    );

    // 현재 위치 가져오기 함수
    const getCurrentLocation = useCallback(() => {
        const currentMap = mapRef.current;
        if (!currentMap) return;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const currentPos = new window.kakao.maps.LatLng(lat, lng);
                    setUserPosition(currentPos);

                    // 기존 마커 제거
                    if (currentMarkerRef.current) {
                        currentMarkerRef.current.setMap(null);
                    }

                    // 새 마커 생성
                    const marker = new window.kakao.maps.Marker({
                        position: currentPos,
                        map: currentMap,
                    });
                    setCurrentMarker(marker);

                    // 지도 중심 이동
                    currentMap.setCenter(currentPos);
                    currentMap.setLevel(3);

                    // 현재 검색 결과가 있다면 거리순으로 재정렬
                    sortPlacesByDistance(currentPos);
                },
                error => {
                    console.error('Geolocation error:', error);
                    alert('현재 위치를 가져올 수 없습니다.');
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 5000,
                }
            );
        } else {
            alert('이 브라우저에서는 위치 정보를 사용할 수 없습니다.');
        }
    }, [sortPlacesByDistance]);

    // 초기 지도 설정과 현재 위치 가져오기
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
        };

        const mapInstance = new window.kakao.maps.Map(container, options);
        const psInstance = new window.kakao.maps.services.Places();
        const infowindowInstance = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        setMap(mapInstance);
        setPs(psInstance);
        setInfowindow(infowindowInstance);

        // 현재 위치 버튼 생성
        const locationBtn = document.createElement('button');

        locationBtn.style.cssText = `
            position: absolute;
            bottom: 30px;
            left: 10px;
            width: 33px;
            height: 33px;
            padding: 6px;
            background: white;
            border-radius: 16px;
            box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
            cursor: pointer;
            z-index: 2;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        `;
        const locationIcons = document.createElement('img');
        locationIcons.src = locationIcon;
        locationIcons.alt = 'Location Icon';
        locationIcons.className = 'w-5 h-5 mt-[2px]';
        locationBtn.appendChild(locationIcons);

        const handleClick = () => getCurrentLocation();
        locationBtn.addEventListener('click', handleClick);
        container.appendChild(locationBtn);

        // 초기 현재 위치 가져오기
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const currentPos = new window.kakao.maps.LatLng(lat, lng);
                    setUserPosition(currentPos);

                    // 새 마커 생성
                    const marker = new window.kakao.maps.Marker({
                        position: currentPos,
                        map: mapInstance,
                    });
                    setCurrentMarker(marker);

                    // 지도 중심 이동
                    mapInstance.setCenter(currentPos);
                    mapInstance.setLevel(3);
                },
                error => {
                    console.error('Geolocation error:', error);
                    // 위치 정보를 가져올 수 없는 경우 기본 위치 사용
                    console.log('기본 위치(서울시청)를 사용합니다.');
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 5000,
                }
            );
        }

        return () => {
            locationBtn.removeEventListener('click', handleClick);
            if (container.contains(locationBtn)) {
                container.removeChild(locationBtn);
            }
        };
    }, []); // 빈 의존성 배열

    // 지도 크기 변경 감지 및 처리
    useEffect(() => {
        if (!map || !currentMarker) return;

        const handleResize = () => {
            const position = currentMarker.getPosition();
            map.setCenter(position);
        };

        // ResizeObserver를 사용하여 지도 컨테이너의 크기 변경 감지
        const mapContainer = document.getElementById('map');
        const observer = new ResizeObserver(() => {
            setTimeout(() => {
                map.relayout();
                if (currentMarker) {
                    const position = currentMarker.getPosition();
                    map.setCenter(position);
                }
            }, 100);
        });

        observer.observe(mapContainer);

        // 창 크기 변경 이벤트도 처리
        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, [map, currentMarker]);

    const searchPlaces = useCallback(() => {
        const keyword = document.getElementById('keyword').value;

        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return false;
        }

        ps.keywordSearch(keyword, (data, status, pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlaces(data);
                setHasSearched(true);

                // 검색 결과의 첫 번째 장소로 지도 중심 이동
                const firstPlace = data[0];
                const placePosition = new window.kakao.maps.LatLng(firstPlace.y, firstPlace.x);

                // 기존 마커 제거
                if (currentMarker) {
                    currentMarker.setMap(null);
                }

                // 새 마커 생성
                const marker = new window.kakao.maps.Marker({
                    position: placePosition,
                    map: map,
                });
                setCurrentMarker(marker);

                // 지도 중심 이동
                setTimeout(() => {
                    map.setLevel(3);
                    map.setCenter(placePosition);
                }, 100);
            } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.');
            } else if (status === window.kakao.maps.services.Status.ERROR) {
                alert('검색 결과 중 오류가 발생했습니다.');
            }
        });
    }, [map, ps, currentMarker]);

    const removeMarker = () => {
        if (currentMarker) {
            currentMarker.setMap(null);
            setCurrentMarker(null);
        }
    };

    const handlePlaceClick = useCallback(
        place => {
            if (currentMarker) {
                currentMarker.setMap(null);
            }

            const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
            const marker = new window.kakao.maps.Marker({
                position: placePosition,
                map: map,
            });

            setCurrentMarker(marker);

            const content = `<div class="p-2">${place.place_name}</div>`;
            infowindow.setContent(content);
            infowindow.open(map, marker);

            // 지도 중심 이동 시 레벨 조정 및 약간의 지연 추가
            setTimeout(() => {
                map.setLevel(3);
                map.setCenter(placePosition);
            }, 100);
        },
        [map, currentMarker, infowindow]
    );

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-4">
                <SearchForm onSearch={searchPlaces} />
                <div
                    className={`w-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
                        hasSearched ? 'h-[400px]' : 'h-[calc(100vh-250px)]'
                    }`}
                >
                    <div id="map" className="w-full h-full"></div>
                </div>
                {hasSearched && places.length > 0 && <PlacesList places={places} onPlaceClick={handlePlaceClick} />}
            </div>
        </div>
    );
};

export default Kakaomap;
