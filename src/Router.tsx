import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Protected from '@/components/Protected';
import { HomePage } from '@/pages/Home.page';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import TaskPage from '@/pages/TaskPage';
import {useState} from "react";


export function Router() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/tasks',
      element: (
          <Protected isSignedIn={isSignedIn}>
            <TaskPage />
          </Protected>
      ),
    },
    {
      path: '/sign-up',
      element: <SignUpPage />,
    },
    {
      path: '/sign-in',
      element: <SignInPage setIsSignedIn={setIsSignedIn} />,
    },
  ]);
  return <RouterProvider router={router} />;
}
