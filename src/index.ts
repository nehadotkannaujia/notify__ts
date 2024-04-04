import express from 'express'
import {NotifyClient} from "notifications-node-client";
import {NotificationService, IPartialParams} from "./NotificationService"

const app =  express();

const port = process.env.port || 3000;
const apiKey:string = "testapi-351388ca-23a3-4742-aacb-dd7a744940b4-deb7fe3e-ed87-4fd6-a0ae-d77429cab24f";

const notifyClient  = new NotifyClient(apiKey);
const notifyService: NotificationService = new NotificationService(notifyClient);

app.get('/', async (req, res) : Promise<void> => {
    console.log("in req response");

    const param: IPartialParams = {
        email : 'neha.kannaujia@northumberland.gov.uk',
        personalisation: {name: 'testuser'},
        templateId: '027170b8-a0dd-4390-bd6a-caea6b92e947',
        refrence: 'refproto'
    }

    await notifyService.sendEmailNotification(param)

})

app.listen(port, () => {
    console.log(`listning to port ${port}`)
})