import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const ClickableLinkChips: TeliChipStory = {
  render: () => {
    const label = "Clickable link";
    const component = "a";
    const href = "/?path=/docs/components-telichip--docs";

    return (
      <div className="space-x-3">
        <TeliChip label={label} component={component} href={href} clickable />
        <TeliChip
          label={label}
          variant="secondary"
          component={component}
          href={href}
          clickable
        />
        <TeliChip
          label={label}
          variant="tertiary"
          component={component}
          href={href}
          clickable
        />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const label = "Clickable link";
const component = "a";
const href = "/?path=/docs/components-telichip--docs";

return (
  <div className="space-x-3">
    <TeliChip label={label} component={component} href={href} clickable />
    <TeliChip
      label={label}
      variant="secondary"
      component={component}
      href={href}
      clickable
    />
    <TeliChip
      label={label}
      variant="tertiary"
      component={component}
      href={href}
      clickable
    />
  </div>
);
      `,
      },
    },
  },
};

export default ClickableLinkChips;
