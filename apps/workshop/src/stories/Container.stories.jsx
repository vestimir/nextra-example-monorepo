import React from "react";
import ContainerComponent from "../../../../packages/ui/src/Container";

const Story = {
  title: "UI/Layout/Container",
  component: ContainerComponent,
  argTypes: {
    top: { type: "boolean", description: "Padding on top" },
    bottom: { type: "boolean", description: "Padding on bottom" },
  },
};

export default Story;

const Template = (args) => <ContainerComponent {...args} />;

export const Container = Template.bind({});
Container.args = {
  children: "This is a sample text in a container.",
};
Container.parameters = {
  docs: {
    source: {
      code: "<Container>This is a sample text in a container.</Container>",
      language: "jsx",
      type: "auto",
    },
  },
};
