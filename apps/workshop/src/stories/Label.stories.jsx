import React from "react";
import LabelComponent from "../../../../packages/ui/src/Label";

const Story = {
  title: "UI/Forms/Label",
  component: LabelComponent,
};

export default Story;

const Template = (args) => <LabelComponent {...args} />;

export const Label = Template.bind({});
Label.args = {
  children: "Your email",
};
Label.parameters = {
  docs: {
    source: {
      code: "<Label>Your email</Label>",
      language: "jsx",
      type: "auto",
    },
  },
};
