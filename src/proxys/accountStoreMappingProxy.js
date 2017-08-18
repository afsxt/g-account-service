import { verify } from 'z-error';
import { common, config } from '../common';
import { accountStoreMappingOperator } from '../operators';

function isValidData(info) {
  const error = verify(info, ['application', 'accountStore']);
  if (error) {
    return { is: false, error };
  }
  return { is: true, error };
}

async function isExist() {
  return {
    is: false,
    description: '',
  };
}

function retData(body) {
  const ret = common.filterData(body, ['deleteFlag', 'accountStoreType']);
  ret.href = `${config.domainHost}${config.uriPrefix}/accountStoreMappings/${body.id}`;
  ret.application = {
    href: `${config.domainHost}${config.uriPrefix}/applications/${body.applicationId}`,
  };
  ret.accountStore = {
    href: `${config.domainHost}${config.uriPrefix}/${body.accountStoreType === 0 ? 'directories' : 'groups'}/${body.accountStoreId}`,
  };
  return ret;
}

function retListData(query, items, size) {
  const href = `${config.domainHost}/${config.uriPrefix}/accountStoreMappings`;
  return common.retListData(query, items, size, retData, href);
}

function isValidUpateData() {
  return { is: true, error: '', flag: 0 };
}

module.exports = {
  resourceProxy: accountStoreMappingOperator,
  isValidData,
  isExist,
  retData,
  retListData,
  isValidUpateData,
};
