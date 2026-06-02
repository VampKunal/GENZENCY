"use client";

import { useEffect, type RefObject } from "react";

type ParallaxTargets = {
  container: RefObject<HTMLElement | null>;
  stage?: RefObject<HTMLElement | null>;
  blossom: RefObject<HTMLElement | null>;
  titleTop?: RefObject<HTMLElement | null>;
  titleBottom?: RefObject<HTMLElement | null>;
  stickerLeft?: RefObject<HTMLElement | null>;
  stickerRight?: RefObject<HTMLElement | null>;
};

export function useHeroParallax(targets: ParallaxTargets) {
  useEffect(() => {
    const container = targets.container.current;
    if (!container) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;
    let active = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const setTransform = (
      el: HTMLElement | null,
      transform: string
    ) => {
      if (el) el.style.transform = transform;
    };

    const tick = () => {
      if (!active) return;
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const bx = currentX * 26;
      const by = currentY * 26;

      setTransform(
        targets.blossom.current,
        `translate3d(calc(-50% + ${bx}px), calc(-50% + ${by}px), -3rem) rotateY(${currentX * 8}deg) rotateX(${currentY * -6}deg) rotate(${-3 + currentX * 4}deg)`
      );

      setTransform(
        targets.stage?.current ?? null,
        `rotateY(${currentX * 2}deg) rotateX(${currentY * -1.5}deg)`
      );

      setTransform(
        targets.titleTop?.current ?? null,
        `translate3d(${currentX * 10}px, ${currentY * 10}px, 2.5rem)`
      );

      setTransform(
        targets.titleBottom?.current ?? null,
        `translate3d(${currentX * -10}px, ${currentY * -10}px, 2.5rem)`
      );

      setTransform(
        targets.stickerLeft?.current ?? null,
        `translate3d(${currentX * -22}px, ${currentY * -22}px, 3.5rem) rotate(${-8 + currentX * -10}deg)`
      );

      setTransform(
        targets.stickerRight?.current ?? null,
        `translate3d(${currentX * 22}px, ${currentY * 22}px, 3.5rem) rotate(${12 + currentX * 10}deg)`
      );

      raf = requestAnimationFrame(tick);
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- refs stable
  }, []);
}
