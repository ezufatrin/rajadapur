import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/router/RouterProvider";
import QueryProvider from "./app/providers/QueryProvider";
import AuthProvider from "./app/providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
);
