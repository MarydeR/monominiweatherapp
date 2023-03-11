import React from "react";
import "./Footnote.css";

export default function Footnote() {
  return (
    <small className="Footnote">
      <a
        href="https://github.com/MarydeR/monominiweatherapp"
        target="_blank"
        rel="noreferrer noopener"
      >
        OpenSourceCode
      </a>{" "}
      by MDR hosted in{" "}
      <a
        href="https://quiet-concha-b2732c.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Netlify
      </a>{" "}
    </small>
  );
}
