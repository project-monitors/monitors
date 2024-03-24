export type Factory = {
  "version": "0.1.0",
  "name": "factory",
  "instructions": [
    {
      "name": "initializeGlobalConfig",
      "accounts": [
        {
          "name": "globalConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "visionMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "visionMiningAdminPubkey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "changeVisionMiningAdmin",
      "accounts": [
        {
          "name": "globalConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "visionMiningAdminPubkey",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeMint",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK - create token metadata account manually"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeMintParams"
          }
        }
      ]
    },
    {
      "name": "mintTokens",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "MintTokensParams"
          }
        }
      ]
    },
    {
      "name": "initializeCollection",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeCollectionParams"
          }
        }
      ]
    },
    {
      "name": "visionMiningClaim",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "visionMiningAdmin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "visionMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "visionMiningTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "VisionMiningClaimParams"
          }
        }
      ]
    },
    {
      "name": "createEventConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "resolver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateEventConfigParams"
          }
        }
      ]
    },
    {
      "name": "createEventMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarketAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateEventMarketParams"
          }
        }
      ]
    },
    {
      "name": "toggleEventMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarketAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ToggleEventMarketParams"
          }
        }
      ]
    },
    {
      "name": "createEventSbt",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "PDA: b\"sbt_mint\" + event_config.key + option"
          ]
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateEventSBTParams"
          }
        }
      ]
    },
    {
      "name": "mintEventSbtMasterEdition",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "MintEventSBTMasterEditionParams"
          }
        }
      ]
    },
    {
      "name": "resolve",
      "accounts": [
        {
          "name": "resolver",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oracleConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "FearAndGreedEventMarketResolveParams"
          }
        }
      ]
    },
    {
      "name": "createSbt",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateSBTParams"
          }
        }
      ]
    },
    {
      "name": "mintSbt",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "choose",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sbtMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ChooseParams"
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sbtMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "WithdrawParams"
          }
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMiningTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEditionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEditionTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEditionMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ClaimParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "resolver",
            "type": "publicKey"
          },
          {
            "name": "eventType",
            "type": {
              "defined": "EventType"
            }
          },
          {
            "name": "oracleConfig",
            "type": "publicKey"
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "metadataJsonUrl",
            "type": {
              "defined": "UriResource"
            }
          }
        ]
      }
    },
    {
      "name": "eventMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventConfig",
            "type": "publicKey"
          },
          {
            "name": "openRawData",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "openPhase",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "result",
            "type": "u8"
          },
          {
            "name": "prize",
            "type": "u64"
          },
          {
            "name": "openSlot",
            "type": "u64"
          },
          {
            "name": "openTs",
            "type": "u64"
          },
          {
            "name": "closeTs",
            "type": "u64"
          },
          {
            "name": "expiryTs",
            "type": "u64"
          },
          {
            "name": "isOpened",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "eventPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionType",
            "type": {
              "defined": "PositionType"
            }
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "globalConfig",
      "docs": [
        "The [GlobalConfig] account."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "docs": [
              "The admin of the factory program."
            ],
            "type": "publicKey"
          },
          {
            "name": "governor",
            "docs": [
              "For vote resolver"
            ],
            "type": "publicKey"
          },
          {
            "name": "visionMiningAdmin",
            "docs": [
              "The off-chain supervisor for vision mining."
            ],
            "type": "publicKey"
          },
          {
            "name": "visionMiningPda",
            "type": "publicKey"
          },
          {
            "name": "eventMiningPda",
            "type": "publicKey"
          },
          {
            "name": "stakeMiningPda",
            "type": "publicKey"
          },
          {
            "name": "globalConfigBump",
            "type": "u8"
          },
          {
            "name": "visionMiningBump",
            "type": "u8"
          },
          {
            "name": "eventMiningBump",
            "type": "u8"
          },
          {
            "name": "stakeMiningBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "marker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          },
          {
            "name": "eventMarket",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "mintConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "mintBump",
            "type": "u8"
          },
          {
            "name": "configBump",
            "type": "u8"
          },
          {
            "name": "metadataBump",
            "type": "u8"
          },
          {
            "name": "authorityBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionType",
            "type": {
              "defined": "PositionType"
            }
          },
          {
            "name": "existed",
            "type": "bool"
          },
          {
            "name": "marker",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "U64ValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "u64"
          },
          {
            "name": "new",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ChooseParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ClaimParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          },
          {
            "name": "sbtMint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "CreateEventConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventType",
            "type": {
              "defined": "EventType"
            }
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "metadataJsonUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "CreateEventMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openTs",
            "type": "u64"
          },
          {
            "name": "closeTs",
            "type": "u64"
          },
          {
            "name": "expiryTs",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CreateEventSBTParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "option",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CreateSBTParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "InitializeCollectionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "InitializeMintParams",
      "docs": [
        "Parameters for initializing the governance token mint account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "decimals",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MintEventSBTMasterEditionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "option",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MintTokensParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FearAndGreedEventMarketResolveParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "prize",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ToggleEventMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "toggle",
            "type": "bool"
          },
          {
            "name": "fetchOracleData",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "VisionMiningClaimParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "validUntilTime",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WithdrawParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "UriResource",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "len",
            "type": "u16"
          },
          {
            "name": "uri",
            "type": {
              "array": [
                "u8",
                150
              ]
            }
          }
        ]
      }
    },
    {
      "name": "BalanceChangeEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Mint"
          },
          {
            "name": "Transfer"
          },
          {
            "name": "Burn"
          }
        ]
      }
    },
    {
      "name": "ChooseEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Choose"
          },
          {
            "name": "Withdraw"
          },
          {
            "name": "ClaimWithNonPrize"
          },
          {
            "name": "ClaimWithPrize"
          },
          {
            "name": "ClaimWithPrizeAndSBT"
          }
        ]
      }
    },
    {
      "name": "EventEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ConfigCreate"
          },
          {
            "name": "Create"
          },
          {
            "name": "Open"
          },
          {
            "name": "Finalize"
          }
        ]
      }
    },
    {
      "name": "SBTMintEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "CreateSBT"
          },
          {
            "name": "MintSBT"
          },
          {
            "name": "PrintSBT"
          }
        ]
      }
    },
    {
      "name": "EventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "RawDataEventMarket"
          },
          {
            "name": "PhaseEventMarket"
          },
          {
            "name": "NonPredictEvent"
          }
        ]
      }
    },
    {
      "name": "PositionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UserSBTPosition"
          },
          {
            "name": "EventSBTPosition"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BalanceChangeEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "BalanceChangeEventType"
          },
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fromTokenAccount",
          "type": {
            "option": "publicKey"
          },
          "index": false
        },
        {
          "name": "fromChange",
          "type": {
            "option": {
              "defined": "U64ValueChange"
            }
          },
          "index": false
        },
        {
          "name": "toTokenAccount",
          "type": {
            "option": "publicKey"
          },
          "index": false
        },
        {
          "name": "toChange",
          "type": {
            "option": {
              "defined": "U64ValueChange"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "ChooseEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "ChooseEventType"
          },
          "index": false
        },
        {
          "name": "eventMarket",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "userKey",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "indicate",
          "type": "u8",
          "index": false
        }
      ]
    },
    {
      "name": "EventEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "EventEventType"
          },
          "index": false
        },
        {
          "name": "eventConfig",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "event",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    },
    {
      "name": "SBTMintEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "SBTMintEventType"
          },
          "index": false
        },
        {
          "name": "mintKey",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "userKey",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "ReInitialize",
      "msg": "The account has already been initialized."
    },
    {
      "code": 6002,
      "name": "UnInitialize",
      "msg": "The account has not been initialized."
    },
    {
      "code": 6003,
      "name": "InvalidArgument",
      "msg": "Argument is invalid."
    },
    {
      "code": 6004,
      "name": "InvalidProgramId",
      "msg": "Program ID is invalid."
    },
    {
      "code": 6005,
      "name": "UnexpectedAccount",
      "msg": "Unexpected Account."
    },
    {
      "code": 6006,
      "name": "Overflow",
      "msg": "An overflow occurs."
    },
    {
      "code": 6007,
      "name": "StringTooLong",
      "msg": "The string variable is too long."
    },
    {
      "code": 6008,
      "name": "TooManyAuthorities",
      "msg": "Authorities limit reached"
    },
    {
      "code": 6009,
      "name": "AuthorityNotFound",
      "msg": "Authority not found"
    },
    {
      "code": 6010,
      "name": "ConfigMismatched",
      "msg": "Oracle config mismatched"
    },
    {
      "code": 6011,
      "name": "MintExceedMaxSupply",
      "msg": "Minting exceeds max supply limit"
    },
    {
      "code": 6012,
      "name": "NotSufficientBalance",
      "msg": "The transfer_from account does not have sufficient balance"
    },
    {
      "code": 6013,
      "name": "TransactionTimeout",
      "msg": "The transaction is timeout"
    },
    {
      "code": 6014,
      "name": "CloseAccountFailed",
      "msg": "Close account failed"
    },
    {
      "code": 6015,
      "name": "UnsupportedNow",
      "msg": "Unsupported now"
    },
    {
      "code": 6016,
      "name": "OracleDataError",
      "msg": "Get oracle data error"
    },
    {
      "code": 6017,
      "name": "EventIsFinalized",
      "msg": "Event is finalized"
    },
    {
      "code": 6018,
      "name": "EventIsNotOpen",
      "msg": "Event is not open"
    },
    {
      "code": 6019,
      "name": "EventIsOutOfTime",
      "msg": "Event is out of time for choosing"
    },
    {
      "code": 6020,
      "name": "IndicateToNonExistedOption",
      "msg": "Indicate to a non-existed option"
    },
    {
      "code": 6021,
      "name": "SBTNotFound",
      "msg": "SBT which use for indicating is not found"
    },
    {
      "code": 6022,
      "name": "SBTHasBeenInUse",
      "msg": "SBT has been in use"
    },
    {
      "code": 6023,
      "name": "AlreadyInEvent",
      "msg": "user takes in this event already"
    },
    {
      "code": 6024,
      "name": "PositionNotFound",
      "msg": "user's position is not found"
    },
    {
      "code": 6025,
      "name": "EventIsOngoing",
      "msg": "event is still ongoing, can not be resolved now"
    },
    {
      "code": 6026,
      "name": "EventMarketDataError",
      "msg": "event market does not have original data"
    }
  ]
};

