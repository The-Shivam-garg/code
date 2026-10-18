import { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { Route as rootRoute } from "@/routes/__root";

// The production shell owns <html>/<body>; DOM tests mount inside an existing
// document. Keep the real route tree and providers, but omit that document shell.
Reflect.set(rootRoute.options, "shellComponent", ({ children }: { children: ReactNode }) => (
  <>{children}</>
));

function renderAt(path: string) {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  return render(<RouterProvider router={router} />);
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

// Assert only that the router mounts and paints, never page content:
// routes are rewritten as the app is built and this must keep passing.
describe("App routing", () => {
  it("renders the index route", async () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const { container } = renderAt("/");

    await waitFor(() => expect(container.firstChild).not.toBeNull());
    expect(errors).not.toHaveBeenCalled();
  }, 20_000);

  it("renders the not-found route", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);

    const { container } = renderAt("/this-route-does-not-exist");

    await waitFor(() => expect(container.firstChild).not.toBeNull());
  });

  it("renders the about route", async () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const { container } = renderAt("/about");

    await waitFor(() => expect(container.firstChild).not.toBeNull());
    expect(errors).not.toHaveBeenCalled();
  }, 20_000);
});
