import type { ComponentProps, ReactNode } from "react";
import type { DirectiveComponentProps } from "../../directiveTypes";
import { extractDirectiveLines } from "../../extractDirectiveLines";
import { getCardImage } from "../Yu-Gi-Oh-Card/cardImages";
import styles from "./yugiohfield.module.css";
import { YGOField, YGOHalfField } from "@/components/SVGtsx/YGOField";

const halfFieldSlots = [
  "cm1",
  "cm2",
  "cm3",
  "cm4",
  "cm5",
  "cst1",
  "cst2",
  "cst3",
  "cst4",
  "cst5",
  "cf",
  "cg",
  "cv",
  "cd",
  "ced",
  "ch",
  "ex1",
  "ex2",
] as const satisfies readonly (keyof ComponentProps<typeof YGOHalfField>)[];

const fieldSlots = [
  ...halfFieldSlots,
  "om1",
  "om2",
  "om3",
  "om4",
  "om5",
  "ost1",
  "ost2",
  "ost3",
  "ost4",
  "ost5",
  "of",
  "og",
  "ov",
  "od",
  "oed",
  "oh",
] as const satisfies readonly (keyof ComponentProps<typeof YGOField>)[];

function isFieldSlot(
  value: string,
  slots: readonly (keyof ComponentProps<typeof YGOField>)[],
): value is keyof ComponentProps<typeof YGOField> {
  return slots.some((slot) => slot === value);
}

function readFieldImages(
  children: ReactNode,
  slots: readonly (keyof ComponentProps<typeof YGOField>)[],
) {
  const images: Partial<ComponentProps<typeof YGOField>> = {};
  const usedSlots = new Set<keyof ComponentProps<typeof YGOField>>();

  for (const line of extractDirectiveLines(children)) {
    const separator = line.indexOf(":");
    if (separator === -1) {
      continue;
    }

    const slot = line.slice(0, separator).trim();
    const cardName = line.slice(separator + 1).trim();

    if (!isFieldSlot(slot, slots)) {
      continue;
    }
    if (slot === "ch" || slot === "oh") {
      if (cardName) {
        const imageUrl = getCardImage(cardName);
        if (imageUrl) {
          images[slot] = [...(images[slot] ?? []), imageUrl];
        }
      }
      continue;
    }
    if (usedSlots.has(slot)) {
      continue;
    }
    usedSlots.add(slot);

    if (!cardName) {
      continue;
    }

    const imageUrl = getCardImage(cardName);
    if (imageUrl) {
      images[slot] = imageUrl;
    }
  }

  return images;
}

export function YuGiOhField({ children }: DirectiveComponentProps) {
  const images = readFieldImages(children, fieldSlots);

  return (
    <div className={styles.cardContainer}>
      <YGOField {...images} />
    </div>
  );
}

export function YuGiOhHalfField({ children }: DirectiveComponentProps) {
  const images = readFieldImages(children, halfFieldSlots);

  return (
    <div className={styles.cardContainer}>
      <YGOHalfField {...images} />
    </div>
  );
}
