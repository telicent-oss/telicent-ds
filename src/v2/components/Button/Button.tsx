/* 
Hm.

// import ButtonBase from "../../../components/TeliButton/TeliButtonBase";
!CRITICAL TODO onboard with MUI's createTheme & Tailwind 
WHY TeliButtonBase has teliButton.css. Ash is niot sure if this vibes with MUI. 
    Ash needs confidence that these can be combined without interfering
    with theme controls.
*/
import { ButtonProps, Button as ButtonRaw } from "@mui/material";


type NewButtonProps = Omit<ButtonProps, 'color'> & { 
    purpose?: ButtonProps['color'] // Risky alias.
};

export const Button:React.FC<NewButtonProps> = ({ purpose, ...props }) => <ButtonRaw {...props} color={purpose} />