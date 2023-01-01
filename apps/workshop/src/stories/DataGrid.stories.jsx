import React from "react";
import DataGridComponent from "../../../../packages/ui/src/DataGrid";

const DATAGRID_EXAMPLE = `<DataGrid
  list={[
    { id: 1, name: "Jane Doe", age: 34 },
    { id: 2, name: "John Doe", age: 35 },
  ]}
  header={() => (
    <>
      <th>Name</th>
      <th>Age</th>
    </>
  )}
  row={(item) => (
    <>
      <td>{item.name}</td>
      <td>{item.age}</td>
    </>
  )}
/>`;

const Story = {
  title: "UI/Administration/DataGrid",
  component: DataGridComponent,
  argTypes: {
    list: { type: "array" },
    header: {
      type: "function",
      description: "Function that returns the markup per row. ",
    },
    row: {
      type: "function",
      description: "Function that returns the markup per row. ",
    },
  },
};

export default Story;

const Template = (args) => <DataGridComponent {...args} />;

export const DataGrid = Template.bind({});
DataGrid.args = {
  list: [
    { id: 1, name: "Jane Doe", age: 34 },
    { id: 2, name: "John Doe", age: 35 },
  ],
  header: () => (
    <>
      <th>Name</th>
      <th>Age</th>
    </>
  ),
  row: (item) => (
    <>
      <td>{item.name}</td>
      <td>{item.age}</td>
    </>
  ),
};
DataGrid.parameters = {
  docs: {
    source: {
      code: DATAGRID_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
