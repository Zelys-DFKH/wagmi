---
"@wagmi/core": minor
"wagmi": minor
"@wagmi/vue": minor
"@wagmi/solid": minor
---

Added an optional `timeout` parameter to `switchChain`. When provided, the chain switch rejects with `SwitchChainTimeoutError` if the wallet does not respond within the given number of milliseconds.
