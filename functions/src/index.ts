import * as functions from 'firebase-functions';


export const calculate = functions.firestore.document('calculations/{id}').onCreate(
  (snapshot, context) =>
    // do double calculation just because cloud functions
    // are awesome - and to overengineer.
    snapshot.ref.update({CFresult : eval(snapshot.data().calculation)})
);

