"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      id="button"
      type="submit"
      name="button"
      className="ff-btn-submit"
      aria-disabled={pending}
      disabled={pending}
    >
      Prijavi se
    </button>
  );
};

export default SubmitButton;
