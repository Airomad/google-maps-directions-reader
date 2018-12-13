/**
 * @TravelModes
 */
import NavigationIcons from './NavigationIcons';

export const DRIVING = 'DRIVING';
export const WALKING = 'WALKING';
export const TRANSIT = 'TRANSIT';
export const BICYCLING = 'BICYCLING';

export const MODE_MAPPING = {
    [DRIVING]: {
        mode: DRIVING,
        name: 'Driving',
        icon: NavigationIcons.directionsDriving,
    },
    [WALKING]: {
        mode: WALKING,
        name: 'Walking',
        icon: NavigationIcons.directionsWalk,
    },
    [TRANSIT]: {
        mode: TRANSIT,
        name: 'Transit',
        icon: NavigationIcons.directionsTransit,
    },
    [BICYCLING]: {
        mode: BICYCLING,
        name: 'Bicycling',
        icon: NavigationIcons.directionsBike,
    }
};

export const DEFAULT_MODES = [DRIVING, WALKING, TRANSIT, BICYCLING];

export default { DRIVING, WALKING, TRANSIT, BICYCLING }

