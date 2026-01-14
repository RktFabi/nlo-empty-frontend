import { createFileRoute } from '@tanstack/react-router';
import { NeedlistDetailView } from '../../pages/admin/NeedlistDetailView';

type NeedlistDetailSearch = {
  needlistId?: string;
};

export const Route = createFileRoute('/admin/needlist-detail-view')({
  component: NeedlistDetailView,
  validateSearch: (search): NeedlistDetailSearch => {
    const needlistIdRaw = search.needlistId;
    const needlistId = typeof needlistIdRaw === 'string' && needlistIdRaw.trim() !== ''
      ? needlistIdRaw.trim()
      : undefined;
    return { needlistId };
  },
});