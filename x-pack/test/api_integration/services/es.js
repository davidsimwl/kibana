/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { format as formatUrl } from 'url';

import elasticsearch from 'elasticsearch';
import shieldPlugin from '../../../server/lib/esjs_shield_plugin';
import { DEFAULT_API_VERSION } from '../../../../src/legacy/core_plugins/elasticsearch/lib/default_api_version';

export function EsProvider({ getService }) {
  const config = getService('config');

  return new elasticsearch.Client({
    apiVersion: DEFAULT_API_VERSION,
    host: formatUrl(config.get('servers.elasticsearch')),
    requestTimeout: config.get('timeouts.esRequestTimeout'),
    plugins: [shieldPlugin],
  });
}
