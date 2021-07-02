import type { MenuModule } from '/@/router/types';

const demo: MenuModule = {
  orderNo: 100000,
  menu: {
    path: 'demo',
    name: 'FastCrud',
    children: [
      {
        path: 'crud',
        name: 'crud示例',
      },
      {
        path: 'https://github.com/fast-crud/fs-in-vben-starter',
        name: '源码(github)',
      },
      {
        path: 'https://gitee.com/fast-crud/fs-in-vben-starter',
        name: '源码(gitee)',
      },
      {
        path: 'http://fast-crud.docmirror.cn/',
        name: '文档（document）',
      },
    ],
  },
};
export default demo;