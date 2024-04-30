import { LoadingButton, LoadingButtonProps } from '@mui/lab';
/* 
Hm.

// import ButtonBase from "../../../components/TeliButton/TeliButtonBase";
!CRITICAL TODO onboard with MUI's createTheme & Tailwind
WHY 
    TeliButtonBase has `teliButton.css`. Ash is not sure if this vibes with MUI. 
    Ash needs confidence that these can be combined without interfering
    with theme controls.
    Can we make them play nice.
    
    Alecs says:
    - wait until we get design tokens
    - Then we can ignore tailwind's opinion
    - We will need to decide; Do we override MUI or do we bend/control/parametize MUI
*/


type NewButtonProps = Omit<LoadingButtonProps, 'color'> & { 
    purpose?: LoadingButtonProps['color'] // Risky alias.
};

export const Button:React.FC<NewButtonProps> = ({ purpose, ...props }) => <LoadingButton {...props} color={purpose} />