import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/layout';

// Khong can dang nhap
const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/profile', components: Profile },
    { path: '/upload', components: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
