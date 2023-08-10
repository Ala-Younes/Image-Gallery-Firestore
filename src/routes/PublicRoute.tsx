import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
interface PublicRouteProps {
  children: React.ReactElement;
}
const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={"/"} replace={true} />;
  }

  return children;
};

export default PublicRoute;
