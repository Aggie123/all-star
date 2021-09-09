const menus = [
    { title: '资源利用率监控', path: '/zhenbao/source', key: 'zhenbao_source' },
    {
        title: '内容词典',
        path: '/zhenbao/dictionary',
        key: 'zhenbao_dictionary',
        children: [
            { title: '内容字段', path: '/zhenbao/dictionary/field', key: 'content_field' },
            { title: '漏斗字典', path: '/zhenbao/dictionary/funnel', key: 'funnel_dic' }
        ]
    },
    { title: '资源查询', path: '/zhenbao/query', key: 'zhenbao_query' }
];
export default menus;
