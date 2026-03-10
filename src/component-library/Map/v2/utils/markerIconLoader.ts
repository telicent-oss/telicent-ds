import { ensureFaIconPath } from "../utils/faIconResolver";
import { MarkerFeature } from "../types/markers";

/**
 * Extract unique FontAwesome icons used by markers
 */
export const extractMarkerIcons = (markers: MarkerFeature[]): string[] => {
    const icons = new Set<string>();

    for (const marker of markers) {
        const icon = marker.style?.faIcon;

        if (typeof icon === "string") {
            icons.add(icon);
        }
    }

    return [...icons];
};

/**
 * Ensure all marker icons are loaded before rendering
 */
export const ensureMarkerIconsLoaded = async (
    markers: MarkerFeature[]
): Promise<void> => {
    const icons = extractMarkerIcons(markers);

    if (icons.length === 0) return;

    await Promise.all(icons.map((icon) => ensureFaIconPath(icon)));
};
