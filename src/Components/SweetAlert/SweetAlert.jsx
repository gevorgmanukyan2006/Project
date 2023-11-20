import Swal from "sweetalert2";

const OpenAlert = (value) => {
  let name_input = document.getElementById("name_input");
  let email_input = document.getElementById("email_input");
  let message_input = document.getElementById("message_input");

  if (value.name !== "" && value.email !== "") {
    Swal.fire({
      title: "Your request has been successfully submitted",
      text: "Thank you for the contact",
      icon: "success",
    });
    name_input.value = "";
    email_input.value = "";
    message_input.value = "";
  }
};

export default OpenAlert;
