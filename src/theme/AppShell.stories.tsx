import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import AppBar from "../components/surfaces/AppBar/AppBar";
import Toolbar from "../components/surfaces/Toolbar/Toolbar";
import AppSwitch from "../components/data-display/AppSwitch/AppSwitch";
import UserProfile from "../components/data-display/UserProfile/UserProfile";
import AppInfo from "../components/data-display/AppInfo/AppInfo";
import AppInfoRow from "../components/data-display/AppInfo/AppInfoRow";
import AppSettings from "../components/data-display/AppSettings/AppSettings";
import ThemeSwitchRow from "../components/inputs/ThemeSwitch/ThemeSwitchRow";
import TitleAndContent from "../components/data-display/Text/TitleAndContent/TitleAndContent";
import { appList } from "../components/data-display/AppSwitch/AppSwitch.stories";
import Container from "../components/layout/Container/Container";
import FlexBox from "../components/layout/FlexBox";
import { H1, H2, H3, Text } from "../components/data-display/Text/Text";
import Button from "../components/buttons/Button/Button";
import IconButton from "../components/buttons/Button/IconButton";
import TextField from "../components/inputs/TextField/TextField";
import Select from "../components/inputs/Select/Select";
import Checkbox from "../components/inputs/Checkbox/Checkbox";
import Switch from "../components/inputs/Switch/Switch";
import Card from "../components/surfaces/Card/Card";
import CardContent from "../components/surfaces/Card/CardContent";
import Paper from "../components/surfaces/Paper/Paper";
import { Accordion } from "../components/surfaces/Accordion/Accordion";
import { AccordionSummary } from "../components/surfaces/Accordion/AccordionSummary";
import { AccordionDetails } from "../components/surfaces/Accordion/AccordionDetails";
import Chip from "../components/data-display/Chip/Chip";
import Divider from "../components/data-display/Divider/Divider";
import Table from "../components/data-display/Table/Table";
import TableBody from "../components/data-display/Table/TableBody";
import TableHead from "../components/data-display/Table/TableHead";
import TableRow from "../components/data-display/Table/TableRow";
import TableCell from "../components/data-display/Table/TableCell";
import { Alert } from "../components/feedback/Alert/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Spinner from "../components/feedback/Spinner/Spinner";
import { Skeleton } from "../components/feedback/Skeleton/Skeleton";
import PlusCircleIcon from "../components/data-display/Icons/PlusCircleIcon";
import BinIcon from "../components/data-display/Icons/BinIcon";
import CogIcon from "../components/data-display/Icons/CogIcon";
import FloppyDiskIcon from "../components/data-display/Icons/FloppyDiskIcon";

const UserProfileExample = (
  <UserProfile>
    <TitleAndContent title="Username" content="John Doe" />
    <TitleAndContent title="Email" content="JohnDoe@company.co.uk" />
    <TitleAndContent title="Deployed Organisation" content="Company UK" />
    <Divider sx={{ py: 1 }} />
    <FlexBox sx={{ pt: 2 }}>
      <Button
        onClick={() => console.log("Sign Out clicked")}
        variant="primary"
        startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}
      >
        Sign Out
      </Button>
    </FlexBox>
  </UserProfile>
);

const AppBarEndChild = (
  <FlexBox direction="row" alignItems="center" spacing={0.5}>
    <AppInfo>
      <AppInfoRow label="Version" value="1.16.0" />
      <AppInfoRow label="Build" value="a1b2c3d" />
      <AppInfoRow label="Environment" value="production" />
    </AppInfo>
    <AppSettings>
      <ThemeSwitchRow checked={false} onChange={() => undefined} />
    </AppSettings>
    {UserProfileExample}
  </FlexBox>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <FlexBox direction="column" gap={2}>
    <H3>{title}</H3>
    {children}
    <Divider />
  </FlexBox>
);

