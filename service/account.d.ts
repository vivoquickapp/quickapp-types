/**
 * 账号
 * 接口声明: {"name": "service.account"}
 */
declare module '@service.account' {
    /**
     * 获取服务提供商
     * @returns string 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    export function getProvider(): string

    /**
     * 进行OAuth授权
     * @param obj
     */
    export function authorize(obj: {
        /**
         * 授权码模式为 code，简化模式为 token
         */
        type: string,
        /**
         * 重定向 URI
         */
        redirectUri?: string,
        /**
         * 申请的权限范围，目前只支持一种 scope，假如不填则 getProfile 只返回 openId。 scope.baseProfile：获取用户基本信息
         */
        scope?: string,
        /**
         * 可以指定任意值，认证服务器会原封不动地返回这个值
         */
        state?: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 请求时同字段指定的任意值
             */
            state: string,
            /**
             * 授权码模式下可用，返回的授权码
             */
            code: string,
            /**
             * 简化模式下可用，返回的访问令牌
             */
            accessToken: string,
            /**
             * 简化模式下可用，访问令牌类型
             */
            tokenType: string,
            /**
             * 简化模式下可用，访问令牌过期时间，单位为秒，如果通过其他方式设置，则此处可能为空
             */
            expiresIn: number,
            /**
             * 简化模式下可用，实际权限范围，如果与申请一致，则此处可能为空
             */
            scope: string,
        }) => void,
        /**
         * 失败回调
         * 201: 用户拒绝，获取帐号权限失败
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 获得用户基本信息
     * @param obj
     * @property token 访问令牌
     * @property success 成功回调
     * @property fail 失败回调
     * @property complete 执行结束后的回调
     */
    export function getProfile(obj: {
        /**
         * 访问令牌
         */
        token: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 用户的 openid，可能为空
             */
            openid: string,
            /**
             * 用户的 user id，可能为空
             */
            id: string,
            /**
             * 用户在开放平台上的唯一标示符，本字段在满足一定条件下才会返回（需要在厂商的开放平台上额外申请）
             */
            unionid: string,
            /**
             * 用户的昵称，可能为空
             */
            nickname: string,
            /**
             * 用户的头像图片地址，可能为空，按照分辨率组织，当只有一个分辨率时，可以使用 default 对应的图片地址
             */
            avatar: object,
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