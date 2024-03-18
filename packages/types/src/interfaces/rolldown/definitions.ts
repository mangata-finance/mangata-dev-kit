export default {
  types: {},
  rpc: {
    pending_updates_hash: {
      description: "",
      params: [
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "H256"
    },
    pending_updates: {
      description: "",
      params: [
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Vec<u8>"
    },
    verify_pending_requests: {
      description: "",
      params: [
        {
          name: "hash",
          type: "H256"
        },
        {
          name: "request_id",
          type: "u128"
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "bool"
    },
    update_eth_raw: {
      description: "",
      params: [
        {
          name: "payload",
          type: "Vec<u8>"
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Option<L1Update>"
    }
  }
}