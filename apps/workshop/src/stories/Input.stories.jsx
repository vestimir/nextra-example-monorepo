import React from "react";
import InputComponent from "../../../../packages/ui/src/Input";

const Story = {
  title: "UI/Forms/Input",
  component: InputComponent,
};

export default Story;

const Template = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
Input.args = {
  type: "text",
  name: "username",
  placeholder: "Enter your username...",
};
Input.parameters = {
  docs: {
    source: {
      code: `<Input type="text" name="username" placeholder="Enter your username..." />`,
      language: "jsx",
      type: "auto",
    },
  },
};
