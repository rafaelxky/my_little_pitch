console.log("set");
import { ResponseLocalService } from "./local/responseLocalService.js";
import { RfpLocalService } from "./local/rfpLocalService.js";
import { UserLocalService } from "./local/userLocalService.js";

export let responseService = new ResponseLocalService();
export let rfpService = new RfpLocalService();
export let userService = new UserLocalService();

