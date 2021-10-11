import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import theme from 'ui/themes/theme';

export const TextFieldStyled = styled(TextField)`
	.MuiInputBase-root {
		background-color: ${({ theme }) => theme.palette.grey[50]};
	}

	.MuiOutlinedInput-nochedOutline {
		border-color: ${({ theme }) => theme.palette.grey[100]};
	}
`;
