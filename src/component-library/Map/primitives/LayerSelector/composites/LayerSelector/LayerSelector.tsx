import React from 'react';
import { useMapCanvasContext } from '../../../MapCanvas/MapCanvasProvider';
import { LayerSelectorPresentationalButton, LayerSelectorPresentationalPopOver } from '../../primitives/LayerSelectorPresentational';
import { useLayerSelector } from '../../primitives/useLayerSelector';
// ignore story-coverage.test.ts

export const LayerSelector: React.FC = () => {
  const context = useMapCanvasContext();
  const hook = useLayerSelector(context.styleSelector.props);
  if (context.styleSelector.props.data.length <= 1) {
    return null;
  }
  return (
    <div>
      <LayerSelectorPresentationalButton variant="text" {...hook} />
      <LayerSelectorPresentationalPopOver {...hook} />
    </div>
  );
};
