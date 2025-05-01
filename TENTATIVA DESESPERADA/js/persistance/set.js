console.log("set");
import { ResponseLocalService } from "./local/responseLocalService.js";
import { RfpLocalService } from "./local/rfpLocalService.js";
import { UserLocalService } from "./local/userLocalService.js";
import { RfpApiService } from "./api/responseApiService.js";

export let responseService = new RfpApiService();
export let userService = new UserLocalService();

