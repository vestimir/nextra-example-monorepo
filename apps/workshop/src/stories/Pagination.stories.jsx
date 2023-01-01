import React from "react";
import PaginationComponent from "../../../../packages/ui/src/Pagination";

const PAGINATION_EXAMPLE = `<Pagination
  pagination={{ currentPage: 5, pagesCount: 25 }}
  LinkComponent={({ href, children }) => {
    const formattedHref = \`\${href.pathname}?page=\${href.query.page}\`;

    return <a href={formattedHref}>{children}</a>;
  }}
  router={{ query: {}, pathname: "/path" }}
/>`;

const Story = {
  title: "UI/Administration/Pagination",
  component: PaginationComponent,
  argTypes: {
    pagination: {
      type: "object",
      defaultValue: { currentPage: 5, pagesCount: 25 },
    },
    LinkComponent: {
      type: "function",
      description: "Component to use when rendering the page links.",
      control: null,
    },
    router: {
      type: "object",
      defaultValue: { query: {}, pathname: "/path" },
      description: "Instance of the Next.js router. ",
    },
  },
};

export default Story;

const Template = (args) => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
  pagination: { currentPage: 5, pagesCount: 25 },
  LinkComponent: ({ href, children }) => {
    const formattedHref = `${href.pathname}?page=${href.query.page}`;
    return <div href={formattedHref}>{children}</div>;
  },
  router: { query: {}, pathname: "/path" },
};
Pagination.parameters = {
  docs: {
    source: {
      code: PAGINATION_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
