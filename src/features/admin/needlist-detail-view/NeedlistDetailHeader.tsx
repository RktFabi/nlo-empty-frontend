import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowLeft, Building, Edit, MapPin, Trash2 } from 'lucide-react';

import { StatusBadge } from '@/components/StatusBadge';
import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';
import {
  FONT_FAMILY_HEADER,
  FONT_SIZE_BODY_MD,
  FONT_SIZE_BODY_SM,
  FONT_SIZE_HEADING_LG,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_MEDIUM,
} from '@/constants/design/typography';
import { Link } from '@tanstack/react-router';

export type NeedHeaderData = {
  id: string,
  title: string,
  org: string,
  orgLocation: string,
  status: string,
};

type NeedlistDetailHeaderProps = {
  data: NeedHeaderData,
};

export function NeedlistDetailHeader({ data }: NeedlistDetailHeaderProps) {
  return (
    <Box sx={{ borderBottom: `1px solid ${COLORS.inputBorder}`, p: { xs: 3, md: 4 } }}>
      <Button
        variant="text"
        startIcon={<ArrowLeft size={18} />}
        component={Link}
        to="/admin/needlist-table-view"
        sx={{
          mb: 3,
          color: COLORS.mutedText,
          fontWeight: FONT_WEIGHT_MEDIUM,
          textTransform: 'none',
          '&:hover': { color: COLORS.primaryText, bgcolor: 'transparent' },
        }}
      >
        Back to List
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
          mb: 2,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              fontSize: FONT_SIZE_BODY_SM,
              color: COLORS.mutedText,
              bgcolor: COLORS.surface,
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              border: `1px solid ${COLORS.inputBorder}`,
              fontFamily: 'monospace',
            }}
          >
            {data.id}
          </Box>
          <StatusBadge status={data.status} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Edit size={16} />}
            sx={{
              height: BUTTON_HEIGHT_SM,
              textTransform: 'none',
              borderColor: COLORS.inputBorder,
              color: COLORS.mutedText,
              fontWeight: FONT_WEIGHT_MEDIUM,
              '&:hover': { borderColor: COLORS.mutedText, bgcolor: COLORS.surface },
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              minWidth: BUTTON_HEIGHT_SM,
              height: BUTTON_HEIGHT_SM,
              borderColor: COLORS.errorTint,
              color: COLORS.error,
              '&:hover': { borderColor: COLORS.error, bgcolor: COLORS.errorTint },
            }}
          >
            <Trash2 size={16} />
          </Button>
        </Stack>
      </Box>

      <Typography
        sx={{
          fontFamily: FONT_FAMILY_HEADER,
          fontSize: FONT_SIZE_HEADING_LG,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLORS.primaryText,
          mb: 1,
        }}
      >
        {data.title}
      </Typography>

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: COLORS.mutedText }}>
        <Building size={16} />
        <Typography sx={{ fontSize: FONT_SIZE_BODY_MD, fontWeight: FONT_WEIGHT_MEDIUM }}>{data.org}</Typography>
        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: COLORS.inputBorder }} />
        <MapPin size={16} />
        <Typography sx={{ fontSize: FONT_SIZE_BODY_MD }}>{data.orgLocation}</Typography>
      </Stack>
    </Box>
  );
}
