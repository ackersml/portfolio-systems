# Portfolio Page Build Prompt for Lovable
## Michelle Ackers - Complete Portfolio Website

### CONTEXT & OBJECTIVE
Build a complete portfolio website for Michelle Ackers based on the existing design at michelleackers.framer.website. The site should showcase her work as a Product Engineer and Operations Architect, featuring a clean, modern dark theme with clear navigation, project showcases, and comprehensive information about her services and approach.

---

## PROJECT STRUCTURE

### Pages Required
1. **Home Page** (`/` or `index.html`)
2. **Projects Page** (`/projects` or `projects.html`)
3. **Project Detail Pages** (`/projects/[project-slug]` or individual HTML files)
4. **About Page** (`/about` or `about.html`)
5. **FAQ Page** (`/faq` or `faq.html`)
6. **Project Discovery Page** (`/project-discovery` or `project-discovery.html`)
7. **Contact Page** (`/contact` or `contact.html`)

---

## GLOBAL DESIGN SYSTEM

### Color Palette
- **Primary Background**: Dark/Black (`#000000` or `#0a0a0a`)
- **Text Primary**: White (`#ffffff`)
- **Text Secondary**: Light gray for descriptions
- **Accent Color**: White for buttons/CTAs
- **Button Background**: White with black text
- **Borders**: Subtle gray borders where needed

### Typography
- **Primary Font**: Clean, modern sans-serif (Inter, System UI, or similar)
- **Headings**: Bold, large, clear hierarchy
- **Body Text**: Readable, appropriate line height
- **Font Sizes**: 
  - Hero headings: Very large (48px+)
  - Section headings: Large (32-40px)
  - Body text: 16-18px
  - Small text: 14px

### Visual Style
- **Theme**: Dark background with white text
- **Layout**: Clean, spacious, modern
- **Spacing**: Generous whitespace
- **Images**: High-quality project images, professional photos
- **Icons**: Simple, clean line icons
- **Buttons**: White rectangular buttons with rounded corners, black text

---

## NAVIGATION STRUCTURE

### Navigation Bar
- **Position**: Fixed or top of page
- **Layout**: Horizontal, full width
- **Left Side**: Navigation links
  - Home
  - Projects
  - FAQ
  - About
  - Discovery
- **Right Side**: Contact button (white button, black text)
- **Active State**: Current page link should be visually highlighted
- **Styling**: White text on dark background
- **Responsive**: Mobile hamburger menu

### Footer
- **Layout**: Three columns
- **Column 1 - Portfolio**:
  - Projects
  - Contact
- **Column 2 - About**:
  - Approach (links to About)
  - FAQ
