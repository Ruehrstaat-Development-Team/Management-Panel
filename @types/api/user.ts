declare global{
    type User = {
        id: string;
        email: string;
        nickname: string;
        cmdrname: string;
        password: string;
        isadmin: boolean;
        locale: string;
        isbanned: boolean;
        isactivated: boolean;
        activationtoken: string;
        passwordresettoken: string;
        emailchangetoken: string;
        newemail: string;
        discordid: string;
        discordname: string;
    }
}