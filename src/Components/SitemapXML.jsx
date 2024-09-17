// Create a new file: src/Components/SitemapXML.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SitemapXML() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/sitemap.xml")
      .then((response) => response.text())
      .then((sitemap) => {
        const blob = new Blob([sitemap], { type: "application/xml" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "sitemap.xml";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error fetching sitemap:", error);
        navigate("/");
      });
  }, [navigate]);

  return null;
}

export default SitemapXML;
