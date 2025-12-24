import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/design/colors';

type Props = {
  label: string,
  showRequired?: boolean,
};

export const RequiredLabel = ({ label, showRequired = false }: Props) => (
  <Box display="flex" justifyContent="space-between" width="100%" mb={0.5}>
    <Typography
      variant="body2"
      sx={{
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        color: COLORS.mutedText,
        fontSize: '11.25px',
        letterSpacing: '0.5px',
      }}
    >
      {label} <span style={{ color: COLORS.error }}>*</span>
    </Typography>
    {showRequired && (
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'Helvetica Neue',
          fontWeight: 700,
          color: COLORS.error,
          fontSize: '11.25px',
          letterSpacing: '0.5px',
        }}
      >
        Required
      </Typography>
    )}
  </Box>
);
