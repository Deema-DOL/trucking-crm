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
} from '@mui/material';

interface Truck {
  id: string;
  number: string;
  model: string;
  year: number;
  status: 'available' | 'in_transit' | 'maintenance';
  driver: string;
  lastMaintenance: string;
}

const trucks: Truck[] = [
  {
    id: '1',
    number: 'TRK-001',
    model: 'Freightliner Cascadia',
    year: 2022,
    status: 'available',
    driver: 'John Smith',
    lastMaintenance: '2024-02-15',
  },
  {
    id: '2',
    number: 'TRK-002',
    model: 'Peterbilt 579',
    year: 2021,
    status: 'in_transit',
    driver: 'Mike Johnson',
    lastMaintenance: '2024-01-20',
  },
  {
    id: '3',
    number: 'TRK-003',
    model: 'Kenworth T680',
    year: 2023,
    status: 'maintenance',
    driver: 'Unassigned',
    lastMaintenance: '2024-03-10',
  },
];

const getStatusColor = (status: Truck['status']) => {
  switch (status) {
    case 'available':
      return 'success';
    case 'in_transit':
      return 'primary';
    case 'maintenance':
      return 'error';
    default:
      return 'default';
  }
};

const getStatusLabel = (status: Truck['status']) => {
  return status.replace('_', ' ').charAt(0).toUpperCase() + status.slice(1);
};

const Trucks = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Trucks
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Truck Number</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Last Maintenance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trucks.map((truck) => (
              <TableRow key={truck.id}>
                <TableCell>{truck.number}</TableCell>
                <TableCell>{truck.model}</TableCell>
                <TableCell>{truck.year}</TableCell>
                <TableCell>
                  <Chip
                    label={getStatusLabel(truck.status)}
                    color={getStatusColor(truck.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{truck.driver}</TableCell>
                <TableCell>{truck.lastMaintenance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Trucks; 