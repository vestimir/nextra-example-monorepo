import React from "react";
import { Row, Col, Shift } from "../../../../packages/ui/src/Grid";

const GRID_COLUMNS_EXAMPLE = `<Row>
  <Col s={6}>Column A</Col>
  <Col s={6}>Column B</Col>
</Row>`;

const GRID_SHIFT_EXAMPLE = `<Row>
  <Shift s={2}>Content shifted with 2 columns from the sides.</Shift>
</Row>`;

const Story = {
  title: "UI/Layout/Grid",
  component: Row,
  argTypes: {
    children: {
      description: "Multiple Col or a single Shift components",
      type: null,
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "- The grid exposes `Row`, `Col` and `Shift` components. \n\n- `Col` accepts prop of `s` which is the span of the columns.\n\n- `Shift` accepts prop of `s` with limited selection of 1, 2 or 3. ",
      },
    },
  },
};

export default Story;

const Template = (args) => <Row {...args} />;

export const GridWithColumns = Template.bind({});
GridWithColumns.args = {
  children: (
    <>
      <Col s={6}>Column A</Col>
      <Col s={6}>Column B</Col>
    </>
  ),
};

GridWithColumns.parameters = {
  docs: {
    source: {
      code: GRID_COLUMNS_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};

export const GridWithShift = Template.bind({});
GridWithShift.args = {
  children: (
    <>
      <Shift s={2}>Content shifted with 2 columns from the sides.</Shift>
    </>
  ),
};

GridWithShift.parameters = {
  docs: {
    source: {
      code: GRID_SHIFT_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
