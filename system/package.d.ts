/**
 * 应用管理
 * 接口声明: {"name": "system.package"}
 */
declare module '@system.package' {
    /**
     * 检测应用是否存在。支持检测原生应用是否已安装
     * @param obj
     * @property package 应用包名
     */
    export function hasInstalled(obj: {
        /**
         * 应用包名
         */
        package: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 应用是否存在
             */
            result: boolean
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
     * 安装应用, 支持安装原生应用
     * @param obj
     */
    export function install(obj: {
        /**
         * 应用包名
         */
        package: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 是否成功发起安装操作
             */
            result: boolean
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