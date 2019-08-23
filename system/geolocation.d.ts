/**
 * 地理位置
 * 接口声明: {"name": "system.geolocation"}
 */
declare module '@system.geolocation' {
    /**
     * 获取地理位置
     * @param obj
     */
    export function getLocation(obj: {
        /**
         * 设置超时时间，单位是 ms，默认值为 30000。在权限被系统拒绝或者定位设置不当的情况下，有可能永远不能返回结果，因而需要设置超时。超时后会使用 fail 回调
         */
        timeout?: number,
        /**
         * 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为wgs84
         * [1050+]
         */
        coorType?: string,
        /**
         * 成功回调
         */
        success: (data: {
            /**
             * 经度
             */
            longitude: number
            /**
             * 纬度
             */
            latitude: number
            /**
             * 精确度
             * [1040+]
             */
            accuracy: number
            /**
             * 时间
             * [1040+]
             */
            time: number
        }) => void,
        /**
         * 失败回调
         * 201: 用户拒绝，获取定位权限失败
         * 204: 超时返回
         * 1000: 系统位置开关关闭 [1000+]
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 获取系统当前支持的定位类型
     * [1010+]
     * @param obj
     */
    export function getLocationType(obj: {
        /**
         * 成功回调
         */
        success: (data: {
            /**
             * 支持的类型['gps','network']
             */
            types: string[]
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

    /**
     * 监听地理位置。如果多次调用，仅最后一次调用生效
     * @param obj
     */
    export function subscribe(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为wgs84
         * [1050+]
         */
        coorType?: string,
        /**
         * 每次位置信息发生变化，都会被回调
         */
        callback: (data: {
            /**
             * 经度
             */
            longitude: number
            /**
             * 纬度
             */
            latitude: number
            /**
             * 精确度
             * [1040+]
             */
            accuracy: number
            /**
             * 时间
             * [1040+]
             */
            time: number
        }) => void,
        /**
         * 失败回调，原因可能是用户拒绝
         * 201: 用户拒绝，获取定位权限失败
         * 1000: 系统位置开关关闭 [1000+]
         */
        fail?: (data, code) => void
    }): void

    /**
     * 取消监听地理位置
     */
    export function unsubscribe(): void

    /**
     * 获取支持的坐标系类型
     * @returns 字符串数组。当前支持的坐标系类型，如['wgs84']
     */
    export function getSupportedCoordTypes(): string[]
}