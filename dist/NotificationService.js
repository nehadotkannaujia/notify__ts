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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor(notifyClient) {
        this.notifyClient = notifyClient;
    }
    sendNotification(notifyPartialParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const templateId = "";
            console.log(`Sent email using ${templateId} templateId, with ${notifyPartialParams.personalisation}`);
            console.log(`Personalisation params: ${JSON.stringify(notifyPartialParams.personalisation)} + email ${notifyPartialParams.email}`);
            return this.notifyClient
                .sendEmail(notifyPartialParams.templateId, notifyPartialParams.email, notifyPartialParams.personalisation)
                .then((response) => {
                console.log(response);
                return response.data;
            })
                .catch((err) => {
                console.error(err);
                throw err;
            });
        });
    }
}
exports.NotificationService = NotificationService;
