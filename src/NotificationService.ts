import { NotifyClient } from "notifications-node-client";

class NotificationService{
    private readonly notifyClient;

    constructor(notifyClient: any) {
        this.notifyClient = notifyClient;
    }

    public async sendEmailNotification(notifyPartialParams: IPartialParams) {
       
        const templateId = ""
    
        console.log(`Sent email using ${notifyPartialParams.templateId}, with ${notifyPartialParams.personalisation}`);
        console.log(`Personalisation params: ${JSON.stringify(notifyPartialParams.personalisation)} + email ${notifyPartialParams.email}`);
        return this.notifyClient
        .sendEmail(notifyPartialParams.templateId, notifyPartialParams.email, {
                 personalisation: notifyPartialParams.personalisation,
                 reference: notifyPartialParams.refrence
               })
          .then((response: any) => {
            console.log(response);
            return response.data;
          })
          .catch((err: any) => {
            console.error(err);
            throw err;
          });
      }
}

interface IPartialParams{
        personalisation: any;
        email: string;
        templateId: string;
        refrence: string
}

export { IPartialParams, NotificationService };