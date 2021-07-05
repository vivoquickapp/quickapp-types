/**
 * 网络状态
 * 接口声明: {"name": "system.network"}
 */
declare module '@system.network' {
    /**
     * 获取网络类型
     * @param obj
     */
    export function getType(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 是否按照流量计费
             */
            metered: boolean,
            /**
             * 网络类型，可能的值为 2g，3g，4g，wifi，none，5g(1070+)，bluetooth(1070+)，others(1070+)
             */
            type: string
        }) => void,
        /**
         * 失败回调，可能是因为缺乏权限
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 监听网络连接状态。如果多次调用，仅最后一次调用生效
     * @param obj
     */
    export function subscribe(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 每次网络发生变化，都会被回调
         */
        callback?: (data: {
            /**
             * 是否按照流量计费
             */
            metered: boolean,
            /**
             * 网络类型，可能的值为 2g，3g，4g，wifi，none，5g(1070+)，bluetooth(1070+)，others(1070+)
             */
            type: string
        }) => void,
        /**
         * 失败回调，可能是因为缺乏权限
         */
        fail?: (data, code) => void
    }): void

    /**
     * 取消监听网络连接状态
     */
    export function unsubscribe(): void

    /**
     * 获取Sim卡的运营商信息，需要电话权限
     * [1070+]
     * @param obj 
     */
    export function getSimOperators(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * SIM卡列表信息
             */
            operators: []
            /**
             * Sim卡数量
             */
            size: string
        }) => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void
}