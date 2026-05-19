import React from "react";

function isColour(color: any) {
  return typeof color === "string" && CSS.supports("color", color); // newish api
}

export interface ThemeViewerProps {
  theme: Record<string, any>;
}

/**
 * A bit like JSON.stringify(), but with colour swatches
 */
const ThemeViewer: React.FC<ThemeViewerProps> = ({ theme }) => {
  const renderObject = (obj: Record<string, any>, indent = 0) => {
    return Object.entries(obj).map(([key, value]) => {
      const paddingLeft = indent * 4;
      if (typeof value === "object" && !Array.isArray(value)) {
        return (
          <div key={key} style={{ paddingLeft }}>
            <strong>{key}:</strong>
            {renderObject(value, indent + 1)}
          </div>
        );
      } else {
        return (
          <div
            key={key}
            style={{
              paddingLeft,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "monospace",
            }}
          >
            <span>
              {key}: {value?.toString()}
            </span>
            {isColour(value) && (
              <span
                style={{
                  display: "inline-block",
                  width: 32,
                  height: 16,
                  backgroundColor: value,
                  border: "2px solid #444",
                  borderRadius: 8,
                }}
              />
            )}
          </div>
        );
      }
    });
  };

  return <div>{renderObject(theme)}</div>;
};

export default ThemeViewer;
