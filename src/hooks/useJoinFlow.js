import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useJoinFlow = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleJoinClick = (plan = '') => {
    const joinPath = plan ? `/join?plan=${encodeURIComponent(plan)}` : '/join';

    if (isAuthenticated) {
      navigate(joinPath);
    } else {
      navigate(`/login?redirect=${encodeURIComponent(joinPath)}`);
    }
  };

  return { handleJoinClick };
};

export default useJoinFlow;
