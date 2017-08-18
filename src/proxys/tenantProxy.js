import { verify } from 'z-error';
import { common, config } from '../common';
import { tenantOperator } from '../operators';

function isValidData(info) {
  const error = verify(info, ['name', 'secret']);
  if (error) {
    return { is: false, error };
  }
  return { is: true, error };
}

async function isExist(info) {
  try {
    const result = await tenantOperator.list({ name: info.name });
    return {
      is: result.length !== 0,
      description: '',
      infos: result,
    };
  } catch (err) {
    return Promise.reject(err);
  }
}

function retData(body) {
  body = common.filterData(body, ['deleteFlag', 'secret']);
  body.href = `${config.domainHost}${config.uriPrefix}/tenants/${body.id}`;
  return body;
}

function retListData(query, items, size) {
  const href = `${config.domainHost}${config.uriPrefix}/tenants`;
  return common.retListData(query, items, size, retData, href);
}

function isValidUpateData() {
  return { is: true, error: '', flag: 0 };
}

module.exports = {
  resourceProxy: tenantOperator,
  isValidData,
  isExist,
  retData,
  retListData,
  isValidUpateData,
};
