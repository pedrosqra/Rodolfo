export default class Materias {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: 'string',
      goal: 'string',
      grades: 'string',
      notes: 'string',
    },
  };
}
