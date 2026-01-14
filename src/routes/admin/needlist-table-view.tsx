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
  name?: string;
  sort?: 'created_at:asc' | 'created_at:desc';
};

export const Route = createFileRoute('/admin/needlist-table-view')({
  component: NeedlistTableView,
  // This validates and sanitizes the ID from the URL
  validateSearch: (search): NeedlistSearch => {
    const needlistIdRaw = search.needlistId;
    const needlistId = typeof needlistIdRaw === 'string' && needlistIdRaw.trim() !== ''
      ? needlistIdRaw.trim()
      : undefined;
    const nameRaw = search.name;
    const name = typeof nameRaw === 'string' && nameRaw.trim() !== ''
      ? nameRaw.trim()
      : undefined;
    const sortRaw = search.sort;
    const sort = sortRaw === 'created_at:asc' || sortRaw === 'created_at:desc'
      ? sortRaw
      : undefined;
    return { needlistId, name, sort };
  },
});
