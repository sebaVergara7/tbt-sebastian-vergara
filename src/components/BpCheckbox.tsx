import { Checkbox, CheckboxProps } from "@mui/material";
import { styled } from "@mui/system";

//Customización de Checkbox-----------

//Sin selección
const BpIcon = styled('span')(({ theme }) => ({
	borderRadius: 0,
	transform: "rotate(45deg)",
	width: 12,
	height: 12,
	boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
	'.Mui-focusVisible &': {
		outline: '2px auto rgba(19,124,189,.6)',
		outlineOffset: 2,
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background: 'rgba(206,217,224,.5)',
	},
}));

//Seleccionado
const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: '#ac3051',
	'&:before': {
		display: 'block',
		width: 12,
		height: 12,
		content: '""',
	},
});

//---------------------------------------------------

const BpCheckbox = (props: CheckboxProps) => {
	return (
		<Checkbox
			sx={{
				'&:hover': { bgcolor: 'transparent' },
			}}
			disableRipple
			color="default"
			checkedIcon={<BpCheckedIcon />}
			icon={<BpIcon />}
			inputProps={{ 'aria-label': 'Checkbox demo' }}
			{...props}
		/>
	);
}

export default BpCheckbox;