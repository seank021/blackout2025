import React, { useEffect, useState } from 'react';

const Kakaomap = () => {
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState(null);
    const [ps, setPs] = useState(null);
    const [infowindow, setInfowindow] = useState(null);

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
    }, []);

    const searchPlaces = () => {
        const keyword = document.getElementById('keyword').value;

        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return false;
        }

        ps.keywordSearch(keyword, placesSearchCB);
    };

    const placesSearchCB = (data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
            displayPlaces(data);
            displayPagination(pagination);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
        } else if (status === window.kakao.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
        }
    };

    const displayPlaces = places => {
        const listEl = document.getElementById('placesList');
        const bounds = new window.kakao.maps.LatLngBounds();

        // 검색 결과 목록에 추가된 항목들을 제거
        removeAllChildNods(listEl);

        // 지도에 표시되고 있는 마커를 제거
        removeMarker();

        places.forEach((place, index) => {
            const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
            const marker = addMarker(placePosition, index);
            const itemEl = createPlaceItem(place, index);

            bounds.extend(placePosition);

            // 마커와 검색결과 항목에 mouseover, mouseout 이벤트 등록
            addEventToMarkerAndItem(marker, itemEl, place);

            listEl.appendChild(itemEl);
        });

        map.setBounds(bounds);
    };

    const createPlaceItem = (place, index) => {
        const el = document.createElement('div');
        el.className = 'relative border-b border-gray-300 p-3 hover:bg-gray-100';

        let itemStr = `
            <div class="flex items-start">
                <span class="marker_${index + 1} w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">${index + 1}</span>
                <div class="flex-1">
                    <h5 class="font-bold">${place.place_name}</h5>
                    ${
                        place.road_address_name
                            ? `<span class="block text-sm">${place.road_address_name}</span>
                               <span class="block text-sm text-gray-500">${place.address_name}</span>`
                            : `<span class="block text-sm">${place.address_name}</span>`
                    }
                    <span class="block text-sm text-green-600">${place.phone}</span>
                </div>
            </div>
        `;

        el.innerHTML = itemStr;
        return el;
    };

    const addMarker = (position, idx) => {
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
        const imageSize = new window.kakao.maps.Size(36, 37);
        const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691),
            spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
            offset: new window.kakao.maps.Point(13, 37),
        };

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
        const marker = new window.kakao.maps.Marker({
            position: position,
            image: markerImage,
        });

        marker.setMap(map);
        setMarkers(prev => [...prev, marker]);

        return marker;
    };

    const removeMarker = () => {
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
    };

    const addEventToMarkerAndItem = (marker, itemEl, place) => {
        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
            displayInfowindow(marker, place.place_name);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
            infowindow.close();
        });

        itemEl.onmouseover = () => {
            displayInfowindow(marker, place.place_name);
        };

        itemEl.onmouseout = () => {
            infowindow.close();
        };
    };

    const displayInfowindow = (marker, title) => {
        const content = `<div class="p-2">${title}</div>`;
        infowindow.setContent(content);
        infowindow.open(map, marker);
    };

    const displayPagination = pagination => {
        const paginationEl = document.getElementById('pagination');

        while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild);
        }

        for (let i = 1; i <= pagination.last; i++) {
            const el = document.createElement('a');
            el.href = '#';
            el.className =
                i === pagination.current
                    ? 'px-3 py-1 mx-1 text-gray-500 font-bold'
                    : 'px-3 py-1 mx-1 text-blue-500 hover:text-blue-700';
            el.innerHTML = i;

            if (i !== pagination.current) {
                el.onclick = () => pagination.gotoPage(i);
            }

            paginationEl.appendChild(el);
        }
    };

    const removeAllChildNods = el => {
        while (el.hasChildNodes()) {
            el.removeChild(el.lastChild);
        }
    };

    return (
        <div className="relative w-full h-[500px]">
            <div id="map" className="w-full h-full relative overflow-hidden"></div>

            <div className="absolute top-0 left-0 bottom-0 w-[250px] mx-0 my-[10px] ml-[10px] p-[5px] overflow-y-auto bg-white/70 z-10 text-sm rounded-lg">
                <div className="text-center">
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                searchPlaces();
                            }}
                            className="p-2"
                        >
                            <span className="mr-2">키워드 :</span>
                            <input
                                type="text"
                                defaultValue="이태원 맛집"
                                id="keyword"
                                className="border border-gray-300 rounded px-2 py-1 mr-2"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                                검색하기
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-400 my-2" />

                <ul id="placesList" className="space-y-2">
                    {/* 검색 결과 목록이 여기에 동적으로 추가됨 */}
                </ul>

                <div id="pagination" className="text-center mt-4">
                    {/* 페이지네이션이 여기에 동적으로 추가됨 */}
                </div>
            </div>
        </div>
    );
};

export default Kakaomap;
