import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoAccount
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dinoAccountAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_dinoId', internalType: 'uint256', type: 'uint256' },
      { name: '_dinoERC721', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'dinoERC721',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'call_',
        internalType: 'struct DinoAccount.Call',
        type: 'tuple',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'execute',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct DinoAccount.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'executeBatch',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'result', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Executed',
  },
  {
    type: 'error',
    inputs: [{ name: 'returndata', internalType: 'bytes', type: 'bytes' }],
    name: 'CallFailed',
  },
  {
    type: 'error',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'NotDinoOwner',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const dinoErc721Abi = [
  {
    type: 'constructor',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenIdsIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
] as const

/**
 *
 */
export const dinoErc721Address = {
  31337: '0x12C67B9F0aE14dAAC4a28120F9a8b712c71CA90a',
} as const

/**
 *
 */
export const dinoErc721Config = {
  address: dinoErc721Address,
  abi: dinoErc721Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const dinoFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_dinoERC721',
        internalType: 'contract DinoERC721',
        type: 'address',
      },
      {
        name: '_dinoGenesis',
        internalType: 'contract DinoGenesis',
        type: 'address',
      },
      {
        name: '_dinoProfile',
        internalType: 'contract DinoProfile',
        type: 'address',
      },
      {
        name: '_dinoStatus',
        internalType: 'contract DinoStatus',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoERC721',
    outputs: [
      { name: '', internalType: 'contract DinoERC721', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoGenesis',
    outputs: [
      { name: '', internalType: 'contract DinoGenesis', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoProfile',
    outputs: [
      { name: '', internalType: 'contract DinoProfile', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoStatus',
    outputs: [
      { name: '', internalType: 'contract DinoStatus', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getDino',
    outputs: [
      {
        name: 'dino',
        internalType: 'struct DinoFactory.Dino',
        type: 'tuple',
        components: [
          { name: 'dinoId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'dinoAccount',
            internalType: 'contract DinoAccount',
            type: 'address',
          },
          {
            name: 'dinoGenesis',
            internalType: 'struct DinoGenesis.Genesis',
            type: 'tuple',
            components: [
              { name: '_initialized', internalType: 'bool', type: 'bool' },
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
              {
                name: 'birthTimestamp',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'dinoProfile',
            internalType: 'struct DinoProfile.Profile',
            type: 'tuple',
            components: [
              { name: 'level', internalType: 'uint256', type: 'uint256' },
              { name: 'xp', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'dinoStatus',
            internalType: 'struct DinoStatus.Status',
            type: 'tuple',
            components: [
              { name: 'alive', internalType: 'bool', type: 'bool' },
              { name: 'health', internalType: 'uint256', type: 'uint256' },
              { name: 'hungry', internalType: 'bool', type: 'bool' },
              { name: 'thirsty', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getDinosOfOwner',
    outputs: [
      {
        name: 'dinosOfOwner',
        internalType: 'struct DinoFactory.Dino[]',
        type: 'tuple[]',
        components: [
          { name: 'dinoId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'dinoAccount',
            internalType: 'contract DinoAccount',
            type: 'address',
          },
          {
            name: 'dinoGenesis',
            internalType: 'struct DinoGenesis.Genesis',
            type: 'tuple',
            components: [
              { name: '_initialized', internalType: 'bool', type: 'bool' },
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
              {
                name: 'birthTimestamp',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'dinoProfile',
            internalType: 'struct DinoProfile.Profile',
            type: 'tuple',
            components: [
              { name: 'level', internalType: 'uint256', type: 'uint256' },
              { name: 'xp', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'dinoStatus',
            internalType: 'struct DinoStatus.Status',
            type: 'tuple',
            components: [
              { name: 'alive', internalType: 'bool', type: 'bool' },
              { name: 'health', internalType: 'uint256', type: 'uint256' },
              { name: 'hungry', internalType: 'bool', type: 'bool' },
              { name: 'thirsty', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'genesisDataParams',
        internalType: 'struct DinoGenesis.GenesisParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'dinoId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'dinoAccount',
        internalType: 'contract DinoAccount',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'dinoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'contract DinoAccount',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DinoCreated',
  },
] as const

/**
 *
 */
export const dinoFactoryAddress = {
  31337: '0x704712a90BF4Ba67A7AE986CC8eee68b4548F032',
} as const

/**
 *
 */
export const dinoFactoryConfig = {
  address: dinoFactoryAddress,
  abi: dinoFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoGenesis
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const dinoGenesisAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      {
        name: '_dinoSpeciesRegistry',
        internalType: 'contract SpeciesRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FACTORY_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'genesisOf',
    outputs: [
      { name: '_initialized', internalType: 'bool', type: 'bool' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
      { name: 'birthTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGenesis',
    outputs: [
      {
        name: 'genesis',
        internalType: 'struct DinoGenesis.Genesis',
        type: 'tuple',
        components: [
          { name: '_initialized', internalType: 'bool', type: 'bool' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
          { name: 'birthTimestamp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_dinoId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_genesisParams',
        internalType: 'struct DinoGenesis.GenesisParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'speciesRegistry',
    outputs: [
      { name: '', internalType: 'contract SpeciesRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dinoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'genesis',
        internalType: 'struct DinoGenesis.Genesis',
        type: 'tuple',
        components: [
          { name: '_initialized', internalType: 'bool', type: 'bool' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
          { name: 'birthTimestamp', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: true,
      },
    ],
    name: 'InitializedGenesis',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'GenesisAlreadyInitialized' },
] as const

/**
 *
 */
export const dinoGenesisAddress = {
  31337: '0x2b6191192ad8759B848Ba1A7dFC32500aA32DeB3',
} as const

/**
 *
 */
export const dinoGenesisConfig = {
  address: dinoGenesisAddress,
  abi: dinoGenesisAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoProfile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const dinoProfileAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FACTORY_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProfile',
    outputs: [
      {
        name: 'profile',
        internalType: 'struct DinoProfile.Profile',
        type: 'tuple',
        components: [
          { name: 'level', internalType: 'uint256', type: 'uint256' },
          { name: 'xp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'profileOf',
    outputs: [
      { name: 'level', internalType: 'uint256', type: 'uint256' },
      { name: 'xp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dinoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'InitializedProfile',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

/**
 *
 */
export const dinoProfileAddress = {
  31337: '0xf82624b45112D44a1F47b4c841e9c935097185a1',
} as const

/**
 *
 */
export const dinoProfileConfig = {
  address: dinoProfileAddress,
  abi: dinoProfileAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoStatus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const dinoStatusAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FACTORY_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getStatus',
    outputs: [
      {
        name: 'status',
        internalType: 'struct DinoStatus.Status',
        type: 'tuple',
        components: [
          { name: 'alive', internalType: 'bool', type: 'bool' },
          { name: 'health', internalType: 'uint256', type: 'uint256' },
          { name: 'hungry', internalType: 'bool', type: 'bool' },
          { name: 'thirsty', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'statusOf',
    outputs: [
      { name: 'alive', internalType: 'bool', type: 'bool' },
      { name: 'health', internalType: 'uint256', type: 'uint256' },
      { name: 'hungry', internalType: 'bool', type: 'bool' },
      { name: 'thirsty', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dinoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'InitializedStatus',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

/**
 *
 */
export const dinoStatusAddress = {
  31337: '0x9DD6E2FCd3FB637ABFC63fa96Bf2e4DB39be03c4',
} as const

/**
 *
 */
export const dinoStatusConfig = {
  address: dinoStatusAddress,
  abi: dinoStatusAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newDecimals',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'ERC6909DecimalsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ERC6909NameUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newSymbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ERC6909SymbolUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909TokenSupply
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909TokenSupplyAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EmeraldERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const emeraldErc20Abi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TRANSFER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'UnauthorizedTransferCaller' },
] as const

/**
 *
 */
export const emeraldErc20Address = {
  31337: '0x54c64d5EAD2F5bF6550f4be3aE7721F7422082BC',
} as const

/**
 *
 */
export const emeraldErc20Config = {
  address: emeraldErc20Address,
  abi: emeraldErc20Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6909
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6909Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6909ContentURI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6909ContentUriAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6909Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6909MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6909TokenSupply
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6909TokenSupplyAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ItemsSet0
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const itemsSet0Abi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_id', internalType: 'uint256', type: 'uint256' }],
    name: 'getEquipmentSpec',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemsSet0.EquipmentSpec',
        type: 'tuple',
        components: [
          { name: 'slot', internalType: 'string', type: 'string' },
          { name: 'defense', internalType: 'uint256', type: 'uint256' },
          { name: 'durability', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_id', internalType: 'uint256', type: 'uint256' }],
    name: 'getFoodSpec',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemsSet0.FoodSpec',
        type: 'tuple',
        components: [
          { name: 'weight', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_id', internalType: 'uint256', type: 'uint256' }],
    name: 'getHealSpec',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemsSet0.HealSpec',
        type: 'tuple',
        components: [
          { name: 'healAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'getItem',
    outputs: [
      {
        name: '_itemBase',
        internalType: 'struct ItemsSetBase.ItemBase',
        type: 'tuple',
        components: [
          {
            name: 'rarity',
            internalType: 'enum ItemsSetBase.ItemBaseRarity',
            type: 'uint8',
          },
          {
            name: 'itemType',
            internalType: 'enum ItemsSetBase.ItemBaseType',
            type: 'uint8',
          },
          {
            name: 'trading',
            internalType: 'struct ItemsSetBase.ItemTrading',
            type: 'tuple',
            components: [
              { name: 'tradable', internalType: 'bool', type: 'bool' },
              { name: 'sellable', internalType: 'bool', type: 'bool' },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'usage',
            internalType: 'struct ItemsSetBase.ItemUsage',
            type: 'tuple',
            components: [
              { name: 'destroyOnUse', internalType: 'bool', type: 'bool' },
              { name: 'soulbound', internalType: 'bool', type: 'bool' },
            ],
          },
          {
            name: 'requirements',
            internalType: 'struct ItemsSetBase.ItemRequirements',
            type: 'tuple',
            components: [
              {
                name: 'requiredLevel',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'metadata',
            internalType: 'struct ItemsSetBase.ItemBaseMetadata',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'decimals', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'tagging',
            internalType: 'struct ItemsSetBase.ItemTags',
            type: 'tuple',
            components: [
              { name: 'tags', internalType: 'string[]', type: 'string[]' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_id', internalType: 'uint256', type: 'uint256' }],
    name: 'getQuestSpec',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemsSet0.QuestSpec',
        type: 'tuple',
        components: [
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_id', internalType: 'uint256', type: 'uint256' }],
    name: 'getWeaponSpec',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemsSet0.WeaponSpec',
        type: 'tuple',
        components: [
          { name: 'damage', internalType: 'uint256', type: 'uint256' },
          { name: 'durability', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'itemIdsIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_id', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newDecimals',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'ERC6909DecimalsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ERC6909NameUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newSymbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ERC6909SymbolUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'meta',
        internalType: 'struct ItemsSetBase.ItemBase',
        type: 'tuple',
        components: [
          {
            name: 'rarity',
            internalType: 'enum ItemsSetBase.ItemBaseRarity',
            type: 'uint8',
          },
          {
            name: 'itemType',
            internalType: 'enum ItemsSetBase.ItemBaseType',
            type: 'uint8',
          },
          {
            name: 'trading',
            internalType: 'struct ItemsSetBase.ItemTrading',
            type: 'tuple',
            components: [
              { name: 'tradable', internalType: 'bool', type: 'bool' },
              { name: 'sellable', internalType: 'bool', type: 'bool' },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'usage',
            internalType: 'struct ItemsSetBase.ItemUsage',
            type: 'tuple',
            components: [
              { name: 'destroyOnUse', internalType: 'bool', type: 'bool' },
              { name: 'soulbound', internalType: 'bool', type: 'bool' },
            ],
          },
          {
            name: 'requirements',
            internalType: 'struct ItemsSetBase.ItemRequirements',
            type: 'tuple',
            components: [
              {
                name: 'requiredLevel',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'metadata',
            internalType: 'struct ItemsSetBase.ItemBaseMetadata',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'decimals', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'tagging',
            internalType: 'struct ItemsSetBase.ItemTags',
            type: 'tuple',
            components: [
              { name: 'tags', internalType: 'string[]', type: 'string[]' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'ItemDefined',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidItemId' },
  { type: 'error', inputs: [], name: 'InvalidItemType' },
] as const

/**
 *
 */
export const itemsSet0Address = {
  31337: '0xbA94cCa9bB4C661a6c98a0d8e0D849145A62fD91',
} as const

/**
 *
 */
export const itemsSet0Config = {
  address: itemsSet0Address,
  abi: itemsSet0Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ItemsSetBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const itemsSetBaseAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'getItem',
    outputs: [
      {
        name: '_itemBase',
        internalType: 'struct ItemsSetBase.ItemBase',
        type: 'tuple',
        components: [
          {
            name: 'rarity',
            internalType: 'enum ItemsSetBase.ItemBaseRarity',
            type: 'uint8',
          },
          {
            name: 'itemType',
            internalType: 'enum ItemsSetBase.ItemBaseType',
            type: 'uint8',
          },
          {
            name: 'trading',
            internalType: 'struct ItemsSetBase.ItemTrading',
            type: 'tuple',
            components: [
              { name: 'tradable', internalType: 'bool', type: 'bool' },
              { name: 'sellable', internalType: 'bool', type: 'bool' },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'usage',
            internalType: 'struct ItemsSetBase.ItemUsage',
            type: 'tuple',
            components: [
              { name: 'destroyOnUse', internalType: 'bool', type: 'bool' },
              { name: 'soulbound', internalType: 'bool', type: 'bool' },
            ],
          },
          {
            name: 'requirements',
            internalType: 'struct ItemsSetBase.ItemRequirements',
            type: 'tuple',
            components: [
              {
                name: 'requiredLevel',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'metadata',
            internalType: 'struct ItemsSetBase.ItemBaseMetadata',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'decimals', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'tagging',
            internalType: 'struct ItemsSetBase.ItemTags',
            type: 'tuple',
            components: [
              { name: 'tags', internalType: 'string[]', type: 'string[]' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'itemIdsIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_id', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newDecimals',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'ERC6909DecimalsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ERC6909NameUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'newSymbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ERC6909SymbolUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'meta',
        internalType: 'struct ItemsSetBase.ItemBase',
        type: 'tuple',
        components: [
          {
            name: 'rarity',
            internalType: 'enum ItemsSetBase.ItemBaseRarity',
            type: 'uint8',
          },
          {
            name: 'itemType',
            internalType: 'enum ItemsSetBase.ItemBaseType',
            type: 'uint8',
          },
          {
            name: 'trading',
            internalType: 'struct ItemsSetBase.ItemTrading',
            type: 'tuple',
            components: [
              { name: 'tradable', internalType: 'bool', type: 'bool' },
              { name: 'sellable', internalType: 'bool', type: 'bool' },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'usage',
            internalType: 'struct ItemsSetBase.ItemUsage',
            type: 'tuple',
            components: [
              { name: 'destroyOnUse', internalType: 'bool', type: 'bool' },
              { name: 'soulbound', internalType: 'bool', type: 'bool' },
            ],
          },
          {
            name: 'requirements',
            internalType: 'struct ItemsSetBase.ItemRequirements',
            type: 'tuple',
            components: [
              {
                name: 'requiredLevel',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'metadata',
            internalType: 'struct ItemsSetBase.ItemBaseMetadata',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'decimals', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'tagging',
            internalType: 'struct ItemsSetBase.ItemTags',
            type: 'tuple',
            components: [
              { name: 'tags', internalType: 'string[]', type: 'string[]' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'ItemDefined',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC6909InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC6909InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidItemId' },
  { type: 'error', inputs: [], name: 'InvalidItemType' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobsModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const jobsModuleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      {
        name: '_emerald',
        internalType: 'contract EmeraldERC20',
        type: 'address',
      },
      {
        name: '_dinoFactory',
        internalType: 'contract DinoFactory',
        type: 'address',
      },
      {
        name: '_dinoJobsRegistry',
        internalType: 'contract JobsRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimSalary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoFactory',
    outputs: [
      { name: '', internalType: 'contract DinoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'emerald',
    outputs: [
      { name: '', internalType: 'contract EmeraldERC20', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'jobOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'jobsRegistry',
    outputs: [
      { name: '', internalType: 'contract JobsRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'lastClaimDayStart',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_dinoId', internalType: 'uint256', type: 'uint256' },
      { name: '_jobId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'switchJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'trainingCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'JobSwitched',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'dayIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SalaryClaimed',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'AlreadyClaimed' },
  { type: 'error', inputs: [], name: 'InvalidJobId' },
  { type: 'error', inputs: [], name: 'NoJobAssigned' },
  { type: 'error', inputs: [], name: 'NotDinoAccount' },
  { type: 'error', inputs: [], name: 'PaymentFailed' },
] as const

/**
 *
 */
export const jobsModuleAddress = {
  31337: '0xD79D296e6F50D80a818542D98fc9600E5f19f05a',
} as const

/**
 *
 */
export const jobsModuleConfig = {
  address: jobsModuleAddress,
  abi: jobsModuleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobsRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const jobsRegistryAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_job',
        internalType: 'struct JobsRegistry.Job',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
          { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
          { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    name: 'createJob',
    outputs: [{ name: 'jobId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllJobs',
    outputs: [
      {
        name: 'allJobs',
        internalType: 'struct JobsRegistry.Job[]',
        type: 'tuple[]',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
          { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
          { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_jobId', internalType: 'uint256', type: 'uint256' }],
    name: 'getJob',
    outputs: [
      {
        name: 'job',
        internalType: 'struct JobsRegistry.Job',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
          { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
          { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_jobId', internalType: 'uint256', type: 'uint256' }],
    name: 'jobExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'jobIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'jobIdsIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'jobs',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
      { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
      { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_jobId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_job',
        internalType: 'struct JobsRegistry.Job',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
          { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
          { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    name: 'updateJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'job',
        internalType: 'struct JobsRegistry.Job',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
          { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
          { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
        ],
        indexed: false,
      },
    ],
    name: 'JobCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'job',
        internalType: 'struct JobsRegistry.Job',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'dailyPay', internalType: 'uint256', type: 'uint256' },
          { name: 'trainingCost', internalType: 'uint256', type: 'uint256' },
          { name: 'requiredLevel', internalType: 'uint16', type: 'uint16' },
        ],
        indexed: false,
      },
    ],
    name: 'JobUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'EmptyName' },
  { type: 'error', inputs: [], name: 'InvalidJob' },
  { type: 'error', inputs: [], name: 'InvalidJobId' },
] as const

/**
 *
 */
export const jobsRegistryAddress = {
  31337: '0x3DF7F550DCAC80892feF3E4930eDCa53A4a96b82',
} as const

/**
 *
 */
export const jobsRegistryConfig = {
  address: jobsRegistryAddress,
  abi: jobsRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ModuleBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const moduleBaseAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoFactory',
    outputs: [
      { name: '', internalType: 'contract DinoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'NotDinoAccount' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShopModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const shopModuleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      {
        name: '_emerald',
        internalType: 'contract EmeraldERC20',
        type: 'address',
      },
      {
        name: '_dinoFactory',
        internalType: 'contract DinoFactory',
        type: 'address',
      },
      {
        name: '_items',
        internalType: 'contract ItemsSetBase',
        type: 'address',
      },
      { name: '_treasury', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_dinoId', internalType: 'uint256', type: 'uint256' },
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoFactory',
    outputs: [
      { name: '', internalType: 'contract DinoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'emerald',
    outputs: [
      { name: '', internalType: 'contract EmeraldERC20', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'items',
    outputs: [
      { name: '', internalType: 'contract ItemsSetBase', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'treasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ItemPurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'treasury',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TreasuryUpdated',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'InvalidAmount' },
  { type: 'error', inputs: [], name: 'ItemNotPriced' },
  { type: 'error', inputs: [], name: 'NotDinoAccount' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const

/**
 *
 */
export const shopModuleAddress = {
  31337: '0xBA1B4883393fB695A9C27088a7252de8a9505635',
} as const

/**
 *
 */
export const shopModuleConfig = {
  address: shopModuleAddress,
  abi: shopModuleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SpeciesRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const speciesRegistryAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_species',
        internalType: 'struct SpeciesRegistry.Species',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct SpeciesRegistry.Stats',
            type: 'tuple',
            components: [
              { name: 'force', internalType: 'uint8', type: 'uint8' },
              { name: 'endurance', internalType: 'uint8', type: 'uint8' },
              { name: 'agility', internalType: 'uint8', type: 'uint8' },
              { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
      },
    ],
    name: 'createSpecies',
    outputs: [{ name: 'speciesId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllSpecies',
    outputs: [
      {
        name: 'allSpecies',
        internalType: 'struct SpeciesRegistry.Species[]',
        type: 'tuple[]',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct SpeciesRegistry.Stats',
            type: 'tuple',
            components: [
              { name: 'force', internalType: 'uint8', type: 'uint8' },
              { name: 'endurance', internalType: 'uint8', type: 'uint8' },
              { name: 'agility', internalType: 'uint8', type: 'uint8' },
              { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_speciesId', internalType: 'uint256', type: 'uint256' }],
    name: 'getSpecies',
    outputs: [
      {
        name: 'species',
        internalType: 'struct SpeciesRegistry.Species',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct SpeciesRegistry.Stats',
            type: 'tuple',
            components: [
              { name: 'force', internalType: 'uint8', type: 'uint8' },
              { name: 'endurance', internalType: 'uint8', type: 'uint8' },
              { name: 'agility', internalType: 'uint8', type: 'uint8' },
              { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_speciesId', internalType: 'uint256', type: 'uint256' }],
    name: 'speciesExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'speciesIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'speciesIdsIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'speciesRegistry',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'stats',
        internalType: 'struct SpeciesRegistry.Stats',
        type: 'tuple',
        components: [
          { name: 'force', internalType: 'uint8', type: 'uint8' },
          { name: 'endurance', internalType: 'uint8', type: 'uint8' },
          { name: 'agility', internalType: 'uint8', type: 'uint8' },
          { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_speciesId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_species',
        internalType: 'struct SpeciesRegistry.Species',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct SpeciesRegistry.Stats',
            type: 'tuple',
            components: [
              { name: 'force', internalType: 'uint8', type: 'uint8' },
              { name: 'endurance', internalType: 'uint8', type: 'uint8' },
              { name: 'agility', internalType: 'uint8', type: 'uint8' },
              { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
      },
    ],
    name: 'updateSpecies',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'speciesId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'species',
        internalType: 'struct SpeciesRegistry.Species',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct SpeciesRegistry.Stats',
            type: 'tuple',
            components: [
              { name: 'force', internalType: 'uint8', type: 'uint8' },
              { name: 'endurance', internalType: 'uint8', type: 'uint8' },
              { name: 'agility', internalType: 'uint8', type: 'uint8' },
              { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'SpeciesCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'speciesId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'species',
        internalType: 'struct SpeciesRegistry.Species',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct SpeciesRegistry.Stats',
            type: 'tuple',
            components: [
              { name: 'force', internalType: 'uint8', type: 'uint8' },
              { name: 'endurance', internalType: 'uint8', type: 'uint8' },
              { name: 'agility', internalType: 'uint8', type: 'uint8' },
              { name: 'intelligence', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'SpeciesUpdated',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'EmptyName' },
  { type: 'error', inputs: [], name: 'InvalidSpecies' },
  { type: 'error', inputs: [], name: 'InvalidSpeciesId' },
] as const

/**
 *
 */
export const speciesRegistryAddress = {
  31337: '0x92a53dB9AD485269Dd7bd3e6FfA1f9AC637c1F65',
} as const

/**
 *
 */
export const speciesRegistryConfig = {
  address: speciesRegistryAddress,
  abi: speciesRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  { type: 'error', inputs: [], name: 'StringsInvalidAddressFormat' },
  { type: 'error', inputs: [], name: 'StringsInvalidChar' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl = /*#__PURE__*/ createUseSimulateContract(
  { abi: accessControlAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoAccountAbi}__
 */
export const useReadDinoAccount = /*#__PURE__*/ createUseReadContract({
  abi: dinoAccountAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"dinoERC721"`
 */
export const useReadDinoAccountDinoErc721 = /*#__PURE__*/ createUseReadContract(
  { abi: dinoAccountAbi, functionName: 'dinoERC721' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"dinoFactory"`
 */
export const useReadDinoAccountDinoFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoAccountAbi,
    functionName: 'dinoFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"dinoId"`
 */
export const useReadDinoAccountDinoId = /*#__PURE__*/ createUseReadContract({
  abi: dinoAccountAbi,
  functionName: 'dinoId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoAccountAbi}__
 */
export const useWriteDinoAccount = /*#__PURE__*/ createUseWriteContract({
  abi: dinoAccountAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteDinoAccountExecute = /*#__PURE__*/ createUseWriteContract({
  abi: dinoAccountAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useWriteDinoAccountExecuteBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoAccountAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoAccountAbi}__
 */
export const useSimulateDinoAccount = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoAccountAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateDinoAccountExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoAccountAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useSimulateDinoAccountExecuteBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoAccountAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoAccountAbi}__
 */
export const useWatchDinoAccountEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: dinoAccountAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoAccountAbi}__ and `eventName` set to `"Executed"`
 */
export const useWatchDinoAccountExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoAccountAbi,
    eventName: 'Executed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__
 *
 *
 */
export const useReadDinoErc721 = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadDinoErc721DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"MINTER_ROLE"`
 *
 *
 */
export const useReadDinoErc721MinterRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'MINTER_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useReadDinoErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"getApproved"`
 *
 *
 */
export const useReadDinoErc721GetApproved = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'getApproved',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadDinoErc721GetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadDinoErc721HasRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 *
 *
 */
export const useReadDinoErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useReadDinoErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"ownerOf"`
 *
 *
 */
export const useReadDinoErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadDinoErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useReadDinoErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenByIndex"`
 *
 *
 */
export const useReadDinoErc721TokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenIdsIndex"`
 *
 *
 */
export const useReadDinoErc721TokenIdsIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'tokenIdsIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 *
 */
export const useReadDinoErc721TokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenURI"`
 *
 *
 */
export const useReadDinoErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useReadDinoErc721TotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__
 *
 *
 */
export const useWriteDinoErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteDinoErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteDinoErc721GrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: dinoErc721Abi, address: dinoErc721Address, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useWriteDinoErc721Mint = /*#__PURE__*/ createUseWriteContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteDinoErc721RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteDinoErc721RevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 *
 *
 */
export const useWriteDinoErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 *
 *
 */
export const useWriteDinoErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteDinoErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__
 *
 *
 */
export const useSimulateDinoErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useSimulateDinoErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateDinoErc721GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useSimulateDinoErc721Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateDinoErc721RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateDinoErc721RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 *
 *
 */
export const useSimulateDinoErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 *
 *
 */
export const useSimulateDinoErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useSimulateDinoErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__
 *
 *
 */
export const useWatchDinoErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"Approval"`
 *
 *
 */
export const useWatchDinoErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 *
 *
 */
export const useWatchDinoErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchDinoErc721RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchDinoErc721RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchDinoErc721RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"Transfer"`
 *
 *
 */
export const useWatchDinoErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__
 *
 *
 */
export const useReadDinoFactory = /*#__PURE__*/ createUseReadContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"dinoERC721"`
 *
 *
 */
export const useReadDinoFactoryDinoErc721 = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'dinoERC721',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"dinoGenesis"`
 *
 *
 */
export const useReadDinoFactoryDinoGenesis =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'dinoGenesis',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"dinoProfile"`
 *
 *
 */
export const useReadDinoFactoryDinoProfile =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'dinoProfile',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"dinoStatus"`
 *
 *
 */
export const useReadDinoFactoryDinoStatus = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'dinoStatus',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"getDino"`
 *
 *
 */
export const useReadDinoFactoryGetDino = /*#__PURE__*/ createUseReadContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
  functionName: 'getDino',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"getDinosOfOwner"`
 *
 *
 */
export const useReadDinoFactoryGetDinosOfOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'getDinosOfOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoFactoryAbi}__
 *
 *
 */
export const useWriteDinoFactory = /*#__PURE__*/ createUseWriteContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useWriteDinoFactoryMint = /*#__PURE__*/ createUseWriteContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoFactoryAbi}__
 *
 *
 */
export const useSimulateDinoFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useSimulateDinoFactoryMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoFactoryAbi}__
 *
 *
 */
export const useWatchDinoFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoFactoryAbi}__ and `eventName` set to `"DinoCreated"`
 *
 *
 */
export const useWatchDinoFactoryDinoCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    eventName: 'DinoCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__
 *
 *
 */
export const useReadDinoGenesis = /*#__PURE__*/ createUseReadContract({
  abi: dinoGenesisAbi,
  address: dinoGenesisAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadDinoGenesisDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"FACTORY_ROLE"`
 *
 *
 */
export const useReadDinoGenesisFactoryRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'FACTORY_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"genesisOf"`
 *
 *
 */
export const useReadDinoGenesisGenesisOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoGenesisAbi,
  address: dinoGenesisAddress,
  functionName: 'genesisOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"getGenesis"`
 *
 *
 */
export const useReadDinoGenesisGetGenesis = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'getGenesis',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadDinoGenesisGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadDinoGenesisHasRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoGenesisAbi,
  address: dinoGenesisAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"speciesRegistry"`
 *
 *
 */
export const useReadDinoGenesisSpeciesRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'speciesRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadDinoGenesisSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoGenesisAbi}__
 *
 *
 */
export const useWriteDinoGenesis = /*#__PURE__*/ createUseWriteContract({
  abi: dinoGenesisAbi,
  address: dinoGenesisAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteDinoGenesisGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useWriteDinoGenesisInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteDinoGenesisRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteDinoGenesisRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoGenesisAbi}__
 *
 *
 */
export const useSimulateDinoGenesis = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoGenesisAbi,
  address: dinoGenesisAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateDinoGenesisGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useSimulateDinoGenesisInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateDinoGenesisRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoGenesisAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateDinoGenesisRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoGenesisAbi}__
 *
 *
 */
export const useWatchDinoGenesisEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoGenesisAbi}__ and `eventName` set to `"InitializedGenesis"`
 *
 *
 */
export const useWatchDinoGenesisInitializedGenesisEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    eventName: 'InitializedGenesis',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoGenesisAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchDinoGenesisRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoGenesisAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchDinoGenesisRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoGenesisAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchDinoGenesisRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoGenesisAbi,
    address: dinoGenesisAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__
 *
 *
 */
export const useReadDinoProfile = /*#__PURE__*/ createUseReadContract({
  abi: dinoProfileAbi,
  address: dinoProfileAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadDinoProfileDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"FACTORY_ROLE"`
 *
 *
 */
export const useReadDinoProfileFactoryRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'FACTORY_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"getProfile"`
 *
 *
 */
export const useReadDinoProfileGetProfile = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'getProfile',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadDinoProfileGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadDinoProfileHasRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoProfileAbi,
  address: dinoProfileAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"profileOf"`
 *
 *
 */
export const useReadDinoProfileProfileOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoProfileAbi,
  address: dinoProfileAddress,
  functionName: 'profileOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadDinoProfileSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoProfileAbi}__
 *
 *
 */
export const useWriteDinoProfile = /*#__PURE__*/ createUseWriteContract({
  abi: dinoProfileAbi,
  address: dinoProfileAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteDinoProfileGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useWriteDinoProfileInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteDinoProfileRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteDinoProfileRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoProfileAbi}__
 *
 *
 */
export const useSimulateDinoProfile = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoProfileAbi,
  address: dinoProfileAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateDinoProfileGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useSimulateDinoProfileInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateDinoProfileRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoProfileAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateDinoProfileRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoProfileAbi}__
 *
 *
 */
export const useWatchDinoProfileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoProfileAbi}__ and `eventName` set to `"InitializedProfile"`
 *
 *
 */
export const useWatchDinoProfileInitializedProfileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    eventName: 'InitializedProfile',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoProfileAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchDinoProfileRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoProfileAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchDinoProfileRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoProfileAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchDinoProfileRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoProfileAbi,
    address: dinoProfileAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__
 *
 *
 */
export const useReadDinoStatus = /*#__PURE__*/ createUseReadContract({
  abi: dinoStatusAbi,
  address: dinoStatusAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadDinoStatusDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"FACTORY_ROLE"`
 *
 *
 */
export const useReadDinoStatusFactoryRole = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'FACTORY_ROLE',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadDinoStatusGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"getStatus"`
 *
 *
 */
export const useReadDinoStatusGetStatus = /*#__PURE__*/ createUseReadContract({
  abi: dinoStatusAbi,
  address: dinoStatusAddress,
  functionName: 'getStatus',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadDinoStatusHasRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoStatusAbi,
  address: dinoStatusAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"statusOf"`
 *
 *
 */
export const useReadDinoStatusStatusOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoStatusAbi,
  address: dinoStatusAddress,
  functionName: 'statusOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadDinoStatusSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoStatusAbi}__
 *
 *
 */
export const useWriteDinoStatus = /*#__PURE__*/ createUseWriteContract({
  abi: dinoStatusAbi,
  address: dinoStatusAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteDinoStatusGrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: dinoStatusAbi, address: dinoStatusAddress, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useWriteDinoStatusInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteDinoStatusRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteDinoStatusRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoStatusAbi}__
 *
 *
 */
export const useSimulateDinoStatus = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoStatusAbi,
  address: dinoStatusAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateDinoStatusGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useSimulateDinoStatusInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateDinoStatusRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoStatusAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateDinoStatusRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoStatusAbi}__
 *
 *
 */
export const useWatchDinoStatusEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoStatusAbi}__ and `eventName` set to `"InitializedStatus"`
 *
 *
 */
export const useWatchDinoStatusInitializedStatusEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    eventName: 'InitializedStatus',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoStatusAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchDinoStatusRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoStatusAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchDinoStatusRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoStatusAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchDinoStatusRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoStatusAbi,
    address: dinoStatusAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909Abi}__
 */
export const useReadErc6909 = /*#__PURE__*/ createUseReadContract({
  abi: erc6909Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc6909Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc6909Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc6909BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc6909Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"isOperator"`
 */
export const useReadErc6909IsOperator = /*#__PURE__*/ createUseReadContract({
  abi: erc6909Abi,
  functionName: 'isOperator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc6909SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909Abi}__
 */
export const useWriteErc6909 = /*#__PURE__*/ createUseWriteContract({
  abi: erc6909Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc6909Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc6909Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteErc6909SetOperator = /*#__PURE__*/ createUseWriteContract({
  abi: erc6909Abi,
  functionName: 'setOperator',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc6909Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc6909Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc6909TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: erc6909Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909Abi}__
 */
export const useSimulateErc6909 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc6909Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc6909Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateErc6909SetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909Abi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc6909Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc6909TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909Abi}__
 */
export const useWatchErc6909Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc6909Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc6909ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909Abi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchErc6909OperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909Abi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc6909TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__
 */
export const useReadErc6909Metadata = /*#__PURE__*/ createUseReadContract({
  abi: erc6909MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc6909MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc6909MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc6909MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadErc6909MetadataIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909MetadataAbi,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc6909MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: erc6909MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc6909MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc6909MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: erc6909MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909MetadataAbi}__
 */
export const useWriteErc6909Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: erc6909MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc6909MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteErc6909MetadataSetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909MetadataAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc6909MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc6909MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909MetadataAbi}__
 */
export const useSimulateErc6909Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc6909MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc6909MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateErc6909MetadataSetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909MetadataAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc6909MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc6909MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__
 */
export const useWatchErc6909MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc6909MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc6909MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `eventName` set to `"ERC6909DecimalsUpdated"`
 */
export const useWatchErc6909MetadataErc6909DecimalsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909MetadataAbi,
    eventName: 'ERC6909DecimalsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `eventName` set to `"ERC6909NameUpdated"`
 */
export const useWatchErc6909MetadataErc6909NameUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909MetadataAbi,
    eventName: 'ERC6909NameUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `eventName` set to `"ERC6909SymbolUpdated"`
 */
export const useWatchErc6909MetadataErc6909SymbolUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909MetadataAbi,
    eventName: 'ERC6909SymbolUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchErc6909MetadataOperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909MetadataAbi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc6909MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__
 */
export const useReadErc6909TokenSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc6909TokenSupplyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc6909TokenSupplyAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc6909TokenSupplyBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadErc6909TokenSupplyIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc6909TokenSupplySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc6909TokenSupplyTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__
 */
export const useWriteErc6909TokenSupply = /*#__PURE__*/ createUseWriteContract({
  abi: erc6909TokenSupplyAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc6909TokenSupplyApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteErc6909TokenSupplySetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc6909TokenSupplyTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc6909TokenSupplyTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__
 */
export const useSimulateErc6909TokenSupply =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc6909TokenSupplyAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc6909TokenSupplyApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateErc6909TokenSupplySetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc6909TokenSupplyTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc6909TokenSupplyTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc6909TokenSupplyAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__
 */
export const useWatchErc6909TokenSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc6909TokenSupplyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc6909TokenSupplyApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909TokenSupplyAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchErc6909TokenSupplyOperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909TokenSupplyAbi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc6909TokenSupplyAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc6909TokenSupplyTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc6909TokenSupplyAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useReadErc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc721EnumerableName = /*#__PURE__*/ createUseReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721EnumerableSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadErc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721EnumerableTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useWriteErc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useSimulateErc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useWatchErc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__
 *
 *
 */
export const useReadEmeraldErc20 = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEmeraldErc20DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"MINTER_ROLE"`
 *
 *
 */
export const useReadEmeraldErc20MinterRole =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'MINTER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"TRANSFER_ROLE"`
 *
 *
 */
export const useReadEmeraldErc20TransferRole =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'TRANSFER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useReadEmeraldErc20Allowance = /*#__PURE__*/ createUseReadContract(
  {
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'allowance',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useReadEmeraldErc20BalanceOf = /*#__PURE__*/ createUseReadContract(
  {
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'balanceOf',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useReadEmeraldErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEmeraldErc20GetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEmeraldErc20HasRole = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useReadEmeraldErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEmeraldErc20SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useReadEmeraldErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useReadEmeraldErc20TotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__
 *
 *
 */
export const useWriteEmeraldErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteEmeraldErc20Approve = /*#__PURE__*/ createUseWriteContract(
  {
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'approve',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEmeraldErc20GrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useWriteEmeraldErc20Mint = /*#__PURE__*/ createUseWriteContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEmeraldErc20RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEmeraldErc20RevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteEmeraldErc20Transfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteEmeraldErc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__
 *
 *
 */
export const useSimulateEmeraldErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useSimulateEmeraldErc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEmeraldErc20GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useSimulateEmeraldErc20Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEmeraldErc20RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEmeraldErc20RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useSimulateEmeraldErc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useSimulateEmeraldErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__
 *
 *
 */
export const useWatchEmeraldErc20Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"Approval"`
 *
 *
 */
export const useWatchEmeraldErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEmeraldErc20RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEmeraldErc20RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEmeraldErc20RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"Transfer"`
 *
 *
 */
export const useWatchEmeraldErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: iAccessControlAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909Abi}__
 */
export const useReadIerc6909 = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc6909Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc6909BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"isOperator"`
 */
export const useReadIerc6909IsOperator = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909Abi,
  functionName: 'isOperator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc6909SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909Abi}__
 */
export const useWriteIerc6909 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc6909Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc6909Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc6909Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteIerc6909SetOperator = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc6909Abi, functionName: 'setOperator' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc6909Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc6909Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc6909TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909Abi}__
 */
export const useSimulateIerc6909 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc6909Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc6909Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateIerc6909SetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909Abi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc6909Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc6909TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909Abi}__
 */
export const useWatchIerc6909Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc6909Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc6909ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909Abi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchIerc6909OperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909Abi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc6909TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__
 */
export const useReadIerc6909ContentUri = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909ContentUriAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc6909ContentUriAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc6909ContentUriBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadIerc6909ContentUriContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadIerc6909ContentUriIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc6909ContentUriSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc6909ContentUriTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__
 */
export const useWriteIerc6909ContentUri = /*#__PURE__*/ createUseWriteContract({
  abi: ierc6909ContentUriAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc6909ContentUriApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteIerc6909ContentUriSetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc6909ContentUriTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc6909ContentUriTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__
 */
export const useSimulateIerc6909ContentUri =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc6909ContentUriAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc6909ContentUriApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateIerc6909ContentUriSetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc6909ContentUriTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc6909ContentUriTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909ContentUriAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909ContentUriAbi}__
 */
export const useWatchIerc6909ContentUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc6909ContentUriAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc6909ContentUriApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909ContentUriAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchIerc6909ContentUriOperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909ContentUriAbi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909ContentUriAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc6909ContentUriTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909ContentUriAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__
 */
export const useReadIerc6909Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc6909MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc6909MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc6909MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadIerc6909MetadataIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909MetadataAbi,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc6909MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc6909MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc6909MetadataSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909MetadataAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__
 */
export const useWriteIerc6909Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc6909MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc6909MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteIerc6909MetadataSetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909MetadataAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc6909MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc6909MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__
 */
export const useSimulateIerc6909Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc6909MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc6909MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateIerc6909MetadataSetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909MetadataAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc6909MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc6909MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909MetadataAbi}__
 */
export const useWatchIerc6909MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc6909MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc6909MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchIerc6909MetadataOperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909MetadataAbi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc6909MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__
 */
export const useReadIerc6909TokenSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc6909TokenSupplyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc6909TokenSupplyAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc6909TokenSupplyBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadIerc6909TokenSupplyIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc6909TokenSupplySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc6909TokenSupplyTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__
 */
export const useWriteIerc6909TokenSupply = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc6909TokenSupplyAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc6909TokenSupplyApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteIerc6909TokenSupplySetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc6909TokenSupplyTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc6909TokenSupplyTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__
 */
export const useSimulateIerc6909TokenSupply =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc6909TokenSupplyAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc6909TokenSupplyApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateIerc6909TokenSupplySetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc6909TokenSupplyTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc6909TokenSupplyTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc6909TokenSupplyAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__
 */
export const useWatchIerc6909TokenSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc6909TokenSupplyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc6909TokenSupplyApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909TokenSupplyAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchIerc6909TokenSupplyOperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909TokenSupplyAbi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc6909TokenSupplyAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc6909TokenSupplyTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc6909TokenSupplyAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useReadIerc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadIerc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadIerc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWriteIerc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useSimulateIerc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWatchIerc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__
 *
 *
 */
export const useReadItemsSet0 = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadItemsSet0DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"MINTER_ROLE"`
 *
 *
 */
export const useReadItemsSet0MinterRole = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'MINTER_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useReadItemsSet0Allowance = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useReadItemsSet0BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useReadItemsSet0Decimals = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getEquipmentSpec"`
 *
 *
 */
export const useReadItemsSet0GetEquipmentSpec =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'getEquipmentSpec',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getFoodSpec"`
 *
 *
 */
export const useReadItemsSet0GetFoodSpec = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'getFoodSpec',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getHealSpec"`
 *
 *
 */
export const useReadItemsSet0GetHealSpec = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'getHealSpec',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getItem"`
 *
 *
 */
export const useReadItemsSet0GetItem = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'getItem',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getQuestSpec"`
 *
 *
 */
export const useReadItemsSet0GetQuestSpec = /*#__PURE__*/ createUseReadContract(
  {
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'getQuestSpec',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadItemsSet0GetRoleAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'getRoleAdmin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"getWeaponSpec"`
 *
 *
 */
export const useReadItemsSet0GetWeaponSpec =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'getWeaponSpec',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadItemsSet0HasRole = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"isOperator"`
 *
 *
 */
export const useReadItemsSet0IsOperator = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'isOperator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"itemIdsIndex"`
 *
 *
 */
export const useReadItemsSet0ItemIdsIndex = /*#__PURE__*/ createUseReadContract(
  {
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'itemIdsIndex',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useReadItemsSet0Name = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadItemsSet0SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useReadItemsSet0Symbol = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useReadItemsSet0TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__
 *
 *
 */
export const useWriteItemsSet0 = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteItemsSet0Approve = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteItemsSet0GrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useWriteItemsSet0Mint = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteItemsSet0RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteItemsSet0RevokeRole = /*#__PURE__*/ createUseWriteContract(
  { abi: itemsSet0Abi, address: itemsSet0Address, functionName: 'revokeRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"setOperator"`
 *
 *
 */
export const useWriteItemsSet0SetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteItemsSet0Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteItemsSet0TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__
 *
 *
 */
export const useSimulateItemsSet0 = /*#__PURE__*/ createUseSimulateContract({
  abi: itemsSet0Abi,
  address: itemsSet0Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useSimulateItemsSet0Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateItemsSet0GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useSimulateItemsSet0Mint = /*#__PURE__*/ createUseSimulateContract(
  { abi: itemsSet0Abi, address: itemsSet0Address, functionName: 'mint' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateItemsSet0RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateItemsSet0RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"setOperator"`
 *
 *
 */
export const useSimulateItemsSet0SetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useSimulateItemsSet0Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSet0Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useSimulateItemsSet0TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__
 *
 *
 */
export const useWatchItemsSet0Event = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: itemsSet0Abi, address: itemsSet0Address },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"Approval"`
 *
 *
 */
export const useWatchItemsSet0ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"ERC6909DecimalsUpdated"`
 *
 *
 */
export const useWatchItemsSet0Erc6909DecimalsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'ERC6909DecimalsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"ERC6909NameUpdated"`
 *
 *
 */
export const useWatchItemsSet0Erc6909NameUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'ERC6909NameUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"ERC6909SymbolUpdated"`
 *
 *
 */
export const useWatchItemsSet0Erc6909SymbolUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'ERC6909SymbolUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"ItemDefined"`
 *
 *
 */
export const useWatchItemsSet0ItemDefinedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'ItemDefined',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"OperatorSet"`
 *
 *
 */
export const useWatchItemsSet0OperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchItemsSet0RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchItemsSet0RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchItemsSet0RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSet0Abi}__ and `eventName` set to `"Transfer"`
 *
 *
 */
export const useWatchItemsSet0TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSet0Abi,
    address: itemsSet0Address,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__
 */
export const useReadItemsSetBase = /*#__PURE__*/ createUseReadContract({
  abi: itemsSetBaseAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadItemsSetBaseDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"MINTER_ROLE"`
 */
export const useReadItemsSetBaseMinterRole =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'MINTER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadItemsSetBaseAllowance = /*#__PURE__*/ createUseReadContract(
  { abi: itemsSetBaseAbi, functionName: 'allowance' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadItemsSetBaseBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: itemsSetBaseAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadItemsSetBaseDecimals = /*#__PURE__*/ createUseReadContract({
  abi: itemsSetBaseAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"getItem"`
 */
export const useReadItemsSetBaseGetItem = /*#__PURE__*/ createUseReadContract({
  abi: itemsSetBaseAbi,
  functionName: 'getItem',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadItemsSetBaseGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadItemsSetBaseHasRole = /*#__PURE__*/ createUseReadContract({
  abi: itemsSetBaseAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadItemsSetBaseIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"itemIdsIndex"`
 */
export const useReadItemsSetBaseItemIdsIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'itemIdsIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"name"`
 */
export const useReadItemsSetBaseName = /*#__PURE__*/ createUseReadContract({
  abi: itemsSetBaseAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadItemsSetBaseSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadItemsSetBaseSymbol = /*#__PURE__*/ createUseReadContract({
  abi: itemsSetBaseAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadItemsSetBaseTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: itemsSetBaseAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__
 */
export const useWriteItemsSetBase = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSetBaseAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteItemsSetBaseApprove = /*#__PURE__*/ createUseWriteContract(
  { abi: itemsSetBaseAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteItemsSetBaseGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSetBaseAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteItemsSetBaseMint = /*#__PURE__*/ createUseWriteContract({
  abi: itemsSetBaseAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteItemsSetBaseRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSetBaseAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteItemsSetBaseRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSetBaseAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"setOperator"`
 */
export const useWriteItemsSetBaseSetOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSetBaseAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteItemsSetBaseTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSetBaseAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteItemsSetBaseTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: itemsSetBaseAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__
 */
export const useSimulateItemsSetBase = /*#__PURE__*/ createUseSimulateContract({
  abi: itemsSetBaseAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateItemsSetBaseApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateItemsSetBaseGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateItemsSetBaseMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateItemsSetBaseRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateItemsSetBaseRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"setOperator"`
 */
export const useSimulateItemsSetBaseSetOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'setOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateItemsSetBaseTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateItemsSetBaseTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: itemsSetBaseAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__
 */
export const useWatchItemsSetBaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: itemsSetBaseAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchItemsSetBaseApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"ERC6909DecimalsUpdated"`
 */
export const useWatchItemsSetBaseErc6909DecimalsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'ERC6909DecimalsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"ERC6909NameUpdated"`
 */
export const useWatchItemsSetBaseErc6909NameUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'ERC6909NameUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"ERC6909SymbolUpdated"`
 */
export const useWatchItemsSetBaseErc6909SymbolUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'ERC6909SymbolUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"ItemDefined"`
 */
export const useWatchItemsSetBaseItemDefinedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'ItemDefined',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"OperatorSet"`
 */
export const useWatchItemsSetBaseOperatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'OperatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchItemsSetBaseRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchItemsSetBaseRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchItemsSetBaseRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link itemsSetBaseAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchItemsSetBaseTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: itemsSetBaseAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__
 *
 *
 */
export const useReadJobsModule = /*#__PURE__*/ createUseReadContract({
  abi: jobsModuleAbi,
  address: jobsModuleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadJobsModuleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"dinoFactory"`
 *
 *
 */
export const useReadJobsModuleDinoFactory = /*#__PURE__*/ createUseReadContract(
  {
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'dinoFactory',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"emerald"`
 *
 *
 */
export const useReadJobsModuleEmerald = /*#__PURE__*/ createUseReadContract({
  abi: jobsModuleAbi,
  address: jobsModuleAddress,
  functionName: 'emerald',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadJobsModuleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadJobsModuleHasRole = /*#__PURE__*/ createUseReadContract({
  abi: jobsModuleAbi,
  address: jobsModuleAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"jobOf"`
 *
 *
 */
export const useReadJobsModuleJobOf = /*#__PURE__*/ createUseReadContract({
  abi: jobsModuleAbi,
  address: jobsModuleAddress,
  functionName: 'jobOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"jobsRegistry"`
 *
 *
 */
export const useReadJobsModuleJobsRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'jobsRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"lastClaimDayStart"`
 *
 *
 */
export const useReadJobsModuleLastClaimDayStart =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'lastClaimDayStart',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadJobsModuleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsModuleAbi}__
 *
 *
 */
export const useWriteJobsModule = /*#__PURE__*/ createUseWriteContract({
  abi: jobsModuleAbi,
  address: jobsModuleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"claimSalary"`
 *
 *
 */
export const useWriteJobsModuleClaimSalary =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'claimSalary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteJobsModuleGrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: jobsModuleAbi, address: jobsModuleAddress, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteJobsModuleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteJobsModuleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"switchJob"`
 *
 *
 */
export const useWriteJobsModuleSwitchJob = /*#__PURE__*/ createUseWriteContract(
  { abi: jobsModuleAbi, address: jobsModuleAddress, functionName: 'switchJob' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsModuleAbi}__
 *
 *
 */
export const useSimulateJobsModule = /*#__PURE__*/ createUseSimulateContract({
  abi: jobsModuleAbi,
  address: jobsModuleAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"claimSalary"`
 *
 *
 */
export const useSimulateJobsModuleClaimSalary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'claimSalary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateJobsModuleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateJobsModuleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateJobsModuleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsModuleAbi}__ and `functionName` set to `"switchJob"`
 *
 *
 */
export const useSimulateJobsModuleSwitchJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    functionName: 'switchJob',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsModuleAbi}__
 *
 *
 */
export const useWatchJobsModuleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsModuleAbi}__ and `eventName` set to `"JobSwitched"`
 *
 *
 */
export const useWatchJobsModuleJobSwitchedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    eventName: 'JobSwitched',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsModuleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchJobsModuleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsModuleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchJobsModuleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsModuleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchJobsModuleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsModuleAbi}__ and `eventName` set to `"SalaryClaimed"`
 *
 *
 */
export const useWatchJobsModuleSalaryClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsModuleAbi,
    address: jobsModuleAddress,
    eventName: 'SalaryClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__
 *
 *
 */
export const useReadJobsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadJobsRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"getAllJobs"`
 *
 *
 */
export const useReadJobsRegistryGetAllJobs =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'getAllJobs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"getJob"`
 *
 *
 */
export const useReadJobsRegistryGetJob = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'getJob',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadJobsRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadJobsRegistryHasRole = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"jobExists"`
 *
 *
 */
export const useReadJobsRegistryJobExists = /*#__PURE__*/ createUseReadContract(
  {
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'jobExists',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"jobIds"`
 *
 *
 */
export const useReadJobsRegistryJobIds = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'jobIds',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"jobIdsIndex"`
 *
 *
 */
export const useReadJobsRegistryJobIdsIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'jobIdsIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"jobs"`
 *
 *
 */
export const useReadJobsRegistryJobs = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'jobs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadJobsRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__
 *
 *
 */
export const useWriteJobsRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"createJob"`
 *
 *
 */
export const useWriteJobsRegistryCreateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'createJob',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteJobsRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteJobsRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteJobsRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"updateJob"`
 *
 *
 */
export const useWriteJobsRegistryUpdateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'updateJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__
 *
 *
 */
export const useSimulateJobsRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"createJob"`
 *
 *
 */
export const useSimulateJobsRegistryCreateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'createJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateJobsRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateJobsRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateJobsRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"updateJob"`
 *
 *
 */
export const useSimulateJobsRegistryUpdateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'updateJob',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__
 *
 *
 */
export const useWatchJobsRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"JobCreated"`
 *
 *
 */
export const useWatchJobsRegistryJobCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'JobCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"JobUpdated"`
 *
 *
 */
export const useWatchJobsRegistryJobUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'JobUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchJobsRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchJobsRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchJobsRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link moduleBaseAbi}__
 */
export const useReadModuleBase = /*#__PURE__*/ createUseReadContract({
  abi: moduleBaseAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadModuleBaseDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: moduleBaseAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"dinoFactory"`
 */
export const useReadModuleBaseDinoFactory = /*#__PURE__*/ createUseReadContract(
  { abi: moduleBaseAbi, functionName: 'dinoFactory' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadModuleBaseGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: moduleBaseAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadModuleBaseHasRole = /*#__PURE__*/ createUseReadContract({
  abi: moduleBaseAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadModuleBaseSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: moduleBaseAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link moduleBaseAbi}__
 */
export const useWriteModuleBase = /*#__PURE__*/ createUseWriteContract({
  abi: moduleBaseAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteModuleBaseGrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: moduleBaseAbi, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteModuleBaseRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: moduleBaseAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteModuleBaseRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: moduleBaseAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link moduleBaseAbi}__
 */
export const useSimulateModuleBase = /*#__PURE__*/ createUseSimulateContract({
  abi: moduleBaseAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateModuleBaseGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: moduleBaseAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateModuleBaseRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: moduleBaseAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link moduleBaseAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateModuleBaseRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: moduleBaseAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link moduleBaseAbi}__
 */
export const useWatchModuleBaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: moduleBaseAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link moduleBaseAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchModuleBaseRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: moduleBaseAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link moduleBaseAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchModuleBaseRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: moduleBaseAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link moduleBaseAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchModuleBaseRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: moduleBaseAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__
 *
 *
 */
export const useReadShopModule = /*#__PURE__*/ createUseReadContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadShopModuleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"dinoFactory"`
 *
 *
 */
export const useReadShopModuleDinoFactory = /*#__PURE__*/ createUseReadContract(
  {
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'dinoFactory',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"emerald"`
 *
 *
 */
export const useReadShopModuleEmerald = /*#__PURE__*/ createUseReadContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
  functionName: 'emerald',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadShopModuleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadShopModuleHasRole = /*#__PURE__*/ createUseReadContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"items"`
 *
 *
 */
export const useReadShopModuleItems = /*#__PURE__*/ createUseReadContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
  functionName: 'items',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadShopModuleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"treasury"`
 *
 *
 */
export const useReadShopModuleTreasury = /*#__PURE__*/ createUseReadContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
  functionName: 'treasury',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link shopModuleAbi}__
 *
 *
 */
export const useWriteShopModule = /*#__PURE__*/ createUseWriteContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"buy"`
 *
 *
 */
export const useWriteShopModuleBuy = /*#__PURE__*/ createUseWriteContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteShopModuleGrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: shopModuleAbi, address: shopModuleAddress, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteShopModuleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteShopModuleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link shopModuleAbi}__
 *
 *
 */
export const useSimulateShopModule = /*#__PURE__*/ createUseSimulateContract({
  abi: shopModuleAbi,
  address: shopModuleAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"buy"`
 *
 *
 */
export const useSimulateShopModuleBuy = /*#__PURE__*/ createUseSimulateContract(
  { abi: shopModuleAbi, address: shopModuleAddress, functionName: 'buy' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateShopModuleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateShopModuleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link shopModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateShopModuleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link shopModuleAbi}__
 *
 *
 */
export const useWatchShopModuleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: shopModuleAbi,
    address: shopModuleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link shopModuleAbi}__ and `eventName` set to `"ItemPurchased"`
 *
 *
 */
export const useWatchShopModuleItemPurchasedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    eventName: 'ItemPurchased',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link shopModuleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchShopModuleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link shopModuleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchShopModuleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link shopModuleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchShopModuleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link shopModuleAbi}__ and `eventName` set to `"TreasuryUpdated"`
 *
 *
 */
export const useWatchShopModuleTreasuryUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: shopModuleAbi,
    address: shopModuleAddress,
    eventName: 'TreasuryUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__
 *
 *
 */
export const useReadSpeciesRegistry = /*#__PURE__*/ createUseReadContract({
  abi: speciesRegistryAbi,
  address: speciesRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadSpeciesRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"getAllSpecies"`
 *
 *
 */
export const useReadSpeciesRegistryGetAllSpecies =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'getAllSpecies',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadSpeciesRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"getSpecies"`
 *
 *
 */
export const useReadSpeciesRegistryGetSpecies =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'getSpecies',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadSpeciesRegistryHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesExists"`
 *
 *
 */
export const useReadSpeciesRegistrySpeciesExists =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesIds"`
 *
 *
 */
export const useReadSpeciesRegistrySpeciesIds =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesIdsIndex"`
 *
 *
 */
export const useReadSpeciesRegistrySpeciesIdsIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesIdsIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesRegistry"`
 *
 *
 */
export const useReadSpeciesRegistrySpeciesRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadSpeciesRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__
 *
 *
 */
export const useWriteSpeciesRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: speciesRegistryAbi,
  address: speciesRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"createSpecies"`
 *
 *
 */
export const useWriteSpeciesRegistryCreateSpecies =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'createSpecies',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteSpeciesRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteSpeciesRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteSpeciesRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"updateSpecies"`
 *
 *
 */
export const useWriteSpeciesRegistryUpdateSpecies =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'updateSpecies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__
 *
 *
 */
export const useSimulateSpeciesRegistry =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"createSpecies"`
 *
 *
 */
export const useSimulateSpeciesRegistryCreateSpecies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'createSpecies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateSpeciesRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateSpeciesRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateSpeciesRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"updateSpecies"`
 *
 *
 */
export const useSimulateSpeciesRegistryUpdateSpecies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'updateSpecies',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__
 *
 *
 */
export const useWatchSpeciesRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchSpeciesRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchSpeciesRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchSpeciesRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"SpeciesCreated"`
 *
 *
 */
export const useWatchSpeciesRegistrySpeciesCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'SpeciesCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"SpeciesUpdated"`
 *
 *
 */
export const useWatchSpeciesRegistrySpeciesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'SpeciesUpdated',
  })
