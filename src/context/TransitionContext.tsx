"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

type TransitionContextType = {
  navigateWithTransition: (href: string, elementId: string) => void;
  activeTransitionId: string | null;
  flipState: unknown | null;
  clearTransition: () => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [activeTransitionId, setActiveTransitionId] = useState<string | null>(null);
  const [flipState, setFlipState] = useState<unknown | null>(null);

  const navigateWithTransition = (href: string, elementId: string) => {
    // 1. Capture the DOM state of the specific element *before* navigation occurs
    const state = Flip.getState(`[data-flip-id="${elementId}"]`);
    setFlipState(state);
    setActiveTransitionId(elementId);

    // 2. Trigger Next.js navigation
    router.push(href);
  };

  const clearTransition = () => {
    setActiveTransitionId(null);
    setFlipState(null);
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, activeTransitionId, flipState, clearTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}
