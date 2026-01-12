import { Box, Typography } from '@mui/material';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import { ReactNode } from 'react';

import { COLORS } from '@/constants/design/colors';
import { FONT_SIZE_BODY_SM, FONT_WEIGHT_SEMIBOLD } from '@/constants/design/typography';

type StatusBadgeProps = {
  status: string,
};

type StatusStyle = {
  color: string,
  bg: string,
  border: string,
  icon: ReactNode,
};

const STATUS_STYLES: Record<string, StatusStyle> = {
  Active: {
    color: COLORS.success,
    bg: COLORS.successTint,
    border: COLORS.successTint,
    icon: (
      <Box
        component="span"
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: COLORS.success,
          display: 'inline-block',
        }}
      />
    ),
  },
  Pending: {
    color: COLORS.accentYellow,
    bg: COLORS.accentYellowTint,
    border: COLORS.accentYellowTint,
    icon: <Clock />,
  },
  Fulfilled: {
    color: COLORS.mutedText,
    bg: COLORS.surface,
    border: COLORS.inputBorder,
    icon: <CheckCircle size={12} />,
  },
  Failed: {
    color: COLORS.error,
    bg: COLORS.errorTint,
    border: COLORS.errorTint,
    icon: <XCircle size={12} />,
  },
};

const FALLBACK_STYLE: StatusStyle = {
  color: COLORS.mutedText,
  bg: COLORS.surface,
  border: COLORS.inputBorder,
  icon: <Clock size={12} />,
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_STYLES[status] ?? FALLBACK_STYLE;
  return (
    <Box
    sx = {{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        bgcolor: config.bg, 
        border: `1px solid ${config.border}`,
        color: config.color,
        fontSize: FONT_SIZE_BODY_SM,
        fontweight: FONT_WEIGHT_SEMIBOLD,
    }}
    >
        {config.icon}
        <Typography
        component="span"
        sx={{
            fontSize: FONT_SIZE_BODY_SM,
            fontWeight: FONT_WEIGHT_SEMIBOLD
        }}>
            {status}
        </Typography>

    </Box>
  )
}
