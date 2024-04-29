
import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography/Typography';

const Text = Typography

export const H1:React.FC<Pick<TypographyProps, 'children'>> = 
    (props) => <Typography variant="h1" {...props} />;
export const H2:React.FC<Pick<TypographyProps, 'children'>> = 
    (props) => <Typography variant="h2" {...props} />;
export const H3:React.FC<Pick<TypographyProps, 'children'>> = 
    (props) => <Typography variant="h3" {...props} />;
export const H4:React.FC<Pick<TypographyProps, 'children'>> = 
    (props) => <Typography variant="h4" {...props} />;
export const H5:React.FC<Pick<TypographyProps, 'children'>> = 
    (props) => <Typography variant="h5" {...props} />;
export const H6:React.FC<Pick<TypographyProps, 'children'>> = 
    (props) => <Typography variant="h6" {...props} />;

export default Text;
