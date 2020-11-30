import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello home I'm component/i);
  expect(linkElement).toBeInTheDocument();
});
