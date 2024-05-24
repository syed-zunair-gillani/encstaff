import Link from 'next/link';
import './app-customstyle.css';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';



// ----------------------------------------------------------------------

export default function AppQuickAccess() {
	const theme = useTheme();
	console.log("🚀 ~ AppQuickAccess ~ theme:", theme)
	return (
		<Card sx={{
			padding: '0 1.5rem',
		}}>
			<h3>Quick Access</h3>
			<Box sx={{
				display: 'flex',
				gap: '1rem',
				flexWrap: 'wrap',
				justifyContent: 'space-between'
			}}>
			<div className="quick-access-wrap">
				<Link href="https://app.asana.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-asana.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Asana</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
			<Link href="https://www.adp.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-ADP.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>ADP</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
				<Link href="https://www.bamboohr.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-Bamboo-HR.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Bamboo HR</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
				<Link href="https://www.egnyte.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-egnyte.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Egnyte</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
				<Link href="https://www.smartsheet.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-smartsheet.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Smartsheet</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
				<Link href="https://www.smartsheet.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-zoom.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Smartsheet</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
				<Link href="https://slack.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-slack.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Slack</h4>
				</Link>
			</div>
			<div className="quick-access-wrap">
				<Link href="https://drjoedispenza.com/" target="_blank" >
				<img src="https://kayadevelopmentserver.com/minimal-app-images/ic-unlimited.svg" alt='Logo1' className="accessimage" />
				<h4 style={{
					color: theme.palette.mode === 'dark' && '#fff'
				}}>Unlimited</h4>
				</Link>
			</div>
			</Box>
		</Card>
	);
}




