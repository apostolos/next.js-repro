// import type { Instant } from "next";

// WORKAROUND for the instant=false bug: uncommenting this silences the
// E1403 "link data" error that [slug]/page.tsx's `instant = false` should
// already have silenced. The implicit validation of this __DEFAULT__ segment
// re-enables instant validation for the whole route subtree, and holes from
// the opted-out `children` slot (the page) are reported anyway.
// export const instant: Instant = false;

export default function Default() {
  return null;
}
