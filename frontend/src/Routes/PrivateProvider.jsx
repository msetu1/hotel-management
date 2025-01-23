import LoadingSpinner from '../components/Common/LoadingSpinner'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

export default PrivateRoute