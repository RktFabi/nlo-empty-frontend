import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { COLORS } from '@/constants/design/colors';
import { FONT_SIZE_BODY_SM, FONT_WEIGHT_BOLD, FONT_WEIGHT_SEMIBOLD } from '@/constants/design/typography';

type DetailFieldProps = {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
};

export function DetailField({ label, value, icon }: DetailFieldProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: COLORS.mutedText }}>
        {icon}
        <Typography sx={{ fontSize: FONT_SIZE_BODY_SM, fontWeight: FONT_WEIGHT_BOLD, letterSpacing: '0.08em' }}>
          {label.toUpperCase()}
        </Typography>
      </Box>
      <Typography sx={{ color: COLORS.primaryText, fontWeight: FONT_WEIGHT_SEMIBOLD }}>
        {value}
      </Typography>
    </Box>
  );
}
