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
      { name: '_dinoERC721', internalType: 'address', type: 'address' },
      { name: '_dinoId', internalType: 'uint256', type: 'uint256' },
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
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
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

export const dinoErc721Address =
  '0xEB0A6da62103824436EB069Dee29EbFD5f92387a' as const

export const dinoErc721Config = {
  address: dinoErc721Address,
  abi: dinoErc721Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        name: '_dinoSpeciesManager',
        internalType: 'contract SpeciesManager',
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
    name: 'mint',
    outputs: [
      { name: 'dinoId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'dinoAccount',
        internalType: 'contract DinoAccount',
        type: 'address',
      },
      { name: 'dinoSpeciesId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'speciesManager',
    outputs: [
      { name: '', internalType: 'contract SpeciesManager', type: 'address' },
    ],
    stateMutability: 'view',
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

export const dinoFactoryAddress =
  '0x1D3DdD53ce3c4cA2F2Ae1a89611f0CaB078824d2' as const

export const dinoFactoryConfig = {
  address: dinoFactoryAddress,
  abi: dinoFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DinoManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dinoManagerAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_dinoERC721',
        internalType: 'contract DinoERC721',
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
    inputs: [{ name: '_dinoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getDino',
    outputs: [
      {
        name: 'dino',
        internalType: 'struct Dino',
        type: 'tuple',
        components: [
          { name: 'dinoId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'dinoAccount',
            internalType: 'contract DinoAccount',
            type: 'address',
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
        internalType: 'struct Dino[]',
        type: 'tuple[]',
        components: [
          { name: 'dinoId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'dinoAccount',
            internalType: 'contract DinoAccount',
            type: 'address',
          },
        ],
      },
    ],
    stateMutability: 'view',
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

export const dinoManagerAddress =
  '0xB1637bAD3b1d0571A697E2cDDC8D1a7eDAbEEA72' as const

export const dinoManagerConfig = {
  address: dinoManagerAddress,
  abi: dinoManagerAbi,
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

export const emeraldErc20Abi = [
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
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
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
] as const

export const emeraldErc20Address =
  '0xb2eFcdD92ead13bb93ECFA3d6077bCb62f4038Fe' as const

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
// JobsManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const jobsManagerAbi = [
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
        name: '_dinoManager',
        internalType: 'contract DinoManager',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimSalary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dinoManager',
    outputs: [
      { name: '', internalType: 'contract DinoManager', type: 'address' },
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
    name: 'lastClaimDay',
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
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'jobId', internalType: 'uint256', type: 'uint256' },
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

export const jobsManagerAddress =
  '0x7Cf6a597c8457C76687F63c97a0204b82d03fD42' as const

export const jobsManagerConfig = {
  address: jobsManagerAddress,
  abi: jobsManagerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobsRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        internalType: 'struct DinoJob',
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
    name: 'job',
    outputs: [
      {
        name: 'dinoJob',
        internalType: 'struct DinoJob',
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
    inputs: [],
    name: 'nextJobId',
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
      { name: '_jobId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_job',
        internalType: 'struct DinoJob',
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
        name: 'dinoJob',
        internalType: 'struct DinoJob',
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
        name: 'dinoJob',
        internalType: 'struct DinoJob',
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
  { type: 'error', inputs: [], name: 'InvalidPay' },
] as const

export const jobsRegistryAddress =
  '0x307E397B5ec8A75Bf5919828f7Af922ff7052987' as const

export const jobsRegistryConfig = {
  address: jobsRegistryAddress,
  abi: jobsRegistryAbi,
} as const

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
// SpeciesManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const speciesManagerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      {
        name: '_dinoManager',
        internalType: 'contract DinoManager',
        type: 'address',
      },
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
    name: 'dinoManager',
    outputs: [
      { name: '', internalType: 'contract DinoManager', type: 'address' },
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
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'speciesId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selectSpecies',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'speciesOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
        name: 'speciesId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'SpeciesSelected',
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
  { type: 'error', inputs: [], name: 'InvalidSpeciesId' },
  { type: 'error', inputs: [], name: 'NotDinoAccount' },
] as const

export const speciesManagerAddress =
  '0x875611ef2f51d93DC4394EE1aFf9ab2c8A1a2a63' as const

export const speciesManagerConfig = {
  address: speciesManagerAddress,
  abi: speciesManagerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SpeciesRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        internalType: 'struct DinoSpecies',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct Stats',
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
    name: 'nextSpeciesId',
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
    inputs: [{ name: '_speciesId', internalType: 'uint256', type: 'uint256' }],
    name: 'species',
    outputs: [
      {
        name: 'dinoSpecies',
        internalType: 'struct DinoSpecies',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct Stats',
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'speciesRegistry',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'stats',
        internalType: 'struct Stats',
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
        internalType: 'struct DinoSpecies',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct Stats',
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
        name: 'dinoSpecies',
        internalType: 'struct DinoSpecies',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct Stats',
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
        name: 'dinoSpecies',
        internalType: 'struct DinoSpecies',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          {
            name: 'stats',
            internalType: 'struct Stats',
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

export const speciesRegistryAddress =
  '0x3e8336aF46d3fcC22598395e0867119Fbb9a502b' as const

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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"dinoId"`
 */
export const useReadDinoAccountDinoId = /*#__PURE__*/ createUseReadContract({
  abi: dinoAccountAbi,
  functionName: 'dinoId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoAccountAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDinoAccountOwner = /*#__PURE__*/ createUseReadContract({
  abi: dinoAccountAbi,
  functionName: 'owner',
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
 */
export const useReadDinoErc721 = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadDinoErc721DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"MINTER_ROLE"`
 */
export const useReadDinoErc721MinterRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'MINTER_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadDinoErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"getApproved"`
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
 */
export const useReadDinoErc721GetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"hasRole"`
 */
export const useReadDinoErc721HasRole = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadDinoErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadDinoErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadDinoErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadDinoErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadDinoErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadDinoErc721TokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadDinoErc721TokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadDinoErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"totalSupply"`
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
 */
export const useWriteDinoErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteDinoErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteDinoErc721GrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: dinoErc721Abi, address: dinoErc721Address, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteDinoErc721Mint = /*#__PURE__*/ createUseWriteContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteDinoErc721RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteDinoErc721RevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteDinoErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteDinoErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteDinoErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__
 */
export const useSimulateDinoErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoErc721Abi,
  address: dinoErc721Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateDinoErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateDinoErc721GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateDinoErc721Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateDinoErc721RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateDinoErc721RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateDinoErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateDinoErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateDinoErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__
 */
export const useWatchDinoErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchDinoErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchDinoErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchDinoErc721RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchDinoErc721RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchDinoErc721RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchDinoErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoErc721Abi,
    address: dinoErc721Address,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__
 */
export const useReadDinoFactory = /*#__PURE__*/ createUseReadContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"dinoERC721"`
 */
export const useReadDinoFactoryDinoErc721 = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'dinoERC721',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"speciesManager"`
 */
export const useReadDinoFactorySpeciesManager =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'speciesManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoFactoryAbi}__
 */
export const useWriteDinoFactory = /*#__PURE__*/ createUseWriteContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteDinoFactoryMint = /*#__PURE__*/ createUseWriteContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoFactoryAbi}__
 */
export const useSimulateDinoFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: dinoFactoryAbi,
  address: dinoFactoryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dinoFactoryAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateDinoFactoryMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoFactoryAbi}__
 */
export const useWatchDinoFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoFactoryAbi}__ and `eventName` set to `"DinoCreated"`
 */
export const useWatchDinoFactoryDinoCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoFactoryAbi,
    address: dinoFactoryAddress,
    eventName: 'DinoCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoManagerAbi}__
 */
export const useReadDinoManager = /*#__PURE__*/ createUseReadContract({
  abi: dinoManagerAbi,
  address: dinoManagerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoManagerAbi}__ and `functionName` set to `"dinoERC721"`
 */
export const useReadDinoManagerDinoErc721 = /*#__PURE__*/ createUseReadContract(
  {
    abi: dinoManagerAbi,
    address: dinoManagerAddress,
    functionName: 'dinoERC721',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoManagerAbi}__ and `functionName` set to `"getDino"`
 */
export const useReadDinoManagerGetDino = /*#__PURE__*/ createUseReadContract({
  abi: dinoManagerAbi,
  address: dinoManagerAddress,
  functionName: 'getDino',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dinoManagerAbi}__ and `functionName` set to `"getDinosOfOwner"`
 */
export const useReadDinoManagerGetDinosOfOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: dinoManagerAbi,
    address: dinoManagerAddress,
    functionName: 'getDinosOfOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoManagerAbi}__
 */
export const useWatchDinoManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoManagerAbi,
    address: dinoManagerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dinoManagerAbi}__ and `eventName` set to `"DinoCreated"`
 */
export const useWatchDinoManagerDinoCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dinoManagerAbi,
    address: dinoManagerAddress,
    eventName: 'DinoCreated',
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
 */
export const useReadEmeraldErc20 = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadEmeraldErc20DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"MINTER_ROLE"`
 */
export const useReadEmeraldErc20MinterRole =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'MINTER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"allowance"`
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
 */
export const useReadEmeraldErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadEmeraldErc20GetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"hasRole"`
 */
export const useReadEmeraldErc20HasRole = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadEmeraldErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadEmeraldErc20SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadEmeraldErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadEmeraldErc20TotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__
 */
export const useWriteEmeraldErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"approve"`
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
 */
export const useWriteEmeraldErc20GrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteEmeraldErc20Mint = /*#__PURE__*/ createUseWriteContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteEmeraldErc20RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteEmeraldErc20RevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteEmeraldErc20Transfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteEmeraldErc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__
 */
export const useSimulateEmeraldErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: emeraldErc20Abi,
  address: emeraldErc20Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateEmeraldErc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateEmeraldErc20GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateEmeraldErc20Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateEmeraldErc20RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateEmeraldErc20RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateEmeraldErc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link emeraldErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateEmeraldErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__
 */
export const useWatchEmeraldErc20Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchEmeraldErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchEmeraldErc20RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchEmeraldErc20RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchEmeraldErc20RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: emeraldErc20Abi,
    address: emeraldErc20Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link emeraldErc20Abi}__ and `eventName` set to `"Transfer"`
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__
 */
export const useReadJobsManager = /*#__PURE__*/ createUseReadContract({
  abi: jobsManagerAbi,
  address: jobsManagerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadJobsManagerDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"dinoManager"`
 */
export const useReadJobsManagerDinoManager =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'dinoManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"emerald"`
 */
export const useReadJobsManagerEmerald = /*#__PURE__*/ createUseReadContract({
  abi: jobsManagerAbi,
  address: jobsManagerAddress,
  functionName: 'emerald',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadJobsManagerGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadJobsManagerHasRole = /*#__PURE__*/ createUseReadContract({
  abi: jobsManagerAbi,
  address: jobsManagerAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"jobOf"`
 */
export const useReadJobsManagerJobOf = /*#__PURE__*/ createUseReadContract({
  abi: jobsManagerAbi,
  address: jobsManagerAddress,
  functionName: 'jobOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"jobsRegistry"`
 */
export const useReadJobsManagerJobsRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'jobsRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"lastClaimDay"`
 */
export const useReadJobsManagerLastClaimDay =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'lastClaimDay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadJobsManagerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsManagerAbi}__
 */
export const useWriteJobsManager = /*#__PURE__*/ createUseWriteContract({
  abi: jobsManagerAbi,
  address: jobsManagerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"claimSalary"`
 */
export const useWriteJobsManagerClaimSalary =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'claimSalary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteJobsManagerGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteJobsManagerRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteJobsManagerRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"switchJob"`
 */
export const useWriteJobsManagerSwitchJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'switchJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsManagerAbi}__
 */
export const useSimulateJobsManager = /*#__PURE__*/ createUseSimulateContract({
  abi: jobsManagerAbi,
  address: jobsManagerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"claimSalary"`
 */
export const useSimulateJobsManagerClaimSalary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'claimSalary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateJobsManagerGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateJobsManagerRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateJobsManagerRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsManagerAbi}__ and `functionName` set to `"switchJob"`
 */
export const useSimulateJobsManagerSwitchJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    functionName: 'switchJob',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsManagerAbi}__
 */
export const useWatchJobsManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsManagerAbi}__ and `eventName` set to `"JobSwitched"`
 */
export const useWatchJobsManagerJobSwitchedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    eventName: 'JobSwitched',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsManagerAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchJobsManagerRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsManagerAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchJobsManagerRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsManagerAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchJobsManagerRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsManagerAbi}__ and `eventName` set to `"SalaryClaimed"`
 */
export const useWatchJobsManagerSalaryClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsManagerAbi,
    address: jobsManagerAddress,
    eventName: 'SalaryClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__
 */
export const useReadJobsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadJobsRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadJobsRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadJobsRegistryHasRole = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"job"`
 */
export const useReadJobsRegistryJob = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'job',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"jobExists"`
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
 */
export const useReadJobsRegistryJobIds = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'jobIds',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"jobs"`
 */
export const useReadJobsRegistryJobs = /*#__PURE__*/ createUseReadContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
  functionName: 'jobs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"nextJobId"`
 */
export const useReadJobsRegistryNextJobId = /*#__PURE__*/ createUseReadContract(
  {
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'nextJobId',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadJobsRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__
 */
export const useWriteJobsRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"createJob"`
 */
export const useWriteJobsRegistryCreateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'createJob',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteJobsRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteJobsRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteJobsRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"updateJob"`
 */
export const useWriteJobsRegistryUpdateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'updateJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__
 */
export const useSimulateJobsRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: jobsRegistryAbi,
  address: jobsRegistryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"createJob"`
 */
export const useSimulateJobsRegistryCreateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'createJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateJobsRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateJobsRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateJobsRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobsRegistryAbi}__ and `functionName` set to `"updateJob"`
 */
export const useSimulateJobsRegistryUpdateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    functionName: 'updateJob',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__
 */
export const useWatchJobsRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"JobCreated"`
 */
export const useWatchJobsRegistryJobCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'JobCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"JobUpdated"`
 */
export const useWatchJobsRegistryJobUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'JobUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchJobsRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchJobsRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobsRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchJobsRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobsRegistryAbi,
    address: jobsRegistryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__
 */
export const useReadSpeciesManager = /*#__PURE__*/ createUseReadContract({
  abi: speciesManagerAbi,
  address: speciesManagerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadSpeciesManagerDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"dinoManager"`
 */
export const useReadSpeciesManagerDinoManager =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'dinoManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadSpeciesManagerGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadSpeciesManagerHasRole = /*#__PURE__*/ createUseReadContract(
  {
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'hasRole',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"speciesOf"`
 */
export const useReadSpeciesManagerSpeciesOf =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'speciesOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"speciesRegistry"`
 */
export const useReadSpeciesManagerSpeciesRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'speciesRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadSpeciesManagerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesManagerAbi}__
 */
export const useWriteSpeciesManager = /*#__PURE__*/ createUseWriteContract({
  abi: speciesManagerAbi,
  address: speciesManagerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteSpeciesManagerGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteSpeciesManagerRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteSpeciesManagerRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"selectSpecies"`
 */
export const useWriteSpeciesManagerSelectSpecies =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'selectSpecies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesManagerAbi}__
 */
export const useSimulateSpeciesManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateSpeciesManagerGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateSpeciesManagerRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateSpeciesManagerRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesManagerAbi}__ and `functionName` set to `"selectSpecies"`
 */
export const useSimulateSpeciesManagerSelectSpecies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    functionName: 'selectSpecies',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesManagerAbi}__
 */
export const useWatchSpeciesManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesManagerAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchSpeciesManagerRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesManagerAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchSpeciesManagerRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesManagerAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchSpeciesManagerRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesManagerAbi}__ and `eventName` set to `"SpeciesSelected"`
 */
export const useWatchSpeciesManagerSpeciesSelectedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesManagerAbi,
    address: speciesManagerAddress,
    eventName: 'SpeciesSelected',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__
 */
export const useReadSpeciesRegistry = /*#__PURE__*/ createUseReadContract({
  abi: speciesRegistryAbi,
  address: speciesRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadSpeciesRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadSpeciesRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadSpeciesRegistryHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"nextSpeciesId"`
 */
export const useReadSpeciesRegistryNextSpeciesId =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'nextSpeciesId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"species"`
 */
export const useReadSpeciesRegistrySpecies =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'species',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesExists"`
 */
export const useReadSpeciesRegistrySpeciesExists =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesIds"`
 */
export const useReadSpeciesRegistrySpeciesIds =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"speciesRegistry"`
 */
export const useReadSpeciesRegistrySpeciesRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'speciesRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadSpeciesRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__
 */
export const useWriteSpeciesRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: speciesRegistryAbi,
  address: speciesRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"createSpecies"`
 */
export const useWriteSpeciesRegistryCreateSpecies =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'createSpecies',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteSpeciesRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteSpeciesRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteSpeciesRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"updateSpecies"`
 */
export const useWriteSpeciesRegistryUpdateSpecies =
  /*#__PURE__*/ createUseWriteContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'updateSpecies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__
 */
export const useSimulateSpeciesRegistry =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"createSpecies"`
 */
export const useSimulateSpeciesRegistryCreateSpecies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'createSpecies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateSpeciesRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateSpeciesRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateSpeciesRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link speciesRegistryAbi}__ and `functionName` set to `"updateSpecies"`
 */
export const useSimulateSpeciesRegistryUpdateSpecies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    functionName: 'updateSpecies',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__
 */
export const useWatchSpeciesRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchSpeciesRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchSpeciesRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchSpeciesRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"SpeciesCreated"`
 */
export const useWatchSpeciesRegistrySpeciesCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'SpeciesCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link speciesRegistryAbi}__ and `eventName` set to `"SpeciesUpdated"`
 */
export const useWatchSpeciesRegistrySpeciesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: speciesRegistryAbi,
    address: speciesRegistryAddress,
    eventName: 'SpeciesUpdated',
  })
