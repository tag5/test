import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('graphql test', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: 'query { getSpaceXLaunchById(id: "5eb87cd9ffd86e000604b32a") { name } }',
      })
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          data: { getSpaceXLaunchById: { name: 'FalconSat' } }
        });
      });
  });
});
