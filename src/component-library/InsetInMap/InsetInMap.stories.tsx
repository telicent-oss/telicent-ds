// src/pages/Search/InsetInMap.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Container,
  Divider,
  dividerClasses,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { InsetInMap, Scrollable } from "./InsetInMap";
import { BasicMap, MapCanvasProvider } from "../../export";
import { Drawer } from "./components/components";
import { allArgs } from "../Map/composites/BasicMap/BasicMap.stories";
import { MapToggleButtonPresentational } from "../Map/primitives/controls/MapToggleButtonPresentational";
import { ButtonZoomIn } from "../Map/primitives/controls/ButtonZoomIn";
import { ButtonZoomOut } from "../Map/primitives/controls/ButtonZoomOut";
import { initialMapStyleConfig } from "../Map/primitives/MapCanvas/storyconfig";
import { DrawerController } from "../Drawer/primitives/useDrawer";
import { LayerSelectorInsetInMap } from "../Map/primitives/LayerSelector/composites/LayerSelectorInsetInMap/LayerSelectorInsetInMap";

const defaultContent = ({ scrollable }: { scrollable: Scrollable }) => (
  <Box sx={{ p: 2 }}>
    {Array.from({ length: 7 }, (_, i) => (
      <Box
        key={i}
        sx={{
          mb: 1,
          p: 1,
          borderRadius: 1,
        }}
      >
        <Typography>Result Item {i + 1}</Typography>
      </Box>
    ))}
  </Box>
);

const DrawerWithResults: React.FC = () => {
  const ref = React.useRef<DrawerController>(null);
  return (
    <Drawer ref={ref} drawerWidth={177}>
      {defaultContent({
        scrollable: ref?.current
          ? (ref.current.getContainer() as Scrollable)
          : window,
      })}
    </Drawer>
  );
};

const meta: Meta<typeof InsetInMap> = {
  title: "Component Library/InsetInMap",
  component: InsetInMap,
  decorators: [
    (Story) => {
      return (
        <Box
          sx={{
            width: "800px",
            height: "calc(50vh - 40px)",
            position: "relative",
          }}
        >
          <MapCanvasProvider initialMapStyleConfig={initialMapStyleConfig}>
            <Story />
          </MapCanvasProvider>
        </Box>
      );
    },
  ],
  argTypes: {},
  args: {
    content: <BasicMap {...allArgs} />,
    controlArea: {
      left: <DrawerWithResults />,
      topRight: (
        <Container>
          <Stack direction="row" spacing={2} alignItems="center">
            <LayerSelectorInsetInMap />
            <MapToggleButtonPresentational onClick={() => alert("Toggle map off")}/>
          </Stack>
        </Container>
      ),
      bottomRight: (
        <Box m={4}>
          <Paper>
            <Box
              p={1}
              sx={{
                height: 44, // figma 68 - 2x12
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  [`& .${dividerClasses.root}`]: {
                    mx: 1,
                  },
                }}
              >
                <ButtonZoomIn />
                <Divider orientation="vertical" flexItem />
                <ButtonZoomOut />
              </Box>
            </Box>
          </Paper>
        </Box>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <InsetInMap {...args} />,
};
