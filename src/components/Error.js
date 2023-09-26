import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="container">
            <div className="error-message">
              <h1>Oops!!! Something went wrong.</h1> <br />
              <h4>{err.status}: {err.statusText}</h4>
            </div>
        </div>
    );
};

export default Error;