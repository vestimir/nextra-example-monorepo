import React from "react";
import { Navigation, NavItem } from "../../../../packages/ui/src/Navigation";
import LanguageSwitcherComponent from "../../../../packages/ui/src/LanguageSwitcher";

const LANGUAGE_SWITCHER_EXAMPLE = `<LanguageSwitcher
  current="EN"
  navigation={[
    { path: "/bg/", label: "BG" },
    { path: "/de/", label: "DE", newItem: true },
  ]}
/>`;

const Story = {
  title: "UI/Administration/LanguageSwitcher",
  component: LanguageSwitcherComponent,
  argTypes: {
    current: { type: "string" },
    navigation: {
      type: "array",
      description: "List of links and labels. ",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "This example is showing a language switcher inside of a Navigation component. ",
      },
    },
  },
};

export default Story;

const Template = (args) => (
  <Navigation>
    <NavItem>
      <LanguageSwitcherComponent {...args} />
    </NavItem>
  </Navigation>
);

export const LanguageSwitcher = Template.bind({});
LanguageSwitcher.args = {
  current: "EN",
  navigation: [
    { path: "/bg/", label: "BG" },
    { path: "/de/", label: "DE", newItem: true },
  ],
};
LanguageSwitcher.parameters = {
  docs: {
    source: {
      code: LANGUAGE_SWITCHER_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
