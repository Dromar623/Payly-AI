import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom Vite plugin to handle /api/send-demo lead emails
function demoEmailPlugin() {
  return {
    name: 'demo-email-receiver',
    configureServer(server) {
      server.middlewares.use('/api/send-demo', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              console.log('\n======================================================');
              console.log('📬 NEW DEMO REQUEST ROUTED TO: Omar@PaylyAi.com');
              console.log('------------------------------------------------------');
              console.log('Full Name:    ', data.fullName);
              console.log('Work Email:   ', data.workEmail);
              console.log('Company:      ', data.companyName);
              console.log('Monthly Spend:', data.monthlySpend);
              console.log('Primary ERP:  ', data.erpSystem);
              console.log('Priorities:   ', data.priorities);
              console.log('Timestamp:    ', data.submittedAt);
              console.log('======================================================\n');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, routedTo: 'Omar@PaylyAi.com' }));
            } catch (err) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), demoEmailPlugin()],
  base: '/',
  server: {
    port: 3000,
    host: true,
  }
})
