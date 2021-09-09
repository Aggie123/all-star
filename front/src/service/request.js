import axios from 'axios';

// http api check response
const checkCode = ({ code, data, msg = '接口请求错误' }) => {
    if (code !== 0) throw new Error(msg);
    return data;
};

// http api
const instance = axios.create({
    baseURL: 'api/',
    timeout: 2000
});
instance.interceptors.request.use(
    (config) => {
        removePendingRequest(config);
        addPendingRequest(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        removePendingRequest(response.config);
        return response;
    },
    (error) => {
        removePendingRequest(error.config || {});
        if (axios.isCancel(error)) {
            return Promise.reject(new Error('重复请求'));
        }
        return Promise.reject(error);
    }
);

export const request = async ({ checkFn = checkCode, defaultValue, ...options }) => {
    try {
        // get 请求通过params发送参数
        if (options.method === 'get' || !options.method) {
            options.params = options.data;
            delete options.data;
        }
        const { data } = await instance(options);
        return checkFn(data);
    } catch (error) {
        console.info(error.message, options);
        // 返回默认值
        return Promise.reject(error);
    }
};

// 检查取消重复的axios请求
// 生成唯一key
const generateReqKey = (config) => {
    const { method, url, params, data } = config;
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
};

const pendingRequest = new Map();
// 添加请求
const addPendingRequest = (config) => {
    const requestKey = generateReqKey(config);
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
        if (!pendingRequest.has(requestKey)) {
            pendingRequest.set(requestKey, cancel);
        }
    });
};

// 删除请求
const removePendingRequest = (config) => {
    const requestKey = generateReqKey(config);
    if (pendingRequest.has(requestKey)) {
        const cancelToken = pendingRequest.get(requestKey);
        cancelToken(requestKey);
        pendingRequest.delete(requestKey);
    }
};

// 清除请求
// const clearPendingRequest = () => {
//     for (const [requestKey, cancel] of pendingRequest) {
//         cancel(requestKey)
//     }
//     pendingRequest.clear()
// }

export default request;
