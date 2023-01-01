import React from "react";
import HandleComponent from "../../../../packages/ui/src/Handle";

const Story = {
  title: "UI/Basic/Handle",
  component: HandleComponent,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "Handle icon used for drag and drop click areas. ",
      },
    },
  },
};

export default Story;

const Template = (args) => <HandleComponent {...args} />;

export const Handle = Template.bind({});
Handle.args = {};
Handle.parameters = {
  docs: {
    source: {
      code: `<Handle />`,
      language: "jsx",
      type: "auto",
    },
  },
};
