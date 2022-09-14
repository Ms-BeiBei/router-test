export const menus = [
    {
        key: 'info',
        type: 'mail',
        name: '首页',
        children: [{
            key: 'manage',
            type: 'aliwangwang',
            name: '系统管理',
            children: []
        }, {
            key: 'position',
            type: 'bulb',
            name: '地理位置',
            children: []
        }]

    },
    {
        key: '/user',
        type: 'dashboard',
        name: '用户',
        children: [{
            key: 'userinfo',
            type: 'dashboard',
            name: '用户中心',
            children: []

        }]
    }



]