const meta: Meta = {
  title: "Theme/App Shell",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Composed layout that renders together the DS components apps reach for most, so a theme change can be assessed in context. Not a component reference — for that, see each component's own story. Use the Storybook theme selector to flip between DataNavy / DocumentPink / GraphOrange / AdminBlue / Blank and observe how contrast, elevation, and severity react across the same layout. Useful for accessibility spot-checks and for eyeballing a new palette before an app upgrades.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AppShell: Story = {
  render: () => {
    const [textVal, setTextVal] = useState("");
    const [selectVal, setSelectVal] = useState("a");
    const [checkedA, setCheckedA] = useState(true);
    const [checkedB, setCheckedB] = useState(false);
    const [switchOn, setSwitchOn] = useState(true);

    return (
      <>
        <AppBar
          appName="Design System"
          isElevated
          startChild={<AppSwitch apps={appList} />}
          endChild={AppBarEndChild}
        />
        <Toolbar>
          <FlexBox
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Text variant="body2">Datasets</Text>
            <FlexBox direction="row" alignItems="center" gap={1}>
              <Button variant="text" startIcon={<FloppyDiskIcon />}>
                Save
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="text" startIcon={<BinIcon />}>
                Delete
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="primary" startIcon={<PlusCircleIcon />}>
                New dataset
              </Button>
            </FlexBox>
          </FlexBox>
        </Toolbar>
        <Container maxWidth="lg">
          <FlexBox direction="column" gap={4} sx={{ py: 4 }}>
            <FlexBox direction="column" gap={1}>
              <H1>Design System</H1>
              <Text>
                A layout showing DS components in typical composition — a card with a
                form, feedback surfaces, tabular data, an accordion. Switch themes in
                the toolbar above to see contrast and elevation react across the same
                shape.
              </Text>
            </FlexBox>

            <Section title="Typography">
              <FlexBox direction="column" gap={0.5}>
                <H1>H1 heading</H1>
                <H2>H2 heading</H2>
                <H3>H3 heading</H3>
                <Text variant="body1">
                  Body 1. This is the default paragraph style used across app content.
                </Text>
                <Text variant="body2">
                  Body 2. Smaller supporting text, often used inside cards and rows.
                </Text>
                <Text variant="caption">Caption. Metadata, timestamps, hints.</Text>
              </FlexBox>
            </Section>

            <Section title="Buttons">
              <FlexBox gap={2} sx={{ flexWrap: "wrap" }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="text">Text</Button>
              </FlexBox>
              <FlexBox gap={2} sx={{ flexWrap: "wrap" }} alignItems="center">
                <Button variant="primary" size="small">
                  Small
                </Button>
                <Button variant="primary">Medium</Button>
                <Button variant="primary" size="large">
                  Large
                </Button>
              </FlexBox>
              <FlexBox gap={2} sx={{ flexWrap: "wrap" }} alignItems="center">
                <Button variant="primary" startIcon={<PlusCircleIcon />}>
                  New
                </Button>
                <Button variant="secondary" endIcon={<FloppyDiskIcon />}>
                  Save
                </Button>
                <Button variant="tertiary" startIcon={<BinIcon />}>
                  Delete
                </Button>
                <IconButton aria-label="settings">
                  <CogIcon />
                </IconButton>
              </FlexBox>
              <FlexBox gap={2} sx={{ flexWrap: "wrap" }}>
                <Button variant="primary" disabled>
                  Primary
                </Button>
                <Button variant="secondary" disabled>
                  Secondary
                </Button>
                <Button variant="tertiary" disabled>
                  Tertiary
                </Button>
                <Button variant="text" disabled>
                  Text
                </Button>
              </FlexBox>
            </Section>

            <Section title="Form">
              <Card maxWidth={600}>
                <CardContent>
                  <FlexBox direction="column" gap={2}>
                    <TextField
                      label="Name"
                      value={textVal}
                      onChange={(e) => setTextVal(e.target.value)}
                      helperText="Any string will do."
                    />
                    <Select
                      label="Category"
                      value={selectVal}
                      onChange={(e) => setSelectVal(String(e.target.value))}
                      options={[
                        { value: "a", label: "Alpha" },
                        { value: "b", label: "Bravo" },
                        { value: "c", label: "Charlie" },
                      ]}
                    />
                    <Checkbox
                      label="Enable notifications"
                      checked={checkedA}
                      onChange={(e) => setCheckedA(e.target.checked)}
                    />
                    <Checkbox
                      label="Subscribe to newsletter"
                      checked={checkedB}
                      onChange={(e) => setCheckedB(e.target.checked)}
                    />
                    <Switch
                      label="Advanced mode"
                      checked={switchOn}
                      onChange={(e) => setSwitchOn(e.target.checked)}
                    />
                  </FlexBox>
                </CardContent>
                <FlexBox
                  direction="row"
                  gap={1}
                  justifyContent="flex-end"
                  sx={{ px: 2, pb: 2 }}
                >
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="primary">Save</Button>
                </FlexBox>
              </Card>
            </Section>

            <Section title="Feedback">
              <FlexBox direction="column" gap={1}>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  Informational context about the current state.
                </Alert>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  The operation completed.
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  Something looks off — check the input before continuing.
                </Alert>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  The request failed. Try again.
                </Alert>
              </FlexBox>
              <FlexBox gap={4} alignItems="center">
                <Spinner size={24} />
                <Skeleton variant="text" width={200} />
                <Skeleton variant="rectangular" width={120} height={32} />
              </FlexBox>
            </Section>

            <Section title="Data display">
              <FlexBox gap={1} sx={{ flexWrap: "wrap" }}>
                <Chip label="Active" />
                <Chip label="Pending" color="warning" />
                <Chip label="Failed" color="error" />
                <Chip label="Filter" variant="outlined" />
              </FlexBox>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Dataset</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Records</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Persons</TableCell>
                    <TableCell>
                      <Chip label="Active" size="small" />
                    </TableCell>
                    <TableCell align="right">1,240</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Organisations</TableCell>
                    <TableCell>
                      <Chip label="Pending" size="small" color="warning" />
                    </TableCell>
                    <TableCell align="right">320</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Places</TableCell>
                    <TableCell>
                      <Chip label="Failed" size="small" color="error" />
                    </TableCell>
                    <TableCell align="right">89</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Accordion>
                <AccordionSummary>
                  <Text variant="body2">Advanced options</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text>
                    Additional configuration lives here. Padding stays flush left in
                    this composition to match the shape SecurityLabelEditor uses.
                  </Text>
                </AccordionDetails>
              </Accordion>
            </Section>

            <Section title="Surfaces">
              <FlexBox gap={2} sx={{ flexWrap: "wrap" }}>
                <Card maxWidth={280}>
                  <CardContent>
                    <H3>Card</H3>
                    <Text variant="body2">
                      Distinct data entity with optional actions.
                    </Text>
                  </CardContent>
                </Card>
                <Paper sx={{ p: 2, minWidth: 280 }}>
                  <H3>Paper</H3>
                  <Text variant="body2">
                    Elevated surface without the card's structure.
                  </Text>
                </Paper>
              </FlexBox>
            </Section>
          </FlexBox>
        </Container>
      </>
    );
  },
};
