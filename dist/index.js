"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notifications_node_client_1 = require("notifications-node-client");
const NotificationService_js_1 = require("./NotificationService.js");
const app = (0, express_1.default)();
const port = process.env.port || 3000;
const apiKey = "testapi-351388ca-23a3-4742-aacb-dd7a744940b4-deb7fe3e-ed87-4fd6-a0ae-d77429cab24f";
const notifyClient = new notifications_node_client_1.NotifyClient(apiKey);
const notifyService = new NotificationService_js_1.NotificationService(notifyClient);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in req response");
    const param = {
        email: 'neha.kannaujia@northumberland.gov.uk',
        personalisation: { name: 'testuser' },
        templateId: '027170b8-a0dd-4390-bd6a-caea6b92e947'
    };
    yield notifyService.sendNotification(param);
    //     const templateId:string = '027170b8-a0dd-4390-bd6a-caea6b92e947';
    //     var notifyClient = new NotifyClient(apiKey)
    //     notifyClient
    //   .sendEmail(templateId, 'neha.kannaujia@northumberland.gov.uk', {
    //     personalisation: {name: 'testuser'},
    //     reference: 'refproto'
    //   })
    //   .then((response:any) => {console.log("in success" + JSON.stringify(response.data))})
    //   .catch((err:any) => {console.log("in error"); console.error(err)})
}));
app.listen(port, () => {
    console.log(`listning to port ${port}`);
});
