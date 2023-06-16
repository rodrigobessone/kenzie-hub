import { ToastContainer } from "react-toastify";
import { styled } from "styled-components";
import Theme from "./Theme";

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast--success {
    color: ${Theme.colors.gray0};
    background-color: ${Theme.colors.gray2};
    font-size: 14px;
    font-weight: 700;

    .Toastify__progress-bar--success {
      background-color: ${Theme.colors.colorSuccess};
    }

    .Toastify__toast-body {
      svg {
        fill: ${Theme.colors.colorSuccess};
      }
    }
  }
  .Toastify__toast--error {
    color: ${Theme.colors.gray0};
    background-color: ${Theme.colors.gray2};
    font-size: 14px;
    font-weight: 700;
  }

    .Toastify__toast-body {
      svg {
        fill: ${Theme.colors.negative};
      }
    }

    .Toastify__progress-bar--error {
      background-color: ${Theme.colors.negative};
    }
  }
`;
