/**
 * 交换数据 [1050+]
 * 提供了一个不同快应用间数据交互的方式。快应用可以利用它发布数据，或从其他快应用获取数据。 数据交互有两个数据空间，分别是应用空间（application）和全局空间（global）。 application：数据发布在应用空间，读取时需同时指定发布方的包名和签名，并且需要发布方授权。 global：数据发布在全局空间，多个应用的写操作会相互覆盖，读取时不能指定发布方的包名和签名，不需要发布方授权。 备注：global 数据仅支持 set、get 操作，remove、clear、grantPermission、revokePermission 等操作均不支持
 * 接口声明: { "name": "service.exchange" }
 */
declare module '@service.exchange' {
    /**
     * 读取数据
     * @param obj
     */
    export function get(obj: {
        /**
         * 数据发布方的包名，scope 为 application 时必须提供，为 global 时必须为空
         */
        package?: string,
        /**
         * 数据发布方签名的 SHA-256，scope 为 application 时必须提供，为 global 时必须为空
         */
        sign?: string,
        /**
         * 数据发布的空间类型，支持 application 和 global，默认为 application
         */
        scope?: string,
        /**
         * 数据的 key
         */
        key: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 数据的值
             */
            value: string
        }) => void,
        /**
         * 失败回调
         * 202: 参数错误
         * 1000: 没有权限
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 发布数据到快应用平台
     * @param obj
     */
    export function set(obj: {
        /**
         * 数据的 key
         */
        key: string,
        /**
         * 数据的值
         */
        value: string,
        /**
         * 数据发布的空间类型，支持 application 和 global，默认为 application
         */
        scope?: string,
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         * 202: 参数错误
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 从快应用平台删除数据
     * @param obj
     */
    export function remove(obj: {
        /**
         * 数据的 key
         */
        key: string,
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         * 202: 参数错误
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 从快应用平台清除数据
     * @param obj
     */
    export function clear(obj: {
        /**
         * 成功回调
         */
        success?: () => void,
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
     * 授权应用获取数据。同签名的应用不用授权，默认有读取权限
     * @param obj
     */
    export function grantPermission(obj: {
        /**
         * 授权应用的包名
         */
        package: string,
        /**
         * 授权应用的签名 SHA-256
         */
        sign: string,
        /**
         * 数据的 key。如果为空，则授权当前所有 key 的读取权限
         */
        key?: string,
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         * 202: 参数错误
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 取消授权应用获取数据。不能取消同签名应用的读取授权
     * @param obj
     */
    export function revokePermission(obj: {
        /**
         * 授权应用的包名
         */
        package: string,
        /**
         * 数据的 key。如果为空，则授权当前所有 key 的读取权限
         */
        key?: string,
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         * 202: 参数错误
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void
}