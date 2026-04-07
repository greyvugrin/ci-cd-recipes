import http from 'k6/http';
import { sleep } from 'k6';

const MAX_REQS_SECOND = Number(__ENV.MAX_REQS_SECOND || 500);

export const options = {
  scenarios: {
    // Each scenario defined here will be executed.
    // Docs: https://k6.io/docs/using-k6/scenarios/
    ramp_up: {
      executor: 'ramping-arrival-rate',

      // Start iterations per `timeUnit`
      startRate: 100,

      // Start `startRate` iterations per minute
      timeUnit: '1s',

      // Pre-allocate necessary VUs.
      preAllocatedVUs: Math.round(MAX_REQS_SECOND / 4),
      maxVUs: MAX_REQS_SECOND * 2,

      stages: [
        // Linearly ramp-up to next iteration target per `timeUnit` over the following duration
        { target: MAX_REQS_SECOND, duration: '1m' },
      ],

      // This is used to specify which function to execute for this scenario, and can be used to run different scenarios against different endpoints or with different test logic. If not specified, it will default to the `default` function that k6 looks for.
      exec: 'testK6Demo',
    },
    spike: {
      executor: 'ramping-arrival-rate',

      // Start iterations per `timeUnit`
      startRate: 100,

      // Start `startRate` iterations per minute
      timeUnit: '1s',

      // Pre-allocate necessary VUs.
      preAllocatedVUs: MAX_REQS_SECOND,
      maxVUs: MAX_REQS_SECOND * 2,

      stages: [
        // Get up to max rate quickly to simulate a spike
        { target: MAX_REQS_SECOND, duration: '5s' },

        // Now stay at that target
        { target: MAX_REQS_SECOND, duration: '50s' },

        // ramp down to 10
        { target: 10, duration: '5s' },
      ],

      // This is used to specify which function to execute for this scenario, and can be used to run different scenarios against different endpoints or with different test logic. If not specified, it will default to the `default` function that k6 looks for.
      exec: 'testK6Demo',
    },
  },
};

export function testK6Demo() {
  http.get('https://test.k6.io');
  sleep(1);
}
