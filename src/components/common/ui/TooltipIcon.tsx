import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton, Tooltip } from '@mui/material';

type Props = {
    message: string;
};

export const TooltipIcon = ({ message }: Props) => (
    <Tooltip title={message} arrow placement="top">
        <IconButton size="small" sx={{ padding: 0, ml: 1 }}>
            <HelpOutlineIcon sx={{ fontSize: 18, color: '#57636C' }} />
        </IconButton>
    </Tooltip>
);
