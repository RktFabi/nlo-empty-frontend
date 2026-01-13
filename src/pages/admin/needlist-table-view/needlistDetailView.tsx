// import { useQuery } from '@tanstack/react-query';
// import { 
//   Box, Typography, CircularProgress, Stack, Divider, 
//   IconButton, Button, LinearProgress, Chip 
// } from '@mui/material';
// import { X, Building2, MapPin, Calendar, Edit3, Trash2 } from 'lucide-react';
// import { getNeedlist } from '@/services/NeedListApiService';
// import { COLORS } from '@/constants/design/colors';
// import { formatDate } from '@/utils/FormatUtils';

// export function NeedlistDetailView({ needId, onClose }: { needId?: string, onClose: () => void }) {
//   const shouldFetch = Boolean(needId);

//   const needQuery = useQuery({
//     queryKey: ['need-detail', needId],
//     enabled: shouldFetch,
//     queryFn: async () => {
//       if (!needId) throw new Error('Missing ID');
//       return await getNeedlist(needId);
//     },
//   });

//   const getDisplayValue = (val: unknown, fallback: string): string => {
//     if (!val) return fallback;
    
//     if (typeof val === 'object' && val !== null) {
//       const obj = val as Record<string, unknown>;
//       return String(obj.name || obj.id || fallback);
//     }
    
//     return String(val);
//   };

//   if (needQuery.isPending && shouldFetch) return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
//       <CircularProgress size={32} />
//     </Box>
//   );

//   const need = needQuery.data;
//   if (!need) return null;

//   const goal = need.totalPrice || 0;
//   const donated = need.totalDonated || 0;
//   const progress = goal > 0 ? Math.min((donated / goal) * 100, 100) : 0;
//   const isLive = need.needlistStatus === 'Live';

//   return (
//     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'white' }}>
//       {/* Header Section */}
//       <Box sx={{ p: 3, pb: 2 }}>
//         <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
//           <Box>
//             <Stack direction="row" spacing={1} alignItems="center" mb={1}>
//               <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a237e' }}>
//                 {need.needlistName || `List ${need.id.substring(0, 8)}`}
//               </Typography>
//               <Chip 
//                 label={need.needlistStatus} 
//                 size="small"
//                 sx={{ 
//                   bgcolor: isLive ? '#e8f5e9' : '#f5f5f5', 
//                   color: isLive ? '#2e7d32' : '#666',
//                   fontWeight: 'bold', height: 20, fontSize: '0.65rem'
//                 }} 
//               />
//             </Stack>
//             <Stack direction="row" spacing={2} color={COLORS.mutedText}>
//               <Stack direction="row" spacing={0.5} alignItems="center">
//                 <Building2 size={14} />
//                 <Typography variant="caption">{getDisplayValue(need.orgId, 'Safe Haven Youth')}</Typography>
//               </Stack>
//               <Stack direction="row" spacing={0.5} alignItems="center">
//                 <MapPin size={14} />
//                 <Typography variant="caption">{getDisplayValue(need.locationId, 'Toronto, ON')}</Typography>
//               </Stack>
//             </Stack>
//           </Box>
//           <IconButton onClick={onClose}><X size={24} /></IconButton>
//         </Stack>
//       </Box>

//       <Divider />

//       <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
//         {/* Donation Progress Bar */}
//         <Box sx={{ mb: 4 }}>
//           <Stack direction="row" justifyContent="space-between" mb={1}>
//             <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
//               Donation Progress
//             </Typography>
//             <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{progress.toFixed(0)}%</Typography>
//           </Stack>
//           <LinearProgress 
//             variant="determinate" 
//             value={progress} 
//             sx={{ height: 8, borderRadius: 4, bgcolor: '#f0f0f0', '& .MuiLinearProgress-bar': { bgcolor: '#1a237e' } }} 
//           />
//           <Stack direction="row" justifyContent="space-between" mt={1}>
//             <Typography variant="caption">Raised: <b>${donated}</b></Typography>
//             <Typography variant="caption">Goal: <b>${goal}</b></Typography>
//           </Stack>
//         </Box>

//         {/* Quantity Needed Section */}
//         <Box sx={{ mb: 4 }}>
//           <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
//             Quantity Needed
//           </Typography>
//           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//             {need.totalItems || 0} Items
//           </Typography>
//         </Box>

//         <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
//           Description
//         </Typography>
//         <Typography variant="body2" sx={{ mt: 1, color: '#444', lineHeight: 1.6 }}>
//           This NeedList supports essential resources for our community. Your contributions help provide necessary items and support for those in need.
//         </Typography>

