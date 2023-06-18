import { createRef, useState } from "react";

import { Chat, ChatList, Preloader } from "./components";
import {
  ChatPage,
  LandingPage,
  LoginPage,
  PeoplePage,
  Register,
} from "./pages";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

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
            path=":id"
            element={<Chat />}
          />
        </Route>
      </Route>
    )
  );
  return (
    <div className="relative h-screen w-screen">
      <div className="z-50">
        <Preloader />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
