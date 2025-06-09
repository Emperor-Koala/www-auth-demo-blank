import express from 'express';
import { networkInterfaces } from 'os';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/success', (req, res) => {
  console.log('Received success request');
  res.sendStatus(200);
});

app.get('/fail-header', (req, res) => {
  console.log('Received fail request');
  res.set('WWW-Authenticate', 'Basic realm="Realm"');
  res.sendStatus(401);
});

app.get('/fail-no-header', (req, res) => {
  console.log('Received fail request without header');
  res.sendStatus(401);
});

app.listen(PORT, () => {
  const ip = Object.values(networkInterfaces()).flat().find(iface => iface.family === 'IPv4' && !iface.internal);
  if (!ip) {
    console.error('No IPv4 address found for the server.');
    return;
  }
  console.log(`Server is running on http://${ip.address}:${PORT}`);
});