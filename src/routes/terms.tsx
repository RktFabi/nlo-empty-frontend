import { Terms } from '@/pages/legal/Terms';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/terms')({
  component: Terms,
});
