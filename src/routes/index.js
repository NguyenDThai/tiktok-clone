import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/layout';

// Khong can dang nhap
const publicRoutes = [
    { path: routesConfig.home, components: Home },
    { path: routesConfig.following, components: Following },
    { path: routesConfig.profile, components: Profile },
    { path: routesConfig.search, components: Search },
    { path: routesConfig.upload, components: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
