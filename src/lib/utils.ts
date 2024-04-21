import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

type Return = { supports: true; viewTransitionObject: ViewTransition } | { supports: false };

export function startViewTransition(transitionId: string, cssText: string): Return {
  const elem = document.querySelector(
    `div[data-transition-id="${transitionId}"]`
  ) as HTMLDivElement | null;

  if (!elem) {
    return { supports: false };
  }

  if (document.startViewTransition) {
    let response = document.startViewTransition(() => {
      elem.style.cssText = cssText;
    });

    return { supports: true, viewTransitionObject: response };
  } else {
    elem.style.cssText = cssText;

    return { supports: false };
  }
}
