import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
interface PrivateRouteProps {
  children: React.ReactElement;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={"/signup"} replace={true} />;
  }

  return children;
};

export default PrivateRoute;
