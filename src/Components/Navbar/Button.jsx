import Button from "react-bootstrap/Button";

const VariantsExample = () => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: black;
      color: white;
    }

    .btn-xxl {
      padding: 0.6rem 1.5rem;
      font-size: 1rem;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        Login
      </Button>
    </>
  );
};

export default VariantsExample;
