import { StatusBadge } from '@/components/StatusBadge';
import { createFileRoute } from '@tanstack/react-router';
import { PageBackground } from '@/components/PageBackground';
import { NeedlistTable } from '@/features/admin/needlist-table-view/NeedlistTable';

export const Route = createFileRoute('/admin/needlist-table-view')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
  <div>
    <PageBackground />
    <NeedlistTable />
    Hello "/admin/needlist-table-view"!
  </div>);
}
