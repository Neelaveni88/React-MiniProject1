import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";

const services = [
	{
		title: "Consulting",
		description:
			"Expert guidance to plan, architect, and deliver high-quality solutions tailored to your goals.",
	},
	{
		title: "Development",
		description:
			"Full‑stack web and mobile development with a focus on performance, accessibility, and DX.",
	},
	{
		title: "UI/UX Design",
		description:
			"User‑centered design from wireframes to polished interfaces that delight and convert.",
	},
];

const Services = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Container maxWidth="lg">
				<Typography variant="h3" component="h1" align="center" gutterBottom>
					Our Services
				</Typography>
				<Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 5 }}>
					We help you ship faster with confidence.
				</Typography>

				<Grid container spacing={3}>
					{services.map((service) => (
						<Grid key={service.title} item xs={12} sm={6} md={4}>
							<Card elevation={2} sx={{ height: "100%" }}>
								<CardContent>
									<Typography variant="h6" component="h2" gutterBottom>
										{service.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{service.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;


