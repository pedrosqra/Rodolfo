export default class Materias {
  static schema = {
    name: 'Repository',
    primaryKey: 'materia',
    properties: {
      materia: 'string',
      goal: 'string',
      grades: 'float?[]',
      notes: 'string?[]',
    },
  };
}
