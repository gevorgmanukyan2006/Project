import Swal from "sweetalert2";

const OpenAlert = (value) => {
  if (value.name !== "" && value.email !== "") {
    Swal.fire({
      title: "Your request has been successfully submitted",
      text: "Thank you for the contact",
      icon: "success",
    });
  }
};

export default OpenAlert;
