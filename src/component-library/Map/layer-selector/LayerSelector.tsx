import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { PopOver, FlexGrid, FlexGridItem, Button, Text, useExtendedTheme } from '../../../export';
import { Image } from './Image'
import { PopOverProps } from '../../../v1/components/surfaces/PopOver/Popover';
import { ButtonProps } from '@mui/material';

export interface LayerOption {
  uri: string;
  image: string;
  label: string;
}

interface PresentationalProps {
  selectedIndex: number;
  data: LayerOption[];
  anchorEl: HTMLButtonElement | null
  onCloseDropdown: PopOverProps["onClose"];
  onClickDropdown: ButtonProps["onClick"]
  onListItemClick: (index: number) => void;
}

export const Presentational: React.FC<PresentationalProps> = ({
  data,
  selectedIndex,
  anchorEl,
  onCloseDropdown,
  onClickDropdown,
  onListItemClick,
}) => {
  const extendedTheme = useExtendedTheme();
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'layer-selector-popover' : undefined;

  return (
    <div>
      <Button
        id="layer-selector"
        variant="tertiary"
        aria-describedby={id}
        onClick={onClickDropdown}
      >
        <Image
          borderColor={extendedTheme.palette.primary.main}
          src={data[selectedIndex].image}
          alt={data[selectedIndex].label}
          title={data[selectedIndex].label}
        />
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </Button>
      <PopOver
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onCloseDropdown}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {
          <FlexGrid direction="column">
            {data.map((item, index) => (
              <FlexGridItem alignContent={'flex-start'} key={item.label}>
                <Button
                  disabled={index === selectedIndex}
                  onClick={() => onListItemClick(index)}
                  variant="tertiary"
                  key={item.label}
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                >
                  <Image
                    borderColor={
                      index === selectedIndex ? extendedTheme.palette.primary.main : 'transparent'
                    }
                    src={item.image}
                    alt={item.label}
                    title={item.label}
                  />
                  <Text textTransform="capitalize" variant="body2">
                    {item.label}
                  </Text>
                </Button>
              </FlexGridItem>
            ))}
          </FlexGrid>
        }
      </PopOver>
    </div>
  );
};


export const useInternalState = ({ data, onChange }: { data: LayerOption[]; onChange: (layer: LayerOption) => void }) => {
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

interface LayerSelectorProps {
  data: LayerOption[];
  onChange: (layer: LayerOption) => void;
}


export const LayerSelector: React.FC<LayerSelectorProps> = ({ data, onChange }) => {
  const hook = useInternalState({ data, onChange });
  if (data.length <= 1) {
    return null;
  }

  return (
    <Presentational
      data={hook.data}
      selectedIndex={hook.selectedIndex}
      anchorEl={hook.anchorEl}
      onClickDropdown={hook.onClickDropdown}
      onCloseDropdown={hook.onCloseDropdown}
      onListItemClick={hook.onListItemClick}
    />
  );
};
