window.BENCHMARK_DATA = {
  "lastUpdate": 1792050263899,
  "repoUrl": "https://github.com/EEGKit/liblsl.dart",
  "entries": {
    "liblsl.dart benchmarks": [
      {
        "commit": {
          "author": {
            "email": "zeyus@zeyus.com",
            "name": "zeyus",
            "username": "zeyus"
          },
          "committer": {
            "email": "zeyus@zeyus.com",
            "name": "zeyus",
            "username": "zeyus"
          },
          "distinct": true,
          "id": "e19491497edaf337f0af8bfdf10cdb2ed7c56701",
          "message": "[lsl_viewer] Performance improvements (cascaded).",
          "timestamp": "2026-10-12T22:27:49+02:00",
          "tree_id": "671dbb8ea05ea5bf6c5cd3d41fa838e7a1713989",
          "url": "https://github.com/EEGKit/liblsl.dart/commit/e19491497edaf337f0af8bfdf10cdb2ed7c56701"
        },
        "date": 1791969741117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "directSync/pushSample/8ch@500Hz latency_p50",
            "value": 108.48960619114223,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "directSync/pushSample/8ch@500Hz latency_p95",
            "value": 143.64914613906876,
            "unit": "us"
          },
          {
            "name": "directSync/pushSample/8ch@500Hz latency_p99",
            "value": 230.58047838731,
            "unit": "us"
          },
          {
            "name": "directSync/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 181.8223739178393,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 270.69079874308954,
            "unit": "us"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 347.9294248336373,
            "unit": "us"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz latency_p50",
            "value": 80.28326442399703,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz latency_p95",
            "value": 109.34260922113026,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz latency_p99",
            "value": 145.55882961531097,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 174.8169996744764,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 230.52964962744227,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 328.2374952391365,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz latency_p50",
            "value": 179.7234350533472,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz latency_p95",
            "value": 243.74108278379936,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz latency_p99",
            "value": 319.84903296233824,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 321.7091639839964,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 389.1564790023949,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 473.82349401914325,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz latency_p50",
            "value": 94.67750521707785,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz latency_p95",
            "value": 120.32396193717432,
            "unit": "us"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz latency_p99",
            "value": 162.09071617367954,
            "unit": "us"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 204.01735838504464,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 254.63275943593544,
            "unit": "us"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 290.6290662281208,
            "unit": "us"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zeyus@zeyus.com",
            "name": "zeyus",
            "username": "zeyus"
          },
          "committer": {
            "email": "zeyus@zeyus.com",
            "name": "zeyus",
            "username": "zeyus"
          },
          "distinct": true,
          "id": "4643bb89d0315ad50d8a8c9561bdf9051fe1c9a5",
          "message": "[liblsl_core] added example for pub.dev",
          "timestamp": "2026-10-14T12:55:59+02:00",
          "tree_id": "b338775e990ada9213c2fedc000dd5f305e647c9",
          "url": "https://github.com/EEGKit/liblsl.dart/commit/4643bb89d0315ad50d8a8c9561bdf9051fe1c9a5"
        },
        "date": 1792050262972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "directSync/pushSample/8ch@500Hz latency_p50",
            "value": 44.075896241224655,
            "unit": "us",
            "extra": "n=4500"
          },
          {
            "name": "directSync/pushSample/8ch@500Hz latency_p95",
            "value": 60.210343505673336,
            "unit": "us"
          },
          {
            "name": "directSync/pushSample/8ch@500Hz latency_p99",
            "value": 105.40107739132054,
            "unit": "us"
          },
          {
            "name": "directSync/pushSample/8ch@500Hz time_per_sample",
            "value": 2000,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 74.6320793467703,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 119.35699878051764,
            "unit": "us"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 295.5031621212356,
            "unit": "us"
          },
          {
            "name": "directSync/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz latency_p50",
            "value": 33.65651812714532,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz latency_p95",
            "value": 54.15308922351869,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz latency_p99",
            "value": 199.5078200422995,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 63.781245387417584,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 110.03265430531428,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 160.72462432248358,
            "unit": "us"
          },
          {
            "name": "directSyncBlocking/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz latency_p50",
            "value": 77.49100569753864,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz latency_p95",
            "value": 104.18474423090629,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz latency_p99",
            "value": 258.7738434556286,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 104.48343078905964,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 210.49646116466647,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 440.17594842671315,
            "unit": "us"
          },
          {
            "name": "isolateAsync/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz latency_p50",
            "value": 50.664388538734784,
            "unit": "us",
            "extra": "n=4497"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz latency_p95",
            "value": 60.20153961117103,
            "unit": "us"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz latency_p99",
            "value": 69.66332398405939,
            "unit": "us"
          },
          {
            "name": "eventStream/pushSample/8ch@500Hz time_per_sample",
            "value": 2001.33422281521,
            "unit": "us/sample",
            "extra": "500 samples/s, loss 0.0%"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz latency_p50",
            "value": 79.07850411470463,
            "unit": "us",
            "extra": "n=8928"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz latency_p95",
            "value": 153.12505473730198,
            "unit": "us"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz latency_p99",
            "value": 204.03827417680986,
            "unit": "us"
          },
          {
            "name": "eventStream/pushChunkTyped32/64ch@1000Hz time_per_sample",
            "value": 1008.0645161290323,
            "unit": "us/sample",
            "extra": "992 samples/s, loss 0.0%"
          }
        ]
      }
    ]
  }
}