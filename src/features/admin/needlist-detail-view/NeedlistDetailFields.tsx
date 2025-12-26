import { Box } from '@mui/material';
import { AlertCircle, Calendar, Clock, Package, Tag } from 'lucide-react';

import { DetailField } from '@/components/common/ui/DetailField';
import { COLORS } from '@/constants/design/colors';
import { FONT_WEIGHT_SEMIBOLD } from '@/constants/design/typography';

export type NeedDetailFieldsData = {
  category: string,
  quantity: number,
  urgency: string,
  postedDate: string,
  deadline: string,
};

type NeedlistDetailFieldsProps = {
  data: NeedDetailFieldsData,
};

export function NeedlistDetailFields({ data }: NeedlistDetailFieldsProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 4,
      }}
    >
      <DetailField label="Category" value={data.category} icon={<Tag size={16} color={COLORS.mutedText} />} />
      <DetailField
        label="Quantity Needed"
        value={data.quantity}
        icon={<Package size={16} color={COLORS.mutedText} />}
      />
      <DetailField
        label="Urgency Level"
        value={<UrgencyBadge level={data.urgency} />}
        icon={<AlertCircle size={16} color={COLORS.mutedText} />}
      />
      <DetailField
        label="Date Posted"
        value={data.postedDate}
        icon={<Calendar size={16} color={COLORS.mutedText} />}
      />
      <DetailField label="Deadline" value={data.deadline} icon={<Clock size={16} color={COLORS.mutedText} />} />
    </Box>
  );
}

function UrgencyBadge({ level }: { level: string }) {
  const color = level === 'Urgent' ? COLORS.error : level === 'High' ? COLORS.accentYellow : COLORS.accentBlue;
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', color, fontWeight: FONT_WEIGHT_SEMIBOLD }}>
      {level}
    </Box>
  );
}
