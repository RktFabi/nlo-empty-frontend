// Content section for needlist detail view showing description, quantity, dates.
import { Box, Divider, Typography } from '@mui/material';
import { Calendar, Clock, Package } from 'lucide-react';

import { COLORS } from '@/constants/design/colors';
import {
  FONT_SIZE_BODY_MD,
  FONT_SIZE_BODY_SM,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
} from '@/constants/design/typography';
import { formatDate, formatNumber } from '@/utils/FormatUtils';

type NeedlistDetailContentProps = {
  description: string;
  quantityNeeded: number;
  datePosted: string;
  deadline: string;
};

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
        <Box sx={{ color: COLORS.mutedText }}>{icon}</Box>
        <Typography
          sx={{
            fontSize: FONT_SIZE_BODY_SM,
            fontWeight: FONT_WEIGHT_SEMIBOLD,
            color: COLORS.mutedText,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: FONT_SIZE_BODY_MD,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLORS.primaryText,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export function NeedlistDetailContent({
  description,
  quantityNeeded,
  datePosted,
  deadline,
}: NeedlistDetailContentProps) {
  return (
    <Box>
      {/* Description Section */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: FONT_SIZE_BODY_SM,
            fontWeight: FONT_WEIGHT_SEMIBOLD,
            color: COLORS.mutedText,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            mb: 1,
          }}
        >
          Description
        </Typography>
        <Typography
          sx={{
            fontSize: FONT_SIZE_BODY_MD,
            color: COLORS.primaryText,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.inputBorder, my: 3 }} />

      {/* Info Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3,
        }}
      >
        <InfoItem
          icon={<Package size={14} />}
          label="Quantity Needed"
          value={formatNumber(quantityNeeded)}
        />
        <InfoItem
          icon={<Calendar size={14} />}
          label="Date Posted"
          value={formatDate(datePosted)}
        />
        <InfoItem
          icon={<Clock size={14} />}
          label="Deadline"
          value={formatDate(deadline)}
        />
      </Box>
    </Box>
  );
}
