import { Paper } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import Form from "./Form";
import { BaseComponentProps } from "../models/BaseComponentProps";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;

// export interface HeaderInputProps extends BaseComponentProps {}
