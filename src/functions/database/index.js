/* --- Global Dependencies --- */
const admin = require('firebase-admin');
/* ------ Database ------ */

/**
 * @desc Database Read
 * @param {Array} branch
 */


const read = (branch = []) => new Promise((resolve, reject) => {
  const path = PathReference(branch);
  path.once('value', snapshot => resolve(snapshot.val()));
});
/**
 * @desc Database Read Single
 * @param {Array} branch
 */


const readSingle = ({
  branch = []
}) => new Promise((resolve, reject) => {
  const path = PathReference(branch);
  path.once('value', snapshot => resolve(snapshot.val()));
});
/**
 * databaseWrite
 * @const {Array/Object} branch
 * @const {Object} payload
 * @const {Object} metdata
 */


const write = ({
  branch = [],
  payload = {},
  writeType = ''
}) => new Promise((resolve, reject) => {
  let objectReference;
  const path = PathReference(branch);

  switch (writeType) {
    case 'push':
      // https://firebase.google.com/docs/reference/js/firebase.database.Reference#push
      try {
        objectReference = path.push(payload);
        objectReference.update({
          uid: objectReference.key
        }); // Add the item unique identifier (uid) to new entry;

        resolve(objectReference);
      } catch (e) {
        reject(new Error(e.message));
      }

      break;

    case 'update':
      // https://firebase.google.com/docs/reference/js/firebase.database.Reference#update
      try {
        objectReference = path.update(payload); // requires an object variable.

        resolve(objectReference);
      } catch (e) {
        reject(new Error(e.message));
      }

      break;

    case 'set':
      // https://firebase.google.com/docs/reference/js/firebase.database.Reference#set
      try {
        // requires a string or object variable.
        if (typeof payload === 'object') {
          objectReference = path.set({ ...payload
          });
        } else {
          objectReference = path.set(payload);
        }

        resolve(objectReference);
      } catch (e) {
        reject(new Error(e.message));
      }

      break;

    default:
      reject(new Error('error: databaseWrite failed because writeType default is null. Please select push, update or set.'));
  }
});

const search = ({
  branch = [],
  boundaries = {},
  order = {}
}) => new Promise((resolve, reject) => {
  const dataNew = [];
  let path = PathReference(branch);
  /*--- ref.orderByKey ---*/

  if (order && order.orderByKey) {
    path = path.orderByKey();
  } // ref.orderByChild()


  if (order && order.orderByChild) {
    path = path.orderByChild(order.orderByChild);
  } // ref.orderByValue()


  if (order && order.orderByValue) {
    path = path.orderByValue(order.orderByValue);
  }
  /*--- Boundaries ---*/
  // ref.limitToFirst() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst


  if (boundaries && boundaries.limitToFirst && boundaries.limitToFirst < 500) {
    path = path.limitToFirst(boundaries.limitToFirst);
  } // ref.limitToLast() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst


  if (boundaries && boundaries.limitToLast && boundaries.limitToLast < 500) {
    path = path.limitToLast(boundaries.limitToLast);
  } // ref.startAt() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst


  if (boundaries && boundaries.startAt) {
    path = path.startAt(boundaries.startAt);
  } // ref.endAt() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst


  if (boundaries && boundaries.endAt) {
    path = path.endAt(boundaries.endAt);
  } // ref.equalTo() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst


  if (boundaries && boundaries.equalTo) {
    path = path.equalTo(boundaries.equalTo);
  }
  /*--- Filter Database ---*/


  path.on('child_added', (snapshot, childKey) => {
    return snapshot ? dataNew.push(snapshot.val()) : reject(new Error(`Firebase Error: the admin.database.ref in databaseSearch() is originating the error.`));
  });
  /**
   * Resolve Database Read
   * ref.once('value', ...) is run after all ref.on('child_added', ...) events have occured.
   * This implied request order is "guaranteed" by Firebase and doesn't require another request,
   * because caching will return values to the final request to resolve the database read.
   *
   * Related Information - Answer by Firebase Core Developer
   * https://stackoverflow.com/questions/27978078/how-to-separate-initial-data-load-from-incremental-children-with-firebase/27995609#27995609
   *
   */

  path.once('value', function (snapshot) {
    resolve(order && order.reverse ? dataNew.reverse() : dataNew);
  });
});
/* --- Utility Functions  --- */


const PathReference = branch => admin.database().ref(`${branch.join('/')}`);

const isObject = obj => Object.prototype.toString(obj) === '[object Object]' ? true : false;

const toArray = snapshot => {
  let arr = [];
  snapshot.forEach(childSnapshot => {
    let val = childSnapshot.val();

    if (isObject(val)) {
      val.id = childSnapshot.key;
    }

    arr.push(val);
  });
  return arr;
};

module.export[read] = read;
module.export[readSingle] = readSingle;
module.export[write] = write;
module.export[search] = search;