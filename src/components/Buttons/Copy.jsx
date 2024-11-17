import React, { useState, useEffect } from "react";
import { CheckCheck, Copy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = ({ output }) => {
  const [copied, setCopied] = useState(false); // state for copied status

  useEffect(() => {
    if (copied) {
      // Set a timeout to reset the copied state after 5 seconds
      const timer = setTimeout(() => setCopied(false), 5000);
      return () => clearTimeout(timer); // Clear timeout on unmount or when copied changes
    }
  }, [copied]);

  return (
    <CopyToClipboard
      text={output}
      onCopy={() => setCopied(true)} // set copied status to true on copy
    >
      <button className="btn btn-secondary">
        {copied ? (
          <div className="flex items-center">
            <CheckCheck className="w-5 h-5" />{" "}
            <span className="sm:block hidden ml-2"> Copied</span>
          </div>
        ) : (
          <div className="flex items-center">
            <Copy className="w-5 h-5" />{" "}
            <span className="sm:block hidden ml-2"> Copy</span>
          </div>
        )}
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
