import { PasswordGate } from "@/components/presentation/PasswordGate";
import SupplyChainPresentationApp from "@/components/presentation/SupplyChainPresentationApp";

const SupplyChain = () => {
  return (
    <PasswordGate
      storageKey="solskin:supply-chain"
      title="Supply Chain Strategy"
      subtitle="Enter the shared password to access the Solskin supply chain and production strategy deck."
    >
      <SupplyChainPresentationApp />
    </PasswordGate>
  );
};

export default SupplyChain;
