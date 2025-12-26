import { NeedlistDetailView } from '@/pages/admin/NeedlistDetailView';
import { createFileRoute } from '@tanstack/react-router';

type ConfirmationSearch = {
  needlistId?: string,
};

export const Route = createFileRoute('/admin/needlist-detail-view')({
  component: NeedlistDetailView,
  validateSearch: (search): ConfirmationSearch => {
    const needlistIdRaw = search.needlistId; // take the needlist ID from the URL query parameters
    // Validate and sanitize the needlist ID (Removing whitespaces)
    const needlistId = typeof needlistIdRaw === 'string' && needlistIdRaw.trim() !== ''
      ? needlistIdRaw.trim()
      : undefined;
    return { needlistId };
  },
});
