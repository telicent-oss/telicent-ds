import React from "react";

type PointerCoordinatesProps = {
  show: boolean;
  lat: number;
  lng: number;
};

const PointerCoordinates: React.FC<Partial<PointerCoordinatesProps>> = ({
  show = false,
  lat,
  lng,
}) => {
  if (!show || (!lat && !lng)) return null;
  return (
    <div id="pointer-coordinates" className="flex items-center gap-x-2">
      <div className="px-2 uppercase border w-fit">lat, lng</div>
      <p className="text-xs">
        {lat}, {lng}
      </p>
    </div>
  );
};
export default PointerCoordinates;
