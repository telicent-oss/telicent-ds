import { useEffect, useState } from "react";
import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import TOP_100_FILMS from "./top100movies";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AsynchronousRequests: TeliAutocompleteStory = {
  args: { label: "Async", options: TOP_100_FILMS },
  render: ({ label }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<Array<Record<string, any>>>([]);
    const loading = open && options.length === 0;

    useEffect(() => {
      let active = true;

      if (!loading) {
        return undefined;
      }

      (async () => {
        await sleep(1e3); // For demo purposes.

        if (active) {
          setOptions(TOP_100_FILMS);
        }
      })();

      return () => {
        active = false;
      };
    }, [loading]);

    useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);

    return (
      <TeliAutocomplete
        fullWidth
        label={label}
        options={options}
        id="async-request"
        maxHeight={300}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        loading={loading}
      />
    );
  },
  decorators: [
    (Story) => (
      <div style={{ height: "20em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `The component supports two different asynchronous use-cases:
        <br /> - Load on open: it waits for the component to be interacted with 
        to load the options.
        <br /> - Search as you type: a new request is made for each keystroke. 
        Example coming soon...
        <br />
        <br />
        **Load on open**
        It displays a progress state as long as the network request is pending.`,
      },
      source: {
        code: `
const [open, setOpen] = useState(false);
const [options, setOptions] = useState<Array<Record<string, any>>>([]);
const loading = open && options.length === 0;

useEffect(() => {
  let active = true;

  if (!loading) {
    return undefined;
  }

  (async () => {
    await sleep(1e3); // For demo purposes.

    if (active) {
      setOptions(TOP_100_FILMS);
    }
  })();

  return () => {
    active = false;
  };
}, [loading]);

useEffect(() => {
  if (!open) {
    setOptions([]);
  }
}, [open]);

return (
  <TeliAutocomplete
    label={label}
    options={options}
    id="async-request"
    maxHeight={300}
    open={open}
    onOpen={() => {
      setOpen(true);
    }}
    onClose={() => {
      setOpen(false);
    }}
    isOptionEqualToValue={(option, value) => option.label === value.label}
    loading={loading}
  />
);
      `,
      },
    },
  },
};

export default AsynchronousRequests;
