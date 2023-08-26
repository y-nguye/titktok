// file này mang ý nghĩa giúp cho các dự án có rất nhiều routes sẽ dễ kiểm soát tại đây

import configs from '../configs';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

// Không cần đăng nhập vẫn có thể xem
const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.upload, component: Upload },
];

// Phải đăng nhập mới có thể xem
const privateRoutes = [];

export { publicRoutes, privateRoutes };
