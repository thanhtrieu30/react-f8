import HeaderOnly from '../components/Layout/HeaderOnly';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// PublicRoutes
const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/profile', components: Profile },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
];

// PrivateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