export const IDL: Factory = {
  "version": "0.1.0",
  "name": "factory",
  "instructions": [
    {
      "name": "initializeGlobalConfig",
      "accounts": [
        {
          "name": "globalConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "visionMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "visionMiningAdminPubkey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "changeVisionMiningAdmin",
      "accounts": [
        {
          "name": "globalConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "visionMiningAdminPubkey",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeMint",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK - create token metadata account manually"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeMintParams"
          }
        }
      ]
    },
    {
      "name": "mintTokens",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "MintTokensParams"
          }
        }
      ]
    },
    {
      "name": "initializeCollection",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeCollectionParams"
          }
        }
      ]
    },
    {
      "name": "visionMiningClaim",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "visionMiningAdmin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "visionMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "visionMiningTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "VisionMiningClaimParams"
          }
        }
      ]
    },
    {
      "name": "createEventConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "resolver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateEventConfigParams"
          }
        }
      ]
    },
    {
      "name": "createEventMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarketAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateEventMarketParams"
          }
        }
      ]
    },
    {
      "name": "toggleEventMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarketAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ToggleEventMarketParams"
          }
        }
      ]
    },
    {
      "name": "createEventSbt",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "PDA: b\"sbt_mint\" + event_config.key + option"
          ]
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateEventSBTParams"
          }
        }
      ]
    },
    {
      "name": "mintEventSbtMasterEdition",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "MintEventSBTMasterEditionParams"
          }
        }
      ]
    },
    {
      "name": "resolve",
      "accounts": [
        {
          "name": "resolver",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oracleConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "FearAndGreedEventMarketResolveParams"
          }
        }
      ]
    },
    {
      "name": "createSbt",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateSBTParams"
          }
        }
      ]
    },
    {
      "name": "mintSbt",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "choose",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sbtMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ChooseParams"
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sbtMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "WithdrawParams"
          }
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMiningPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMiningTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtEditionPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEditionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEditionTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEditionMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventSbtMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ClaimParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "resolver",
            "type": "publicKey"
          },
          {
            "name": "eventType",
            "type": {
              "defined": "EventType"
            }
          },
          {
            "name": "oracleConfig",
            "type": "publicKey"
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "metadataJsonUrl",
            "type": {
              "defined": "UriResource"
            }
          }
        ]
      }
    },
    {
      "name": "eventMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventConfig",
            "type": "publicKey"
          },
          {
            "name": "openRawData",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "openPhase",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "result",
            "type": "u8"
          },
          {
            "name": "prize",
            "type": "u64"
          },
          {
            "name": "openSlot",
            "type": "u64"
          },
          {
            "name": "openTs",
            "type": "u64"
          },
          {
            "name": "closeTs",
            "type": "u64"
          },
          {
            "name": "expiryTs",
            "type": "u64"
          },
          {
            "name": "isOpened",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "eventPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionType",
            "type": {
              "defined": "PositionType"
            }
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "globalConfig",
      "docs": [
        "The [GlobalConfig] account."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "docs": [
              "The admin of the factory program."
            ],
            "type": "publicKey"
          },
          {
            "name": "governor",
            "docs": [
              "For vote resolver"
            ],
            "type": "publicKey"
          },
          {
            "name": "visionMiningAdmin",
            "docs": [
              "The off-chain supervisor for vision mining."
            ],
            "type": "publicKey"
          },
          {
            "name": "visionMiningPda",
            "type": "publicKey"
          },
          {
            "name": "eventMiningPda",
            "type": "publicKey"
          },
          {
            "name": "stakeMiningPda",
            "type": "publicKey"
          },
          {
            "name": "globalConfigBump",
            "type": "u8"
          },
          {
            "name": "visionMiningBump",
            "type": "u8"
          },
          {
            "name": "eventMiningBump",
            "type": "u8"
          },
          {
            "name": "stakeMiningBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "marker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          },
          {
            "name": "eventMarket",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "mintConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "mintBump",
            "type": "u8"
          },
          {
            "name": "configBump",
            "type": "u8"
          },
          {
            "name": "metadataBump",
            "type": "u8"
          },
          {
            "name": "authorityBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionType",
            "type": {
              "defined": "PositionType"
            }
          },
          {
            "name": "existed",
            "type": "bool"
          },
          {
            "name": "marker",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "U64ValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "u64"
          },
          {
            "name": "new",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ChooseParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ClaimParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          },
          {
            "name": "sbtMint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "CreateEventConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventType",
            "type": {
              "defined": "EventType"
            }
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "metadataJsonUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "CreateEventMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openTs",
            "type": "u64"
          },
          {
            "name": "closeTs",
            "type": "u64"
          },
          {
            "name": "expiryTs",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CreateEventSBTParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "option",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CreateSBTParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "InitializeCollectionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "InitializeMintParams",
      "docs": [
        "Parameters for initializing the governance token mint account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "decimals",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MintEventSBTMasterEditionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "option",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MintTokensParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FearAndGreedEventMarketResolveParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "prize",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ToggleEventMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "toggle",
            "type": "bool"
          },
          {
            "name": "fetchOracleData",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "VisionMiningClaimParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "validUntilTime",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WithdrawParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indicate",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "UriResource",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "len",
            "type": "u16"
          },
          {
            "name": "uri",
            "type": {
              "array": [
                "u8",
                150
              ]
            }
          }
        ]
      }
    },
    {
      "name": "BalanceChangeEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Mint"
          },
          {
            "name": "Transfer"
          },
          {
            "name": "Burn"
          }
        ]
      }
    },
    {
      "name": "ChooseEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Choose"
          },
          {
            "name": "Withdraw"
          },
          {
            "name": "ClaimWithNonPrize"
          },
          {
            "name": "ClaimWithPrize"
          },
          {
            "name": "ClaimWithPrizeAndSBT"
          }
        ]
      }
    },
    {
      "name": "EventEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ConfigCreate"
          },
          {
            "name": "Create"
          },
          {
            "name": "Open"
          },
          {
            "name": "Finalize"
          }
        ]
      }
    },
    {
      "name": "SBTMintEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "CreateSBT"
          },
          {
            "name": "MintSBT"
          },
          {
            "name": "PrintSBT"
          }
        ]
      }
    },
    {
      "name": "EventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "RawDataEventMarket"
          },
          {
            "name": "PhaseEventMarket"
          },
          {
            "name": "NonPredictEvent"
          }
        ]
      }
    },
    {
      "name": "PositionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UserSBTPosition"
          },
          {
            "name": "EventSBTPosition"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BalanceChangeEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "BalanceChangeEventType"
          },
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fromTokenAccount",
          "type": {
            "option": "publicKey"
          },
          "index": false
        },
        {
          "name": "fromChange",
          "type": {
            "option": {
              "defined": "U64ValueChange"
            }
          },
          "index": false
        },
        {
          "name": "toTokenAccount",
          "type": {
            "option": "publicKey"
          },
          "index": false
        },
        {
          "name": "toChange",
          "type": {
            "option": {
              "defined": "U64ValueChange"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "ChooseEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "ChooseEventType"
          },
          "index": false
        },
        {
          "name": "eventMarket",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "userKey",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "indicate",
          "type": "u8",
          "index": false
        }
      ]
    },
    {
      "name": "EventEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "EventEventType"
          },
          "index": false
        },
        {
          "name": "eventConfig",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "event",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    },
    {
      "name": "SBTMintEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "SBTMintEventType"
          },
          "index": false
        },
        {
          "name": "mintKey",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "userKey",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "ReInitialize",
      "msg": "The account has already been initialized."
    },
    {
      "code": 6002,
      "name": "UnInitialize",
      "msg": "The account has not been initialized."
    },
    {
      "code": 6003,
      "name": "InvalidArgument",
      "msg": "Argument is invalid."
    },
    {
      "code": 6004,
      "name": "InvalidProgramId",
      "msg": "Program ID is invalid."
    },
    {
      "code": 6005,
      "name": "UnexpectedAccount",
      "msg": "Unexpected Account."
    },
    {
      "code": 6006,
      "name": "Overflow",
      "msg": "An overflow occurs."
    },
    {
      "code": 6007,
      "name": "StringTooLong",
      "msg": "The string variable is too long."
    },
    {
      "code": 6008,
      "name": "TooManyAuthorities",
      "msg": "Authorities limit reached"
    },
    {
      "code": 6009,
      "name": "AuthorityNotFound",
      "msg": "Authority not found"
    },
    {
      "code": 6010,
      "name": "ConfigMismatched",
      "msg": "Oracle config mismatched"
    },
    {
      "code": 6011,
      "name": "MintExceedMaxSupply",
      "msg": "Minting exceeds max supply limit"
    },
    {
      "code": 6012,
      "name": "NotSufficientBalance",
      "msg": "The transfer_from account does not have sufficient balance"
    },
    {
      "code": 6013,
      "name": "TransactionTimeout",
      "msg": "The transaction is timeout"
    },
    {
      "code": 6014,
      "name": "CloseAccountFailed",
      "msg": "Close account failed"
    },
    {
      "code": 6015,
      "name": "UnsupportedNow",
      "msg": "Unsupported now"
    },
    {
      "code": 6016,
      "name": "OracleDataError",
      "msg": "Get oracle data error"
    },
    {
      "code": 6017,
      "name": "EventIsFinalized",
      "msg": "Event is finalized"
    },
    {
      "code": 6018,
      "name": "EventIsNotOpen",
      "msg": "Event is not open"
    },
    {
      "code": 6019,
      "name": "EventIsOutOfTime",
      "msg": "Event is out of time for choosing"
    },
    {
      "code": 6020,
      "name": "IndicateToNonExistedOption",
      "msg": "Indicate to a non-existed option"
    },
    {
      "code": 6021,
      "name": "SBTNotFound",
      "msg": "SBT which use for indicating is not found"
    },
    {
      "code": 6022,
      "name": "SBTHasBeenInUse",
      "msg": "SBT has been in use"
    },
    {
      "code": 6023,
      "name": "AlreadyInEvent",
      "msg": "user takes in this event already"
    },
    {
      "code": 6024,
      "name": "PositionNotFound",
      "msg": "user's position is not found"
    },
    {
      "code": 6025,
      "name": "EventIsOngoing",
      "msg": "event is still ongoing, can not be resolved now"
    },
    {
      "code": 6026,
      "name": "EventMarketDataError",
      "msg": "event market does not have original data"
    }
  ]
};
