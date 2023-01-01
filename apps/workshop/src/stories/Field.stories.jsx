import React from "react";
import Field from "../../../../packages/ui/src/Field";

const Story = {
  title: "UI/Forms/Field",
  component: Field,
  argTypes: {
    as: {
      type: "enum",
      options: ["input", "select", "textarea"],
      description: "Type of the input component",
    },
    r: { description: "React ref object" },
    name: { type: "string", description: "HTML name attribute of the input" },
    label: { type: "string", description: "Optional label" },
    hint: { type: "string", description: "Optional hint" },
    error: { type: "string", description: "Optional error message" },
    wrapperProps: {
      type: "object",
      description: "Additional props for the wrapper component",
    },
  },
};

export default Story;

const Template = (args) => <Field {...args} />;

export const Input = Template.bind({});
Input.args = {
  as: "input",
  label: "Username",
};

export const Select = Template.bind({});
Select.args = {
  as: "select",
  label: "Position",
  children: (
    <>
      <option value="CEO">CEO</option>
      <option value="CFO">CFO</option>
      <option value="CMO">CMO</option>
    </>
  ),
};

export const Textarea = Template.bind({});
Textarea.args = {
  as: "textarea",
  label: "Message",
};

export const InputWithType = Template.bind({});
InputWithType.args = {
  as: "input",
  type: "file",
  label: "Attach file",
};

export const InputWithHint = Template.bind({});
InputWithHint.args = {
  as: "input",
  label: "Username",
  hint: "Only letters and numbers are allowed",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  as: "input",
  label: "Username",
  error: "This username is already taken",
};
