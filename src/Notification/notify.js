//necessary imports
import { toast } from "react-toastify";

//for throwing notifications
export const showToastMessage = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};