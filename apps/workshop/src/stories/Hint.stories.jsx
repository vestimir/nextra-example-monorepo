import React from "react";
import Hint from "../../../../packages/ui/src/Hint";

const Story = {
  title: "UI/Forms/Hint",
  component: Hint,
  argTypes: {
    type: {
      type: "enum",
      options: ["default", "error"],
      description: "Error turns it into a red text",
    },
  },
};

export default Story;

const Template = (args) => <Hint {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Explanation text for inputs",
};
Default.parameters = {
  docs: {
    source: {
      code: `<Hint>Explanation text for inputs</Hint>`,
      language: "jsx",
      type: "auto",
    },
  },
};

export const HintWithError = Template.bind({});
HintWithError.args = {
  type: "error",
  children: "Error message",
};
HintWithError.parameters = {
  docs: {
    source: {
      code: `<Hint type="error">Error message</Hint>`,
      language: "jsx",
      type: "auto",
    },
  },
};
