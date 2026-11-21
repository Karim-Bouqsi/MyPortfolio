const http = require('http');
const { handler } = require('./fetchContributions.js');

const ROUTES = ['/.netlify/functions/fetchContributions', '/api/fetchContributions'];

http.createServer((req, res) => {
  const path = req.url.split('?')[0];
  if (!ROUTES.includes(path)) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Not found' }));
  }
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    });
    return res.end();
  }
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 1e6) req.destroy();
  });
  req.on('end', async () => {
    try {
      const result = await handler({ httpMethod: req.method, body, headers: req.headers, path }, {});
      res.writeHead(result.statusCode || 200, result.headers || {});
      res.end(result.body || '');
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal error' }));
    }
  });
}).listen(3000, () => console.log('API on :3000'));
