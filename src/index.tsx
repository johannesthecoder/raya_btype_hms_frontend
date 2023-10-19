import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { store } from "./core/store";
import { App } from "./features/app";
import { ComingSoonPage } from "./core/pages/coming_soon_page";
import { PageNotFoundPage } from "./core/pages/page_not_found_page";
import { AppIndexPage } from "./core/pages/app_index_page";
import { AuthHomePage } from "./features/auth/pages";
import { AccommodationPage } from "./features/accommodation/pages";
import { AccommodationDailyPage } from "./features/accommodation/pages/daily";
import { AccommodationDailyHomePage } from "./features/accommodation/pages/daily/home";
import { AccommodationDailyStatusPage } from "./features/accommodation/pages/daily/status";
import { AccommodationBookingsPage } from "./features/accommodation/pages/bookings";
import { AccommodationBookingsHomePage } from "./features/accommodation/pages/bookings/home";
import { AccommodationBookingsReservationPage } from "./features/accommodation/pages/bookings/reservation";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthHomePage />,
    children: [],
  },
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFoundPage />,
    children: [
      { index: true, element: <AppIndexPage /> },
      {
        path: "accommodation",
        element: <AccommodationPage />,
        children: [
          {
            path: "",
            element: <AccommodationDailyPage />,
            children: [
              { index: true, element: <AccommodationDailyHomePage /> },
              { path: "status", element: <AccommodationDailyStatusPage /> },
            ],
          },
          {
            path: "bookings",
            element: <AccommodationBookingsPage />,
            children: [
              { index: true, element: <AccommodationBookingsHomePage /> },
              { path: "reservation", element: <AccommodationBookingsReservationPage /> },
            ],
          },
          { path: "payments", element: <ComingSoonPage pageName="Accommodation - Payments" /> },
          { path: "guests", element: <ComingSoonPage pageName="Accommodation - Guests" /> },
          { path: "rooms", element: <ComingSoonPage pageName="Accommodation - Rooms" /> },
        ],
      },
      { path: "restaurant", element: <ComingSoonPage pageName="Restaurant" /> },
      { path: "inventory", element: <ComingSoonPage pageName="Inventory" /> },
      { path: "report", element: <ComingSoonPage pageName="Report" /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
