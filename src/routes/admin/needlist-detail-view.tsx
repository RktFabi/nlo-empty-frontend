import { createFileRoute } from '@tanstack/react-router';

type ConfirmationSearch = {
  needlistId?: string,
};

export const Route = createFileRoute('/admin/needlist-detail-view')({
  component: RouteComponent,
  validateSearch: (search): ConfirmationSearch => {
    const needlistIdRaw = search.needlistId; // take the needlist ID from the URL query parameters
    // Validate and sanitize the needlist ID (Removing whitespaces)
    const needlistId = typeof needlistIdRaw === 'string' && needlistIdRaw.trim() !== ''
      ? needlistIdRaw.trim()
      : undefined;
    return { needlistId };
  },
});

function RouteComponent() {
  // We get the ID from the validateSearch above
  const searchParams = Route.useSearch();
  // We can get the id by const {id} = Route.useSearch();
  // but we have a rule to never destructure directly from hooks
  return (
    <div>
      <div>Needlist ID: {searchParams.needlistId}</div>
      <div>Hello "/admin/needlist-detail-view"!</div>;
    </div>
  );
}
