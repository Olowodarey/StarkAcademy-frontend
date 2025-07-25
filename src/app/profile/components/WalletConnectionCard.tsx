import { Button } from "@/component/ui/button";

export default function WalletConnectionCard({ connected }: { connected: boolean }) {
  return (
    <div className="bg-[#232228] rounded-xl px-8 py-10 w-full shadow-md border border-[#232228]/40 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-white mb-2 w-full text-left">Wallet Connection</h2>
      <p className="text-gray-300 text-base mb-8 w-full text-left">Connect Your Wallet To Receive NFT Rewards And Manage Your Digital Assets.</p>
      <div className="flex items-center justify-center mb-8">
        <svg width="100" height="100" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" width="117" height="117" rx="58.5" fill="#A78BFA" fillOpacity="0.18" />
          <path fillRule="evenodd" clipRule="evenodd" d="M85.5458 46.8433C85.3804 46.8329 85.2004 46.833 85.014 46.833L84.9674 46.833H77.6509C71.6201 46.833 66.46 51.5801 66.46 57.7705C66.46 63.9608 71.6201 68.708 77.6509 68.708H84.9674H85.014C85.2004 68.708 85.3804 68.7083 85.5458 68.6978C87.9955 68.5429 90.1617 66.6261 90.344 63.9486C90.3559 63.773 90.3556 63.5837 90.3556 63.4084V63.3609V52.1803V52.1327C90.3556 51.9573 90.3559 51.768 90.344 51.5924C90.1617 48.915 87.9955 46.998 85.5458 46.8433ZM77.0023 60.6872C78.5548 60.6872 79.8133 59.3814 79.8133 57.7705C79.8133 56.1596 78.5548 54.8538 77.0023 54.8538C75.4497 54.8538 74.1909 56.1596 74.1909 57.7705C74.1909 59.3814 75.4497 60.6872 77.0023 60.6872Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M85.0102 73.0833C85.4451 73.072 85.7744 73.4748 85.6563 73.8936C85.0709 75.9714 84.1413 77.7427 82.6503 79.234C80.4675 81.4165 77.6996 82.3852 74.2801 82.8451C70.9574 83.2917 66.7119 83.2917 61.3517 83.2917H55.1893C49.8292 83.2917 45.5836 83.2917 42.2609 82.8451C38.8413 82.3852 36.0735 81.4165 33.8908 79.234C31.7081 77.0512 30.7394 74.2833 30.2797 70.8638C29.8329 67.5411 29.833 63.2956 29.833 57.9353V57.6063C29.833 52.2462 29.8329 48.0006 30.2797 44.6779C30.7394 41.2583 31.7081 38.4905 33.8908 36.3078C36.0735 34.1251 38.8413 33.1564 42.2609 32.6967C45.5836 32.2499 49.8291 32.2499 55.1893 32.25H61.3517C66.7119 32.2499 70.9574 32.2499 74.2801 32.6967C77.6996 33.1564 80.4675 34.1251 82.6503 36.3078C84.1413 37.799 85.0706 39.5701 85.6563 41.648C85.7744 42.0668 85.4451 42.4696 85.0102 42.4583L77.6488 42.4584C69.3754 42.4584 62.0829 48.9943 62.0829 57.7708C62.0829 66.5474 69.3754 73.0833 77.6488 73.0833H85.0102ZM40.7705 43.9167C39.5624 43.9167 38.583 44.8961 38.583 46.1042C38.583 47.3123 39.5624 48.2917 40.7705 48.2917H52.4372C53.6453 48.2917 54.6247 47.3123 54.6247 46.1042C54.6247 44.8961 53.6453 43.9167 52.4372 43.9167H40.7705Z" fill="white" />
        </svg>
      </div>
      <p className="font-bold text-xl mb-1 text-center text-white">{connected ? "Wallet Connected" : "No Wallet Connected"}</p>
      <p className="text-gray-300 text-base mb-8 text-center">Connect Your Wallet To View And Manage Your NFTs</p>
      <Button className="w-full bg-[#9747FF9E] text-white hover:bg-[#8B5CF6] text-base font-semibold py-6 rounded-lg md:w-[80%] cursor-pointer">Connect Wallet</Button>
    </div>
  );
} 