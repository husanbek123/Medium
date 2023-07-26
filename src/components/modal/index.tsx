import { Modal, useMantineTheme } from "@mantine/core";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

export default NiceModal.create(({ name } : {name:string}) => {
  // Use a hook to manage the modal state
  const modal = useModal();
  return (
    <Modal
      title=""
      centered
      opened={modal.visible}
      onClose={async () => {
        await modal.hide();
        return () => modal.remove();
      }}
      overlayProps={{
        opacity: 0.55,
        blur: 3,
      }}
    >
      Hello {name}!
    </Modal>
  );
});
