/**
 * 联系人
 * 接口声明: {"name": "system.contact"}
 */
declare module '@system.contact' {
    /**
     * 选择联系人
     * @param obj
     */
    export function pick(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 联系人名称
             */
            displayName: string,
            /**
             * 电话号码
             */
            number: string
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
     * 获取通讯录所有联系人列表，每次获取都需要用户授权
     * [1050+]
     * @param obj
     */
    export function list(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 联系人列表
             */
            contactList: {
                /**
                 * 联系人名称
                 */
                displayName: string,
                /**
                 * 电话号码
                 */
                number: string
            }[],
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