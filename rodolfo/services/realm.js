import Realm from 'realm';

import RepositorySchema from '../schemas/MateriasRepository';

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
