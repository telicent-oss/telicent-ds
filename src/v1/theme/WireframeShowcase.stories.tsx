import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  FormControl,
  InputLabel,
  Skeleton,
  Stack,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

const WireframeShowcase = () => {
  const [tab, setTab] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState("");

  return (
    <Stack spacing={5} divider={<Divider />}>
      <div>
        <Typography variant="h4" gutterBottom>
          Wireframe Theme
        </Typography>
        <Typography variant="body2">
          Representative components from Telicent apps (catalog, query,
          showcase).
        </Typography>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          AppBar + Toolbar
        </Typography>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" edge="start" aria-label="menu">
              ☰
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Application Title
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 28, height: 28, fontSize: 14 }}>AC</Avatar>
            </Stack>
          </Toolbar>
        </AppBar>
        <Toolbar
          variant="dense"
          sx={{ border: 1, borderColor: "divider", mt: 1 }}
        >
          <TextField
            size="small"
            placeholder="Search all..."
            sx={{ flexGrow: 1, mr: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">⌕</InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" size="small">
            Search
          </Button>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <Button variant="contained" size="small">
            + Add resource
          </Button>
        </Toolbar>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Buttons
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
          <IconButton aria-label="close">✕</IconButton>
          <IconButton aria-label="search">⌕</IconButton>
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Typography
        </Typography>
        <Stack spacing={1}>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="subtitle1">Subtitle 1</Typography>
          <Typography variant="subtitle2">Subtitle 2</Typography>
          <Typography variant="body1">
            Body 1 — representative paragraph text for wireframe review.
          </Typography>
          <Typography variant="body2">
            Body 2 — smaller paragraph text for secondary content.
          </Typography>
          <Typography variant="caption">Caption text</Typography>
          <Typography variant="overline">Overline text</Typography>
          <Link href="#" underline="hover">
            Link text
          </Link>
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Cards
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Typography variant="h6">Data Resource</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Resource description with metadata fields.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Dataset" size="small" />
                <Chip label="Public" size="small" variant="outlined" />
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ width: 280 }}>
            <CardContent>
              <Typography variant="h6">Outlined Card</Typography>
              <Typography variant="body2">
                Outlined variant for comparison.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" height={80} />
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Two-Pane Layout (Search + Filter)
        </Typography>
        <Stack direction="row" spacing={2}>
          <Stack spacing={1} sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label="user-data" onDelete={() => {}} />
              <Chip label="customer" onDelete={() => {}} />
              <Typography variant="body2">3 results</Typography>
            </Stack>
            <Card>
              <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
                <Typography variant="subtitle1">User Records</Typography>
                <Typography variant="body2">
                  Personal data records for active users.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
                <Typography variant="subtitle1">Customer Profiles</Typography>
                <Typography variant="body2">
                  CRM data for customer-facing teams.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
                <Typography variant="subtitle1">Access Logs</Typography>
                <Typography variant="body2">
                  Audit trail for resource access events.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <Paper sx={{ width: 220, p: 2, alignSelf: "flex-start" }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Filter
            </Typography>
            <List dense disablePadding>
              <ListItem disablePadding>
                <ListItemButton>
                  <Checkbox size="small" sx={{ p: 0, mr: 1 }} />
                  <ListItemText primary="All" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 2 }}>
                <ListItemButton>
                  <Checkbox size="small" sx={{ p: 0, mr: 1 }} checked />
                  <ListItemText primary="User Data" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 2 }}>
                <ListItemButton>
                  <Checkbox size="small" sx={{ p: 0, mr: 1 }} checked />
                  <ListItemText primary="Customer" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 2 }}>
                <ListItemButton>
                  <Checkbox size="small" sx={{ p: 0, mr: 1 }} />
                  <ListItemText primary="Audit" />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Table
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Predicate</TableCell>
                <TableCell>Object</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ["ies:Person_001", "rdf:type", "ies:Person", "0.95"],
                ["ies:Person_001", "ies:hasName", '"Alice Smith"', "0.92"],
                ["ies:Event_042", "ies:involvedIn", "ies:Person_001", "0.88"],
                ["ies:Location_07", "rdfs:label", '"London"', "0.85"],
              ].map(([s, p, o, score], i) => (
                <TableRow key={i}>
                  <TableCell>{s}</TableCell>
                  <TableCell>{p}</TableCell>
                  <TableCell>{o}</TableCell>
                  <TableCell align="right">{score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Form
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Create Resource
          </Typography>
          <Stack spacing={2}>
            <TextField label="Title" placeholder="Resource title" fullWidth />
            <TextField
              label="Description"
              placeholder="Describe this resource..."
              multiline
              rows={3}
              fullWidth
            />
            <Stack direction="row" spacing={2}>
              <TextField
                label="Contact"
                placeholder="email@example.com"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                label="Creator"
                placeholder="Name"
                sx={{ flexGrow: 1 }}
              />
            </Stack>
            <FormControl fullWidth>
              <InputLabel>Media Type</InputLabel>
              <Select
                value={selectValue}
                label="Media Type"
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <MenuItem value="json">application/json</MenuItem>
                <MenuItem value="csv">text/csv</MenuItem>
                <MenuItem value="xml">application/xml</MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="text">Cancel</Button>
              <Button variant="contained">Save</Button>
            </Stack>
          </Stack>
        </Paper>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Text Fields
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <TextField label="Label" placeholder="Placeholder" />
          <TextField label="With Value" value="Entered text" />
          <TextField label="Disabled" disabled value="Disabled" />
          <TextField label="Error" error helperText="Required field" />
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Chips
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Default" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Deletable" onDelete={() => {}} />
          <Chip label="With Avatar" avatar={<Avatar>W</Avatar>} />
          <Chip label="Small" size="small" />
          <Chip label="Small outlined" size="small" variant="outlined" />
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Autocomplete
        </Typography>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            options={["Option A", "Option B", "Option C", "Option D"]}
            renderInput={(params) => (
              <TextField {...params} label="Single select" />
            )}
            sx={{ width: 300 }}
          />
          <Autocomplete
            multiple
            options={["Tag A", "Tag B", "Tag C"]}
            defaultValue={["Tag A"]}
            renderInput={(params) => (
              <TextField {...params} label="Multi select" />
            )}
            sx={{ width: 300 }}
          />
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Toggles
        </Typography>
        <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Word wrap"
          />
          <FormControlLabel control={<Switch />} label="Auto-refresh" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Checked"
          />
          <FormControlLabel control={<Checkbox />} label="Unchecked" />
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Tabs
        </Typography>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Source" />
          <Tab label="Pipeline" />
          <Tab label="Output" />
        </Tabs>
        <Paper sx={{ p: 2, mt: 0 }}>
          <Typography variant="body2">
            {tab === 0 && "Source configuration view content."}
            {tab === 1 && "Pipeline stage visualization content."}
            {tab === 2 && "Output results and logs content."}
          </Typography>
        </Paper>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          List
        </Typography>
        <Paper sx={{ maxWidth: 320 }}>
          <List dense>
            {["ies:Person", "ies:Event", "ies:Location", "ies:Device"].map(
              (item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item} secondary="Entity type" />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Paper>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Dialog
        </Typography>
        <Button variant="outlined" onClick={() => setDialogOpen(true)}>
          Open Dialog
        </Button>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Unsaved Changes</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              You have unsaved changes. Do you want to save before leaving?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Discard</Button>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Loading States
        </Typography>
        <Stack spacing={2}>
          <LinearProgress variant="determinate" value={65} />
          <LinearProgress />
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular" width={40} height={40} />
            <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="70%" />
            </Stack>
          </Stack>
        </Stack>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Avatars
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>S</Avatar>
        </Stack>
      </div>
    </Stack>
  );
};

const meta: Meta<typeof WireframeShowcase> = {
  title: "Theme/Wireframe Showcase",
  component: WireframeShowcase,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof WireframeShowcase>;

export const Default: Story = {};
