// $THRONE — site config. Fill CA, X and THRONE_WALLET at launch; everything else goes live from the chain.
window.THRONE_CFG = {
  NAME: "THRONE",
  TICKER: "THRONE",
  CA: "",                 // token mint (pump.fun CA). Empty = DEMONSTRATION data
  CHAIN: "solana",
  PAD: "pump.fun",
  PAIR: "",
  X: "",                  // https://x.com/<handle>
  BUY: "",                // blank = https://pump.fun/coin/<CA>
  CHART: "",              // blank = https://gmgn.ai/sol/token/<CA>

  THRONE_WALLET: "",      // the wallet that collects the creator fees and pays the king (shown as proof)
  EXCLUDE: [],            // wallets that can never be king (dev, team). Curves and pools are skipped automatically
  PAYOUT_MINUTES: 60,     // payout every hour on the hour
  MIN_PAYOUT_SOL: 0.01,   // smaller pots roll over

  RPC: [
    "https://api.mainnet-beta.solana.com",
    "https://solana-rpc.publicnode.com"
  ],
  REFRESH_SECONDS: 20
};
