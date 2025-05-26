import { Box, Typography, Paper } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

const revenueData = [
  {
    id: 'revenue',
    data: [
      { x: 'Jan', y: 45000 },
      { x: 'Feb', y: 52000 },
      { x: 'Mar', y: 48000 },
      { x: 'Apr', y: 51000 },
      { x: 'May', y: 55000 },
      { x: 'Jun', y: 58000 },
    ],
  },
];

const deliveryData = [
  { month: 'Jan', completed: 45, pending: 12 },
  { month: 'Feb', completed: 52, pending: 15 },
  { month: 'Mar', completed: 48, pending: 10 },
  { month: 'Apr', completed: 51, pending: 8 },
  { month: 'May', completed: 55, pending: 14 },
  { month: 'Jun', completed: 58, pending: 11 },
];

const truckUtilizationData = [
  { id: 'In Transit', value: 12 },
  { id: 'Available', value: 8 },
  { id: 'Maintenance', value: 4 },
];

const Reports = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Reports
      </Typography>
      <Box sx={{ display: 'grid', gap: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Monthly Revenue
          </Typography>
          <Box sx={{ height: 400 }}>
            <ResponsiveLine
              data={revenueData}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: (value) => `$${value}`,
              }}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                },
              ]}
            />
          </Box>
        </Paper>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 3,
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Delivery Status
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsiveBar
                data={deliveryData}
                keys={['completed', 'pending']}
                indexBy="month"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                legends={[
                  {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                  },
                ]}
              />
            </Box>
          </Paper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Truck Utilization
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsivePie
                data={truckUtilizationData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                  },
                ]}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Reports; 