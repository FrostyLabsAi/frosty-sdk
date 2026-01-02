/**
 * Smart contract ABIs and interfaces for ERC-8004
 */

import type { ChainId } from '../models/types.js';

// ERC-721 ABI (minimal required functions)
export const ERC721_ABI = [
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

// ERC-721 URI Storage ABI
export const ERC721_URI_STORAGE_ABI = [
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'string', name: '_tokenURI', type: 'string' },
    ],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

// Identity Registry ABI (ERC-8004 v1.0)
export const IDENTITY_REGISTRY_ABI = [
  ...ERC721_ABI,
  ...ERC721_URI_STORAGE_ABI,
  // Registration functions
  {
    inputs: [],
    name: 'register',
    outputs: [{ internalType: 'uint256', name: 'agentId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'tokenURI_', type: 'string' }],
    name: 'register',
    outputs: [{ internalType: 'uint256', name: 'agentId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'tokenURI_', type: 'string' },
      {
        components: [
          { internalType: 'string', name: 'key', type: 'string' },
          { internalType: 'bytes', name: 'value', type: 'bytes' },
        ],
        internalType: 'struct IIdentityRegistry.MetadataEntry[]',
        name: 'metadata',
        type: 'tuple[]',
      },
    ],
    name: 'register',
    outputs: [{ internalType: 'uint256', name: 'agentId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  // Metadata functions
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'string', name: 'key', type: 'string' },
    ],
    name: 'getMetadata',
    outputs: [{ internalType: 'bytes', name: 'value', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'string', name: 'key', type: 'string' },
      { internalType: 'bytes', name: 'value', type: 'bytes' },
    ],
    name: 'setMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  // View functions (v1.0 additions)
  {
    inputs: [],
    name: 'totalAgents',
    outputs: [{ internalType: 'uint256', name: 'count', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'agentId', type: 'uint256' }],
    name: 'agentExists',
    outputs: [{ internalType: 'bool', name: 'exists', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Events
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: false, internalType: 'string', name: 'tokenURI', type: 'string' },
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
    ],
    name: 'Registered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: true, internalType: 'string', name: 'indexedKey', type: 'string' },
      { indexed: false, internalType: 'string', name: 'key', type: 'string' },
      { indexed: false, internalType: 'bytes', name: 'value', type: 'bytes' },
    ],
    name: 'MetadataSet',
    type: 'event',
  },
] as const;

// Reputation Registry ABI (ERC-8004 v1.0)
export const REPUTATION_REGISTRY_ABI = [
  // Core functions
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'uint8', name: 'score', type: 'uint8' },
      { internalType: 'bytes32', name: 'tag1', type: 'bytes32' },
      { internalType: 'bytes32', name: 'tag2', type: 'bytes32' },
      { internalType: 'string', name: 'fileuri', type: 'string' },
      { internalType: 'bytes32', name: 'filehash', type: 'bytes32' },
      { internalType: 'bytes', name: 'feedbackAuth', type: 'bytes' },
    ],
    name: 'giveFeedback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'uint64', name: 'feedbackIndex', type: 'uint64' },
    ],
    name: 'revokeFeedback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address', name: 'clientAddress', type: 'address' },
      { internalType: 'uint64', name: 'feedbackIndex', type: 'uint64' },
      { internalType: 'string', name: 'responseUri', type: 'string' },
      { internalType: 'bytes32', name: 'responseHash', type: 'bytes32' },
    ],
    name: 'appendResponse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  // Read functions
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address', name: 'clientAddress', type: 'address' },
    ],
    name: 'getLastIndex',
    outputs: [{ internalType: 'uint64', name: 'lastIndex', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address', name: 'clientAddress', type: 'address' },
      { internalType: 'uint64', name: 'index', type: 'uint64' },
    ],
    name: 'readFeedback',
    outputs: [
      { internalType: 'uint8', name: 'score', type: 'uint8' },
      { internalType: 'bytes32', name: 'tag1', type: 'bytes32' },
      { internalType: 'bytes32', name: 'tag2', type: 'bytes32' },
      { internalType: 'bool', name: 'isRevoked', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address[]', name: 'clientAddresses', type: 'address[]' },
      { internalType: 'bytes32', name: 'tag1', type: 'bytes32' },
      { internalType: 'bytes32', name: 'tag2', type: 'bytes32' },
    ],
    name: 'getSummary',
    outputs: [
      { internalType: 'uint64', name: 'count', type: 'uint64' },
      { internalType: 'uint8', name: 'averageScore', type: 'uint8' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  // v1.0 additions
  {
    inputs: [{ internalType: 'uint256', name: 'agentId', type: 'uint256' }],
    name: 'getClients',
    outputs: [{ internalType: 'address[]', name: 'clientList', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address[]', name: 'clientAddresses', type: 'address[]' },
      { internalType: 'bytes32', name: 'tag1', type: 'bytes32' },
      { internalType: 'bytes32', name: 'tag2', type: 'bytes32' },
      { internalType: 'bool', name: 'includeRevoked', type: 'bool' },
    ],
    name: 'readAllFeedback',
    outputs: [
      { internalType: 'address[]', name: 'clients', type: 'address[]' },
      { internalType: 'uint8[]', name: 'scores', type: 'uint8[]' },
      { internalType: 'bytes32[]', name: 'tag1s', type: 'bytes32[]' },
      { internalType: 'bytes32[]', name: 'tag2s', type: 'bytes32[]' },
      { internalType: 'bool[]', name: 'revokedStatuses', type: 'bool[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address', name: 'clientAddress', type: 'address' },
      { internalType: 'uint64', name: 'feedbackIndex', type: 'uint64' },
      { internalType: 'address[]', name: 'responders', type: 'address[]' },
    ],
    name: 'getResponseCount',
    outputs: [{ internalType: 'uint64', name: 'count', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getIdentityRegistry',
    outputs: [{ internalType: 'address', name: 'registry', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Events
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'clientAddress', type: 'address' },
      { indexed: false, internalType: 'uint8', name: 'score', type: 'uint8' },
      { indexed: true, internalType: 'bytes32', name: 'tag1', type: 'bytes32' },
      { indexed: false, internalType: 'bytes32', name: 'tag2', type: 'bytes32' },
      { indexed: false, internalType: 'string', name: 'fileuri', type: 'string' },
      { indexed: false, internalType: 'bytes32', name: 'filehash', type: 'bytes32' },
    ],
    name: 'NewFeedback',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'clientAddress', type: 'address' },
      { indexed: true, internalType: 'uint64', name: 'feedbackIndex', type: 'uint64' },
    ],
    name: 'FeedbackRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'clientAddress', type: 'address' },
      { indexed: true, internalType: 'uint64', name: 'feedbackIndex', type: 'uint64' },
      { indexed: false, internalType: 'address', name: 'responder', type: 'address' },
      { indexed: false, internalType: 'string', name: 'responseUri', type: 'string' },
      { indexed: false, internalType: 'bytes32', name: 'responseHash', type: 'bytes32' },
    ],
    name: 'ResponseAppended',
    type: 'event',
  },
] as const;

// Validation Registry ABI (ERC-8004 v1.0)
export const VALIDATION_REGISTRY_ABI = [
  // Core functions
  {
    inputs: [
      { internalType: 'address', name: 'validatorAddress', type: 'address' },
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'string', name: 'requestUri', type: 'string' },
      { internalType: 'bytes32', name: 'requestHash', type: 'bytes32' },
    ],
    name: 'validationRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'requestHash', type: 'bytes32' },
      { internalType: 'uint8', name: 'response', type: 'uint8' },
      { internalType: 'string', name: 'responseUri', type: 'string' },
      { internalType: 'bytes32', name: 'responseHash', type: 'bytes32' },
      { internalType: 'bytes32', name: 'tag', type: 'bytes32' },
    ],
    name: 'validationResponse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  // Read functions
  {
    inputs: [{ internalType: 'bytes32', name: 'requestHash', type: 'bytes32' }],
    name: 'getValidationStatus',
    outputs: [
      { internalType: 'address', name: 'validatorAddress', type: 'address' },
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'uint8', name: 'response', type: 'uint8' },
      { internalType: 'bytes32', name: 'tag', type: 'bytes32' },
      { internalType: 'uint256', name: 'lastUpdate', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'address[]', name: 'validatorAddresses', type: 'address[]' },
      { internalType: 'bytes32', name: 'tag', type: 'bytes32' },
    ],
    name: 'getSummary',
    outputs: [
      { internalType: 'uint64', name: 'count', type: 'uint64' },
      { internalType: 'uint8', name: 'avgResponse', type: 'uint8' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'agentId', type: 'uint256' }],
    name: 'getAgentValidations',
    outputs: [{ internalType: 'bytes32[]', name: 'requestHashes', type: 'bytes32[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'validatorAddress', type: 'address' }],
    name: 'getValidatorRequests',
    outputs: [{ internalType: 'bytes32[]', name: 'requestHashes', type: 'bytes32[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'requestHash', type: 'bytes32' }],
    name: 'requestExists',
    outputs: [{ internalType: 'bool', name: 'exists', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'requestHash', type: 'bytes32' }],
    name: 'getRequest',
    outputs: [
      { internalType: 'address', name: 'validatorAddress', type: 'address' },
      { internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { internalType: 'string', name: 'requestUri', type: 'string' },
      { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getIdentityRegistry',
    outputs: [{ internalType: 'address', name: 'registry', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Events
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'validatorAddress', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: false, internalType: 'string', name: 'requestUri', type: 'string' },
      { indexed: true, internalType: 'bytes32', name: 'requestHash', type: 'bytes32' },
    ],
    name: 'ValidationRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'validatorAddress', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'agentId', type: 'uint256' },
      { indexed: true, internalType: 'bytes32', name: 'requestHash', type: 'bytes32' },
      { indexed: false, internalType: 'uint8', name: 'response', type: 'uint8' },
      { indexed: false, internalType: 'string', name: 'responseUri', type: 'string' },
      { indexed: false, internalType: 'bytes32', name: 'responseHash', type: 'bytes32' },
      { indexed: false, internalType: 'bytes32', name: 'tag', type: 'bytes32' },
    ],
    name: 'ValidationResponse',
    type: 'event',
  },
] as const;

/**
 * ERC-8004 v1.0 Contract Addresses
 * From: https://github.com/ChaosChain/trustless-agents-erc-ri
 *
 * These are deterministic addresses - same on all networks:
 * - IdentityRegistry:   0x7177a6867296406881E20d6647232314736Dd09A
 * - ReputationRegistry: 0xB5048e3ef1DA4E04deB6f7d0423D06F63869e322
 * - ValidationRegistry: 0x662b40A526cb4017d947e71eAF6753BF3eeE66d8
 */
const ERC8004_V1_ADDRESSES = {
  IDENTITY: '0x7177a6867296406881E20d6647232314736Dd09A',
  REPUTATION: '0xB5048e3ef1DA4E04deB6f7d0423D06F63869e322',
  VALIDATION: '0x662b40A526cb4017d947e71eAF6753BF3eeE66d8',
} as const;

/**
 * Contract registry for different chains
 * All chains use the same deterministic ERC-8004 v1.0 addresses
 */
export const DEFAULT_REGISTRIES: Record<ChainId, Record<string, string>> = {
  // Ethereum Sepolia
  11155111: { ...ERC8004_V1_ADDRESSES },
  // Base Sepolia
  84532: { ...ERC8004_V1_ADDRESSES },
  // Optimism Sepolia
  11155420: { ...ERC8004_V1_ADDRESSES },
  // Mode Testnet
  919: { ...ERC8004_V1_ADDRESSES },
  // 0G Testnet (Galileo)
  16602: { ...ERC8004_V1_ADDRESSES },
};

/**
 * Network metadata for supported chains
 */
export const NETWORK_METADATA: Record<ChainId, { name: string; explorer: string }> = {
  11155111: {
    name: 'Ethereum Sepolia',
    explorer: 'https://sepolia.etherscan.io',
  },
  84532: {
    name: 'Base Sepolia',
    explorer: 'https://sepolia.basescan.org',
  },
  11155420: {
    name: 'Optimism Sepolia',
    explorer: 'https://sepolia-optimistic.etherscan.io',
  },
  919: {
    name: 'Mode Testnet',
    explorer: 'https://sepolia.explorer.mode.network',
  },
  16602: {
    name: '0G Testnet (Galileo)',
    explorer: 'https://chainscan-galileo.0g.ai',
  },
};

/**
 * Default subgraph URLs for different chains
 * Note: These are for the legacy v0.4 contracts. v1.0 subgraphs TBD.
 * For now, direct contract queries are recommended for v1.0.
 */
export const DEFAULT_SUBGRAPH_URLS: Record<ChainId, string> = {
  // Note: These subgraphs index the OLD v0.4 contracts, not the new v1.0 addresses
  // They are kept for reference but may not work with the new contract addresses
  // TODO: Update when v1.0 subgraphs are deployed
  11155111:
    'https://gateway.thegraph.com/api/00a452ad3cd1900273ea62c1bf283f93/subgraphs/id/6wQRC7geo9XYAhckfmfo8kbMRLeWU8KQd3XsJqFKmZLT', // Ethereum Sepolia (v0.4)
  84532:
    'https://gateway.thegraph.com/api/00a452ad3cd1900273ea62c1bf283f93/subgraphs/id/GjQEDgEKqoh5Yc8MUgxoQoRATEJdEiH7HbocfR1aFiHa', // Base Sepolia (v0.4)
};

/**
 * Get all supported chain IDs
 */
export function getSupportedChainIds(): ChainId[] {
  return Object.keys(DEFAULT_REGISTRIES).map(Number) as ChainId[];
}

/**
 * Check if a chain ID is supported
 */
export function isChainSupported(chainId: ChainId): boolean {
  return chainId in DEFAULT_REGISTRIES;
}

