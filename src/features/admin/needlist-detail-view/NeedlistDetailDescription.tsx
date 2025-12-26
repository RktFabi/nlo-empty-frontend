import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { FONT_SIZE_BODY_MD, FONT_WEIGHT_BOLD } from '@/constants/design/typography';

type NeedlistDetailDescriptionProps = {
  description: string;
};

export function NeedlistDetailDescription({ description }: NeedlistDetailDescriptionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          fontSize: FONT_SIZE_BODY_MD,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLORS.mutedText,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          mb: 2,
        }}
      >
        Description
      </Typography>
      <Typography sx={{ color: COLORS.primaryText, lineHeight: 1.7 }}>
        {description}
      </Typography>
    </Box>
  );
}
