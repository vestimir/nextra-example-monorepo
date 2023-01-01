/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Navigation as NavigationComponent,
  NavItem,
} from "../../../../packages/ui/src/Navigation";

const NAVIGATION_EXAMPLE = `<Navigation>
  <NavItem>
    <a href="#">
      <img
        style={{ filter: "invert(1)" }}
        alt="directions"
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjc3LjMgMzUuMTFsLTMyLjEgMi4xMi0xIDMyLjkzIDMzLjYuMDUtLjUtMzUuMXpNMTUxLjcgODguMDRMNjcuOTYgMTE4LjkgMTUyIDE2OS4ybDE4OC02LjIgMi40LTc0LjcyLTE5MC43LS4yNHpNMjc5LjIgMTgzbC0zOC4zIDEuMy0uOCAyNy44IDM5LjUgMS4yLS40LTMwLjN6bS05My4xIDQ1LjZsLjggNjQuMiAyMDAuNC45IDUxLjctMjkuMi01NS44LTMwLjItMTk3LjEtNS43em01MS4xIDgyLjVsLTUgMTc1LjMgNTAuOS42LTIuMy0xNzUuNy00My42LS4yeiI+PC9wYXRoPjwvc3ZnPgo="
      />
    </a>
  </NavItem>
  <NavItem active>
    <a href="#">
      <img
        style={{ filter: "invert(1)" }}
        alt="directions"
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjc3LjMgMzUuMTFsLTMyLjEgMi4xMi0xIDMyLjkzIDMzLjYuMDUtLjUtMzUuMXpNMTUxLjcgODguMDRMNjcuOTYgMTE4LjkgMTUyIDE2OS4ybDE4OC02LjIgMi40LTc0LjcyLTE5MC43LS4yNHpNMjc5LjIgMTgzbC0zOC4zIDEuMy0uOCAyNy44IDM5LjUgMS4yLS40LTMwLjN6bS05My4xIDQ1LjZsLjggNjQuMiAyMDAuNC45IDUxLjctMjkuMi01NS44LTMwLjItMTk3LjEtNS43em01MS4xIDgyLjVsLTUgMTc1LjMgNTAuOS42LTIuMy0xNzUuNy00My42LS4yeiI+PC9wYXRoPjwvc3ZnPgo="
      />
    </a>
  </NavItem>
</Navigation>`;

const Story = {
  title: "UI/Administration/Navigation",
  component: NavigationComponent,
  argTypes: {
    children: {
      description: "Multiple NavItem components",
      type: null,
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Toolbar, fixed on the left side, used for main navigation. ",
      },
    },
  },
};

export default Story;

const Template = (args) => (
  <NavigationComponent {...args}>
    <NavItem>
      <a href="#">
        <img
          style={{ filter: "invert(1)" }}
          alt="directions"
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjc3LjMgMzUuMTFsLTMyLjEgMi4xMi0xIDMyLjkzIDMzLjYuMDUtLjUtMzUuMXpNMTUxLjcgODguMDRMNjcuOTYgMTE4LjkgMTUyIDE2OS4ybDE4OC02LjIgMi40LTc0LjcyLTE5MC43LS4yNHpNMjc5LjIgMTgzbC0zOC4zIDEuMy0uOCAyNy44IDM5LjUgMS4yLS40LTMwLjN6bS05My4xIDQ1LjZsLjggNjQuMiAyMDAuNC45IDUxLjctMjkuMi01NS44LTMwLjItMTk3LjEtNS43em01MS4xIDgyLjVsLTUgMTc1LjMgNTAuOS42LTIuMy0xNzUuNy00My42LS4yeiI+PC9wYXRoPjwvc3ZnPgo="
        />
      </a>
    </NavItem>
    <NavItem active>
      <a href="#">
        <img
          style={{ filter: "invert(1)" }}
          alt="directions"
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjc3LjMgMzUuMTFsLTMyLjEgMi4xMi0xIDMyLjkzIDMzLjYuMDUtLjUtMzUuMXpNMTUxLjcgODguMDRMNjcuOTYgMTE4LjkgMTUyIDE2OS4ybDE4OC02LjIgMi40LTc0LjcyLTE5MC43LS4yNHpNMjc5LjIgMTgzbC0zOC4zIDEuMy0uOCAyNy44IDM5LjUgMS4yLS40LTMwLjN6bS05My4xIDQ1LjZsLjggNjQuMiAyMDAuNC45IDUxLjctMjkuMi01NS44LTMwLjItMTk3LjEtNS43em01MS4xIDgyLjVsLTUgMTc1LjMgNTAuOS42LTIuMy0xNzUuNy00My42LS4yeiI+PC9wYXRoPjwvc3ZnPgo="
        />
      </a>
    </NavItem>
  </NavigationComponent>
);

export const Navigation = Template.bind({});
Navigation.args = {};
Navigation.parameters = {
  docs: {
    source: {
      code: NAVIGATION_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
