# Graph Report - yojna-portal  (2026-06-03)

## Corpus Check
- 180 files · ~205,179 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 356 nodes · 229 edges · 20 communities detected
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 43 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 150|Community 150]]
- [[_COMMUNITY_Community 151|Community 151]]

## God Nodes (most connected - your core abstractions)
1. `Aye Yo Brand Logo (Architecture Pyramid Graphic)` - 11 edges
2. `seed()` - 10 edges
3. `Website (Next.js Front-end)` - 8 edges
4. `GET()` - 7 edges
5. `PageClient()` - 6 edges
6. `Collections` - 6 edges
7. `Draft Preview` - 6 edges
8. `Posts` - 5 edges
9. `Error()` - 4 edges
10. `generateMetadata()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Payload CMS` --conceptually_related_to--> `Payload CMS Skill`  [INFERRED]
  README.md → AGENTS.md
- `Website Template Open Graph Social Image` --conceptually_related_to--> `Aye Yo Brand Logo (Architecture Pyramid Graphic)`  [AMBIGUOUS]
  public/website-template-OG.webp → public/media/Aye Yo-900x900.png
- `post1()` --calls--> `seed()`  [INFERRED]
  src/endpoints/seed/post-1.ts → src/endpoints/seed/index.ts
- `seed()` --calls--> `post2()`  [INFERRED]
  src/endpoints/seed/index.ts → src/endpoints/seed/post-2.ts
- `seed()` --calls--> `post3()`  [INFERRED]
  src/endpoints/seed/index.ts → src/endpoints/seed/post-3.ts

## Hyperedges (group relationships)
- **Layout-builder + draft-enabled content collections** —  [EXTRACTED 1.00]
- **Next.js front-end stack** —  [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.1
Nodes (12): beforeSyncWithSearch(), home(), Error(), fetchFileByURL(), richText(), seed(), toSlug(), post1() (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (15): Access Control, Categories, Collections, Draft Preview, Jobs and Scheduled Publish, Layout Builder, Live Preview, Media (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (7): generateMeta(), getImageURL(), getMeUser(), getClientSideURL(), getServerSideURL(), generateURL(), mergeOpenGraph()

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (4): getCachedDocument(), getCachedRedirects(), PayloadRedirects(), NotFound()

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (12): afterChange Hook, Cache Strategy, Next.js App Router, On-demand Revalidation, Rationale: Next.js caching disabled via Payload Cloud + Cloudflare, Redirects Plugin, Search Plugin, SEO Plugin (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.2
Nodes (12): Favicon Brand Mark (Isometric A/Y Logo), Aye Yo Logo 1200x630 Variant, Aye Yo Logo 300x300 Variant, Aye Yo Logo 500x500 Variant, Aye Yo Logo 600x600 Variant, Aye Yo Logo 900x900 Variant, Aye Yo Brand Logo (Architecture Pyramid Graphic), Tech Stack: Better Auth 1.5 / RBAC Auth & Org (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.24
Nodes (3): generateMetadata(), generateStaticParams(), Page()

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (2): useHeaderTheme(), PageClient()

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (8): Agents Guide, Payload CMS Skill, Footer Global, Globals, Header Global, Payload CMS, Payload Config, Payload Website Template

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (3): Footer(), Header(), getCachedGlobal()

### Community 10 - "Community 10"
Cohesion: 0.38
Nodes (4): deepMerge(), isObject(), link(), linkGroup()

### Community 11 - "Community 11"
Cohesion: 0.4
Nodes (2): ThemeSelector(), useTheme()

### Community 12 - "Community 12"
Cohesion: 0.4
Nodes (5): Migrations, MongoDB Adapter, Postgres Adapter, Rationale: push:false in production to avoid data loss, Deploying to Vercel

### Community 14 - "Community 14"
Cohesion: 0.5
Nodes (2): getMediaUrl(), ImageMedia()

### Community 15 - "Community 15"
Cohesion: 0.5
Nodes (2): Search(), useDebounce()

### Community 17 - "Community 17"
Cohesion: 0.83
Nodes (3): revalidateDelete(), revalidateYojna(), revalidateYojnaPaths()

### Community 18 - "Community 18"
Cohesion: 0.83
Nodes (4): Hero Background — Abstract Blue/Amber Gradient, Post 1 Thumbnail — Abstract Curved Gradient, Post 2 Thumbnail — Abstract Curved Gradient, Post 3 Thumbnail — Abstract Curved Gradient

### Community 19 - "Community 19"
Cohesion: 0.67
Nodes (1): RowLabel()

### Community 150 - "Community 150"
Cohesion: 1.0
Nodes (1): Lexical Editor

### Community 151 - "Community 151"
Cohesion: 1.0
Nodes (1): Docker Setup

## Ambiguous Edges - Review These
- `Website Template Open Graph Social Image` → `Aye Yo Brand Logo (Architecture Pyramid Graphic)`  [AMBIGUOUS]
  public/website-template-OG.webp · relation: conceptually_related_to

## Knowledge Gaps
- **29 isolated node(s):** `Header Global`, `Footer Global`, `Access Control`, `Lexical Editor`, `Live Preview` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 7`** (9 nodes): `HeaderThemeProvider()`, `useHeaderTheme()`, `PageClient()`, `page.client.tsx`, `page.client.tsx`, `page.client.tsx`, `page.client.tsx`, `page.client.tsx`, `index.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (5 nodes): `ThemeProvider()`, `ThemeSelector()`, `useTheme()`, `index.tsx`, `index.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (4 nodes): `getMediaUrl()`, `ImageMedia()`, `index.tsx`, `getMediaUrl.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (4 nodes): `Search()`, `Component.tsx`, `useDebounce.ts`, `useDebounce()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (3 nodes): `RowLabel()`, `RowLabel.tsx`, `RowLabel.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 150`** (1 nodes): `Lexical Editor`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 151`** (1 nodes): `Docker Setup`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Website Template Open Graph Social Image` and `Aye Yo Brand Logo (Architecture Pyramid Graphic)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `GET()` connect `Community 0` to `Community 2`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `getMeUser()` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `Aye Yo Brand Logo (Architecture Pyramid Graphic)` (e.g. with `Favicon Brand Mark (Isometric A/Y Logo)` and `Aye Yo Logo 600x600 Variant`) actually correct?**
  _`Aye Yo Brand Logo (Architecture Pyramid Graphic)` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `seed()` (e.g. with `post1()` and `post2()`) actually correct?**
  _`seed()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `GET()` (e.g. with `seed()` and `Error()`) actually correct?**
  _`GET()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Header Global`, `Footer Global`, `Access Control` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._