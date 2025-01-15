import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthenticationProvider from "./components/context/AuthenticationProvider.jsx";
import { RootLayout } from "./root/RootLayout.jsx";
import Skills from "./page/Skills.jsx";
import Archive from "./page/Archive.jsx";
import Projects from "./page/Projects.jsx";
import AboutMe from "./page/AboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RouterProvider router={router} />
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
