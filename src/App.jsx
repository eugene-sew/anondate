import { createRef, useState } from "react";

import { Chat, ChatList, Preloader } from "./components";
import {
  ChatPage,
  LandingPage,
  LoginPage,
  PeoplePage,
  ProfilePage,
  Register,
} from "./pages";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { AuthProvider } from "./context/auth";
import Await from "./pages/Await";
import Verify from "./pages/Verify";

function App() {
  // routes --done
  // landing --done
  // login --done
  // signup --done
  // main - contains people
  // matches --done
  // chats
  // profile
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route
          path="new"
          element={<Register />}
        />
        <Route
          path="meet"
          element={<MainLayout />}>
          <Route
            index
            element={<PeoplePage />}
          />
        </Route>

        <Route
          path="connects"
          element={<ChatPage />}>
          <Route
            index
            element={<ChatList />}
          />
          <Route
            path=":cid"
            element={<Chat />}
          />
        </Route>

        <Route
          path="profile"
          element={<ProfilePage />}
        />
        <Route
          path="await"
          element={<Await />}
        />

        <Route
          path="verify-mail/:id"
          element={<Verify />}
        />
      </Route>
    )
  );
  return (
    <div className="relative h-screen w-screen ">
      <AuthProvider>
        <div className="z-50">
          <Preloader />
        </div>
        <div className="sm:hidden">
          <RouterProvider router={router} />
        </div>

        <div className="hidden w-full h-full sm:flex flex-col items-center justify-center">
          <h1>Love is meant to be found on the go...</h1>
          <br />
          <h2>
            Connect with <span className="appname">yourba</span> on your phone😉
          </h2>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
