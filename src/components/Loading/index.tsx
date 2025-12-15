"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detecta mudança de rota
    if (prevPathnameRef.current !== pathname) {
      // Limpa timeout anterior se existir
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }

      setIsLoading(true);
      prevPathnameRef.current = pathname;

      // Esconde após um tempo mínimo
      loadingTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        loadingTimeoutRef.current = null;
      }, 500);
    }

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [pathname]);

  useEffect(() => {
    // Intercepta cliques em links Next.js
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]");
      
      if (link) {
        const href = link.getAttribute("href");
        // Se é um link interno do Next.js e não está já carregando
        if (
          href && 
          href.startsWith("/") && 
          !link.hasAttribute("target") &&
          !isLoading
        ) {
          setIsLoading(true);
          
          // Limpa timeout anterior se existir
          if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
          }

          // Timeout de segurança caso a rota não mude
          loadingTimeoutRef.current = setTimeout(() => {
            setIsLoading(false);
            loadingTimeoutRef.current = null;
          }, 1000);
        }
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-16 h-16 rounded-full border-4 border-green-400 border-t-transparent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-green-400 font-semibold text-lg font-array relative z-10"
            >
              B
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

