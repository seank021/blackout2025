const PlaceItem = ({ place, index }) => {
    return (
        <li className="relative border-b border-gray-300 overflow-hidden cursor-pointer min-h-[65px] hover:bg-gray-100">
            <span
                className={`float-left absolute w-[36px] h-[37px] mt-[10px] ml-[10px] bg-[url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png')] bg-no-repeat marker_${index + 1}`}
            ></span>
            <div className="pl-[55px] py-[10px]">
                <h5 className="text-sm font-bold truncate">{place.place_name}</h5>
                {place.road_address_name ? (
                    <>
                        <span className="block text-xs truncate">{place.road_address_name}</span>
                        <span className="block text-xs text-gray-500 truncate">{place.address_name}</span>
                    </>
                ) : (
                    <span className="block text-xs truncate">{place.address_name}</span>
                )}
                <span className="block text-xs text-green-600">{place.phone}</span>
            </div>
        </li>
    );
};
