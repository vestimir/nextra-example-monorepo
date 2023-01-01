import React from "react";
import TextareaComponent from "../../../../packages/ui/src/Textarea";

const Story = {
  title: "UI/Forms/Textarea",
  component: TextareaComponent,
};

export default Story;

const Template = (args) => <TextareaComponent {...args} />;

export const Textarea = Template.bind({});
Textarea.args = {
  name: "message",
  placeholder: "Enter your message here...",
};
Textarea.parameters = {
  docs: {
    source: {
      code: `<Textarea name="message" placeholder="Enter your message here..." />`,
      language: "jsx",
      type: "auto",
    },
  },
};
