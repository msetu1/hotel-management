import { Navigate } from "react-router-dom";
import { useRole } from "../Hooks/useRole";
import LoadingSpinner from "../components/Common/LoadingSpinner";

const HostRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  if (role === "host") return children;
  return <Navigate to="/dashboard" />;
};
export default HostRoute;
