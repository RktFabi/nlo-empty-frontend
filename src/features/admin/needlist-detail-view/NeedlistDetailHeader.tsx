// Header section for needlist detail view with back link, ID, status, title, org info, and action buttons.
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, MapPin, Pencil, Store, Trash2 } from 'lucide-react';

import { StatusBadge } from '@/components/StatusBadge';
import { COLORS } from '@/constants/design/colors';
import {
  FONT_SIZE_BODY_MD,
  FONT_SIZE_BODY_SM,
  FONT_SIZE_HEADING_MD,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_MEDIUM,
} from '@/constants/design/typography';

type NeedlistDetailHeaderProps = {
  needlistId: string;
  title: string;
  status: string;
  organizationName: string;
  location: string;
};

export function NeedlistDetailHeader({
  needlistId,
  title,
  status,
  organizationName,
  location,
}: NeedlistDetailHeaderProps) {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Back to List Link */}
      <Box
        component={Link}
        to="/admin/needlist-table-view"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          color: COLORS.mutedText,
          textDecoration: 'none',
          fontSize: FONT_SIZE_BODY_SM,
          fontWeight: FONT_WEIGHT_MEDIUM,
          mb: 2,
          '&:hover': {
            color: COLORS.primaryText,
          },
        }}
      >
        <ArrowLeft size={16} />
        Back to List
      </Box>

      {/* Header Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          gap: 2,
        }}
      >
        {/* Left Side: ID, Status, Title, Org Info */}
        <Box>
          {/* ID Badge and Status */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                border: `1px solid ${COLORS.inputBorder}`,
                bgcolor: COLORS.background,
                fontSize: FONT_SIZE_BODY_SM,
                fontWeight: FONT_WEIGHT_MEDIUM,
                color: COLORS.mutedText,
              }}
            >
              {needlistId}
            </Box>
            <StatusBadge status={status} />
          </Box>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: FONT_SIZE_HEADING_MD,
              fontWeight: FONT_WEIGHT_BOLD,
              color: COLORS.primaryText,
              mb: 1,
            }}
          >
            {title}
          </Typography>

          {/* Organization and Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: COLORS.mutedText }}>
              <Store size={14} />
              <Typography sx={{ fontSize: FONT_SIZE_BODY_MD }}>{organizationName}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: COLORS.mutedText }}>
              <MapPin size={14} />
              <Typography sx={{ fontSize: FONT_SIZE_BODY_MD }}>{location}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side: Action Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            title="Edit"
            sx={{
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: 2,
              color: COLORS.mutedText,
              '&:hover': {
                bgcolor: COLORS.surface,
              },
            }}
          >
            <Pencil size={18} />
          </IconButton>
          <IconButton
            title="Delete"
            sx={{
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: 2,
              color: COLORS.error,
              '&:hover': {
                bgcolor: COLORS.errorTint,
              },
            }}
          >
            <Trash2 size={18} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