//         <Stack direction="row" spacing={3} mt={4} color={COLORS.mutedText}>
//           <Stack direction="row" spacing={1} alignItems="center">
//             <Calendar size={14} />
//             <Typography variant="caption">Posted: {formatDate(need.createdAt)}</Typography>
//           </Stack>
//           <Stack direction="row" spacing={1} alignItems="center">
//             <Calendar size={14} />
//             <Typography variant="caption">Deadline: {formatDate(need.dueDate)}</Typography>
//           </Stack>
//         </Stack>
//       </Box>

//       <Divider />

//       {/* Footer Actions */}
//       <Box sx={{ p: 2, bgcolor: '#ffffff' }}>
//         <Stack direction="row" spacing={2}>
//           <Button 
//             fullWidth 
//             variant="outlined" 
//             startIcon={<Edit3 size={18} />} 
//             onClick={onClose}
//             sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 'bold', py: 1.2 }}
//           >
//             Edit
//           </Button>
//           <Button 
//             fullWidth 
//             variant="contained" 
//             color="error" 
//             startIcon={<Trash2 size={18} />} 
//             onClick={onClose}
//             sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 'bold', py: 1.2, boxShadow: 'none' }}
//           >
//             Delete
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }
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

  const needQuery = useQuery({
    queryKey: ['need-detail', needId],
    enabled: shouldFetch,
    queryFn: async () => {
      if (!needId) throw new Error('Missing ID');
      return await getNeedlist(needId);
    },
  });

  const getDisplayValue = (val: unknown, fallback: string): string => {
    if (!val) return fallback;
    
    if (typeof val === 'object' && val !== null) {
      const obj = val as Record<string, unknown>;
      return String(obj.name || obj.id || fallback);
    }
    
    return String(val);
  };

  if (needQuery.isPending && shouldFetch) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
      <CircularProgress size={32} />
    </Box>
  );

  const need = needQuery.data;
  if (!need) return null;

  const goal = need.totalPrice || 0;
  const donated = need.totalDonated || 0;
  const progress = goal > 0 ? Math.min((donated / goal) * 100, 100) : 0;
  const isLive = need.needlistStatus === 'Live';

  return (
    <Box 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        bgcolor: 'white',
        // FIX: Ensure the sidebar stays within bounds
        width: '100%',
        maxWidth: '100vw', 
        boxSizing: 'border-box',
        overflow: 'hidden' 
      }}
    >
      {/* Header Section */}
      <Box sx={{ p: 3, pb: 2, pr: 2 }}> {/* Tightened right padding */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
          {/* Text Container constrained so it doesn't push the X button out */}
          <Box sx={{ minWidth: 0, flex: 1 }}> 
            <Stack direction="row" spacing={1} alignItems="center" mb={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 800, 
                  color: '#1a237e',
                  lineHeight: 1.2,
                  wordBreak: 'break-word' // Prevents long titles from breaking layout
                }}
              >
                {need.needlistName || `List ${need.id.substring(0, 8)}`}
              </Typography>
              <Chip 
                label={need.needlistStatus} 
                size="small"
                sx={{ 
                  bgcolor: isLive ? '#e8f5e9' : '#f5f5f5', 
                  color: isLive ? '#2e7d32' : '#666',
                  fontWeight: 'bold', height: 20, fontSize: '0.65rem'
                }} 
              />
            </Stack>
            
            <Stack direction="column" spacing={0.5} color={COLORS.mutedText} sx={{ flexWrap: 'wrap' }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Building2 size={14} />
                <Typography variant="caption">{getDisplayValue(need.orgId, 'Safe Haven Youth')}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <MapPin size={14} />
                <Typography variant="caption">{getDisplayValue(need.locationId, 'Toronto, ON')}</Typography>
              </Stack>
            </Stack>
          </Box>

          
          <IconButton onClick={onClose} sx={{ flexShrink: 0, mt: -0.5 }}>
            <X size={24} />
          </IconButton>
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

        <Typography variant="overline" sx={{ fontWeight: 'bold', color: COLORS.mutedText }}>
          Description
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: '#444', lineHeight: 1.6 }}>
          This NeedList supports essential resources for our community. Your contributions help provide necessary items and support for those in need.
        </Typography>

        <Stack direction="row" spacing={3} mt={4} color={COLORS.mutedText} sx={{ flexWrap: 'wrap', gap: 2 }}>
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

      {/* Footer Actions */}
      <Box sx={{ p: 2, bgcolor: '#ffffff' }}>
        <Stack direction="row" spacing={2}>
          <Button 
            fullWidth 
            variant="outlined" 
            startIcon={<Edit3 size={18} />} 
            onClick={onClose}
            sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 'bold', py: 1.2 }}
          >
            Edit
          </Button>
          <Button 
            fullWidth 
            variant="contained" 
            color="error" 
            startIcon={<Trash2 size={18} />} 
            onClick={onClose}
            sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 'bold', py: 1.2, boxShadow: 'none' }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}