import { MarkerFeature } from '../types/markers';
/**
 * Extract unique FontAwesome icons used by markers
 */
export declare const extractMarkerIcons: (markers: MarkerFeature[]) => string[];
/**
 * Ensure all marker icons are loaded before rendering
 */
export declare const ensureMarkerIconsLoaded: (markers: MarkerFeature[]) => Promise<void>;
