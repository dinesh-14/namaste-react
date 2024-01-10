import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return <div> Ooops Something went wrong</div>;
};

export default Error;
