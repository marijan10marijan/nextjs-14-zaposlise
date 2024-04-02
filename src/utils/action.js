"use server";

export const submitNewsletter = async (prevState, formData) => {
  try {
    const email = formData.get("email");
    const checkbox = formData.get("newsletter");
    const path = formData.get("path");

    if (!email && !checkbox) {
      return {
        message: {
          inputMessage: "Ovo polje je obavezno ispuniti",
          checkboxMessage: "Ovo polje je potrebno označiti",
        },
        success: false,
      };
    }

    if (!email) {
      return {
        message: {
          inputMessage: "Ovo polje je obavezno ispuniti",
          checkboxMessage: "",
        },
        success: false,
      };
    }

    const emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;

    if (!emailRegex.test(email) && !checkbox) {
      return {
        message: {
          inputMessage: "Polje mora sadržavati ispravnu e-mail adresu",
          checkboxMessage: "Ovo polje je potrebno označiti",
        },
        success: false,
      };
    }

    if (!emailRegex.test(email)) {
      return {
        message: {
          inputMessage: "Polje mora sadržavati ispravnu e-mail addresu",
          checkboxMessage: "",
        },
        success: false,
      };
    }

    if (!checkbox) {
      return {
        message: {
          inputMessage: "",
          checkboxMessage: "Ovo polje je potrebno označiti",
        },
        success: false,
      };
    }

    const response = await fetch(
      `${process.env.NEWSLETTER_API}?t=${crypto.randomUUID()}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          data: `email=${email.replace(
            "@",
            "%40"
          )}&gdpr-agreement=on&ak_js=${new Date().getTime()}&_wp_http_referer=${path}`,
          action: "fluentform_submit",
          form_id: 2,
        }).toString(),
      }
    );
    await response.json();
  } catch (err) {
    return {
      message: {
        inputMessage: "",
        checkboxMessage: "Ovo polje je potrebno označiti",
        successMessage: "Greška servera ili mreže. Pokušajte kasnije.",
      },
      success: false,
    };
  }

  return {
    message: {
      inputMessage: "",
      checkboxMessage: "Ovo polje je potrebno označiti",
      successMessage: "Hvala vam na prijavi za newsletter!",
    },
    success: true,
  };
};
