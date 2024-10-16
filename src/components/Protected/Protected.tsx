import {Navigate, useLocation} from 'react-router-dom';

interface ProtectedProps {
  isSignedIn: boolean;
  children: any;
}

export const Protected = (props: ProtectedProps) => {
  const location = useLocation();
  if (!props.isSignedIn) {
    return <Navigate to='/sign-in' replace state={{from: location}}/>;
  }
  return props.children;
};
