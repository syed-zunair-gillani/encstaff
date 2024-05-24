import './app-customstyle.css';
import Card from '@mui/material/Card';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';



// ----------------------------------------------------------------------

export default function AppUpcomingRetreats() {

	return (
		<Card>
			<div style={{ padding: '0 1.5rem' }}>
				<h2>Upcoming Retreats</h2>
				<Box className="retreats-wrap" sx={{ mb: 3 }}>
					<div className="retreats-img">
						<img src="https://kayadevelopmentserver.com/minimal-app-images/tr-1.svg" alt='retreats' />
					</div>
					<div className="retreats-content">
						<h3>Advanced Follow Up Retreat</h3>
						<div className="retreats-content-wrap">
							<div className="retreats-inner-text" style={{ marginBottom: '10px' }}>
								<img src="https://kayadevelopmentserver.com/minimal-app-images/primary-shape.svg" alt='retreats' />
								<p style={{ margin:0 }}>Sang Diego, California</p>
							</div>
							<div className="retreats-inner-text" style={{ marginBottom: '10px' }} >
								<img src="https://kayadevelopmentserver.com/minimal-app-images/primary-shape-1.svg" alt='retreats' />
								<p style={{ margin:0 }}>March 29 -April 1, 2024</p>
							</div>
							<div className="retreats-inner-text" style={{ marginBottom: '10px' }}>
								<img src="https://kayadevelopmentserver.com/minimal-app-images/primary-shape-2.svg" alt='retreats' />
								<p style={{ margin:0 }}>1320 booked</p>
							</div>
						</div>

					</div>
				</Box>

				<Divider />

				<Box className="retreats-wrap" sx={{ mt: 3 }}>
					<div className="retreats-img">
						<img src="https://kayadevelopmentserver.com/minimal-app-images/stack (2).svg" alt='retreats' />
					</div>
					<div className="retreats-content">
						<h3>Advanced Follow Up Retreat</h3>
						<div className="retreats-content-wrap">
							<div className="retreats-inner-text" style={{ marginBottom: '10px' }}>
								<img src="https://kayadevelopmentserver.com/minimal-app-images/primary-shape.svg" alt='retreats' />
								<p style={{ margin:0 }}>Sang Diego, California</p>
							</div>
							<div className="retreats-inner-text" style={{ marginBottom: '10px' }}>
								<img src="https://kayadevelopmentserver.com/minimal-app-images/primary-shape-1.svg" alt='retreats' />
								<p style={{ margin:0 }}>March 29 -April 1, 2024</p>
							</div>
							<div className="retreats-inner-text" style={{ marginBottom: '10px' }}>
								<img src="https://kayadevelopmentserver.com/minimal-app-images/primary-shape-2.svg" alt='retreats' />
								<p style={{ margin:0 }}>1320 booked</p>
							</div>
						</div>

					</div>
				</Box>

			</div>
			<div>
				<Pagination
					count={8}
					color="primary"
					sx={{
						mb: 2,
						mt: 3,
						[`& .${paginationClasses.ul}`]: {
							justifyContent: 'center',
						},
					}}
				/>
			</div>
		</Card>
	);
}




