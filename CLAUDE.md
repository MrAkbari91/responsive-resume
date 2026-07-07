# Developer Guide (CLAUDE.md)

This file documents core developer actions, commands, and rules for modifying this repository.

---

## 🛠️ Developer Commands

### Development Server
Run a local development environment (with hot reloading and HMR):
```bash
npm run dev
# or
bun run dev
```

### Production Compilation
Check code syntax, build static page routing, and compile optimized bundles:
```bash
npm run build
# or
bun run build
```

---

## 📝 Coding Guidelines

### DRY Architecture
- **Resume Data**: Never hardcode personal information inside visual templates. Always edit [resumeData.ts](file:///e:/Dhruv/code/html/responsive-resume/src/data/resumeData.ts) directly.
- **Shared Badges**: Use `<SkillBadge>` and `<CalendarBadge>` (located in `src/components/ui/`) to render pills, chips, and calendars to maintain styling consistency.

### Styling & Theme Rules
- **Tailwind Version**: Tailwind CSS v4 is used with CSS-first configurations in `src/app/globals.css`.
- **Invalid Colors**: Never use custom increments like `slate-850`, `indigo-650`, or `rose-450` which are invalid in Tailwind v4. Use standard scale increments (e.g. `slate-800`, `indigo-600`, `rose-400`).
