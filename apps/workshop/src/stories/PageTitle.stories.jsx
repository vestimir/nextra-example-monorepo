import React from "react";
import PageTitleComponent from "../../../../packages/ui/src/PageTitle";

const Story = {
  title: "UI/Administration/PageTitle",
  component: PageTitleComponent,
};

export default Story;

const Template = (args) => <PageTitleComponent {...args} />;

export const PageTitle = Template.bind({});
PageTitle.args = {
  children: "List of articles",
};
