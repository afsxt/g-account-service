import Waterline from 'waterline';

module.exports = Waterline.Collection.extend({
  identity: 'tb_group',
  tableName: 'tb_group',
  connection: 'mongodb',
  schema: true,
  attributes: {
    directoryId: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      defaultsTo: false,
    },
    tenantId: {
      type: 'string',
      required: true,
    },
    status: {
      type: 'string',
      enum: ['ENABLE', 'DISABLED'],
      defaultsTo: 'ENABLE',
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
