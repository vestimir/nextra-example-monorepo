import React from "react";
import Toolbar from "../../../../packages/ui/src/Toolbar";

const Story = {
  title: "UI/Administration/Toolbar",
  component: Toolbar,
  argTypes: {
    mb: { type: "boolean", description: "Controls margin bottom." },
  },
};

export default Story;

const Template = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is text wrapped inside of Toolbar",
};
Default.parameters = {
  docs: {
    source: {
      code: "<Toolbar>This is text wrapped inside of Toolbar</Toolbar>",
      language: "jsx",
      type: "auto",
    },
  },
};

export const ToolbarWithMargin = Template.bind({});
ToolbarWithMargin.args = {
  mb: "1rem",
  children: "This is text wrapped inside of Toolbar",
};
ToolbarWithMargin.parameters = {
  docs: {
    source: {
      code: `<Toolbar mb="1rem">This is text wrapped inside of Toolbar</Toolbar>`,
      language: "jsx",
      type: "auto",
    },
  },
};
