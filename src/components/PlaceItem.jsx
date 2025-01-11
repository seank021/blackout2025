const PlaceItem = ({ place, index, onClick }) => {
    return (
        <li
            className="relative border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={onClick}
        >
            <div className="flex items-start p-4">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-gray-900 truncate">{place.place_name}</h5>
                    {place.road_address_name ? (
                        <>
                            <span className="block text-sm text-gray-700 truncate">{place.road_address_name}</span>
                            <span className="block text-sm text-gray-500 truncate">{place.address_name}</span>
                        </>
                    ) : (
                        <span className="block text-sm text-gray-700 truncate">{place.address_name}</span>
                    )}
                    <span className="block text-sm text-green-600">{place.phone}</span>
                    {place.distance && (
                        <span className="block text-sm text-blue-600">{(place.distance / 1000).toFixed(1)}km</span>
                    )}
                </div>
            </div>
        </li>
    );
};

export default PlaceItem;
