import { Box, Typography } from '@mui/material';
import { CheckSquare, Code, Database, FileText, Users } from 'lucide-react';
import { PropsWithChildren, ReactNode } from 'react';

import { COLORS } from '@/constants/design/colors';
import {
  FONT_SIZE_BODY_SM,
  FONT_SIZE_HEADING_MD,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
} from '@/constants/design/typography';
import { BACKEND_NOTION_URL, FRONTEND_NOTION_URL } from '@/constants/onboarding';

export function HomeTaskSection() {
  return (
    <Box
      sx={{
        textAlign: 'left',
        bgcolor: COLORS.surface,
        border: `1px solid ${COLORS.inputBorder}`,
        borderRadius: 4,
        p: 4,
        mb: 4,
        boxShadow: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: FONT_SIZE_HEADING_MD,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLORS.primaryText,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <CheckSquare size={22} color={COLORS.accentYellow} />
        Task Description
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TaskItem icon={<Users size={20} color={COLORS.primaryText} />}>
          <Box component="span" sx={{ fontWeight: FONT_WEIGHT_SEMIBOLD }}>
            Team Up:
          </Box>{' '}
          Pair up with at least one person (a team must have one backend and one frontend dev).
        </TaskItem>

        <TaskItem icon={<Code size={20} color={COLORS.primaryText} />}>
          <Box component="span" sx={{ fontWeight: FONT_WEIGHT_SEMIBOLD }}>
            The Build:
          </Box>{' '}
          In this onboarding 1-week dev run, you will implement at least two pages:
          <Box
            component="ul"
            sx={{
              listStyle: 'disc',
              pl: 3,
              mt: 1,
              color: COLORS.mutedText,
              fontSize: FONT_SIZE_BODY_SM,
            }}
          >
            <li>1 page for listing a NL/Transaction/or Tax receipts</li>
            <li>Add a button which will lead to the detail of the clicked item</li>
          </Box>
        </TaskItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
            mt: 3,
          }}
        >
          <ResourceLink href={FRONTEND_NOTION_URL} icon={<FileText size={16} />} title="Frontend Guide" />
          <ResourceLink href={BACKEND_NOTION_URL} icon={<Database size={16} />} title="Backend Guide" />
        </Box>
      </Box>
    </Box>
  );
}

function TaskItem({ icon, children }: PropsWithChildren<{ icon: ReactNode }>) {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
      <Box
        sx={{
          mt: 0.5,
          p: 1,
          bgcolor: COLORS.accentBlueTint,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>

      <Typography component="div" sx={{ color: COLORS.primaryText, lineHeight: 1.6 }}>
        {children}
      </Typography>
    </Box>
  );
}

function ResourceLink({ icon, title, href }: { icon: ReactNode, title: string, href: string }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        borderRadius: 2,
        border: `1px solid ${COLORS.inputBorder}`,
        color: COLORS.primaryText,
        textDecoration: 'none',
        transition: 'border-color 150ms ease, background-color 150ms ease',
        '&:hover': {
          borderColor: COLORS.accentYellow,
          backgroundColor: COLORS.accentYellowTint,
        },
      }}
    >
      <Box
        sx={{
          p: 1,
          borderRadius: 1,
          bgcolor: COLORS.background,
          border: `1px solid ${COLORS.surface}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: FONT_WEIGHT_SEMIBOLD }}>
        {title}{' '}
        <Box component="span" sx={{ color: COLORS.mutedText, fontSize: FONT_SIZE_BODY_SM }}>
          (Notion)
        </Box>
      </Typography>
    </Box>
  );
}
