declare module "embla-carousel-autoplay" {
  import type { EmblaOptionsType } from "embla-carousel";
  /**
   * Autoplay plugin for Embla Carousel.
   * The actual implementation is a function that returns an object with the plugin API.
   * We type it loosely as `any` to avoid strict type errors while still providing a module.
   */
  const Autoplay: (options?: Partial<EmblaOptionsType>) => any;
  export default Autoplay;
}
