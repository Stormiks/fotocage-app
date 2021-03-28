const DefaultLayout = () => import('views/layouts/DefaultLayout/DefaultLayout')
const AuthLayout = () => import('views/layouts/AuthLayout/AuthLayout')
const ErrorLayout = () => import('views/layouts/ErrorLayout/ErrorLayout')

// component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),

export const defaultRoute = {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      path: '',
      name: 'Home',
      redirect: {
        name: 'Gallery-Images'
      },
      component: () => import('views/Home')
    },
    {
      path: 'upload',
      name: 'Upload-Images',
      component: () => import('views/UploadImages/'),
      meta: {
        title: 'Upload'
      }
    },
    {
      path: 'gallery',
      name: 'Gallery-Images',
      component: () => import('views/GalleryImages/'),
      meta: {
        title: 'Gallery'
      }
    },
    {
      path: 'about',
      name: 'About',
      component: () => import('@/views/About'),
      meta: {
        title: 'About'
      }
    }
  ]
}

export const authRoute = {
  path: '/auth',
  name: 'Auth',
  component: AuthLayout,
  children: [
    {
      path: 'registration',
      name: 'Registation',
      component: () => import('views/Registation/'),
      meta: {
        title: 'Registration'
      }
    },
    {
      path: 'login',
      name: 'Login',
      component: () => import('views/Login/'),
      meta: {
        title: 'Login'
      }
    },
    {
      path: '',
      redirect: { name: 'Login' }
    }
  ]
}

export const errorRoute = {
  path: '*',
  component: ErrorLayout,
  children: [
    {
      path: 'page-not-found',
      name: 'Error-Not-Found',
      component: () => import('views/Errors/ErrorNotFound.vue')
    },
    {
      path: '',
      redirect: { name: 'Error-Not-Found' }
    }
  ]
}

export const routes = [
  defaultRoute,
  authRoute,
  errorRoute
]
