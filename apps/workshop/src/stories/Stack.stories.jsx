import React from "react";
import StackComponent from "../../../../packages/ui/src/Stack";

const Story = {
  title: "UI/Layout/Stack",
  component: StackComponent,
  argTypes: {
    h: {
      type: "enum",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],
      description: "Equivalent to `justify-content`. ",
    },
    v: {
      type: "enum",
      options: ["flex-start", "flex-end", "center"],
      description: "Equivalent to `align-items`. ",
    },
    g: { type: "string", description: "Equivalent to `gap`. " },
  },
  parameters: {
    docs: {
      description: {
        component: "Simple flexbox wrapper. ",
      },
    },
  },
};

export default Story;

const Template = (args) => (
  <StackComponent {...args}>
    <div>Key</div>
    <div>Value</div>
  </StackComponent>
);

export const Stack = Template.bind({});
Stack.args = {
  h: "flex-start",
  v: "center",
  g: "0.5rem",
};
Stack.parameters = {
  docs: {
    source: {
      code: `<Stack>
  <strong>Key</strong>
  <div>Value</div>
</Stack>`,
      language: "jsx",
      type: "auto",
    },
  },
};
