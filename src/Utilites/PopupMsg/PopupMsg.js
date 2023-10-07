import { toast } from "react-toastify";


// --- for success Msg
export const successMsg = (msg) => toast.success(msg || 'Succeeded !', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

// --- for error Msg
export const errorMsg = (msg) => toast.error(msg || 'Some Error Happened', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
