import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  // ...
  title: "cz-blog",
  description: "Vite & Vue powered static site generator.",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  ignoreDeadLinks: true, //解决 VitePress 在构建时不会因为死链接而导致构建失败。
  themeConfig: {
    nav: [
      {
        text: "项目",
        items: [
          { text: "vue-cz-admin", link: "/product/admin/" },
          { text: "cz-express-server", link: "/product/express/" },
        ],
      },
      {
        text: "代码碎片",
        items: [
          { text: "前端", link: "/code/web/base/" },
          { text: "服务端", link: "/code/server/" },
          { text: "工具", link: "/code/plugin/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/cz6c" },
      {
        icon: {
          svg: '<svg t="1689059608174" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1097" width="64" height="64"><title>czadmin</title><path d="M751.76403 496.387836c0 85.235457-127.885157 85.235457-127.885158 0s127.885157-85.235457 127.885158 0m-319.712893 0c0 85.235457-127.885157 85.235457-127.885157 0s127.885157-85.235457 127.885157 0m127.885157 255.770314h-143.870802c-35.328275 0-63.942579 28.614304-63.942579 63.942579s28.614304 63.942579 63.942579 63.942578h143.870802c35.328275 0 63.942579-28.614304 63.942578-63.942578s-28.614304-63.942579-63.942578-63.942579zM11.612697 996.434786a63.894622 63.894622 0 0 0 97.848131 8.744148l116.535349-116.53535a102.467982 102.467982 0 0 0 0-144.989797l-116.535349-116.519364a63.814693 63.814693 0 0 0-51.953345-18.415462 63.958564 63.958564 0 0 0-47.013781 28.77416 65.013617 65.013617 0 0 0 9.607372 81.255032l97.544404 97.528418-95.913868 95.913868h-0.063943a66.58021 66.58021 0 0 0-10.05497 84.244347z" fill="#000000" p-id="1098"></path><path d="M917.982762 51.970929a127.869171 127.869171 0 0 0-159.856446-37.726121 461.889216 461.889216 0 0 0-113.657933 82.485926 416.170273 416.170273 0 0 0-233.230556 0 459.267571 459.267571 0 0 0-113.945675-83.093381 127.869171 127.869171 0 0 0-159.856446 37.710136c-39.340671 52.592771-83.445065 145.501338-99.286839 392.271734a64.038492 64.038492 0 0 0 59.882225 68.002932 64.022507 64.022507 0 0 0 68.002932-59.818282c15.985645-241.543091 58.187746-302.160655 74.173391-323.085864 0 0 95.913868 47.956934 127.885157 127.885157a290.443177 290.443177 0 0 1 319.712893 0c31.971289-79.928223 127.885157-127.885157 127.885157-127.885157 19.358616 25.896744 79.928223 127.885157 79.928224 543.511918a79.97618 79.97618 0 0 1-79.928224 79.928223h-31.971289a64.054478 64.054478 0 0 0-47.573278 20.845281 64.102435 64.102435 0 0 0-16.3693 49.331699A65.860856 65.860856 0 0 0 786.468864 880.043307H815.706608c114.776929 0 207.81338-93.036452 207.81338-207.81338 0-411.006909-56.429326-554.701869-105.52124-620.258998z" fill="#000000" p-id="1099"></path></svg>',
        },
        link: "https://admin.cz6hy9.top",
      },
    ],
    sidebar,
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});
