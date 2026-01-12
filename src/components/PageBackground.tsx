import { COLORS } from '@/constants/design/colors';
import { Box } from '@mui/material';
import { ReactNode } from 'react';

import {
  TABLE_CONTENT_Z_INDEX,
  TABLE_PAGE_GRADIENT_HEIGHT,
  TABLE_PAGE_GRADIENT_OPACITY,
  TABLE_PAGE_MIN_HEIGHT,
  TABLE_PAGE_PADDING_X_MD,
  TABLE_PAGE_PADDING_X_SM,
  TABLE_PAGE_PADDING_Y,
} from '@/constants/design/table_style';

type PageBackgroundProps = {
  children: ReactNode,
  backgroundColor?: string,
  gradientColor?: string,
};

export function PageBackground({
  children,
  backgroundColor = COLORS.accentBlueTint,
  gradientColor = COLORS.primaryText,
}: PageBackgroundProps) {
  return (
    <Box
      sx={{
        minHeight: TABLE_PAGE_MIN_HEIGHT,
        bgcolor: backgroundColor,
        position: 'relative',
        py: TABLE_PAGE_PADDING_Y,
        px: { xs: TABLE_PAGE_PADDING_X_SM, md: TABLE_PAGE_PADDING_X_MD },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: TABLE_PAGE_GRADIENT_HEIGHT,
          opacity: TABLE_PAGE_GRADIENT_OPACITY,
          pointerEvents: 'none',
          background: `linear-gradient(180deg, ${gradientColor} 0%, transparent 100%)`,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: TABLE_CONTENT_Z_INDEX }}>
        {children}
      </Box>
    </Box>
  );
}
