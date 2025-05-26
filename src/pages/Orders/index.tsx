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

interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  pickup: {
    location: string;
    date: string;
  };
  delivery: {
    location: string;
    date: string;
  };
  status: 'pending' | 'in_transit' | 'delivered' | 'cancelled';
  driver: string;
  truck: string;
}

const orders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-001',
    customer: 'ABC Logistics',
    pickup: {
      location: 'Los Angeles, CA',
      date: '2024-03-15',
    },
    delivery: {
      location: 'San Francisco, CA',
      date: '2024-03-16',
    },
    status: 'in_transit',
    driver: 'John Smith',
    truck: 'TRK-001',
  },
  {
    id: '2',
    orderNumber: 'ORD-002',
    customer: 'XYZ Shipping',
    pickup: {
      location: 'Seattle, WA',
      date: '2024-03-17',
    },
    delivery: {
      location: 'Portland, OR',
      date: '2024-03-18',
    },
    status: 'pending',
    driver: 'Mike Johnson',
    truck: 'TRK-002',
  },
  {
    id: '3',
    orderNumber: 'ORD-003',
    customer: 'Fast Freight Inc',
    pickup: {
      location: 'Denver, CO',
      date: '2024-03-14',
    },
    delivery: {
      location: 'Phoenix, AZ',
      date: '2024-03-15',
    },
    status: 'delivered',
    driver: 'Sarah Williams',
    truck: 'TRK-003',
  },
];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'pending':
      return 'warning';
    case 'in_transit':
      return 'primary';
    case 'delivered':
      return 'success';
    case 'cancelled':
      return 'error';
    default:
      return 'default';
  }
};

const getStatusLabel = (status: Order['status']) => {
  return status.replace('_', ' ').charAt(0).toUpperCase() + status.slice(1);
};

const Orders = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Pickup</TableCell>
              <TableCell>Delivery</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Truck</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <Typography variant="body2">{order.pickup.location}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {order.pickup.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{order.delivery.location}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {order.delivery.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={getStatusLabel(order.status)}
                    color={getStatusColor(order.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{order.driver}</TableCell>
                <TableCell>{order.truck}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders; 