import React from "react";

import AdminLogo from "../../assets/storybook/telicent-admin-favicon.svg";
import DocumentLogo from "../../assets/storybook/telicent-document-favicon.svg";
import GraphLogo from "../../assets/storybook/telicent-graph-favicon.svg";
import GeoLogo from "../../assets/storybook/telicent-geo-favicon.svg";

const Favicon: React.FC<{ src: string }> = ({ src }) => (
  <div className="group/container relative">
    <div style={{ height: "200px", width: "200px" }}>
      <img src={src} />
    </div>
    <div className="absolute opacity-0 inset-0 bg-teli-black-800/70 group-hover/container:opacity-100 grid place-content-center">
      <a
        className="bg-teli-whitesmoke py-1 px-3 rounded-lg !text-teli-black-800 !text-base"
        href={src}
        download={src}
      >
        Download
      </a>
    </div>
  </div>
);

const Favicons: React.FC = () => (
  <div className="flex justify-evenly">
    <Favicon src={AdminLogo} />
    <Favicon src={DocumentLogo} />
    <Favicon src={GraphLogo} />
    <Favicon src={GeoLogo} />
  </div>
);

export default Favicons;
