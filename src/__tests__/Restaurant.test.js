import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/Restaurant";
import MOCK_DATA from "./mocks/resCardData.json";
import "@testing-library/jest-dom";

describe("Restaurant testing", () => {
  it("should render REst component", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = "BOX8 - Desi Meals";
    const nameCheck = screen.getByText(name);
    expect(nameCheck).toBeInTheDocument();
  });

  it("should render withPromoted Label", () => {});
});
