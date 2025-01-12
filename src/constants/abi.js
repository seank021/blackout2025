export const contractABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_tokenAddress',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'store_name',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'record_type',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'credit',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'new_total',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'store',
                type: 'address',
            },
        ],
        name: 'CreditAdded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'store_name',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'record_type',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'credit',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'remaining',
                type: 'uint256',
            },
        ],
        name: 'CreditUsed',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'store_name',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                internalType: 'string',
                name: 'record_type',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'password',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'credit',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'store',
                type: 'address',
            },
        ],
        name: 'addCredit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'store_name',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                internalType: 'string',
                name: 'record_type',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'password',
                type: 'string',
            },
        ],
        name: 'getCredit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        name: 'prepays',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'passwordHash',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: 'credit',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'token',
        outputs: [
            {
                internalType: 'contract IERC20',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'store_name',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                internalType: 'string',
                name: 'record_type',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'password',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'credit',
                type: 'uint256',
            },
        ],
        name: 'useCredit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
