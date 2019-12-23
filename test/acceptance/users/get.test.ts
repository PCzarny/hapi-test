import * as Lab from '@hapi/lab';

const { expect } = require('@hapi/code');
const lab = Lab.script();
const { describe, it, beforeEach, afterEach } = lab;
export { lab };

import { init } from '../../../src/server';

describe('GET /', () => {
	let server;

	beforeEach(async () => {
		server = await init();
	});

	afterEach(async () => {
		await server.stop();
	});

	it('responds with 200', async () => {
		const res = await server.inject({
				method: 'GET',
				url: '/users/lalal'
		});
		expect(res.statusCode).to.equal(200);
	});
});
