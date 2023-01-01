import React from "react";
import ModalComponent from "../../../../packages/ui/src/Modal";

const MODAL_EXAMPLE = `<Modal title="Settings" onClose={() => setOpen(false)}>Contents of the modal</Modal>`;

const Story = {
  title: "UI/Administration/Modal",
  component: ModalComponent,
  argTypes: {
    title: { type: "string" },
    children: { type: "component", control: null },
    onClose: { type: "function", control: null },
  },
};

export default Story;

const Template = (args) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open modal
      </button>
      {open && (
        <ModalComponent {...args} onClose={() => setOpen(false)}>
          Contents of the modal
        </ModalComponent>
      )}
    </>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  title: "Settings",
};
Modal.parameters = {
  docs: {
    source: {
      code: MODAL_EXAMPLE,
      language: "jsx",
      type: "auto",
    },
  },
};
