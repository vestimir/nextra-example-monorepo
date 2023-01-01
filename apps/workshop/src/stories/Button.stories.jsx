import React from "react";
// import { Button } from '@raketa-builder/ui';
import Button from "../../../../packages/ui/src/Button";

const Story = {
  title: "UI/Basic/Button",
  component: Button,
  argTypes: {
    size: { type: "select", options: Object.keys(Button.sizes) },
    variant: { type: "select", options: Button.variants },
  },
};

export default Story;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary action",
};
Primary.parameters = {
  docs: {
    source: {
      code: '<Button variant="primary">Primary action</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary action",
};
Secondary.parameters = {
  docs: {
    source: {
      code: '<Button variant="secondary">Secondary action</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success action",
};
Success.parameters = {
  docs: {
    source: {
      code: '<Button variant="success">Success action</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger action",
};
Danger.parameters = {
  docs: {
    source: {
      code: '<Button variant="danger">Danger action</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Small button",
};
Small.parameters = {
  docs: {
    source: {
      code: '<Button size="small">Small button</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  children: "Medium button",
};
Medium.parameters = {
  docs: {
    source: {
      code: '<Button size="medium">Medium button</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Large button",
};
Large.parameters = {
  docs: {
    source: {
      code: '<Button size="large">Large button</Button>',
      language: "jsx",
      type: "auto",
    },
  },
};
