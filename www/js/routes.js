
var routes = [
  {
    path: '/index/',
    url: './index.html',
  },
  {
    path: '/contador/',
    url: './contador.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
