import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Hero from "../components/Hero";

describe("Hero Component", () => {
  it("h1 to render with correct text", () => {
    render(<Hero />);
    const heading = screen.getByText(
      "I'm a freelance Full-Stack Web Developer with a taste for perfection"
    );
    expect(heading).toBeInTheDocument();
  });

  it("btn to render correctly", () => {
    render(<Hero />);
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument();
  });
});
