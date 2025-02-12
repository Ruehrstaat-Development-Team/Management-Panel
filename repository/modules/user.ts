import HttpFactory from "../factory";
import { toast } from "vue-sonner";

class UserModule extends HttpFactory{
    async getMe(): Promise<User>{
        var res = this.get<User>("/users/@me").catch((error) => {
            if (error != null) {
                console.log(error);
                toast.error("UI0005 Unexpected error");
            }
            throw error;
        });
        return res;
    }
}

export default UserModule;