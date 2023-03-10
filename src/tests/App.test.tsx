import { render } from "@testing-library/react";
import App from "../App";

describe('<App />', () => {
  it('should render the App component', () => {
    const screen = render(<App />);
    expect(screen).not.toBeNull();
    expect(screen.getAllByText(/Vite/i)).not.toBeNull();
  });
});
