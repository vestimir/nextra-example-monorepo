import React from "react";
import {
  Panel as PanelComponent,
  PanelTitle,
  PanelContent,
} from "../../../../packages/ui/src/Panel";

const PANEL_EXAMPLE = `<Panel>
  <PanelTitle>Title</PanelTitle>
  <PanelContent>Content goes here...</PanelContent>
</Panel>`;

const Story = {
  title: "UI/Administration/Panel",
  component: PanelComponent,
};

export default Story;

const Template = () => (
  <PanelComponent>
    <PanelTitle>Title</PanelTitle>
    <PanelContent>Content goes here...</PanelContent>
  </PanelComponent>
);

export const Panel = Template.bind({});
Panel.args = {};
Panel.parameters = {
  docs: {
    source: {
      code: PANEL_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
