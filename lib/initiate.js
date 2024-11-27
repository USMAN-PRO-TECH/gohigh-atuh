require('dotenv').config();
async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://localhost:3000/oauth/callback",
        clientId: process.env.CLIENT_ID,
         scopes : [
            'contacts.readonly',
            'contacts.write',
            'conversations/message.readonly',
            'conversations/message.write',
            'conversations.readonly',
            'conversations.write',
            'calendars.readonly',
            'calendars.write',
            'calendars/events.readonly',
            'calendars/events.write',
            'calendars/groups.readonly',
            'calendars/groups.write',
            'calendars/resources.readonly',
            'calendars/resources.write',
            'campaigns.readonly',
            'businesses.readonly',
            'businesses.write',
            'links.readonly',
            'links.write',
            'locations.readonly',
            'locations.write',
            'locations/customValues.readonly',
            'locations/customValues.write',
            'locations/customFields.readonly',
            'locations/customFields.write',
            'opportunities.readonly',
            'opportunities.write',
            'oauth.readonly',
            'oauth.write',
            'users.readonly',
            'users.write',
            'workflows.readonly'
          ]
          
    };

    return res.redirect(`${process.env.BASE_URL}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
