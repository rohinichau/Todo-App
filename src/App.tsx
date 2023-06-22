import { createContext, useState } from "react";
import Data from "../src/Task.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute/ProtectedRoute";
import Login from "./Components/Login/Login";
import DraggableCard from "./Components/DraggableCard/DraggableCard";

export type TodoContextType = {
  TaskData: [];
  LayoutData: [];
  Employee: [];
};

export const todoContext: any = createContext<TodoContextType | null>(null);

export default function App() {
  const sessionLogIn = sessionStorage.getItem("loggedIn");

  const [user, setUser] = useState(false || !!sessionLogIn);

  const signIn = () => {
    setUser(true);
    sessionStorage.setItem("loggedIn", "true");
  };
  return (
    <todoContext.Provider value={Data}>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute user={user}>
                  <DraggableCard />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login signIn={signIn} />} />
          </Routes>
        </Router>
      </div>
    </todoContext.Provider>
  );
}
