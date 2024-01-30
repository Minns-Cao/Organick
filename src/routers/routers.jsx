import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

const publicRoutes = [
  {path: '/', component: Home},
  {path: '/shop', component: Shop}
]

//chỉ những người dùng đã xác thực (đăng nhập) mới có thể truy cập được
const privateRoutes =[
  // {path: '/shop', component: Shop}
]

export {publicRoutes, privateRoutes}

