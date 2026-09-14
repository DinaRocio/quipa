# Site images

## brand/
- `logo.png` — Qhipa logo (header, footer, social share preview)

## hero/
- `left.jpg` — large left photo: members in a conversation session
- `right.jpg` — large right photo: members at a cultural event
- `meetup.jpg` — small photo: a meetup
- `group.jpg` — small photo: group photo

## team/
Team photos are hosted on Cloudinary (see `src/components/team.tsx`), not here.

## gallery/
Fully dynamic — just drop `.jpg` / `.jpeg` / `.png` / `.webp` files into either folder and they show up on the site automatically on the next build. No code changes, no fixed count, any filename works.
- `conversation/` — conversation meetup sessions
- `integration/` — outdoor integration events (karaoke, bbq, jinkana, cultural nights, etc.)
