import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/needlist-table-view')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/needlist-table-view"!</div>;
}
