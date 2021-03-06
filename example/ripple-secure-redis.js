/*

 ----------------------------------------------------------------------------
 | qewd-ripple: QEWD-based Middle Tier for Ripple OSI                       |
 |                                                                          |
 | Copyright (c) 2016-17 Ripple Foundation Community Interest Company       |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  30 January 2017

*/

var ewdRipple = require('qewd-ripple/lib/startup');

var config = {
  auth0: {
    domain:       'xxxxxxxxx.eu.auth0.com',
    clientID:     'xxxxxxxxxxxxxxxxxxxxxxxx',
    callbackURL:  'http://xxx.xxx.xxx.xxx/auth0/token',
    clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    indexURL: '/index.html',
    connections: ['Username-Password-Authentication', 'google-oauth2', 'twitter']
  },
  port: 8081,
  poolSize: 2,
  ripple: {
    mode: 'secure'
  },
  database: {
    type: 'redis'
  }

};

config.addMiddleware = function(bodyParser, app) {
  require('body-parser-xml')(bodyParser);
  app.use(bodyParser.xml({
     limit: '1MB',
     xmlParseOptions: {
        explicitArray: false
     }
  }));
};

ewdRipple.start(config);
