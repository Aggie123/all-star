import request  from "./request";

export const register = async (data) => await request({
    method: 'post',
    url: '/register',
    data
});

export const getInfo = async (data) => await request({
    method: 'get',
    url: '/helloworld',
    data
});

export const getUser = async (data) => await request({
    method: 'get',
    url: '/user',
    data
});