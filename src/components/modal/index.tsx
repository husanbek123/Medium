import { Modal, Box } from "@mantine/core";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { GoogleButton } from "../button/google";
import React, { useState } from "react";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../toast";

export default React.memo(
  NiceModal.create(() => {
    const [disabled, setDisabled] = useState(false);
    const modal = useModal();
    const login = useGoogleLogin({
      onSuccess: async (respose) => {
        try {
          const res = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${respose.access_token}`,
              },
            }
          );
          SuccessToast("Success joined!");
          console.log(res.data);
          setDisabled(() => false);
        } catch (err) {
          console.log(err);
          setDisabled(() => false);
          ErrorToast("Error");
        }
      },
      onError: (error) => {
        console.log(error);
        setDisabled(() => false);
        ErrorToast("Error join");
      },
      onNonOAuthError: (test) => {
        setDisabled(() => false);
        ErrorToast("Error join");
      },
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
            height: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <GoogleButton
          onClick={() => {
            setDisabled(() => true);
            login();
          }}
          disabled={disabled}
        ></GoogleButton>
      </Modal>
    );
  })
);
