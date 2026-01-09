import { NeedlistTableView } from '@/pages/admin/NeedlistTableView';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/needlist-table-view')({
  component: NeedlistTableView,
});