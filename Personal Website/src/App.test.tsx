import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { getCenteredCardIndex } from "./utils/carousel";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => false,
  }),
});

Object.defineProperty(window.HTMLElement.prototype, "scrollTo", {
  writable: true,
  value: () => undefined,
});

describe("App", () => {
  it("renders all major sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /arnav mana/i, level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /things i’ve earned/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /where i do the work/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /what i built from nothing/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("copies email and shows a toast", async () => {
    const user = userEvent.setup();
    const clipboard = {
      writeText: vi.fn().mockResolvedValue(undefined),
    };

    Object.defineProperty(navigator, "clipboard", {
      value: clipboard,
      configurable: true,
    });

    render(<App />);
    await user.click(screen.getByRole("button", { name: "Copy email" }));

    expect(clipboard.writeText).toHaveBeenCalledWith("arnavmana.me@gmail.com");
    expect(screen.getByText(/email copied to clipboard/i)).toBeInTheDocument();
  });

  it("uses the reduced-motion fallback text immediately", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Redefining the predictive architecture of lactate in cardiogenic shock.",
      ),
    ).toBeInTheDocument();
  });
});

describe("getCenteredCardIndex", () => {
  it("returns the card closest to the container center", () => {
    const index = getCenteredCardIndex(
      [
        { left: 0, width: 200 },
        { left: 220, width: 200 },
        { left: 440, width: 200 },
      ],
      0,
      500,
    );

    expect(index).toBe(1);
  });
});
