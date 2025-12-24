import { COLORS } from '@/constants/design/colors';
import { SvgIcon, SvgIconProps } from '@mui/material';

type NloBeautifulHeartProps = SvgIconProps & {
  size?: string | number, // e.g. '1em', 18, 24
};

export const NloBeautifulHeart = ({
  size = '0.95em',
  sx,
  ...props
}: NloBeautifulHeartProps) => (
  <SvgIcon
    viewBox="0 0 24 24"
    {...props}
    sx={{
      fontSize: size,
      position: 'relative',
      top: '4px', // optical baseline correction
      ...sx,
    }}
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
         2 5.42 4.42 3 7.5 3
         9.24 3 10.91 3.81 12 5.08
         13.09 3.81 14.76 3 16.5 3
         19.58 3 22 5.42 22 8.5
         22 12.28 18.6 15.36 13.45 20.04
         L12 21.35z"
      fill={COLORS.accentYellow}
    />
  </SvgIcon>
);
