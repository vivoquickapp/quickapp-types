/**
 * 设备信息
 * 接口声明: {"name": "system.device"}
 */
declare module '@system.device' {
    /**
     * 同步方法获取平台版本信息
     * [1030+]
     */
    export let platform: {
        /**
         * 运行平台版本名称
         */
        versionName: string,
        /**
         * 运行平台版本号
         */
        versionCode: number
    };

    /**
     * 获取设备信息
     * @param obj
     */
    export function getInfo(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 设备品牌
             */
            brand: string,
            /**
             * 设备生产商
             */
            manufacturer: string,
            /**
             * 设备型号
             */
            model: string,
            /**
             * 设备代号
             */
            product: string,
            /**
             * 操作系统名称
             */
            osType: string,
            /**
             * 操作系统版本名称
             */
            osVersionName: string,
            /**
             * 操作系统版本号
             */
            osVersionCode: number,
            /**
             * 运行平台版本名称
             */
            platformVersionName: string,
            /**
             * 运行平台版本号
             */
            platformVersionCode: number,
            /**
             * 系统语言
             */
            language: string,
            /**
             * 系统地区
             */
            region: string,
            /**
             * 屏幕宽
             */
            screenWidth: number,
            /**
             * 屏幕高
             */
            screenHeight: number,
            /**
             * 可使用窗口宽度
             * [1030+]
             */
            windowWidth: number,
            /**
             * 可使用窗口高度
             * [1030+]
             */
            windowHeight: number,
            /**
             * 状态栏高度
             * [1030+]
             */
            statusBarHeight: number,
            /**
             * 设备的屏幕密度
             * [1030+]
             */
            screenDensity: number,
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
     * 获取设备信息
     * @param obj
     */
    export function getId(obj: {
        /**
         * 支持 device、mac、user、advertising [1000+]四种类型，可提供一至多个
         */
        type: string[],
        /**
         * 	成功回调
         */
        success?: (data: {
            /**
             * 设备唯一标识。在 Android 上返回 IMEI 或 MEID
             */
            device?: string,
            /**
             * 设备的 mac 地址。在 Android M 及以上返回固定值：02:00:00:00:00:00
             */
            mac?: string,
            /**
             * 用户唯一标识。在 Android 上返回 androidid
             */
            user?: string,
            /**
             * 广告唯一标识
             */
            advertising?: string
        }) => void,
        /**
         * 失败回调
         * 201: 用户拒绝授权
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 获取设备唯一标识。需要用户授权
     * @param obj
     */
    export function getDeviceId(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 设备唯一标识。在 Android 上返回 IMEI 或 MEID
             */
            deviceId: string
        }) => void,
        /**
         * 失败回调
         * 201: 用户拒绝授权
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 获取用户唯一标识
     * [1000+]
     * @param obj
     */
    export function getUserId(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 设备唯一标识。在 Android 上返回 androidid
             */
            userId: string
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
     * 获取广告唯一标识
     * [1000+]
     * @param obj
     */
    export function getAdvertisingId(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 广告唯一标识
             */
            advertisingId: string
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
     * 获取存储空间的总大小
     * [1000+]
     * @param obj
     */
    export function getTotalStorage(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 存储空间的总大小，单位是 Byte。在 Android 上返回的是外部存储的总大小
             */
            totalStorage: number
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
     * 获取存储空间的可用大小
     * [1000+]
     * @param obj
     */
    export function getAvailableStorage(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 存储空间的可用大小，单位是 Byte。在 Android 上返回的是外部存储的可用大小
             */
            availableStorage: number
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
     * 返回 CPU 信息
     * [1000+]
     * @param obj
     * @property success 成功回调
     * @property fail 失败回调
     * @property complete 执行结束后的回调
     */
    export function getCpuInfo(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * CPU 信息。在 Android 上返回的是/proc/cpuinfo 文件的内容
             */
            cpuInfo: string
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
    * 获取设备序列号，[权限要求，获取手机状态]
    * [1040+]
    * @param obj
    */
    export function getSerial(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 设备序列号
             */
            serial: string
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