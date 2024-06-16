function cov_1lknx782ge() {
  var path = "/Users/bogdangarashchuk/WebstormProjects/lab1/src/main.ts";
  var hash = "9aa77aaba29b6bf2c0ada4f204533c9c0ba6da00";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/bogdangarashchuk/WebstormProjects/lab1/src/main.ts",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 26
        }
      },
      "1": {
        start: {
          line: 10,
          column: 14
        },
        end: {
          line: 10,
          column: 27
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 15
        }
      },
      "3": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 15
        }
      },
      "4": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 17
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9aa77aaba29b6bf2c0ada4f204533c9c0ba6da00"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1lknx782ge = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1lknx782ge();
import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
const app = (cov_1lknx782ge().s[0]++, createApp(App));
const pinia = (cov_1lknx782ge().s[1]++, createPinia());
cov_1lknx782ge().s[2]++;
app.use(pinia);
cov_1lknx782ge().s[3]++;
app.use(router);
cov_1lknx782ge().s[4]++;
app.mount('#app');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWxrbng3ODJnZSIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlQXBwIiwiY3JlYXRlUGluaWEiLCJBcHAiLCJyb3V0ZXIiLCJhcHAiLCJzIiwicGluaWEiLCJ1c2UiLCJtb3VudCJdLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Fzc2V0cy9tYWluLmNzcydcblxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgY3JlYXRlUGluaWEgfSBmcm9tICdwaW5pYSdcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuY29uc3QgcGluaWEgPSBjcmVhdGVQaW5pYSgpO1xuXG5hcHAudXNlKHBpbmlhKTtcbmFwcC51c2Uocm91dGVyKVxuXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLE9BQU8sbUJBQW1CO0FBRTFCLFNBQVNFLFNBQVMsUUFBUSxLQUFLO0FBQy9CLFNBQVNDLFdBQVcsUUFBUSxPQUFPO0FBRW5DLE9BQU9DLEdBQUcsTUFBTSxXQUFXO0FBQzNCLE9BQU9DLE1BQU0sTUFBTSxVQUFVO0FBRTdCLE1BQU1DLEdBQUcsSUFBQU4sY0FBQSxHQUFBTyxDQUFBLE9BQUdMLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO0FBQzFCLE1BQU1JLEtBQUssSUFBQVIsY0FBQSxHQUFBTyxDQUFBLE9BQUdKLFdBQVcsQ0FBQyxDQUFDO0FBQUNILGNBQUEsR0FBQU8sQ0FBQTtBQUU1QkQsR0FBRyxDQUFDRyxHQUFHLENBQUNELEtBQUssQ0FBQztBQUFDUixjQUFBLEdBQUFPLENBQUE7QUFDZkQsR0FBRyxDQUFDRyxHQUFHLENBQUNKLE1BQU0sQ0FBQztBQUFBTCxjQUFBLEdBQUFPLENBQUE7QUFFZkQsR0FBRyxDQUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDIiwiaWdub3JlTGlzdCI6W119