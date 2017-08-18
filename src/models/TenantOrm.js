import Waterline from 'waterline';

module.exports = Waterline.Collection.extend({
  identity: 'tb_tenant',
  tableName: 'tb_tenant',
  connection: 'mongodb',
  schema: true,
  attributes: {
    name: {
      type: 'string',
      unique: true,
    },
    key: {
      type: 'string',
      unique: true,
    },
    secret: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    customData: {
      type: 'json',
    },
    deleteFlag: {
      type: 'integer',
      defaultsTo: 0,
    },
  },
});
