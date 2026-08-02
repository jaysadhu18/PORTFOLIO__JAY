# How to get your 3D character GLB

Put the final file at: `public/models/character.glb`

## Recommended path (easiest for this portfolio)

### 1. Create the avatar — Ready Player Me
1. Open https://readyplayer.me/
2. Create an avatar (photo upload or customize).
3. Export / download as **GLB**.
4. Save as `public/models/character.glb`.

### 2. Add animations — Mixamo (Adobe)
1. Go to https://www.mixamo.com/ (free Adobe account).
2. Upload your character (or use a Mixamo character that looks similar).
3. Download clips you need as **FBX** (or GLB if offered):
   - Idle / typing
   - Wave or sit-intro
   - Blink (or add later in Blender)
4. Import FBX + animations into **Blender**, export one **GLB** with all clips named clearly:
   - `intro`, `typing`, `Blink`, `browup` (names can be remapped in `src/data/boneData.ts`)

### 3. Inspect bone / clip names
1. Open https://gltf.report/ and drop your GLB.
2. Note animation clip names and head/neck bone names.
3. Update `src/data/boneData.ts` to match.

### 4. HDR for lighting
- Free HDRIs: https://polyhaven.com/hdris
- Put e.g. `public/models/env.hdr` (used in Phase 4)

## AI alternatives (faster, more cleanup)
| Tool | What it does |
|------|----------------|
| [Meshy](https://www.meshy.ai/) | Text/image → 3D |
| [Tripo AI](https://www.tripo3d.ai/) | Image → 3D |
| [Luma Genie](https://lumalabs.ai/genie) | Text → 3D |

You still usually re-rig / re-animate in Mixamo or Blender for `intro` / `typing` / blink clips.

## What this site needs (Phase 4)
- One GLB with DRACO-friendly export
- Named animation clips (intro once, typing loop, blink, optional brow)
- A head bone for mouse look-at
- Your own model — do **not** copy the reference site’s character

## Until you have a GLB
We continue Phases 0–3 (loading, scroll, cursor, sections). Character work starts in Phase 4.
