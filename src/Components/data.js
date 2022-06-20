let chains = [
    {
      name: "Cosmos",
      number: 1995,
      amount: "175",
      apr: 10,
    },
    {
      name: "Juno",
      number: 2000,
      amount: "135",
      apr: 100,
    },
    {
      name: "Osmosis",
      number: 2003,
      amount: "135",
      apr: 50,
    },
    {
      name: "Stargaze",
      number: 1997,
      amount: "110",
      apr: 100,
    },
    {
      name: "Evmos",
      number: 1998,
      amount: "150",
      apr: 500,
    },
  ];
  
  export function getChains() {
    return chains;
  }

  export function getChain(number) {
    return chains.find(
        (chain) => chain.number === number
    )
  }