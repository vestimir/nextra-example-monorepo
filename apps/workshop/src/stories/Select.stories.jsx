import React from "react";
import SelectComponent from "../../../../packages/ui/src/Select";

const Story = {
  title: "UI/Forms/Select",
  component: SelectComponent,
  argTypes: {
    children: {
      description: "option tags",
      type: null,
      control: false,
    },
  },
};

export default Story;

const Template = (args) => (
  <SelectComponent {...args}>
    <option value="">Please select...</option>
    <option value="CEO">CEO</option>
    <option value="CFO">CFO</option>
    <option value="CMO">CMO</option>
  </SelectComponent>
);

export const Select = Template.bind({});
Select.args = {
  name: "position",
};
Select.parameters = {
  docs: {
    source: {
      code: `<Select name="position">
  <option value="">Please select...</option>
  <option value="CEO">CEO</option>
  <option value="CFO">CFO</option>
  <option value="CMO">CMO</option>
</Select>`,
      language: "jsx",
      type: "auto",
    },
  },
};
