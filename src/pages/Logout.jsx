import { Link , useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Logout = () => {

  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
      logOut();
      navigate("/");
  }

  return (
    <div className="logout-page">
      <div className="logout-card">
        <div className="logout-icon">
          <LogOut size={32} strokeWidth={2} />
        </div>
        <h2>Ready to Log Out?</h2>
        <p>
          Are you sure you want to log out of your account?
        </p>
        <div className="logout-actions">
          <Link to="/" className="logout-cancel">
            Cancel
          </Link>
          <button className="logout-confirm" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Logout