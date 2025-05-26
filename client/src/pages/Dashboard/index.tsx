import { Paper, Typography, Box } from '@mui/material';
import {
  LocalShipping as TruckIcon,
  People as DriverIcon,
  Assignment as OrderIcon,
  AttachMoney as RevenueIcon,
} from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <Paper
    sx={{
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    }}
  >
    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: '50%',
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
  </Paper>
);

const Dashboard = () => {
  // Placeholder data - in a real app, this would come from an API
  const stats = [
    {
      title: 'Active Trucks',
      value: 24,
      icon: <TruckIcon sx={{ color: 'white' }} />,
      color: '#1976d2',
    },
    {
      title: 'Available Drivers',
      value: 18,
      icon: <DriverIcon sx={{ color: 'white' }} />,
      color: '#2e7d32',
    },
    {
      title: 'Pending Orders',
      value: 12,
      icon: <OrderIcon sx={{ color: 'white' }} />,
      color: '#ed6c02',
    },
    {
      title: 'Monthly Revenue',
      value: '$45,000',
      icon: <RevenueIcon sx={{ color: 'white' }} />,
      color: '#9c27b0',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(4, 1fr)',
          },
          gap: 3,
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.title}>
            <StatCard {...stat} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard; 