/**
 * 获取设备信息
 */
declare module '@system.app' {
    /**
     * 获取设备信息
     */
    export function getInfo(): {
        /**
         * 应用包名
         */
        packageName: string,
        /**
         * 应用图标路径
         */
        icon: string,
        /**
         * 应用名称
         */
        name: string,
        /**
         * 应用版本名称
         */
        versionName: string,
        /**
         * 应用版本号
         */
        versionCode: number,
        /**
         * 	log 级别
         */
        logLevel: string,
        /**
         * 应用来源
         */
        source: {
            /**
             * 来源 app 的包名，一级来源
             */
            pckageName: string,
            /**
             * 来源类型，二级来源，值为 shortcut、push、url、barcode、nfc、bluetooth、other
             */
            type: string,
            /**
             * 来源其他信息，与 type 相关，不同的 type，extra 中的字段会不同
             */
            extra: object
        }
    }
}