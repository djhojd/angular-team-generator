import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// admin.initializeApp();

// async function grantAdminRole(email: string): Promise<void> {
//   const user = await admin.auth().getUserByEmail(email);
//   // if (user.customClaims && user.customClaims)
//   admin.auth().setCustomUserClaims(user.uid, {
//     admin: true;
//   })
// }

// exports.grantAdminRole = functions.https.onCall((data, contenx) => {
//   admin.auth().setCustomUserClaims()
// });

admin.initializeApp(functions.config().firebase);

const REGION = 'europe-west1';
const ADMIN_EMAIL = 'claudiu.hojda@visma.com';

// On sign up.
exports.processSignUp = functions
  .region(REGION)
  .auth.user()
  .onCreate(event => {
    // const user = event.data; // The Firebase user.
    const user = event; // The Firebase user.
    // Check if user meets role criteria.
    if (user.email && user.email === ADMIN_EMAIL && user.emailVerified) {
      const customClaims = {
        admin: true,
      };
      console.log(`Setting custom claim to ${user.email}`, { customClaims });
      // Set custom user claims on this newly created user.
      return admin
        .auth()
        .setCustomUserClaims(user.uid, customClaims)
        .then(() => {
          return admin
            .auth()
            .getUser(user.uid)
            .then(userRecord => {
              // The claims can be accessed on the user record.
              console.log(userRecord.customClaims);
              userRecord;
            });
        })
        .catch(error => {
          console.log('Error setting admin custom claim!', { error });
        });
    }

    return;
  });
