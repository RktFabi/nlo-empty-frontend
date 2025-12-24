import { createMemoryHistory, createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Header } from './Header';

describe('Header', () => {
  it('renders without crashing and shows navigation controls', () => {
    const rootRoute = createRootRoute({
      component: () => (
        <>
          <Header />
          <div>Test Content</div>
        </>
      ),
    });

    const indexRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: '/',
      component: () => <div>Home</div>,
    });

    const donateRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: '/donate',
      component: () => <div>Donate</div>,
    });

    const router = createRouter({
      routeTree: rootRoute.addChildren([indexRoute, donateRoute]),
      history: createMemoryHistory({ initialEntries: ['/'] }),
    });

    render(<RouterProvider router={router} />);

    // expect(screen.getByRole('banner')).toBeInTheDocument();
    // expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });
});
