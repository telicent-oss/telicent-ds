import MUIMenu from "@mui/material/Menu";
import MUIMenuItem from "@mui/material/MenuItem";
import MUIListItemIcon from "@mui/material/ListItemIcon";
import MUITypography from "@mui/material/Typography";
import MUIListItemText from "@mui/material/ListItemText";
import { SvgIconProps } from '@mui/material/SvgIcon';


import React, { useState } from "react";
import { FlexBox, useExtendedTheme } from "../../../../export";
import IconButton from "../../inputs/Button/IconButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownArrow from "../FontAwesomeIcons/DownArrowIcon";

export interface DropdownButtonProps {
	ariaLabel: string;
	id: string;
	menuItems: DropDownButtonMenuItemProps[];
}

export interface DropDownButtonMenuItemProps {
	id: string;
	onClick: (val: string) => void;
	faIcon?: IconProp;
	icon?: React.ElementType<SvgIconProps>;
	value: string;
	default?: boolean;
	selected: boolean
}


const DropdownButtonMenuItem: React.FC<DropDownButtonMenuItemProps> = ({ onClick, faIcon, id, icon, value, selected = false }) => {
	const Icon = icon;
	const theme = useExtendedTheme();

	return <MUIMenuItem
		onClick={onClick}
		id={id}
		selected={selected}
		sx={{
			display: "flex",
			alignItems: "center",
			marginX: 1,
			borderRadius: "4px",
			border: "1px solid rgba(0, 0, 0, 0)",
			"&.Mui-selected.Mui-selected": {
				backgroundColor:
					theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
			},
			"&.Mui-selected.Mui-selected:hover": {
				backgroundColor:
					theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
			},
			"&:hover": {
				backgroundColor:
					theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
				border: `1px solid ${theme.palette.primary.main}`,
			},
		}}>
		{
			(Icon || faIcon) && <MUIListItemIcon>
				{Icon && <Icon color={selected ? "primary" : "inherit"} />}
				{faIcon && <FontAwesomeIcon icon={faIcon} fontSize="medium" color={selected ? theme.palette.primary.main : "white"} />}
			</MUIListItemIcon>
		}
		<MUIListItemText>
			<MUITypography
				variant="h1"
				sx={{
					marginTop: 0.5,
					fontFamily: "Figtree",
					fontSize: 16,
					fontWeight: 400,
					color: `${selected ? theme.palette.primary.main : "primary"}`,
					display: "flex",
					alignItems: "center",
				}}
			>
				{value}
			</MUITypography>
		</MUIListItemText>
	</MUIMenuItem >
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ ariaLabel, id, menuItems }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems.find((menuItem) => menuItem.default) ?? menuItems[0]);
	const theme = useExtendedTheme();
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<FlexBox>
			<IconButton
				aria-label={ariaLabel}
				aria-controls={open ? id : undefined}
				aria-haspopup="true"
				sx={{
					border: 0,
					'&:hover': {
						backgroundColor: 'rgba(255, 255, 255, 0.08)',
					},
				}}
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				color="primary"
			>
				{selectedMenuItem.icon && <selectedMenuItem.icon color="primary" className="mr-2" />}
				{selectedMenuItem.faIcon && <FontAwesomeIcon icon={selectedMenuItem.faIcon} fontSize="medium" color={theme.palette.primary.main ?? "white"} className="mr-2" />}
				{<DownArrow />}
			</IconButton>
			<MUIMenu
				id={id}
				anchorEl={anchorEl}
				open={open}
				transformOrigin={{ vertical: -20, horizontal: 'left' }}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": id,
				}}
				sx={{
					"& .MuiPaper-root": {
						backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
					},
				}}
			>
				{menuItems.map((menuItem: DropDownButtonMenuItemProps, index: number) => (
					<DropdownButtonMenuItem
						id={`${id}-item-${index}`}
						key={`${id}-item-${index}`}
						onClick={() => {
							menuItem.onClick(menuItem.value);
							setSelectedMenuItem(menuItem);
							handleClose();
						}}
						icon={menuItem?.icon}
						faIcon={menuItem?.faIcon}
						value={menuItem.value}
						selected={menuItem.value === selectedMenuItem.value}
					/>
				))}
			</MUIMenu>
		</FlexBox>
	)
}

export default DropdownButton;
