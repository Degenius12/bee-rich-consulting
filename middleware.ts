import { NextResponse, type NextRequest } from "next/server";

/**
 * Password-protects the client pitch deck (/pitch-deck.html) with HTTP Basic
 * Auth so it can be shared with a single password on any browser/device, while
 * the rest of the marketing site stays public.
 *
 * The credentials come from Vercel environment variables (the repo is public,
 * so nothing secret is committed):
 *   - DECK_PASSWORD  (required)  the shared password
 *   - DECK_USER      (optional)  the username, defaults to "trisha"
 *
 * Fails closed: if DECK_PASSWORD is not configured, the deck is unavailable
 * (503) rather than served unprotected.
 */

export const config = {
  matcher: ["/pitch-deck.html"],
};

export function middleware(req: NextRequest) {
  const expectedUser = process.env.DECK_USER || "trisha";
  const expectedPass = process.env.DECK_PASSWORD;

  if (!expectedPass) {
    return new NextResponse(
      "Pitch deck access is not configured yet. Please set DECK_PASSWORD.",
      { status: 503 },
    );
  }

  const header = req.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    let decoded = "";
    try {
      decoded = atob(header.slice(6));
    } catch {
      decoded = "";
    }
    const sep = decoded.indexOf(":");
    if (sep !== -1) {
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="Bee-Rich Consulting Pitch Deck", charset="UTF-8"',
    },
  });
}
