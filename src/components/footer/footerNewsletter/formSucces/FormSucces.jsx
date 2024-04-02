import React from "react";

function FormSucces({ successMessage }) {
  return (
    <div id="uspješna-prijava" className="uspješna-prijava">
      <p>{successMessage}</p>
    </div>
  );
}

export default FormSucces;
