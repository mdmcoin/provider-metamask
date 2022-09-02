import { IWavesConfig, IProviderMetamaskConfig } from '../Provider.interface';

export const DEFAULT_WAVES_CONFIG: IWavesConfig = {
	chainId: 77,
	nodeUrl: 'https://nodes.mdmcoin.com',
};

export const DEFAULT_PROVIDER_CONFIG: IProviderMetamaskConfig = {
	debug: false,
	wavesConfig: DEFAULT_WAVES_CONFIG,
}
