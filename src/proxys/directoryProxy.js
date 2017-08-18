import { verify } from 'z-error';
import { common, config } from '../common';
import { directoryOperator } from '../operators';

function isValidData(info) {
  const error = verify(info, ['name']);
  if (error) {
    return { is: false, error };
  }
  return { is: true, error };
}

async function isExist(info) {
  try {
    const result = await directoryOperator.list({ name: info.name });
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
  const ret = common.filterData(body, ['deleteFlag']);
  ret.href = `${config.domainHost}${config.uriPrefix}/directories/${body.id}`;
  ret.tenant = {
    href: `${config.domainHost}${config.uriPrefix}/tenants/${body.tenantId}`,
  };
  return ret;
}

function retListData(query, items, size) {
  const href = `${config.domainHost}${config.uriPrefix}/directories`;
  return common.retListData(query, items, size, retData, href);
}

function isValidUpateData() {
  return { is: true, error: '', flag: 0 };
}

module.exports = {
  resourceProxy: directoryOperator,
  isValidData,
  isExist,
  retData,
  retListData,
  isValidUpateData,
};
