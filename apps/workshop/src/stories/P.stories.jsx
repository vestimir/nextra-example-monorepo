import React from "react";
import PComponent from "../../../../packages/ui/src/P";

const Story = {
  title: "UI/Basic/P",
  component: PComponent,
  parameters: {
    docs: {
      description: {
        component:
          "`P` is used for paragraph. It adds spacing bottom to each block of text. ",
      },
    },
  },
};

export default Story;

const Template = (args) => <PComponent {...args} />;

export const P = Template.bind({});
P.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis, voluptate laboriosam voluptates voluptatem modi eveniet saepe tempore voluptatibus repellat a deleniti, dolores delectus molestiae officiis? Voluptates, quod impedit.",
};
P.parameters = {
  docs: {
    source: {
      code: "<P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis, voluptate laboriosam voluptates voluptatem modi eveniet saepe tempore voluptatibus repellat a deleniti, dolores delectus molestiae officiis? Voluptates, quod impedit.</P>",
      language: "jsx",
      type: "auto",
    },
  },
};
