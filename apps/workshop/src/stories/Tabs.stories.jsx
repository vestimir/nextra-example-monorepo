import React from "react";
import TabsComponent from "../../../../packages/ui/src/Tabs";

const Story = {
  title: "UI/Administration/Tabs",
  component: TabsComponent,
  argTypes: {
    initial: {
      type: "number",
      description: "Index of initially selected tab. ",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Tabs component. Each child represents a single tab. `title` attribute for each child is used for the tab labels. ",
      },
    },
  },
};

export default Story;

const Template = (args) => (
  <TabsComponent {...args}>
    <div title="Tab 1">Tab content</div>
    <div title="Tab 2">Tab alternative</div>
  </TabsComponent>
);

export const Tabs = Template.bind({});
Tabs.args = {};
Tabs.parameters = {
  docs: {
    source: {
      code: `<Tabs>
  <div title="Tab 1">Tab content</div>
  <div title="Tab 2">Tab alternative</div>
</Tabs>`,
      language: "jsx",
      type: "auto",
    },
  },
};
