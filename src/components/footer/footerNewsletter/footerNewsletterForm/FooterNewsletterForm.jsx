"use client";
import Link from "next/link";
import React, { useState } from "react";
import FormSucces from "../formSucces/FormSucces";
import { submitNewsletter } from "../../../../utils/action";
import SubmitButton from "../submitButton/SubmitButton";
import { useFormState } from "react-dom";
import { usePathname } from "next/navigation";

const FooterNewsletterForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const path = usePathname();

  const initialState = {
    message: {
      inputMessage: "",
      checkboxMessage: "",
      successMessage: "",
    },
    success: false,
  };

  const [state, formAction] = useFormState(submitNewsletter, initialState);

  return (
    <>
      {state.success ? (
        <FormSucces successMessage={state.message.successMessage} />
      ) : (
        <form
          className="form"
          id="form"
          action={async (formData) => {
            formAction(formData);
          }}
        >
          <div className="form-container__wrapper">
            <div className="form-container">
              <div className="form-container__left">
                <input
                  className={
                    state.message.inputMessage.length > 0 ? "errorInput" : ""
                  }
                  id="input"
                  name="email"
                  placeholder="Unesi svoj E-mail"
                  data-name="email"
                  aria-invalid="false"
                  aria-required="true"
                />
                {state.message.inputMessage.length > 0 ? (
                  <p className="newsletter-input__error-mobile">
                    {state.message.inputMessage}
                  </p>
                ) : null}
              </div>
              <div className="form-container__right">
                <SubmitButton />
              </div>
            </div>
            {state.message.inputMessage.length > 0 ? (
              <p className="newsletter-input__error-desktop">
                {state.message.inputMessage}
              </p>
            ) : null}
          </div>
          <div className="newsletter-izjava">
            <span>
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                aria-invalid="false"
                aria-required="true"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
              />
            </span>
            <div className="newsletter-izjava__detalji">
              <label className="line-height" htmlFor="newsletter">
                <div
                  className={
                    state.message.checkboxMessage.length > 0 && !isChecked
                      ? "errorCheckbox"
                      : ""
                  }
                >
                  S newslettera se možeš odjaviti kad god to poželiš, a detalje
                  o korištenju osobnih podataka pronađi u izjavi o
                </div>
              </label>
              <Link
                className={
                  state.message.checkboxMessage.length > 0 && !isChecked
                    ? "errorCheckboxLink line-height"
                    : "line-height"
                }
                href="https://zaposlise.hr/politika-privatnosti"
                target="_blank"
              >
                izjavi o privatnosti podataka
              </Link>
              .
            </div>
            <input
              style={{ display: "none" }}
              type="text"
              name="path"
              value={path}
              readOnly
            />
          </div>
          {state.message.checkboxMessage.length > 0 && !isChecked ? (
            <p className="newsletter-checkbox__error">
              {state.message.checkboxMessage}
            </p>
          ) : null}
        </form>
      )}
    </>
  );
};

export default FooterNewsletterForm;
