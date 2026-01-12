import { useQuery } from '@tanstack/react-query';
import { 
  Box, Typography, CircularProgress, Stack, Divider, 
  IconButton, Button, LinearProgress, Chip 
} from '@mui/material';
import { X, Building2, MapPin, Calendar, Edit3, Trash2 } from 'lucide-react';
import { getNeedlist } from '@/services/NeedListApiService';
import { COLORS } from '@/constants/design/colors';
import { formatDate } from '@/utils/FormatUtils';

export function NeedlistDetailView({ needId, onClose }: { needId?: string, onClose: () => void }) {
  const shouldFetch = Boolean(needId);

  const { data: need, isPending } = useQuery({
    queryKey: ['need-detail', needId],
    enabled: shouldFetch,
    queryFn: async () => {
      if (!needId) throw new Error('Missing ID');
      return await getNeedlist(needId);
    },
  });

  if (isPending && shouldFetch) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
      <CircularProgress size={32} />
    </Box>
  );

  if (!need) return null;

  // Progress Calculation logic
  const goal = need.totalPrice || 0;
  const donated = need.totalDonated || 0;
  const progress = goal > 0 ? Math.min((donated / goal) * 100, 100) : 0;
  const isLive = need.needlistStatus === 'Live';

  // Helper to extract IDs/Names from objects safely as requested
  const getDisplayValue = (val: any, fallback: string) => {
    if (!val) return fallback;
    if (typeof val === 'object') {
      return (val as any).name || (val as any).id || fallback;
    }
    return String(val);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'white' }}>
      {/* Header Section */}
      <Box sx={{ p: 3, pb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a237e' }}>
                {/* Fallback if name is missing */}
                {need.needlistName || `List ${need.id.substring(0, 8)}`}
              </Typography>
              <Chip 
                label={need.needlistStatus} 
                size="small"
                sx={{ 
                  bgcolor: isLive ? '#e8f5e9' : '#f5f5f5', 
                  color: isLive ? '#2e7d32' : '#666',
                  fontWeight: 'bold',
                  height: 20,
                  fontSize: '0.65rem'
                }} 
              />
            </Stack>
            
            <Stack direction="row" spacing={2} color={COLORS.mutedText}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Building2 size={14} />
                <Typography variant="caption">
                  {getDisplayValue(need.orgId, 'Safe Haven Youth')}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <MapPin size={14} />
                <Typography variant="caption">
                  {getDisplayValue(need.locationId, 'Toronto, ON')}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <IconButton onClick={onClose}><X size={24} /></IconButton>
        </Stack>
      </Box>

      <Divider />

      <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        {/* Donation Progress Bar */}
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
              Donation Progress
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{progress.toFixed(0)}%</Typography>
          </Stack>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ height: 8, borderRadius: 4, bgcolor: '#f0f0f0', '& .MuiLinearProgress-bar': { bgcolor: '#1a237e' } }} 
          />
          <Stack direction="row" justifyContent="space-between" mt={1}>
            <Typography variant="caption">Raised: <b>${donated}</b></Typography>
            <Typography variant="caption">Goal: <b>${goal}</b></Typography>
          </Stack>
        </Box>

        {/* Quantity Needed Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
            Quantity Needed
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {need.totalItems || 0} Items
          </Typography>
        </Box>

        {/* Generic Description placeholder */}
        <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
          Description
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: '#444', lineHeight: 1.6 }}>
          {/* Defaulting to placeholder as confirmed by teammate */}
          This NeedList supports essential resources for our community. Your contributions help provide necessary items and support for those in need.
        </Typography>

        <Stack direction="row" spacing={3} mt={4} color={COLORS.mutedText}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Calendar size={14} />
            <Typography variant="caption">Posted: {formatDate(need.createdAt)}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Calendar size={14} />
            <Typography variant="caption">Deadline: {formatDate(need.dueDate)}</Typography>
          </Stack>
        </Stack>
      </Box>

      <Divider />

      <Box sx={{ p: 2, bgcolor: '#ffffff' }}>
        <Stack direction="row" spacing={2}>
          <Button fullWidth variant="outlined" startIcon={<Edit3 size={18} />} sx={{ borderRadius: '12px', fontWeight: 'bold' }}>
            Edit
          </Button>
          <Button fullWidth variant="contained" color="error" startIcon={<Trash2 size={18} />} sx={{ borderRadius: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
            Delete
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}