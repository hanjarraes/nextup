import emailjs from "@emailjs/browser";

export const ContacsApi = ({ payload }) => {
  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", payload, "YOUR_PUBLIC_KEY")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
