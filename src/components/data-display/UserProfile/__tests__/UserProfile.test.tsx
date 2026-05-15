import { render, screen } from "@testing-library/react";
import UserProfile from "../UserProfile";

test("User profile component renders without error", () => {
  render(<UserProfile fullName="Test User">contents go here</UserProfile>);

  expect(screen.getByText("Test User")).toBeVisible();
});
