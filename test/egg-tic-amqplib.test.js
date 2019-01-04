'use strict';

const mock = require('egg-mock');

describe('test/egg-tic-amqplib.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-tic-amqplib-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggTicAmqplib')
      .expect(200);
  });
});
