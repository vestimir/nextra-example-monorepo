import React from "react";
import FormGroupComponent from "../../../../packages/ui/src/FormGroup";

const Story = {
  title: "UI/Forms/FormGroup",
  component: FormGroupComponent,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "A `FormGroup` adds margin bottom around different form fields.",
      },
    },
  },
};

export default Story;

const Template = (args) => <FormGroupComponent {...args} />;

export const FormGroup = Template.bind({});
FormGroup.args = {
  children: "This is text wrapped inside of FormGroup",
};
FormGroup.parameters = {
  docs: {
    source: {
      code: "<FormGroup>This is text wrapped inside of FormGroup</FormGroup>",
      language: "jsx",
      type: "auto",
    },
  },
};
