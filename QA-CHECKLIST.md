# Portfolio QA Checklist

## 1. Responsiveness Audit

### Breakpoints to Test
- [ ] **Mobile** (< 640px): iPhone SE, iPhone 14, Samsung Galaxy S21
- [ ] **Tablet** (640px - 1024px): iPad Mini, iPad Air
- [ ] **Desktop** (1024px - 1920px): Standard laptops, monitors
- [ ] **Large** (> 1920px): 4K monitors, ultrawide displays

### Common Overflow Issues Checklist
```bash
# Check for horizontal overflow
document.body.scrollWidth > window.innerWidth

# Run in browser DevTools:
# 1. Toggle device toolbar (Ctrl/Cmd + Shift + M)
# 2. Test all breakpoints
# 3. Check for content cutoff
```

### Verified Fixes Applied
- ✅ Added `overflow-x: hidden` to body
- ✅ Timeline cards use responsive padding
- ✅ Mobile-first breakpoints throughout
- ✅ Safe area insets for notched devices

### Testing Commands
```bash
# Start dev server
npm run dev

# Chrome DevTools:
# 1. F12 → Device Toolbar → Responsive
# 2. Test at: 375px, 768px, 1024px, 1440px, 1920px
# 3. Check for text truncation, card overflow
```

---

## 2. Browser Compatibility

### Target Browsers
| Browser | Version | Priority |
|---------|---------|----------|
| Chrome | 90+ | High |
| Firefox | 88+ | High |
| Safari | 14+ | High |
| Edge | 90+ | Medium |
| iOS Safari | 14+ | High |

### CSS Features Checklist
- [ ] `backdrop-filter: blur()` - Add `-webkit-` prefix
- [ ] `gap` property - Works everywhere
- [ ] CSS Variables - Works everywhere
- [ ] `aspect-ratio` - Works everywhere
- [ ] `clamp()` - Works everywhere

### Applied Fixes
```css
/* In globals.css */
.glass {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari */
}
```

### Safari-Specific Issues
| Issue | Fix |
|-------|-----|
| Animated gradient text | Uses `-webkit-text-fill-color` ✅ |
| Custom scrollbar | Uses `-webkit-scrollbar` ✅ |
| Safe area insets | Added `env(safe-area-inset-*)` ✅ |

---

## 3. Accessibility (A11y)

### Focus States
```css
/* Already in globals.css */
*:focus-visible {
  outline: 2px solid var(--color-neon-cyan);
  outline-offset: 2px;
}
```

### ARIA Labels Verified
- [ ] Navigation has `aria-label="Main navigation"`
- [ ] Social icons have `aria-label` attributes
- [ ] Timeline section has `aria-labelledby`
- [ ] Decorative icons have `aria-hidden="true"`

### Keyboard Navigation
| Key | Expected Action |
|-----|-----------------|
| Tab | Navigate through interactive elements |
| Enter/Space | Activate buttons/links |
| Escape | Close modals/menus |
| Arrow Keys | Navigate within components |

### Screen Reader Testing
```bash
# macOS: VoiceOver (Cmd + F5)
# Windows: NVDA (free download)
# Linux: Orca
```

---

## 4. Custom Cursor Compatibility

### Touch Device Detection
```typescript
// Custom cursor is hidden on touch devices via CSS
@media (pointer: coarse) {
  .custom-cursor { display: none; }
}
```

### Verified Behavior
- [ ] Hidden on mobile/touch devices
- [ ] Shows on desktop hover
- [ ] Cursor-none applied after hydration
- [ ] No lag on low-end devices

---

## 5. Performance Testing

### CPU/RAM Stress Test
```bash
# Chrome DevTools
# 1. Open Performance tab
# 2. Record while scrolling
# 3. Check for:
#    - Main thread blocking
#    - FPS drops
#    - Memory leaks
```

### Reduced Motion Support
```css
/* Already in globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Particle Background Optimization
- [ ] Pauses when tab is hidden
- [ ] Reduced particles on mobile
- [ ] Detects `prefers-reduced-motion`
- [ ] Uses `will-change` sparingly

### Lighthouse Targets
| Metric | Target | Current |
|--------|--------|---------|
| Performance | 90+ | TBD |
| Accessibility | 95+ | TBD |
| Best Practices | 95+ | TBD |
| SEO | 100 | TBD |

---

## 6. Edge Cases

### Image Fallbacks
```typescript
// Use Next.js Image with fallback
<Image
  src={project.image}
  alt={project.title}
  placeholder="blur"
  onError={(e) => {
    e.target.src = '/fallback-image.png';
  }}
/>
```

### Network Failure Handling
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Forms have validation and error states
- [ ] Empty states for filtered content

### Error Boundaries
```typescript
// Consider adding error boundary for production
<ErrorBoundary fallback={<ErrorPage />}>
  <ProjectModal />
</ErrorBoundary>
```

---

## 7. SEO Validation

### Metadata Checklist
- [ ] Title under 60 characters
- [ ] Meta description under 160 characters
- [ ] Open Graph image (1200x630)
- [ ] Twitter card metadata
- [ ] Canonical URL
- [ ] Structured data (optional)

### Testing Commands
```bash
# Validate meta tags
npx playwright install
npx playwright test --grep="meta"

# Check for console errors
npm run build
npm start
# Visit http://localhost:3000 and check console
```

---

## 8. Deployment Pre-flight

### Pre-Deploy Checklist
- [ ] `npm run build` passes without errors
- [ ] `npm run lint` passes (warnings acceptable)
- [ ] Test on localhost
- [ ] Verify all images load
- [ ] Test all interactive elements
- [ ] Check mobile responsive
- [ ] Verify fonts load correctly
- [ ] Test social sharing previews

### Environment Variables
```bash
# Create .env.local for production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 9. Quick Test Script

Paste this in browser console to check for issues:

```javascript
(() => {
  const issues = [];
  
  // Check for images without alt
  document.querySelectorAll('img').forEach(img => {
    if (!img.alt) issues.push(`Image missing alt: ${img.src}`);
  });
  
  // Check for buttons without accessible names
  document.querySelectorAll('button').forEach(btn => {
    if (!btn.textContent.trim() && !btn.getAttribute('aria-label')) {
      issues.push('Button missing accessible name');
    }
  });
  
  // Check for links without text
  document.querySelectorAll('a').forEach(link => {
    if (!link.textContent.trim() && !link.getAttribute('aria-label')) {
      issues.push('Link missing text/aria-label');
    }
  });
  
  // Report
  if (issues.length > 0) {
    console.warn('Accessibility issues found:', issues);
  } else {
    console.log('✅ Basic accessibility checks passed!');
  }
})();
```

---

## 10. Testing Checklist

| Test | Status |
|------|--------|
| Mobile (iPhone/Android) | ⬜ |
| Tablet (iPad/Android) | ⬜ |
| Desktop (Chrome) | ⬜ |
| Desktop (Firefox) | ⬜ |
| Desktop (Safari) | ⬜ |
| VoiceOver/NVDA | ⬜ |
| Reduced Motion | ⬜ |
| Lighthouse Score | ⬜ |
| Console Errors | ⬜ |
| Social Sharing | ⬜ |
