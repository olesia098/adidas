import React from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NOTIFY_TYPES = { 
  error: "error", 
  warning: "warning", 
  success: "success", 
  info: "info", 
}; 
 
export const notify = (message, type = NOTIFY_TYPES.success) => { 
  switch (type) { 
    case NOTIFY_TYPES.error: 
      toast.error(message, { 
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 1000, 
      }); 
      break; 
    case NOTIFY_TYPES.warning: 
      toast.warning(message, { 
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 1000, 
      }); 
      break; 
    case NOTIFY_TYPES.success: 
      toast.success(message, { 
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 1000, 
      }); 
      break; 
    case NOTIFY_TYPES.info: 
      toast.info(message, { 
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 1000, 
      }); 
      break; 
    default: 
      toast(message, { 
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 1000, 
      }); 
  } 
};


