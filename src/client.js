import {createThirdwebClient} from 'thirdweb';

const CLIENT_ID = "903b0d9f2e21e2e6371101b79660cc6c";

if(!CLIENT_ID) throw new Error('Client ID not found');

export const client = createThirdwebClient({
    clientId: CLIENT_ID,
});


// Temp file - can be deleted later