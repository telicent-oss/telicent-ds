import FlexBox from "../../layout/FlexBox";
import Autocomplete, { Option } from "../Autocomplete/Autocomplete";
import Checkbox from "../Checkbox/Checkbox";
import Select from "../Select/Select";
import { IdhLabel, IdhSchemaOptions } from "./idhLabel";

const asIs = (v: string): Option => ({ value: v, label: v });
// "urn:telicent:groups:team-a" shows as "team-a".
const asGroup = (v: string): Option => ({ value: v, label: v.split(":").pop() ?? v });
const values = (selected: Option[]) => selected.map((option) => option.value);

// A reader needs a listed nationality and organisation, so an empty list locks everyone out.
const hint = (selected: string[], required: string[], what: string) =>
  selected.length === 0
    ? `Choose at least one ${what}, or no one can read the data`
    : required.length > 0
      ? `Must include ${required.join(", ")}`
      : undefined;

export type SecurityLabelEditorProps<T extends IdhLabel> = {
  /** Fields the editor does not edit, such as `scheme`, are kept on change. */
  value: T;
  onChange: (value: T) => void;
  /** From `extractIdhOptions`. Nothing outside these lists can be entered. */
  options: IdhSchemaOptions;
  disabled?: boolean;
};

/** Edits an IDH security label within what the user's own label schema allows. */
const SecurityLabelEditor = <T extends IdhLabel>({ value, onChange, options, disabled }: SecurityLabelEditorProps<T>) => (
  <FlexBox spacing={2}>
    <Select
      label="Classification"
      fullWidth
      value={value.classification}
      disabled={disabled}
      options={options.classifications.map((c) => ({ value: c, label: c }))}
      onChange={(event) => onChange({ ...value, classification: String(event.target.value) })}
    />
    <Autocomplete
      multiple
      label="Nationalities"
      disabled={disabled}
      options={options.nats.options.map(asIs)}
      value={value.allowedNats.map(asIs)}
      lockedValues={options.nats.mustInclude}
      error={value.allowedNats.length === 0}
      helperText={hint(value.allowedNats, options.nats.mustInclude, "nationality")}
      filterSelectedOptions
      onChange={(selected) => onChange({ ...value, allowedNats: values(selected) })}
    />
    <Autocomplete
      multiple
      label="Organisations"
      disabled={disabled}
      options={options.orgs.options.map(asIs)}
      value={value.allowedOrgs.map(asIs)}
      lockedValues={options.orgs.mustInclude}
      error={value.allowedOrgs.length === 0}
      helperText={hint(value.allowedOrgs, options.orgs.mustInclude, "organisation")}
      filterSelectedOptions
      onChange={(selected) => onChange({ ...value, allowedOrgs: values(selected) })}
    />
    <Autocomplete
      multiple
      label="Groups (readers need all)"
      disabled={disabled}
      options={options.groups.options.map(asGroup)}
      value={value.groups.map(asGroup)}
      filterSelectedOptions
      onChange={(selected) => onChange({ ...value, groups: values(selected) })}
    />
    <Checkbox
      label="Contains personally identifiable information"
      checked={value.containsPii ?? false}
      disabled={disabled}
      onChange={(event) => onChange({ ...value, containsPii: event.target.checked })}
    />
  </FlexBox>
);

export default SecurityLabelEditor;
