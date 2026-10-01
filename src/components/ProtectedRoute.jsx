
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const { currentUser } = useAuth();

  return (
    <div>
        {currentUser ? children : <Navigate to="/signin"/>}
    </div>
  )
}

export default ProtectedRoute;