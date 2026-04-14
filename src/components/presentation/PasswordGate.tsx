import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import { LockKeyhole } from "lucide-react";
import solskinLogo from "@/assets/slides/solskin-logo.png";
import installationHero from "@/assets/slides/installation-1.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PasswordGateProps {
  children: ReactNode;
  storageKey: string;
  title: string;
  subtitle: string;
}

const hashString = async (value: string) => {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const PasswordGate = ({ children, storageKey, title, subtitle }: PasswordGateProps) => {
  const requiredHash = useMemo(
    () => import.meta.env.VITE_SUPPLY_CHAIN_PASSWORD_SHA256?.trim().toLowerCase() ?? "",
    [],
  );
  const unlockedStorageKey = `${storageKey}:${requiredHash}`;

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(!requiredHash);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (!requiredHash) {
      setIsUnlocked(true);
      return;
    }

    const stored = sessionStorage.getItem(unlockedStorageKey);
    if (stored === "unlocked") {
      setIsUnlocked(true);
    }
  }, [requiredHash, unlockedStorageKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!requiredHash) {
      setIsUnlocked(true);
      return;
    }

    setIsChecking(true);
    setError("");

    try {
      const hashedPassword = await hashString(password);
      if (hashedPassword === requiredHash) {
        sessionStorage.setItem(unlockedStorageKey, "unlocked");
        setIsUnlocked(true);
        setPassword("");
        return;
      }

      setError("Incorrect password. Please try again.");
    } catch {
      setError("Unable to verify password in this browser.");
    } finally {
      setIsChecking(false);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slide-bg text-slide-fg">
      <div className="absolute inset-0">
        <img src={installationHero} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,161,86,0.16),transparent_30%),linear-gradient(120deg,rgba(10,10,10,0.96),rgba(10,10,10,0.86))]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-[640px] rounded-[32px] border border-white/10 bg-black/45 p-10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <img src={solskinLogo} alt="Solskin" className="mb-8 h-[52px]" />

          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slide-gold/30 bg-slide-gold/10">
              <LockKeyhole className="h-7 w-7 text-slide-gold" />
            </div>
            <div>
              <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold">Protected Presentation</p>
              <h1 className="mt-2 font-display text-4xl leading-tight">{title}</h1>
            </div>
          </div>

          <p className="mb-8 text-xl leading-[1.5] text-slide-gray-200">{subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="presentation-password" className="mb-3 block text-sm uppercase tracking-[0.22em] text-slide-gray-300">
                Password
              </label>
              <Input
                id="presentation-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-14 rounded-xl border-white/10 bg-white/5 px-5 text-lg text-white placeholder:text-slide-gray-400"
                placeholder="Enter password"
              />
            </div>

            {error ? <p className="text-sm text-red-300">{error}</p> : null}

            <Button type="submit" size="lg" className="h-14 w-full rounded-xl text-base font-semibold" disabled={isChecking || !password}>
              {isChecking ? "Unlocking..." : "Open presentation"}
            </Button>
          </form>

          <p className="mt-6 text-sm leading-[1.6] text-slide-gray-400">
            This gate is intended for light access control on a public link. Use a dedicated access layer if you later need stronger protection.
          </p>
        </div>
      </div>
    </div>
  );
};
