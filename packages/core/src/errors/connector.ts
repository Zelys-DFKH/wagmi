import type { Connector } from '../createConfig.js'
import { BaseError } from './base.js'

export type ProviderNotFoundErrorType = ProviderNotFoundError & {
  name: 'ProviderNotFoundError'
}
export class ProviderNotFoundError extends BaseError {
  override name = 'ProviderNotFoundError'
  constructor() {
    super('Provider not found.')
  }
}

export type SwitchChainNotSupportedErrorType = SwitchChainNotSupportedError & {
  name: 'SwitchChainNotSupportedError'
}
export class SwitchChainNotSupportedError extends BaseError {
  override name = 'SwitchChainNotSupportedError'

  constructor({ connector }: { connector: Connector }) {
    super(`"${connector.name}" does not support programmatic chain switching.`)
  }
}

export type SwitchChainTimeoutErrorType = SwitchChainTimeoutError & {
  name: 'SwitchChainTimeoutError'
}
export class SwitchChainTimeoutError extends BaseError {
  override name = 'SwitchChainTimeoutError'

  constructor({ chainId, timeout }: { chainId: number; timeout: number }) {
    super(
      `Chain switch to chain ID ${chainId} timed out after ${timeout}ms. The request may have been rejected, ignored, or the wallet was backgrounded.`,
    )
  }
}
