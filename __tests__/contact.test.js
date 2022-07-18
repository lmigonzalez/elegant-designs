import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Contact from '../components/Contact'

describe("Hero Component", () => {
  it("", () => {
    render(<Contact/>);
    const heading = screen.getByText(
      "I'm a freelance Full-Stack Web Developer with a taste for perfection"
    );
    expect(heading).toBeInTheDocument();
  });

});
