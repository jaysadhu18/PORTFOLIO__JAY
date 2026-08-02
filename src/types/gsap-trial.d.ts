declare module "gsap-trial/ScrollSmoother" {
  export * from "gsap/ScrollSmoother";
  export { default } from "gsap/ScrollSmoother";
  export { ScrollSmoother } from "gsap/ScrollSmoother";
}

declare module "gsap-trial/SplitText" {
  export class SplitText {
    readonly chars: Element[];
    readonly lines: Element[];
    readonly words: Element[];
    readonly elements: Element[];
    constructor(
      target: string | Element | Element[] | NodeListOf<Element> | string[],
      vars?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        [key: string]: unknown;
      },
    );
    revert(): void;
    split(vars: Record<string, unknown>): SplitText;
  }
  export default SplitText;
}
