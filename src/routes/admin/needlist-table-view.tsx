// import { NeedlistTableView } from '@/pages/admin/NeedlistTableView';
// import { createFileRoute } from '@tanstack/react-router';

// export const Route = createFileRoute('/admin/needlist-table-view')({
//   component: NeedlistTableView,
// });
import { createFileRoute } from '@tanstack/react-router';
import { NeedlistTableView } from '@/pages/admin/NeedlistTableView';

// Typing the search parameters as recommended
type NeedlistSearch = {
  needlistId?: string;
};

export const Route = createFileRoute('/admin/needlist-table-view')({
  component: NeedlistTableView,
  // This validates and sanitizes the ID from the URL
  validateSearch: (search): NeedlistSearch => {
    const needlistIdRaw = search.needlistId;
    const needlistId = typeof needlistIdRaw === 'string' && needlistIdRaw.trim() !== ''
      ? needlistIdRaw.trim()
      : undefined;
    return { needlistId };
  },
});