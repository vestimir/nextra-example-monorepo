import React from "react";
import FormGroup from "./FormGroup";
import Label from "./Label";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Hint from "./Hint";

const Field = ({
  as = "input",
  r,
  name,
  label,
  hint = "",
  error = "",
  wrapperProps,
  ...props
}) => {
  const types = {
    input: Input,
    select: Select,
    textarea: Textarea,
  };

  const Component = types[as];

  return (
    <FormGroup {...wrapperProps}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Component ref={r} id={name} name={name} {...props} />
      {hint && <Hint>{hint}</Hint>}
      {error && <Hint type="error">{error}</Hint>}
    </FormGroup>
  );
};

export default Field;
