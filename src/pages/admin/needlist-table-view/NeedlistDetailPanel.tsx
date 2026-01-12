import { Drawer, Box } from '@mui/material';
import { NeedlistDetailView } from './needlistDetailView';

type Props = {
  selectedId: string | null;
  onClose: () => void;
};

export function NeedlistDetailPanel({ selectedId, onClose }: Props) {
  return (
    <Drawer 
      anchor="right" 
      open={Boolean(selectedId)} 
      onClose={onClose}
      PaperProps={{ sx: { width: { xs: '100%', sm: 500 } } }}
    >
      <Box sx={{ height: '100%' }}>
        {selectedId && <NeedlistDetailView needId={selectedId} onClose={onClose} />}
      </Box>
    </Drawer>
  );
}