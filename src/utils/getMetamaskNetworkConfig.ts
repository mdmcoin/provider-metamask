import { AddEthereumChainParameter } from '../Metamask.interface';

export const getMetamaskNetworkConfig = (chainId: number): AddEthereumChainParameter | null => {
	switch (chainId) {
		case 87: return METAMASK_NETWORK_CONFIG_WAVES_MAINNET;
		case 83: return METAMASK_NETWORK_CONFIG_WAVES_STAGENET;
		case 84: return METAMASK_NETWORK_CONFIG_WAVES_TESTNET;
		case 67: return METAMASK_NETWORK_CONFIG_WAVES_DEVNET;

		default: return null;
	}
};

const METAMASK_NETWORK_CONFIG_WAVES_MAINNET: AddEthereumChainParameter = {
	chainId: '0x' + (87).toString(16),
	chainName: 'Waves',
	nativeCurrency: { name: 'MDMCOIN', symbol: 'MDM', decimals: 18 },
	rpcUrls: ['https://nodes.mdmcoin.com/eth'],
	blockExplorerUrls: ['https://explorer.mdmcoin.com'],
};

const METAMASK_NETWORK_CONFIG_WAVES_STAGENET: AddEthereumChainParameter = {
	chainId: '0x' + (83).toString(16),
	chainName: 'Waves stagenet',
	nativeCurrency: { name: 'MDMCOIN', symbol: 'MDM', decimals: 18 },
	rpcUrls: ['https://nodes-stagenet.mdmcoin.com/eth'],
	blockExplorerUrls: ['https://stagenetexplorer.mdmcoin.com'],
};

const METAMASK_NETWORK_CONFIG_WAVES_TESTNET: AddEthereumChainParameter = {
	chainId: '0x' + (84).toString(16),
	chainName: 'Waves testnet',
	nativeCurrency: { name: 'MDMCOIN', symbol: 'MDM', decimals: 18 },
	rpcUrls: ['https://testnode.mdmcoin.com/eth'],
	blockExplorerUrls: ['https://testnetexplorer.mdmcoin.com'],
};

const METAMASK_NETWORK_CONFIG_WAVES_DEVNET: AddEthereumChainParameter = {
	chainId: '0x' + (67).toString(16),
	chainName: 'Waves devnet',
	nativeCurrency: { name: 'MDMCOIN', symbol: 'MDM', decimals: 18 },
	rpcUrls: ['https://devnet.mdmcoin.com/eth'],
	blockExplorerUrls: ['https://explorer.mdmcoin.com/custom'],
};
