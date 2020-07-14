import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5bbc6f0a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _096806a9 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _e5c36b3e = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages_detail__id" */))
const _0f10fa56 = () => interopDefault(import('..\\pages\\admin\\editor\\_id.vue' /* webpackChunkName: "pages_admin_editor__id" */))
const _7f84ce2a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _109246df = () => interopDefault(import('..\\pages\\index\\_type.vue' /* webpackChunkName: "pages_index__type" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _5bbc6f0a,
      name: "admin"
    }, {
      path: "/detail",
      component: _096806a9,
      name: "detail",
      children: [{
        path: ":id?",
        component: _e5c36b3e,
        name: "detail-id"
      }]
    }, {
      path: "/admin/editor/:id?",
      component: _0f10fa56,
      name: "admin-editor-id"
    }, {
      path: "/",
      component: _7f84ce2a,
      name: "index",
      children: [{
        path: ":type?",
        component: _109246df,
        name: "index-type"
      }]
    }],

    fallback: false
  })
}
