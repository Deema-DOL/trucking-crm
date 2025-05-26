import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from '@mui/material';

interface Driver {
  id: string;
  name: string;
  status: 'active' | 'on_break' | 'off_duty';
  phone: string;
  email: string;
  licenseExpiry: string;
  assignedTruck: string;
}

const drivers: Driver[] = [
  {
    id: '1',
    name: 'John Smith',
    status: 'active',
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    licenseExpiry: '2024-12-31',
    assignedTruck: 'TRK-001',
  },
  {
    id: '2',
    name: 'Mike Johnson',
    status: 'on_break',
    phone: '(555) 234-5678',
    email: 'mike.johnson@example.com',
    licenseExpiry: '2025-03-15',
    assignedTruck: 'TRK-002',
  },
  {
    id: '3',
    name: 'Sarah Williams',
    status: 'off_duty',
    phone: '(555) 345-6789',
    email: 'sarah.williams@example.com',
    licenseExpiry: '2024-09-30',
    assignedTruck: 'Unassigned',
  },
];

const getStatusColor = (status: Driver['status']) => {
  switch (status) {
    case 'active':
      return 'success';
    case 'on_break':
      return 'warning';
    case 'off_duty':
      return 'default';
    default:
      return 'default';
  }
};

const getStatusLabel = (status: Driver['status']) => {
  return status.replace('_', ' ').charAt(0).toUpperCase() + status.slice(1);
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const Drivers = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Drivers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Driver</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>License Expiry</TableCell>
              <TableCell>Assigned Truck</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar>{getInitials(driver.name)}</Avatar>
                    <Box>
                      <Typography variant="subtitle2">{driver.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {driver.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={getStatusLabel(driver.status)}
                    color={getStatusColor(driver.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{driver.phone}</TableCell>
                <TableCell>{driver.licenseExpiry}</TableCell>
                <TableCell>{driver.assignedTruck}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Drivers; 