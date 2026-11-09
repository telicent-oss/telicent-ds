import FlexBox from "../../layout/FlexBox";
import Autocomplete, { Option } from "../Autocomplete/Autocomplete";
import Checkbox from "../Checkbox/Checkbox";
import Select from "../Select/Select";
import { IdhLabel, IdhSchemaOptions } from "./idhLabel";

/** "team-a" from "urn:telicent:groups:team-a". */
const groupName = (group: string): string => group.split(":").pop() ?? group;

export type SecurityLabelEditorProps<T extends IdhLabel> = {
  /** Fields this editor does not know about, such as `scheme`, are kept on change. */
  value: T;
  onChange: (value: T) => void;
  /** From `extractIdhOptions`. The lists are closed: nothing outside them can be entered. */
  options: IdhSchemaOptions;
  disabled?: boolean;
  /** Prefix for the field ids. Set it when a page shows more than one editor. */
  id?: string;
  /** Replaces a field's hint. The default hint names the values that must stay. */
  hints?: Partial<Record<"classification" | "nationalities" | "organisations" | "groups", string>>;
};

const mustInclude = (values: string[]) => (values.length > 0 ? `Must include ${values.join(", ")}` : undefined);

/**
 * Edits an IDH security label, offering only what the user's own label schema allows. Their own
 * nationality and organisation cannot be removed, so they can always read what they label.
 */
const SecurityLabelEditor = <T extends IdhLabel>({
  value,
  onChange,
  options,
  disabled = false,
  id = "security-label",
  hints = {},
}: SecurityLabelEditorProps<T>) => {
  const toOption = (display: (v: string) => string) => (v: string): Option => ({ value: v, label: display(v) });
  const asIs = toOption((v) => v);
  const asGroup = toOption(groupName);
  const values = (selected: Option[]) => selected.map((option) => option.value);
  return (
    <FlexBox spacing={2}>
      <Select
        id={`${id}-classification`}
        label="Classification"
        fullWidth
        value={value.classification}
        disabled={disabled}
        helperText={hints.classification}
        options={options.classifications.map((c) => ({ value: c, label: c }))}
        onChange={(event) => onChange({ ...value, classification: String(event.target.value) })}
      />
      <Autocomplete
        multiple
        id={`${id}-nationalities`}
        label="Nationalities"
        disabled={disabled}
        options={options.nats.options.map(asIs)}
        value={value.allowedNats.map(asIs)}
        lockedValues={options.nats.mustInclude}
        helperText={hints.nationalities ?? mustInclude(options.nats.mustInclude)}
        filterSelectedOptions
        onChange={(selected) => onChange({ ...value, allowedNats: values(selected) })}
      />
      <Autocomplete
        multiple
        id={`${id}-organisations`}
        label="Organisations"
        disabled={disabled}
        options={options.orgs.options.map(asIs)}
        value={value.allowedOrgs.map(asIs)}
        lockedValues={options.orgs.mustInclude}
        helperText={hints.organisations ?? mustInclude(options.orgs.mustInclude)}
        filterSelectedOptions
        onChange={(selected) => onChange({ ...value, allowedOrgs: values(selected) })}
      />
      <Autocomplete
        multiple
        id={`${id}-groups`}
        label="Groups (readers need all)"
        disabled={disabled}
        options={options.groups.options.map(asGroup)}
        value={value.groups.map(asGroup)}
        helperText={hints.groups}
        filterSelectedOptions
        onChange={(selected) => onChange({ ...value, groups: values(selected) })}
      />
      <Checkbox
        id={`${id}-pii`}
        label="Contains personally identifiable information"
        checked={value.containsPii ?? false}
        disabled={disabled}
        onChange={(event) => onChange({ ...value, containsPii: event.target.checked })}
      />
    </FlexBox>
  );
};

export default SecurityLabelEditor;
