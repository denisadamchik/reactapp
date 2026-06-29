import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("./data/dataStore", () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => [],
  reducers: {
    addToOrder: jest.fn((payload) => ({
      type: "selections/addToOrder",
      payload,
    })),
    useStoreOrderMutation: () => [
      jest.fn(() => ({ unwrap: () => Promise.resolve(1) })),
    ],
    resetSelections: jest.fn(),
  },
  queries: {
    useGetProductsQuery: () => ({
      data: [
        {
          id: 1,
          name: "Kayak",
          category: "Watersports",
          description: "A boat for one person",
          price: 275,
        },
      ],
    }),
  },
}));

test("renders the products page", () => {
  render(
    <MemoryRouter initialEntries={["/products"]}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText("Kayak")).toBeInTheDocument();
  expect(screen.getByText("Watersports")).toBeInTheDocument();
  expect(screen.getByText("(No Selection)")).toBeInTheDocument();
});