- **Column 3 - Connect**:
  - LinkedIn (link to https://www.linkedin.com/in/michelle-ackers-/)
- **Styling**: White text, organized in columns

---

## PAGE 1: HOME PAGE

### Route
`/` or `index.html`

### Layout Structure
1. Navigation
2. Hero Section
3. Three Feature Cards
4. About Section
5. Testimonial Section
6. CTA Section
7. FAQ Preview Section
8. Footer

### SECTION 1: Hero Section

**Content**:
- **Main Heading**: "Designing intelligent systems for scalable outcomes."
- **Subheading**: "AI‑led product engineering for founders and teams. Maximize impact, minimize manual work."

**Styling**:
- Large, bold white text
- Centered or left-aligned
- Generous spacing

**CTAs**:
- "View Projects" button (links to /projects)
- "Get in Touch" button (links to /contact)
- White buttons with black text, rounded corners

### SECTION 2: Three Feature Cards

**Layout**: Horizontal three-column grid

**Card 1: Automation**
- **Label**: "Automation" (small text above)
- **Heading**: "Eliminate bottlenecks." (large, bold)
- **Image**: Relevant automation/system image
- **Styling**: Card with image at top, text below

**Card 2: Integration**
- **Label**: "Integration" (small text above)
- **Heading**: "Connect your data." (large, bold)
- **Image**: Integration/connection image
- **Styling**: Same as Card 1

**Card 3: Product**
- **Label**: "Product" (small text above)
- **Heading**: "Accelerate launches." (large, bold)
- **Image**: Product/launch image
- **Styling**: Same as Card 1

### SECTION 3: About Section

**Heading**: "About Michelle Ackers"

**Description**: "Systems-focused product engineer blending AI with practical automation, rapidly creating platforms that scale. Proven record in streamlining operations, building agent-powered workflows, and helping founders move from concept to launch with clarity and confidence."

**Styling**: Large paragraph, readable line height, white text

### SECTION 4: Testimonial Section

**Quote**: "Michelle's visibility into ops and outcome-driven solutions made 10x growth possible."

**Attribution**: "Sasha W., Tech CEO"

**Styling**: 
- Large quote text, italic or special treatment
- Attribution below in smaller text
- Centered or left-aligned

### SECTION 5: CTA Section

**Heading**: "Have a project? Let's design the system that scales it."

**Description**: "Unlock outcomes with AI‑savvy engineering. Let's talk solutions or see more projects."

**CTA Button**: "View Projects" (links to /projects)

**Styling**: Centered, prominent

### SECTION 6: FAQ Preview Section

**Layout**: Accordion or expandable sections

**FAQ Items**:

1. **Question**: "What problems do you typically solve?"
   **Answer**: "I design and implement systems that reduce manual operations and increase reliability: ecommerce/wholesale, memberships/communities, payments and scheduling, CRM pipelines, and AI‑powered automations."

2. **Question**: "How do engagements usually start?"
   **Answer**: "We begin with a short discovery (1–2 calls) to clarify goals, constraints, and success criteria. From there I propose scope, deliverables, and a phased plan with risks and assumptions called out."

3. **Question**: "What are typical deliverables?"
   **Answer**: "Architecture diagrams, implementation plans, component libraries, integrations, automation workflows, and admin/reporting views. You'll also get runbooks and handoff docs so the system is maintainable."

**Styling**: 
- Questions: Bold, clickable, expandable
- Answers: Regular text, revealed on click
- Clean accordion interface

---

## PAGE 2: PROJECTS PAGE

### Route
`/projects` or `projects.html`

### Layout Structure
1. Navigation
2. Page Header
3. Projects List
4. Footer

### SECTION 1: Page Header

**Main Heading**: "Impactful projects."

**Subheading**: "Explore product engineering work by domain, filter by technological area, and scan by outcomes."

**Styling**: Large headings, centered or left-aligned

### SECTION 2: Projects Section

**Section Heading**: "Projects"

**Subheading**: "Click each link to see project details."

**Projects List**: (All should be clickable links to detail pages)

1. **SaaS Workflow Design**
   - Link to: `/projects/projects-detail/saas-workflow-design`

2. **SaaS Business Process Architecture**
   - Link to: `/projects/projects-detail/saas-business-process-architecture`

3. **Molotow Portfolio**
   - Link to: `/projects/projects-detail/molotow-portfolio`

4. **Retail & Wholesale Digitization**
   - Link to: `/projects/projects-detail/retail-wholesale-digitization`

5. **Coaching/Community Platform Systems**
   - Link to: `/projects/projects-detail/coaching-platform`

6. **Mac Assistant — Local AI Automation**
   - Link to: `/projects/projects-detail/mac-assistant`

7. **Artist Portfolio & Archive System**
   - Link to: `/projects/projects-detail/artist-portfolio`

8. **Fitness Operations Automation**
   - Link to: `/projects/projects-detail/fitness-operations-automation`

9. **Boxing Club Portfolio**
   - Link to: `/projects/projects-detail/boxing-club-portfolio`

10. **Art Portfolio Website Development**
    - Link to: `/projects/projects-detail/art-portfolio-website-development`

**Styling**:
- List format or grid layout
- Each project as a clickable link
- Hover effects
- Clean, organized presentation

---

## PAGE 3: PROJECT DETAIL PAGE

### Route
`/projects/projects-detail/[project-slug]` or individual HTML files

### Layout Structure
1. Navigation
2. Project Title
3. Project Description
4. Related Project Link (optional)
5. Footer

### Content Structure

**Example: SaaS Workflow Design**

**Title**: "SaaS Workflow Design" (H2, large, bold)

**Description**: "Detailed, execution‑ready workflows for critical SaaS processes with automation where it adds the most leverage. I defined triggers, steps, owners, and edge cases for scenarios like trial activation, onboarding, escalation handling, and renewal. Automations handle the busywork; humans handle judgment. RACI assignments, guardrails, and metrics ensure accountability without creating bureaucracy. Each workflow includes a runbook/checklist and clear handoffs to avoid dropped balls. The result is fewer delays, faster cycles, and a team that knows exactly what "good" looks like."

**Related Project Link** (optional):
- "SaaS Business Process Architecture ›" (links to related project)

**Styling**:
- Large, readable text
- Generous spacing
- Clear hierarchy

---

## PAGE 4: ABOUT PAGE

### Route
`/about` or `about.html`

### Layout Structure
1. Navigation
2. Hero Section
3. What Michelle Does Section
4. Core Expertise Cards
5. Technical Capabilities Grid
6. Values & Approach Grid
7. CTA Section
8. Footer

### SECTION 1: Hero Section

**Heading 1**: "Product engineer for founders."

**Heading 2**: "Systems-led builder—outcomes for product leaders & agencies."

**Styling**: Large, bold, white text, centered or left-aligned

### SECTION 2: What Michelle Does

**Section Heading**: "What Michelle Does:"

**Content Paragraphs**:

1. **Value Proposition**: "I see what others miss: The exact steps needed to turn meaningful visions into accessible reality."

2. **Introduction**: "I'm an Operations Architect and Systems Designer who works as a catalyst for mission-driven entrepreneurs - especially in health tech, wellness, and AI. You have breakthrough ideas, but scaling feels overwhelming. That's where I come in. I build the operational infrastructure that makes it happen, transforming your visions into sustainable, scalable platforms that reach the people who need them most."

3. **What I Build**: "I design and build complete operational ecosystems from the ground up. That includes software architecture, tech integrations, web development, user experience workflows, and all the systems that bridge the gap between "great idea" and "thriving operation." I specialize in bridging traditional practices with modern technology - creating solutions that honour authenticity while enabling massive scale."

4. **Examples & Outcomes**: "Whether it's modernizing a fragmented retail operation into a unified system (80% less manual admin, 10× capacity ready), building custom coaching platforms with event-driven automations, or creating privacy-first local AI tools, I focus on systems that deliver measurable outcomes. We start by mapping your current process, then ship the simplest working solution that fixes the pain - with clear milestones, ownership, and systems that keep your data under your control."

5. **Closing Statement**: "The world's most important solutions often struggle not because they lack value, but because they lack the operational foundation to reach people effectively. That's where I come in."

**Styling**: 
- Large, readable paragraphs
- Generous line height
- White text on dark background
- Clear spacing between paragraphs

### SECTION 3: Core Expertise Cards

**Layout**: Three-column horizontal grid

**Card 1: Systems**
- **Label**: "Systems" (small text above)
- **Title**: "Design & architecture" (large, bold)
- **Image**: System architecture diagram image (hands drawing on paper)

**Card 2: AI/Agents**
- **Label**: "AI/Agents" (small text above)
- **Title**: "Custom copilots" (large, bold)
- **Image**: Robot/AI agent image

**Card 3: Payments**
- **Label**: "Payments" (small text above)
- **Title**: "E-commerce integration" (large, bold)
- **Image**: Payment/e-commerce image (hands on laptop with payment device)

**Styling**:
- Image at top of each card
- Label in small text above title
- Title in large, bold text
- Cards with consistent spacing

### SECTION 4: Technical Capabilities Grid

**Layout**: 4-column grid

**Items**:
1. **Frontend/Next.js** (with icon)
2. **DevOps CI/CD** (with icon)
3. **Cloud infra** (with icon)
4. **Multi-agent ops** (with icon)

**Styling**:
- Simple icons (lightning bolt, gear, cloud, robot head)
- Text labels below icons
- Clean grid layout
- White icons and text

### SECTION 5: Values & Approach Grid

**Layout**: 4-column, 3-row grid (12 items total)

**Row 1**:
1. **Outcome first** (checkmark in square icon)
2. **Model clarity** (intersecting circles/gears icon)
3. **Integrate deeply** (puzzle piece icon)
4. **Partner mindset** (two person silhouettes icon)

**Row 2**:
5. **Bias to ship** (two stars icon)
6. **Transparent process** (document/clipboard icon)
7. **Collaboration** (handshake icon)
8. **Continuous delivery** (upward arrow icon)

**Styling**:
- Simple white line icons
- Text labels
- Clean grid
- Consistent spacing

### SECTION 6: CTA Section

**Heading**: "Collaborate or connect."

**Description**: "Explore work or reach Michelle directly."

**CTA Button**: "Contact Now" (links to /contact)

**Styling**: Centered, prominent white button

---

## PAGE 5: FAQ PAGE

### Route
`/faq` or `faq.html`

### Layout Structure
1. Navigation
2. Page Header
3. FAQ Items (Accordion)
4. Footer

### Content

**Page Heading**: "Frequently Asked Questions" or similar

**FAQ Items** (same as home page preview, but full list):

1. **What problems do you typically solve?**
   - Answer: "I design and implement systems that reduce manual operations and increase reliability: ecommerce/wholesale, memberships/communities, payments and scheduling, CRM pipelines, and AI‑powered automations."

2. **How do engagements usually start?**
   - Answer: "We begin with a short discovery (1–2 calls) to clarify goals, constraints, and success criteria. From there I propose scope, deliverables, and a phased plan with risks and assumptions called out."

3. **What are typical deliverables?**
   - Answer: "Architecture diagrams, implementation plans, component libraries, integrations, automation workflows, and admin/reporting views. You'll also get runbooks and handoff docs so the system is maintainable."

**Additional FAQ Items** (optional):

4. **What industries do you work with?**
   - Answer: "I specialize in health tech, wellness, AI, e-commerce, retail, coaching, fitness, and mission-driven businesses."

5. **How long do projects typically take?**
   - Answer: "Project timelines vary based on scope, but typically range from 4-12 weeks for implementation, with discovery and planning phases adding 1-2 weeks."

6. **Do you work with teams or solo?**
   - Answer: "I work as an extension of your team, collaborating closely with founders, product leaders, and technical teams to ensure seamless integration."

**Styling**:
- Accordion interface
- Questions: Bold, clickable
- Answers: Revealed on click
- Smooth transitions
- Clean, organized layout

---

## PAGE 6: PROJECT DISCOVERY PAGE

### Route
`/project-discovery` or `project-discovery.html`

### Layout Structure
1. Navigation
2. Page Header
3. Discovery Form or Information
4. Footer

### Content

**Page Heading**: "Project Discovery" or "Start Your Project"

**Description**: Information about the discovery process and how to get started.

**Form or CTA**: 
- Contact form, or
- Link to contact page, or
- Discovery questionnaire

**Styling**: Clean, focused, easy to use

---

## PAGE 7: CONTACT PAGE

### Route
`/contact` or `contact.html`

### Layout Structure
1. Navigation
2. Page Header
3. Contact Form
4. Contact Information
5. Footer

### Content

**Page Heading**: "Get in Touch" or "Contact"

**Contact Form Fields**:
- Name
- Email
- Message
- Submit button

**Contact Information**:
- Email: ackers.ml@gmail.com
- LinkedIn: https://www.linkedin.com/in/michelle-ackers-/

**Styling**:
- Clean form design
- White inputs on dark background
- Submit button: White with black text
- Professional, accessible

---

## RESPONSIVE DESIGN

### Mobile (< 768px)
- Single column layouts
- Stacked cards
- Hamburger menu
- Full-width sections
- Larger touch targets
- Simplified navigation

### Tablet (768px - 1024px)
- 2-column layouts where appropriate
- Adjusted spacing
- Side-by-side cards where space allows

### Desktop (> 1024px)
- Multi-column layouts
- Full navigation visible
- Optimal spacing
- All features active

---

## INTERACTIVE ELEMENTS

### Navigation
- Hover effects on links
- Active page highlighting
- Smooth transitions
- Mobile menu toggle

### Buttons
- Hover states (slight scale or color change)
- Click feedback
- Clear visual states

### FAQ Accordion
- Smooth expand/collapse
- Clear open/closed states
- Keyboard accessible

### Project Links
- Hover effects
- Clear indication of clickability
- Smooth transitions

---

## CONTENT STRATEGY

### Tone
- **Professional but Approachable**: Technical expertise without jargon overload
- **Outcome-Focused**: Emphasize results and measurable impact
- **Confident**: Clear about capabilities and value
- **Personal**: First-person where appropriate, authentic voice

### Key Messages
1. "I see what others miss: The exact steps needed to turn meaningful visions into accessible reality."
2. "80% less manual admin, 10× capacity ready"
3. "Systems that deliver measurable outcomes"
4. "AI‑led product engineering for founders and teams"
5. "Designing intelligent systems for scalable outcomes"

---

## TECHNICAL REQUIREMENTS

### Framework
- React/Next.js or HTML/CSS/JavaScript
- Responsive design
- Mobile-first approach

### Performance
- Fast page load times
- Optimized images
- Lazy loading for below-fold content
- Efficient code

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Screen reader friendly
- High contrast ratios
- Focus states

### SEO
- Proper meta tags
- Descriptive page titles
- Alt text for images
- Structured data (optional)

---

## IMPLEMENTATION CHECKLIST

### Home Page
- [ ] Navigation bar
- [ ] Hero section with headings and CTAs
- [ ] Three feature cards (Automation, Integration, Product)
- [ ] About section
- [ ] Testimonial section
- [ ] CTA section
- [ ] FAQ preview (3 items)
- [ ] Footer

### Projects Page
- [ ] Page header
- [ ] Projects list (10 projects)
- [ ] Clickable project links
- [ ] Footer

### Project Detail Pages
- [ ] Project title
- [ ] Detailed description
- [ ] Related project links (optional)
- [ ] Footer

### About Page
- [ ] Hero section
- [ ] "What Michelle Does" section (5 paragraphs)
- [ ] Core expertise cards (3 cards with images)
- [ ] Technical capabilities grid (4 items)
- [ ] Values & approach grid (8 items)
- [ ] CTA section
- [ ] Footer

### FAQ Page
- [ ] Page header
- [ ] FAQ accordion (3+ items)
- [ ] Smooth interactions
- [ ] Footer

### Contact Page
- [ ] Contact form
- [ ] Contact information
- [ ] Footer

### Global Elements
- [ ] Navigation (consistent across all pages)
- [ ] Footer (consistent across all pages)
- [ ] Dark theme styling
- [ ] Responsive breakpoints
- [ ] Interactive elements
- [ ] Smooth transitions

---

## DESIGN SPECIFICATIONS

### Spacing
- Generous padding around sections (48-96px)
- Consistent margins between elements
- Clear visual separation
- Breathing room around text

### Typography Scale
- Hero headings: 48-72px
- Section headings: 32-40px
- Body text: 16-18px
- Small text: 14px
- Line height: 1.5-1.8 for body text

### Button Styling
- Background: White
- Text: Black
- Padding: 12-16px horizontal, 8-12px vertical
- Border radius: 4-8px
- Font weight: Medium to bold
- Hover: Slight scale or opacity change

### Card Styling
- Clean borders or subtle shadows
- Generous padding
- Image at top (if applicable)
- Text below
- Hover effects (optional)

---

## FINAL NOTES

### Design Philosophy
- **Dark & Modern**: Dark background with white text
- **Clean & Spacious**: Generous whitespace, clear hierarchy
- **Professional**: Outcome-focused, no fluff
- **Interactive**: Smooth animations and hover states
- **Consistent**: Same design language across all pages

### Content Focus
- Showcase work and expertise
- Build trust through testimonials and examples
- Make it easy to understand services
- Provide clear paths to contact/engage

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

---

**END OF PROMPT**

This prompt contains all specifications needed to build the complete portfolio website in Lovable based on michelleackers.framer.website. Use this as your complete reference for building all pages with the exact content, structure, and styling requirements.








