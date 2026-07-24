import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function registerLenis(instance: Lenis) {
  lenisInstance = instance;
}

export function unregisterLenis() {
  lenisInstance = null;
}

export function getLenis() {
  return lenisInstance;
}

export function stopLenis() {
  lenisInstance?.stop();
}

export function startLenis() {
  lenisInstance?.start();
}