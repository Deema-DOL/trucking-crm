import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
} from '@mui/material';
import { useState } from 'react';

interface CompanySettings {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
}

const Settings = () => {
  const [settings, setSettings] = useState<CompanySettings>({
    companyName: 'Your Trucking Company',
    email: 'contact@yourcompany.com',
    phone: '(555) 123-4567',
    address: '123 Main St, City, State 12345',
    notificationsEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleChange = (field: keyof CompanySettings) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to an API
    console.log('Saving settings:', settings);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Settings
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Company Information
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Company Name"
              value={settings.companyName}
              onChange={handleChange('companyName')}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={settings.email}
              onChange={handleChange('email')}
            />
            <TextField
              fullWidth
              label="Phone"
              value={settings.phone}
              onChange={handleChange('phone')}
            />
            <TextField
              fullWidth
              label="Address"
              value={settings.address}
              onChange={handleChange('address')}
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" sx={{ mb: 3 }}>
            Notifications
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notificationsEnabled}
                  onChange={handleChange('notificationsEnabled')}
                />
              }
              label="Enable Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.emailNotifications}
                  onChange={handleChange('emailNotifications')}
                  disabled={!settings.notificationsEnabled}
                />
              }
              label="Email Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.smsNotifications}
                  onChange={handleChange('smsNotifications')}
                  disabled={!settings.notificationsEnabled}
                />
              }
              label="SMS Notifications"
            />
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              size="large"
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings; 