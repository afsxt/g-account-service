import Waterline from 'waterline';

module.exports = Waterline.Collection.extend({
  identity: 'tb_application',
  tableName: 'tb_application',
  connection: 'mongodb',
  schema: true,
  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true,
    },
    description: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['ENABLE', 'DISABLED'],
      defaultsTo: 'ENABLE',
    },
    tenantId: {
      type: 'string',
      required: true,
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
