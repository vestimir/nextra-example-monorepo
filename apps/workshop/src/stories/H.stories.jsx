import React from "react";
import theme from "../../../../packages/ui/src/theme";
import HComponent from "../../../../packages/ui/src/H";

const Story = {
  title: "UI/Basic/H",
  component: HComponent,
  argTypes: {
    size: { type: "select", options: Object.keys(theme.font) },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Heading component. Use `as` prop to control the semantics of the output HTML, accepts `size` corresponding to the font sizes defined in the theme. ",
      },
    },
  },
};

export default Story;

const Template = (args) => <HComponent {...args} />;

export const H = Template.bind({});
H.args = {
  as: "h3",
  size: "medium",
  children: "Medium heading",
};
H.parameters = {
  docs: {
    source: {
      code: '<H as="h3" size="medium">Medium heading</H>',
      language: "jsx",
      type: "auto",
    },
  },
};
