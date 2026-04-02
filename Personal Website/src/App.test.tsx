import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

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
      screen.getByRole("heading", { name: /evidence of rigor/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /selected investigations/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /operational impact/i, level: 2 }),
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
    expect(screen.getByText(/email copied/i)).toBeInTheDocument();
  });

  it("uses the reduced-motion fallback text immediately", () => {
    render(<App />);

    expect(
      screen.getByText("Modeling early deterioration in cardiogenic shock."),
    ).toBeInTheDocument();
  });

  it("updates the active research chapter when a new tab is selected", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole("tab", {
        name: /glycosphingolipid-cytokine axis in hlhs/i,
      }),
    );

    expect(
      screen.getByText(
        /which signaling relationships may help explain severity and progression in hypoplastic left heart syndrome/i,
      ),
    ).toBeInTheDocument();
  });
});
