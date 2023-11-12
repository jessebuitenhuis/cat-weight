export abstract class INavbarLink {
  abstract isActive(link: unknown[] | string | null | undefined): boolean;
}
