console.log("set");
//import { ResponseLocalService } from "./local/responseLocalService.js";
//import { RfpLocalService } from "./local/rfpLocalService.js";
//import { UserLocalService } from "./local/userLocalService.js";
import { RfpApiService } from "./api/responseApiService.js";
import { AiResponsesService } from "./api/aiResponseService.js";
import { AiResponsesGenerateService } from "./api/aiResponseGen.js";

export let setResponseService = new RfpApiService();
export let setAiResponseService = new AiResponsesService();
export let setAiResponseGenService = new AiResponsesGenerateService();
//export let userService = new UserLocalService();

