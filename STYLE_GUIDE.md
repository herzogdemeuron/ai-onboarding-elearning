# H&dM AI Onboarding - Style Guide

Guidelines for maintaining consistency in content, design, and interactions.

---

## Content Voice & Tone

### General Principles
- **Professional but approachable** - Clear, direct language without jargon
- **Action-oriented** - Focus on what users should do, not abstract concepts
- **H&dM-specific** - Reference firm tools, values, and practices
- **Empowering** - Frame AI as a tool that augments capabilities, not replaces judgment

### Writing Style
- Use active voice: "Review AI outputs before sharing" not "AI outputs should be reviewed"
- Address the user directly: "You remain responsible" not "Users remain responsible"
- Keep sentences concise (under 25 words when possible)
- Avoid hedging language: "AI can help" not "AI might potentially be able to help"

---

## Module Structure

### Module Metadata
| Field | Format | Example |
|-------|--------|---------|
| `title` | Full descriptive title | "Getting Started: H&dM Chat" |
| `shortTitle` | Sidebar-friendly (max 20 chars) | "H&dM Chat" |
| `duration` | "X min" format | "4 min" |

### Heading Conventions
- `heading`: Action-oriented, describes what the module covers
- Format: "Topic: Subtitle" or just "Topic"
- Examples:
  - "AI Basics: What AI is and how we use it"
  - "Responsible AI: Risks, Policy, and Accountability"
  - "Final Reflections"

### Description
- 1-2 sentences summarizing learning objectives
- Start with action verb when describing activities: "Sort each AI practice..." or "Follow along the click demo..."
- For concept modules, describe what the user will learn

---

## Interactive Elements

### Quizzes

**Question Format**
- Clear, single-concept questions
- Avoid double negatives
- 4 answer options per question
- Correct answer should be unambiguous

**Answer Options**
- Similar length across options
- One clearly correct answer
- Distractors should be plausible but distinguishable
- Avoid "all of the above" or "none of the above"

**Example**
```typescript
{
  id: 'b1',
  question: 'What is artificial intelligence?',
  options: [
    'A robot that thinks exactly like humans',
    'Computer systems that can perform tasks typically requiring human intelligence',
    'A database of pre-written answers',
    'A search engine for the internet'
  ],
  correctAnswer: 1
}
```

### Sorting Activities

**Categories**
- Use clear, contrasting labels: "Good Practice" vs "Risky Practice"
- Keep category names short (2-3 words)

**Cards**
- 6-8 cards per activity
- Balance between categories (e.g., 3 good, 3 risky)
- Cards should be clearly sortable - avoid ambiguous scenarios
- Start with verb when possible: "Use approved tools...", "Paste confidential..."

### Click Demos

**Step Instructions**
- Start with action verb: "Click", "Type", "Select", "Scroll"
- Be specific about UI elements: "Click the + button" not "Click the button"
- Include context when helpful: "Click to open sidebar"
- Keep under 15 words per instruction

**Screenshots**
- WebP format for all images
- Naming: `tool-name-step-description.webp`
- Store in `public/images/[tool-name]-click demo/`

**Step Types**
- `clickArea`: Standard click interaction
- `isOverview: true`: Informational step with multiple highlighted areas
- `typingSimulation`: Text input demonstration
- `clickType: 'right'`: Right-click interaction

### Principle Cards

**Structure**
- `title`: Principle name (2-3 words)
- `subtitle`: One sentence explaining the principle
- `description`: "How this applies in daily work:"
- `details`: 3-4 bullet points with concrete actions

**Bullet Style**
- Start with action verb
- Focus on what to do (not what not to do)
- Be specific to H&dM context when possible

---

## Key Takeaways

- 3-5 bullet points per module
- Start each with noun or verb
- Actionable and memorable
- Reinforce main learning objectives

**Examples**
```
'AI is a tool to augment your capabilities, not replace them'
'Always use approved AI tools for work tasks'
'Human Accountability — You remain responsible for all outcomes'
```

---

## Video & Captions

### Video Files
- Format: MP4
- Naming: `Module[N]_video.mp4`
- Location: `public/videos/`

### VTT Captions
- Format: WebVTT
- Naming: `Module[N]_video.vtt`
- Location: `public/videos/`

**Caption Timing**
- Max 2 lines per caption
- 5-7 seconds per caption (adjust to speech)
- Break at natural pauses and sentence boundaries

**Caption Format**
```vtt
WEBVTT

1
00:00:00.000 --> 00:00:06.000
Welcome to the H&dM AI-Onboarding.
This first video will explain what Artificial Intelligence is,

2
00:00:06.000 --> 00:00:12.000
introduce a few basic AI terms,
and look at the most common ways AI is currently used at our practice.
```

---

## Images

### Format & Naming
- Format: WebP (converted from PNG for performance)
- Use lowercase with hyphens: `ai-index-searchbar.webp`
- Descriptive names: `hdmchat-skill/hdmchat-skill1.webp`

### Organization
```
public/images/
├── [general images].webp
├── hdmchat-skill/          # H&dM Chat tutorial images
├── xfigura-click demo/     # XFigura tutorial images
└── ...
```

---

## Terminology

### Preferred Terms
| Use | Avoid |
|-----|-------|
| H&dM | Herzog & de Meuron (except first mention) |
| AI model | AI system, AI algorithm |
| AI-generated | AI-created, machine-generated |
| AI-enhanced | AI-modified, AI-edited |
| Hallucination | Making things up, lying |
| Prompt | Query, question (in AI context) |

### H&dM-Specific Terms
- **AI Hub** - Central resource for AI at H&dM
- **H&dM Chat** - Internal chat tool
- **XFigura** - Image generation tool
- **AI Index** - Directory of available AI tools

---

## Accessibility

- All images should have descriptive alt text in components
- Video captions are required for all video content
- Interactive elements must be keyboard-accessible
- Maintain sufficient color contrast for text

---

## Module IDs

- Sequential integers starting from 1
- When reordering, update all subsequent IDs
- Update any cross-references when IDs change

---

## Review Checklist

Before publishing new content:

- [ ] Module metadata complete (title, shortTitle, duration)
- [ ] Description is clear and action-oriented
- [ ] Quiz questions have 4 options with one correct answer
- [ ] Key takeaways are actionable (3-5 items)
- [ ] Images are WebP format and properly named
- [ ] Video captions are synced and proofread
- [ ] No confidential information in examples
- [ ] Terminology follows style guide
- [ ] Interactive elements tested on all browsers
