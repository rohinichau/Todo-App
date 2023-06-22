import { Navigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";

const ProtectedRoute = (props: any) => {
  if (!props.user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Layout children={props.children} />
    </>
  );
};

export default ProtectedRoute;
