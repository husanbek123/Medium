import toast from "react-hot-toast";

export const SuccessToast = (title: string) => toast.success(title);
export const ErrorToast = (title: string) => toast.error(title);
export const PromiseToast = (props: {
  title : string;
  loadingTitle: string;
  success: string;
  error: string;
  fetching: Promise<unknown>;
}) =>
  toast.promise(props.fetching, {
    loading: props.loadingTitle,
    success: <b>{props.success}</b>,
    error: <b>{props.error}</b>,
  });
