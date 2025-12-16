import React, { useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { PopOver, FlexGrid, FlexGridItem, Button, Text, useExtendedTheme, ButtonProps } from "../../../../../export";

import { Image } from "../../../primitives/LayerSelector/primitives/Image";
import { PopOverProps } from "../../../../../v1/components/surfaces/PopOver/Popover";
import BaseLayer from "ol/layer/Base";
import { LayerSelectorProps } from "../../types/map-types";
import { getMeta } from "../../utils/layers";

export interface PresentationalButtonProps extends Pick<ButtonProps, "sx" | "variant" | "color" | "size"> {
	data?: BaseLayer[];
	anchorEl: HTMLButtonElement | null;
	onClickDropdown: ButtonProps["onClick"];
	selectedIndex: number;
}

export interface PresentationalProps extends Pick<ButtonProps, "sx" | "variant" | "color" | "size"> {
	data: BaseLayer[];
	anchorEl: HTMLButtonElement | null;
	onCloseDropdown: PopOverProps["onClose"];
	onListItemClick: (label: string) => void;
	selectedIndex: number;
}


export const LayerSelectorPresentationalButton: React.FC<PresentationalButtonProps> = ({
	data,
	anchorEl,
	onClickDropdown,
	sx,
	selectedIndex,
	variant,
	color,
}) => {
	const extendedTheme = useExtendedTheme();
	const isOpen = Boolean(anchorEl);
	const id = isOpen ? "layer-selector-popover" : undefined;

	if (!data) {
		return null;
	}

	const meta = useMemo(() => getMeta(data[selectedIndex]), [selectedIndex]);

	return (
		<Button
			id="layer-selector"
			size="large"
			aria-describedby={id}
			onClick={onClickDropdown}
			sx={sx}
			variant={variant}
			color={color}
		>
			<Image
				borderColor={extendedTheme.palette.primary.main}
				src={meta.image}
				alt={meta.label}
				title={meta.label}
			/>
			<FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
		</Button>
	);
};
export const LayerSelectorPresentationalPopOverV2: React.FC<PresentationalProps> = ({
	data,
	anchorEl,
	onCloseDropdown,
	selectedIndex,
	onListItemClick,
}) => {
	const extendedTheme = useExtendedTheme();
	const isOpen = Boolean(anchorEl);
	const id = isOpen ? "layer-selector-popover" : undefined;

	return (
		<PopOver
			id={id}
			open={isOpen}
			anchorEl={anchorEl}
			onClose={onCloseDropdown}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "left",
			}}
		>
			{
				<FlexGrid direction="column">
					{data
						.filter(item =>
							item.get("kind")?.startsWith("base"))
						.map((item, index) => {
							const meta = getMeta(item)
							return (
								<FlexGridItem alignContent={"flex-start"} key={meta.label}>
									<Button
										// disabled={item.visible}
										onClick={() => onListItemClick(meta.label)}
										variant="text"
										key={meta.label}
										sx={{ width: "100%", justifyContent: "flex-start" }}
									>
										<Image
											borderColor={index === selectedIndex ? extendedTheme.palette.primary.main : "transparent"}
											src={meta.image}
											role="presentation"
											title={meta.label}
										/>
										<Text textTransform="capitalize" variant="body2">
											{meta.label}
										</Text>
									</Button>
								</FlexGridItem>
							)
						})}
				</FlexGrid>
			}
		</PopOver>
	);
};

export const LayerSelectorV2: React.FC<LayerSelectorProps> = ({ layers, style = {} }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const initialIndex = layers.findIndex(l => getMeta(l)?.visible);
	const [selectedIndex, setSelectedIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		const index = layers.findIndex(l => getMeta(l)?.visible);
		setSelectedIndex(index !== -1 ? index : 0);
	}, [layers]);

	const handleOnListItemClick = (label: string) => {
		layers.forEach((layer, index) => {
			const meta = getMeta(layer);
			if (layer.get("kind") === "overlay-vector") return; // skip overlays
			const visible = meta?.label === label;
			layer.setVisible(visible);
			if (visible) setSelectedIndex(index);
		});


		handleClose();
	};

	if (layers.length <= 1 || selectedIndex === null) return null;

	return <div id="layer-selector" style={{ position: "absolute", bottom: 0, ...style }}>
		<LayerSelectorPresentationalButton anchorEl={anchorEl} onClickDropdown={handleClick} variant="text" data={layers} selectedIndex={selectedIndex} />
		<LayerSelectorPresentationalPopOverV2 anchorEl={anchorEl} onCloseDropdown={handleClose} onListItemClick={handleOnListItemClick} data={layers} selectedIndex={selectedIndex} />
	</div>
}
