
import { Home } from './Home'
import { Profile } from './Profile'


export const Pages = [
    {
        link: '/',
        exact: true,
        title:'home',
        component: Home,
    },
    {
        link: '/profile',
        title:'profile',
        component: Profile,
    },
]