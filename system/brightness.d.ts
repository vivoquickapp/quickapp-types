/**
 * 屏幕亮度 [1000+]
 * 接口声明: {"name": "system.brightness"}
 */
declare module '@system.brightness' {
    /**
     * 获得当前屏幕亮度值
     * @param obj
     */
    export function getValue(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 屏幕亮度，取值范围 0-255
             */
            value: number
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
     * 设置当前屏幕亮度值
     * @param obj
     */
    export function setValue(obj: {
        /**
         * 屏幕亮度，取值范围0-255
         */
        value: number,
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
     * 获得当前屏幕亮度模式
     * @param obj
     * @property success 成功回调
     * @property fail 失败回调
     * @property complete 执行结束后的回调
     */
    export function getMode(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度
             */
            mode: number
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
     * 设置当前屏幕亮度模式
     * @param obj
     */
    export function setMode(obj: {
        /**
         * 屏幕亮度，取值范围0-255
         */
        mode: number,
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
     * 1060+
     * 设置是否保持常亮状态
     * @param obj
     */
    export function setKeepScreenOn(obj: {
        /**
         * 是否保持屏幕常亮
         */
        keepScreenOn: boolean,
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
}