import { Modal, Box } from "@mantine/core";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { GoogleButton } from "../button/google";

export default NiceModal.create(({ name }: { name: string }) => {
  const modal = useModal();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow: "auth-code",
  });
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
        blur: 10,
      }}
      styles={{
        header: { display: "none" },
        content: {
          padding: "30px",
          height: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <GoogleButton onClick={() => login()}></GoogleButton>
    </Modal>
  );
});
