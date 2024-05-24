import './app-customstyle.css';
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';



// ----------------------------------------------------------------------

export default function AppTopSellingProducts() {

	return (
		<Card sx={{padding: '0 1.5rem'}}>
			<div className="header">
				<div className="header-img">
				<Icon icon="solar:cart-plus-bold" style={{ 
					color: '#1877F2',
					fontSize: '2.8rem'
				 }}/>
				</div>
				<div className="header-text"><h2>Top Selling Products</h2></div>
			</div>
			<div className="top-selling-main">
				<div className="tsm-product">
					<div className="tsm-prod-img"><img src="https://kayadevelopmentserver.com/minimal-app-images/prod-1.svg" alt='Top selling' /></div>
					<div className="tsm-prod-content">
						<div className="tsm-upper">
							<div className="prod-name"><h4>Product 1</h4></div>
							<div className="prod-stats"><p>$37,406<span>(60%)</span></p></div></div>
						<div className="progress bar"><img src="https://kayadevelopmentserver.com/minimal-app-images/progressbar-1.png" alt='Top selling' /></div>
					</div>
				</div>
				<div className="tsm-product">
					<div className="tsm-prod-img"><img src="https://kayadevelopmentserver.com/minimal-app-images/Img_Product_S.2.svg" alt='Top selling' /></div>
					<div className="tsm-prod-content">
						<div className="tsm-upper">
							<div className="prod-name"><h4>Product 2</h4></div>
							<div className="prod-stats"><p>$37,406<span>(60%)</span></p></div></div>
						<div className="progress bar"><img src="https://kayadevelopmentserver.com/minimal-app-images/progressbar-2.png" alt='Top selling' /></div>
					</div>
				</div>
				<div className="tsm-product">
					<div className="tsm-prod-img"><img src="https://kayadevelopmentserver.com/minimal-app-images/Img_Product_S.3.svg" alt='Top selling' /></div>
					<div className="tsm-prod-content">
						<div className="tsm-upper">
							<div className="prod-name"><h4>Product 3</h4></div>
							<div className="prod-stats"><p>$37,406<span>(60%)</span></p></div></div>
						<div className="progress bar"><img src="https://kayadevelopmentserver.com/minimal-app-images/progressbar-3.png" alt='Top selling' /></div>
					</div>
				</div>
				<div className="tsm-product">
					<div className="tsm-prod-img"><img src="https://kayadevelopmentserver.com/minimal-app-images/Img_Product_S.4.svg" alt='Top selling' /></div>
					<div className="tsm-prod-content">
						<div className="tsm-upper">
							<div className="prod-name"><h4>Product 4</h4></div>
							<div className="prod-stats"><p>$37,406<span>(60%)</span></p></div></div>
						<div className="progress bar"><img src="https://kayadevelopmentserver.com/minimal-app-images/progressbar-4.png" alt='Top selling' /></div>
					</div>
				</div>
				<div className="tsm-product">
					<div className="tsm-prod-img"><img src="https://kayadevelopmentserver.com/minimal-app-images/Img_Product_S.5.svg" alt='Top selling' /></div>
					<div className="tsm-prod-content">
						<div className="tsm-upper">
							<div className="prod-name"><h4>Product 5</h4></div>
							<div className="prod-stats"><p>$37,406<span>(60%)</span></p></div></div>
						<div className="progress bar"><img src="https://kayadevelopmentserver.com/minimal-app-images/progressbar-5.png" alt='Top selling' /></div>
					</div>
				</div>



				<div className="tsm-product">
					<div className="tsm-prod-img"><img src="https://kayadevelopmentserver.com/minimal-app-images/Img_Product_S.5.svg" alt='Top selling' /></div>
					<div className="tsm-prod-content">
						<div className="tsm-upper">
							<div className="prod-name"><h4>Product 6</h4></div>
							<div className="prod-stats"><p>$37,406<span>(60%)</span></p></div></div>
						<div className="progress bar"><img src="https://kayadevelopmentserver.com/minimal-app-images/progressbar-3.png" alt='Top selling' /></div>
					</div>
				</div>


			</div>
		</Card>
	);
}

