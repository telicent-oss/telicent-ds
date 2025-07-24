import React, { useState } from 'react';
import { LayerOption } from '../primitives/LayerSelectorPresentational';
// ignore story-coverage.test.ts

export const useLayerSelector = ({ data, onChange }: { data: LayerOption[]; onChange: (layer: LayerOption) => void }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  React.useEffect(() => {
    onChange(data[selectedIndex]);
  }, []);

  const handleClickDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      cycleSelection();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const cycleSelection = () => {
    const nextIndex = (selectedIndex + 1) % data.length;
    setSelectedIndex(nextIndex);
    onChange(data[nextIndex]);
  };

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    onChange(data[index]);
    handleCloseDropdown();
  };

  return {
    data,
    selectedIndex,
    anchorEl,
    onClickDropdown: handleClickDropdown,
    onCloseDropdown: handleCloseDropdown,
    onListItemClick: handleListItemClick,
  };
};
