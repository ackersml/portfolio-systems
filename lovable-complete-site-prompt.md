# Complete Portfolio Website Build Prompt for Lovable
## Michelle Ackers - Full Multi-Page Site

### CONTEXT & OBJECTIVE
Build a complete multi-page portfolio website for Michelle Ackers that showcases her expertise as an Operations Architect and Systems Designer. The site should include 6 separate pages: Home, About, Services, Process, Tech Stack, and Contact. Each page should be fully functional, responsive, and maintain visual consistency across the entire site.

---

## PROJECT STRUCTURE

### Pages Required
1. **Home Page** (`/` or `index.html`)
2. **About Page** (`/about` or `about.html`)
3. **Services Page** (`/services` or `services.html`)
4. **Process Page** (`/process` or `process.html`)
5. **Tech Stack Page** (`/tech` or `tech.html`)
6. **Contact Page** (`/contact` or `contact.html`)

### Navigation Structure
- Fixed navigation bar at top
- Logo/Brand: "MA" circle with "Ackers." text
- Navigation links: About, Services, Process, Tech
- CTA Button: "Book Discovery" (links to Contact)
- Mobile hamburger menu

---

## GLOBAL DESIGN SYSTEM

### Color Palette
- **Primary Background**: `#050505` (near black)
- **Accent Color**: `#bef264` (lime green)
- **Text Primary**: `#f4f4f5` (off-white)
- **Text Secondary**: `#a0a0a0` / `#27272a` (zinc colors)
- **Borders**: `rgba(255, 255, 255, 0.06)` / `#27272a`
- **Glass Panel Background**: `rgba(18, 18, 18, 0.6)`

### Typography
- **Primary Font**: 'Inter' (weights: 200, 300, 400, 500)
- **Display Font**: 'Space Grotesk' (weights: 300, 400, 500)
- **Monospace Font**: 'JetBrains Mono' (weights: 300, 400)
- **Font Sizes**: Responsive, using Tailwind scale
- **Line Heights**: Relaxed for body text, tighter for headings

### Visual Effects
- **Noise Texture**: Fixed background with SVG noise filter (opacity: 0.04)
- **Glass Morphism**: Backdrop blur effects on panels
- **Custom Scrollbar**: Thin (6px), dark with lime hover
- **Selection Color**: Lime green background with black text

### Animations
- **Fade In**: `fadeIn 0.8s ease-out`
- **Slide Up**: `slideUp 0.6s ease-out`
- **Hover Transitions**: Smooth color and transform transitions
- **Pulse Animation**: For status indicators

### Shared Components

#### Navigation Bar
- Fixed position, top of page
- Height: 80px (h-20)
- Background: `#050505/80` with backdrop blur
- Border bottom: `border-white/5`
- Logo: Circular "MA" badge (8x8, lime background, black text)
- Nav links: Uppercase, tracking-widest, zinc-500, hover to white
- Active state: White text
- Mobile: Hamburger menu button

#### Footer
- Border top: `border-zinc-900`
- Background: Black
- Content:
  - Left: Copyright "© 2024 Michelle Ackers. All rights reserved."
  - Right: Status indicator (green pulse dot + "Systems Operational") + "London, UK"
- Font: JetBrains Mono, text-xs, zinc-600

---

## PAGE 1: HOME PAGE

### Route
`/` or `index.html`

### Layout
- Full viewport height hero section
- Centered content with max-width container
- Two-column grid on desktop (7/5 split)

### Content Structure

#### Hero Section
**Status Badge** (top):
- Inline flex badge
- Background: `bg-zinc-900/50`
- Border: `border-zinc-800`
- Content: Pulsing lime dot + "Available for Q4 Partnerships"
- Font: JetBrains Mono, text-[10px], uppercase, tracking-wider

**Main Heading**:
- Text: "Systems for" (line break) "scalable outcomes." (second line in zinc-600)
- Font: Space Grotesk, text-6xl md:text-8xl, font-normal, tracking-tighter
- Leading: 0.95
- Color: White

**Description Paragraph**:
- Text: "Michelle Ackers is an Operations Architect and Engineer. I design intelligent infrastructures that allow founders to maximize impact and minimize manual work."
- Font: text-xl md:text-2xl, zinc-400, font-light, leading-relaxed

**CTA Buttons**:
- Primary: "Explore Services" - Lime background, black text, hover to white
- Secondary: "About Me" - Border only, zinc-300, hover border-white

**Quote Card** (right column, desktop only):
- Glass panel with left border accent (lime)
- Quote: "I see what others miss: The exact steps needed to turn meaningful visions into accessible reality."
- Attribution: Divider line + "Michelle Ackers"
- Font: JetBrains Mono for quote, small uppercase for attribution

### Animations
- Slide up animation on main content
- Smooth hover transitions on buttons

---

## PAGE 2: ABOUT PAGE - EXTENSIVE SPECIFICATIONS

### Route
`/about` or `about.html`

### Page Objective
Build a comprehensive About page that tells Michelle's professional story, showcases her expertise, builds trust with potential clients, and demonstrates her unique value proposition. The page should be personal yet professional, highlighting her journey from engineer to Operations Architect.

---

### Layout Structure
- **Container**: Max-width 7xl (1280px), centered, padding px-6
- **Section Spacing**: py-24 (96px vertical padding)
- **Grid System**: Two-column on large screens (lg:grid-cols-12), single column on mobile
- **Content Flow**: Header → Story → Stats → (Optional: Additional sections)

---

### SECTION 1: Page Header

#### Visual Design
- **Container**: Full width, border-bottom separator
- **Spacing**: mb-16 (64px margin bottom), pb-8 (32px padding bottom)
- **Border**: `border-b border-zinc-800` (subtle dark border)

#### Content Elements

**Label (Top)**:
- Text: "Background"
- Styling: 
  - Color: `text-[#bef264]` (lime)
  - Font: `font-['JetBrains_Mono']`
  - Size: `text-xs`
  - Transform: `uppercase`
  - Tracking: `tracking-wider`
  - Display: `block`
  - Margin: `mb-2`

**Main Title**:
- Text: "About Me"
- Styling:
  - Font: `font-['Space_Grotesk']`
  - Weight: `font-normal`
  - Size: `text-5xl md:text-6xl` (48px mobile, 60px desktop)
  - Color: `text-white`
  - Tracking: `tracking-tighter`
  - Line height: Tight (default)

---

### SECTION 2: Main Content Grid

#### Layout Structure
- **Grid**: `grid grid-cols-1 lg:grid-cols-12 gap-16`
- **Left Column**: `lg:col-span-4` (4 of 12 columns)
- **Right Column**: `lg:col-span-8` (8 of 12 columns)

#### Left Column Content

**Heading**:
- Text: "From Engineer to" (line break) "Architect"
- "Architect" should be in lime: `<span class="text-[#bef264]">Architect</span>`
- Styling:
  - Font: `font-['Space_Grotesk']`
  - Weight: `font-normal`
  - Size: `text-2xl`
  - Color: `text-white`
  - Tracking: `tracking-tight`
  - Margin: `mb-2`

**Decorative Element**:
- Horizontal line below heading
- Styling: `h-1 w-12 bg-zinc-800 mt-4 rounded-full`
- Purpose: Visual separator, adds depth

#### Right Column Content

**Story Paragraphs**:
- Container: `space-y-8` (32px vertical spacing between paragraphs)
- Font: `text-xl` (20px), `text-zinc-400`, `font-light`, `leading-relaxed`

**Paragraph 1 - The Beginning**:
- Content: "Rooted in complex digital systems, I started as an engineer guiding high-impact platforms for early-stage teams. In 2021, I pivoted to focus on the intersection of technical engineering and operational design."
- Purpose: Establishes background and pivot point

**Paragraph 2 - The Evolution**:
- Content: "This experience ignited my passion for systems design—mapping the entire product stack from business process architecture to technical implementation. I don't just write code; I write the future of how your business operates."
- Purpose: Shows evolution and current focus
- Key phrase: "I write the future of how your business operates" - should feel impactful

---

### SECTION 3: Key Metrics / Stats Grid

#### Layout
- **Container**: `grid grid-cols-1 md:grid-cols-2 gap-6 mt-12`
- **Card Spacing**: 24px gap between cards
- **Responsive**: Single column on mobile, two columns on medium+ screens

#### Stat Card 1: 80% Overhead Reduction

**Card Container**:
- Padding: `p-8` (32px all sides)
- Border: `border border-zinc-800`
- Border radius: `rounded`
- Background: `bg-zinc-900/20`
- Hover: `group hover:border-[#bef264]/30 transition-colors`
- Group class for coordinated hover effects

**Content Structure**:
1. **Large Number**:
   - Text: "80%"
   - Styling:
     - Font: `font-['Space_Grotesk']`
     - Weight: `font-semibold`
     - Size: `text-5xl` (48px)
     - Color: `text-white`
     - Tracking: `tracking-tighter`
     - Margin: `mb-2`
     - Line height: Tight

2. **Label**:
   - Text: "Overhead Reduction"
   - Styling:
     - Color: `text-[#bef264]`
     - Font: `font-['JetBrains_Mono']`
     - Size: `text-xs`
     - Transform: `uppercase`
     - Tracking: `tracking-wider`
     - Margin: `mb-2`

3. **Description**:
   - Text: "Reduction in manual admin tasks through custom automation."
   - Styling:
     - Color: `text-zinc-500`
     - Size: `text-sm`
     - Line height: Default

#### Stat Card 2: 10× Scalability

**Card Container**: Same styling as Card 1

**Content Structure**:
1. **Large Number**: "10×" (same styling as 80%)
2. **Label**: "Scalability" (same styling)
3. **Description**: "Systems designed to handle growth without breaking." (same styling)

---

### SECTION 4: Additional Content Sections (Optional Expansions)

#### Option A: Core Expertise Section

**Section Header**:
- Label: "Expertise" (lime, JetBrains Mono, uppercase)
- Title: "What I Bring" (Space Grotesk, large)

**Expertise Cards** (Grid layout):
1. **Business Process Design**
   - Description: "End-to-end operational infrastructure from customer acquisition to retention"
   - Icon: Workflow/process icon

2. **Technical Implementation**
   - Description: "Websites, email systems, CRM, marketing automation, data management"
   - Icon: Code/tools icon

3. **Systems Architecture**
   - Description: "Operational infrastructure design and implementation"
   - Icon: Blueprint/diagram icon

4. **Industry Experience**
   - Description: "B2B services (Molotow), e-commerce (MultiCam Queen)"
   - Icon: Industry/business icon

5. **Specialization**
   - Description: "Mission-driven entrepreneurs in health tech, wellness, and AI"
   - Icon: Target/focus icon

#### Option B: Values & Approach Section

**Section Header**:
- Label: "Principles" (lime, JetBrains Mono, uppercase)
- Title: "How I Work" (Space Grotesk, large)

**Principle Cards** (Grid or list):
1. **Outcome First**: "Measurable results over features. Every decision prioritizes impact on your business goals."
2. **Model Clarity**: "Clear architecture and documentation. You'll understand how everything works and why."
3. **Integrate Deeply**: "Seamless connections with existing systems. No silos, no friction, just smooth operations."
4. **Partner Mindset**: "Collaborative approach. Working as an extension of your team, not just a contractor."
5. **Bias to Ship**: "Working solutions quickly. We prioritize getting value into your hands, then iterate."
6. **Transparent Process**: "Clear communication and visibility. You always know where things stand."

#### Option C: Who I Work With Section

**Section Header**:
- Label: "Partnerships" (lime, JetBrains Mono, uppercase)
- Title: "Who I Partner With" (Space Grotesk, large)

**Target Audience Cards**:
1. **Founders**: Mission-driven entrepreneurs, especially in health tech, wellness, and AI
2. **Product Leaders**: Teams needing operational infrastructure
3. **Agencies**: Organizations requiring systems design and implementation
4. **Service Businesses**: Retail, wholesale, coaching, fitness, wellness
5. **Tech-Forward Companies**: Seeking AI automation and modern systems

**Pain Points Addressed** (List or tags):
- Manual operations and admin overhead
- Fragmented tools and systems
- Scaling challenges
- Payment and scheduling friction
- Customer management complexity
- Lack of operational infrastructure
- Privacy and data control concerns

---

### Interactive Elements & Animations

#### Stat Cards
- **Hover Effect**: Border color transitions from zinc-800 to lime/30
- **Transition**: `transition-colors` (smooth color change)
- **Group Hover**: Entire card responds to hover

#### Scroll Animations (Optional)
- **Fade In**: Cards fade in as they enter viewport
- **Slide Up**: Subtle upward motion on scroll
- **Stagger**: Cards animate in sequence (if multiple)

#### Number Emphasis
- **Visual Weight**: Large, bold numbers (80%, 10×) should dominate the card
- **Color Contrast**: White numbers on dark background
- **Typography**: Space Grotesk for modern, clean look

---

### Responsive Behavior

#### Mobile (< 768px)
- Single column layout
- Stats grid becomes single column
- Reduced padding: `px-6 py-16`
- Smaller heading sizes
- Stacked content

#### Tablet (768px - 1024px)
- Two-column stats grid
- Adjusted spacing
- Medium heading sizes

#### Desktop (> 1024px)
- Full two-column story layout (4/8 split)
- Two-column stats grid
- Maximum spacing and visual hierarchy
- All decorative elements visible

---

### Content Tone & Messaging

#### Key Messages to Emphasize
1. "I don't just write code; I write the future of how your business operates."
2. "80% reduction in manual admin, 10× capacity growth"
3. Journey from engineer to architect (evolution story)
4. Systems that deliver measurable outcomes
5. Focus on intersection of technical and operational design

#### Writing Style
- **Professional but Approachable**: Technical expertise without jargon overload
- **Outcome-Focused**: Emphasize results and measurable impact
- **Authentic**: Reflect actual experience and values
- **Confident**: Clear about capabilities and value
- **Personal**: First-person narrative, personal journey

---

### Implementation Details

#### HTML Structure
```html
<section class="py-24 px-6 min-h-screen">
  <div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-16 border-b border-zinc-800 pb-8">
      <span class="text-[#bef264] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-2 block">Background</span>
      <h1 class="text-5xl md:text-6xl font-['Space_Grotesk'] font-normal text-white tracking-tighter">About Me</h1>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <!-- Left Column -->
      <div class="lg:col-span-4">
        <h2 class="text-2xl font-['Space_Grotesk'] font-normal text-white tracking-tight mb-2">
          From Engineer to <br><span class="text-[#bef264]">Architect</span>
        </h2>
        <div class="h-1 w-12 bg-zinc-800 mt-4 rounded-full"></div>
      </div>

      <!-- Right Column -->
      <div class="lg:col-span-8 space-y-8 text-zinc-400 leading-relaxed font-light text-xl">
        <!-- Story paragraphs -->
        <!-- Stats grid -->
      </div>
    </div>
  </div>
</section>
```

#### Required Classes & Utilities
- Tailwind spacing utilities
- Custom font families (Space Grotesk, JetBrains Mono)
- Custom colors (#bef264, #050505)
- Grid system (12-column)
- Responsive breakpoints (md:, lg:)
- Hover states and transitions

---

## PAGE 3: SERVICES PAGE - EXTENSIVE SPECIFICATIONS

### Route
`/services` or `services.html`

### Page Objective
Showcase Michelle's core service offerings in a clear, compelling way that helps potential clients understand what she delivers and how it solves their problems. Each service should be distinct, valuable, and outcome-focused.

---

### Layout Structure
- **Container**: Max-width 7xl (1280px), centered, padding px-6
- **Section Spacing**: py-24 (96px vertical padding)
- **Background**: Subtle gradient overlay (`absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent`)
- **Grid System**: Three-column on desktop, single column on mobile

---

### SECTION 1: Page Header

#### Layout
- **Container**: `flex flex-col md:flex-row justify-between items-end`
- **Spacing**: `mb-16 border-b border-zinc-800 pb-8`
- **Responsive**: Stacked on mobile, side-by-side on desktop

#### Left Side - Header Content

**Label**:
- Text: "Capabilities"
- Styling:
  - Color: `text-[#bef264]`
  - Font: `font-['JetBrains_Mono']`
  - Size: `text-xs`
  - Transform: `uppercase`
  - Tracking: `tracking-wider`
  - Display: `block`
  - Margin: `mb-4`

**Title**:
- Text: "Core Services"
- Styling:
  - Font: `font-['Space_Grotesk']`
  - Weight: `font-normal`
  - Size: `text-5xl md:text-6xl`
  - Color: `text-white`
  - Tracking: `tracking-tighter`

#### Right Side - Description

**Description Text**:
- Text: "Comprehensive solutions for mission-driven entrepreneurs in health tech, wellness, and AI."
- Styling:
  - Color: `text-zinc-500`
  - Size: `text-base`
  - Weight: `font-light`
  - Max width: `max-w-sm`
  - Alignment: `text-right` (on desktop), `text-left` (on mobile)
  - Margin: `mt-4 md:mt-0`

---

### SECTION 2: Service Cards Grid

#### Grid Layout
- **Container**: `grid grid-cols-1 md:grid-cols-3 gap-6`
- **Spacing**: 24px gap between cards
- **Responsive**: Single column on mobile, three columns on medium+ screens

---

### SERVICE CARD 1: Business Process Design

#### Card Container
- **Base Styling**: Glass panel effect
- **Padding**: `p-8` (32px all sides)
- **Border Radius**: `rounded-xl`
- **Border**: `border` (inherits from glass-panel)
- **Hover Effects**:
  - Border: `hover:border-[#bef264]/40`
  - Transform: `hover:-translate-y-1`
  - Transition: `transition-all duration-300`
- **Group Class**: `group` (for coordinated hover effects)

#### Icon Container
- **Size**: `w-12 h-12` (48px × 48px)
- **Background**: `bg-zinc-900/80`
- **Border Radius**: `rounded`
- **Display**: `flex items-center justify-center`
- **Margin**: `mb-6`
- **Icon Color**: `text-zinc-400`
- **Hover Effects**:
  - Background: `group-hover:bg-[#bef264]`
  - Text: `group-hover:text-black`
  - Transition: `transition-colors`

#### Icon
- **Lucide Icon**: `workflow`
- **Size**: `w-6 h-6`
- **Stroke**: `stroke-[1.5]`

#### Title
- **Text**: "Business Process Design"
- **Styling**:
  - Font: `font-['Space_Grotesk']`
  - Weight: `font-normal`
  - Size: `text-2xl`
  - Color: `text-white`
  - Margin: `mb-4`

#### Description
- **Text**: "End-to-end operational infrastructure. I map your customer journey from acquisition to retention, identifying bottlenecks and optimization opportunities."
- **Styling**:
  - Color: `text-zinc-400`
  - Size: `text-base`
  - Weight: `font-light`
  - Line height: `leading-relaxed`
  - Margin: `mb-8`

#### Features List
- **Container**: `space-y-3` (12px vertical spacing)
- **List Items**: Each item is a flex container

**Feature Item Styling**:
- **Container**: `flex items-center gap-3`
- **Font**: `font-['JetBrains_Mono']`
- **Size**: `text-xs`
- **Color**: `text-zinc-500`

**Check Icon**:
- **Lucide Icon**: `check`
- **Size**: `w-3 h-3`
- **Color**: `text-[#bef264]`
- **Stroke**: `stroke-[3]`

**Feature Text Examples**:
1. "SOP Creation" - Standard Operating Procedures documentation
2. "Workflow Mapping" - Visual process documentation
3. "Hiring Roadmaps" - Team expansion planning

---

### SERVICE CARD 2: Technical Implementation

#### Card Container
- Same base styling as Service Card 1

#### Icon
- **Lucide Icon**: `code-2`
- Same container and hover effects

#### Title
- **Text**: "Technical Implementation"

#### Description
- **Text**: "I don't just design; I build. Full-stack development for websites, internal tools, and integrations that actually work together."
- **Key Message**: Emphasizes building vs. just designing

#### Features List
1. "Web Apps (Next.js)" - Modern web application development
2. "CRM Setup" - Customer relationship management systems
3. "API Integrations" - Connecting different systems and services

---

### SERVICE CARD 3: AI & Automation

#### Card Container
- Same base styling as Service Card 1

#### Icon
- **Lucide Icon**: `bot`
- Same container and hover effects

#### Title
- **Text**: "AI & Automation"

#### Description
- **Text**: "Leveraging local LLMs and agent-based solutions to automate repetitive tasks, allowing your team to focus on high-leverage work."
- **Key Message**: Automation that frees up human capacity

#### Features List
1. "Custom Agents" - AI agents tailored to specific workflows
2. "Data Extraction" - Automated data processing
3. "Automated Reporting" - Self-generating reports and insights

---

### SECTION 3: Additional Service Details (Optional Expansion)

#### Use Cases Section

**Section Header**:
- Label: "Applications" (lime, JetBrains Mono, uppercase)
- Title: "Where This Applies" (Space Grotesk, large)

**Use Case Cards** (Grid layout):
1. **E-commerce Operations**
   - Order processing automation
   - Inventory management
   - Customer service workflows

2. **Service Business Management**
   - Appointment scheduling
   - Client onboarding
   - Payment processing

3. **Health Tech & Wellness**
   - Patient data management
   - Compliance automation
   - Care coordination systems

4. **Agency Operations**
   - Client project management
   - Resource allocation
   - Reporting and analytics

#### Service Packages Section (Optional)

**Section Header**:
- Label: "Engagement Models" (lime, JetBrains Mono, uppercase)
- Title: "How We Work Together" (Space Grotesk, large)

**Package Options**:
1. **Full Systems Overhaul**
   - Complete operational redesign
   - End-to-end implementation
   - Training and handover

2. **Focused Implementation**
   - Specific system or process
   - Targeted improvements
   - Quick wins

3. **Ongoing Partnership**
   - Continuous optimization
   - System maintenance
   - Strategic guidance

---

### Interactive Elements & Animations

#### Card Hover Effects
- **Border Color**: Transitions from default to lime/40 opacity
- **Transform**: Lifts up by 4px (`-translate-y-1`)
- **Duration**: 300ms smooth transition
- **Icon Background**: Changes from dark to lime on hover
- **Icon Color**: Changes from zinc-400 to black on hover

#### Icon Animations
- **Container**: Smooth background color transition
- **Icon**: Color change coordinated with container
- **Timing**: Synchronized with card hover

#### Scroll Animations (Optional)
- **Fade In**: Cards fade in as they enter viewport
- **Stagger**: Cards animate in sequence (0.1s delay between each)
- **Slide Up**: Subtle upward motion

---

### Responsive Behavior

#### Mobile (< 768px)
- Single column layout
- Full-width cards
- Reduced padding: `p-6`
- Stacked header (title above description)
- Larger touch targets

#### Tablet (768px - 1024px)
- Two-column grid (if space allows)
- Adjusted spacing
- Medium padding: `p-7`

#### Desktop (> 1024px)
- Three-column grid
- Full spacing and visual hierarchy
- All hover effects active
- Maximum padding: `p-8`

---

### Content Strategy

#### Service Descriptions
- **Length**: 1-2 sentences, concise but informative
- **Tone**: Confident, outcome-focused
- **Focus**: What the client gets, not just what Michelle does
- **Language**: Clear, avoid jargon unless necessary

#### Feature Lists
- **Purpose**: Quick scan of capabilities
- **Format**: Short, action-oriented phrases
- **Count**: 3-5 features per service
- **Order**: Most important/relevant first

#### Key Messages
1. "End-to-end" - Complete solutions
2. "I don't just design; I build" - Execution focus
3. "Actually work together" - Integration emphasis
4. "High-leverage work" - Value of automation

---

### Implementation Details

#### HTML Structure
```html
<section class="py-24 px-6 relative min-h-screen">
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none"></div>
  <div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-16 border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-end">
      <!-- Header content -->
    </div>
    
    <!-- Service Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Service Card 1 -->
      <div class="glass-panel p-8 rounded-xl hover:border-[#bef264]/40 transition-all group duration-300 hover:-translate-y-1">
        <!-- Icon, Title, Description, Features -->
      </div>
      <!-- Service Cards 2 & 3 -->
    </div>
  </div>
</section>
```

#### Required Lucide Icons
- `workflow` - Business Process Design
- `code-2` - Technical Implementation
- `bot` - AI & Automation
- `check` - Feature list checkmarks

#### Glass Panel Class
```css
.glass-panel {
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
```

---

## PAGE 4: PROCESS PAGE - EXTENSIVE SPECIFICATIONS

### Route
`/process` or `process.html`

### Page Objective
Clearly communicate Michelle's methodology and process for working with clients. Show the structured approach from initial discovery through delivery and handover. Build confidence by demonstrating a proven, systematic way of working.

---

### Layout Structure
- **Container**: Max-width 7xl (1280px), centered, padding px-6
- **Section Spacing**: py-24 (96px vertical padding)
- **Step Layout**: Vertical stack with consistent spacing
- **Grid System**: 12-column grid for each step (2 cols for number, 10 cols for content)

---

### SECTION 1: Page Header

#### Visual Design
- **Container**: Full width, border-bottom separator
- **Spacing**: `mb-16` (64px margin bottom), `pb-8` (32px padding bottom)
- **Border**: `border-b border-zinc-800`

#### Content Elements

**Label**:
- Text: "Methodology"
- Styling:
  - Color: `text-[#bef264]`
  - Font: `font-['JetBrains_Mono']`
  - Size: `text-xs`
  - Transform: `uppercase`
  - Tracking: `tracking-wider`
  - Display: `block`
  - Margin: `mb-4`

**Main Title**:
- Text: "How We Build"
- Styling:
  - Font: `font-['Space_Grotesk']`
  - Weight: `font-normal`
  - Size: `text-5xl md:text-6xl`
  - Color: `text-white`
  - Tracking: `tracking-tighter`

---

### SECTION 2: Process Steps

#### Container
- **Layout**: `space-y-8` (32px vertical spacing between steps)
- **Purpose**: Creates clear visual separation between phases

---

### PROCESS STEP 1: Discovery & Blueprinting

#### Step Container
- **Layout**: `grid grid-cols-1 md:grid-cols-12 gap-8`
- **Padding**: `p-10` (40px all sides)
- **Border**: `border border-zinc-800`
- **Border Radius**: `rounded-xl`
- **Background**: Default transparent, `hover:bg-zinc-900/20` on hover
- **Transition**: `transition-colors`
- **Group Class**: `group` (for coordinated hover effects)

#### Number Column (Desktop Only)
- **Grid Span**: `md:col-span-2`
- **Display**: `hidden md:flex` (hidden on mobile)
- **Layout**: `flex-col items-center justify-center`
- **Border**: `border-r border-zinc-800` (right border separator)

**Number Display**:
- **Text**: "01"
- **Styling**:
  - Font: `font-['Space_Grotesk']`
  - Weight: `font-semibold`
  - Size: `text-5xl` (48px)
  - Color: `text-zinc-800` (default), `group-hover:text-[#bef264]` (on hover)
  - Transition: `transition-colors`
- **Purpose**: Visual step indicator, changes color on hover

#### Content Column
- **Grid Span**: `md:col-span-10`
- **Layout**: Full width on mobile, 10/12 columns on desktop

**Title**:
- **Text**: "Discovery & Blueprinting"
- **Styling**:
  - Font: `font-semibold`
  - Size: `text-2xl`
  - Color: `text-white`
  - Tracking: `tracking-tight`
  - Margin: `mb-3`

**Description**:
- **Text**: "We start by deeply understanding your business model, pain points, and goals. The output is a comprehensive technical and operational blueprint."
- **Styling**:
  - Color: `text-zinc-400`
  - Size: `text-base`
  - Weight: `font-light`
  - Line height: `leading-relaxed`
  - Margin: `mb-6`

**Tag Container**:
- **Layout**: `flex gap-3`
- **Purpose**: Quick reference tags for what's included

**Tag Styling**:
- **Container**: `px-2 py-1`
- **Font**: `font-['JetBrains_Mono']`
- **Size**: `text-[10px]`
- **Transform**: `uppercase`
- **Weight**: `font-bold`
- **Background**: `bg-zinc-800`
- **Color**: `text-zinc-300`
- **Border Radius**: `rounded`

**Tags for Step 1**:
1. "Audits" - System and process audits
2. "Scope" - Project scope definition

---

### PROCESS STEP 2: Development & Integration

#### Step Container
- Same base styling as Step 1

#### Number Column
- **Text**: "02"
- Same styling and behavior as Step 1

#### Content Column

**Title**:
- **Text**: "Development & Integration"

**Description**:
- **Text**: "I build the systems defined in the blueprint. This is an iterative process where we connect tools, write code, and configure automations."
- **Key Points**: 
  - Building phase
  - Iterative approach
  - Integration focus

**Tags**:
1. "Sprint 1-4" - Development sprints
2. "Testing" - Quality assurance

**Additional Details** (Optional):
- **Timeline**: Typically 4-8 weeks depending on scope
- **Deliverables**: Working systems, integrations, automations
- **Communication**: Regular updates and demos

---

### PROCESS STEP 3: Handover & Optimization

#### Step Container
- Same base styling as Step 1

#### Number Column
- **Text**: "03"
- Same styling and behavior as Step 1

#### Content Column

**Title**:
- **Text**: "Handover & Optimization"

**Description**:
- **Text**: "Systems are only good if they are used. I provide training, documentation (Runbooks), and a period of monitoring to ensure stability."
- **Key Points**:
  - Training and knowledge transfer
  - Documentation
  - Ongoing support

**Tags**:
1. "Runbooks" - Operational documentation
2. "Training" - Team training sessions

**Additional Details** (Optional):
- **Training**: Hands-on sessions with your team
- **Documentation**: Complete runbooks and guides
- **Monitoring**: Post-launch support period
- **Optimization**: Continuous improvement based on usage

---

### SECTION 3: Process Timeline Visualization (Optional)

#### Visual Timeline
- **Layout**: Horizontal or vertical timeline connecting steps
- **Elements**: 
  - Connecting lines between steps
  - Duration indicators
  - Milestone markers

#### Timeline Details
- **Step 1 Duration**: 1-2 weeks
- **Step 2 Duration**: 4-8 weeks (variable)
- **Step 3 Duration**: 1-2 weeks + ongoing

---

### SECTION 4: Process Principles (Optional Expansion)

#### Section Header
- Label: "Approach" (lime, JetBrains Mono, uppercase)
- Title: "How We Work" (Space Grotesk, large)

#### Principles List
1. **Iterative Development**: Build, test, refine in cycles
2. **Transparent Communication**: Regular updates and clear visibility
3. **Outcome-Focused**: Every decision tied to business goals
4. **Documentation First**: Knowledge transfer built in
5. **Scalable Solutions**: Built to grow with your business

---

### Interactive Elements & Animations

#### Step Card Hover Effects
- **Background**: Transitions to `bg-zinc-900/20` on hover
- **Border**: Subtle highlight (optional)
- **Number Color**: Changes from zinc-800 to lime on hover
- **Transition**: Smooth `transition-colors`

#### Number Animation (Optional)
- **Hover Scale**: Slight scale increase on hover
- **Color Transition**: Smooth color change
- **Timing**: Coordinated with card hover

#### Scroll Animations (Optional)
- **Fade In**: Steps fade in as they enter viewport
- **Slide Up**: Subtle upward motion
- **Stagger**: Steps animate in sequence (0.2s delay between each)

---

### Responsive Behavior

#### Mobile (< 768px)
- Single column layout
- Number column hidden
- Full-width content column
- Reduced padding: `p-6`
- Stacked tags
- Larger touch targets

#### Tablet (768px - 1024px)
- Two-column grid visible
- Adjusted spacing
- Medium padding: `p-8`

#### Desktop (> 1024px)
- Full 12-column grid
- Number column visible (2 cols)
- Content column (10 cols)
- Maximum padding: `p-10`
- All hover effects active

---

### Content Strategy

#### Step Descriptions
- **Length**: 1-2 sentences, clear and concise
- **Focus**: What happens, what's delivered, why it matters
- **Tone**: Confident, structured, professional
- **Language**: Clear, avoid jargon

#### Tag Strategy
- **Purpose**: Quick visual reference
- **Format**: Short, uppercase, technical terms
- **Count**: 2-3 tags per step
- **Style**: Consistent across all steps

#### Key Messages
1. "Deeply understanding" - Thorough discovery
2. "Comprehensive blueprint" - Complete planning
3. "Iterative process" - Flexible development
4. "Systems are only good if they are used" - Adoption focus
5. "Training, documentation, monitoring" - Complete handover

---

### Implementation Details

#### HTML Structure
```html
<section class="py-24 px-6 min-h-screen">
  <div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-16 border-b border-zinc-800 pb-8">
      <span class="text-[#bef264] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4 block">Methodology</span>
      <h1 class="text-5xl md:text-6xl font-['Space_Grotesk'] font-normal text-white tracking-tighter">How We Build</h1>
    </div>

    <!-- Process Steps -->
    <div class="space-y-8">
      <!-- Step 1 -->
      <div class="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-10 border border-zinc-800 rounded-xl hover:bg-zinc-900/20 transition-colors">
        <!-- Number Column -->
        <div class="hidden md:flex flex-col items-center justify-center md:col-span-2 border-r border-zinc-800">
          <span class="text-5xl font-['Space_Grotesk'] font-semibold text-zinc-800 group-hover:text-[#bef264] transition-colors">01</span>
        </div>
        <!-- Content Column -->
        <div class="md:col-span-10">
          <!-- Title, Description, Tags -->
        </div>
      </div>
      <!-- Steps 2 & 3 -->
    </div>
  </div>
</section>
```

#### Required Styling
- Grid system (12-column)
- Group hover effects
- Color transitions
- Responsive breakpoints
- Custom fonts (Space Grotesk, JetBrains Mono)

#### Tag Component
```html
<span class="px-2 py-1 text-[10px] uppercase font-bold bg-zinc-800 text-zinc-300 rounded font-['JetBrains_Mono']">Tag Name</span>
```

---

## PAGE 5: TECH STACK PAGE

### Route
`/tech` or `tech.html`

### Layout
- Full-width section with subtle background (zinc-900/10)
- Two-column grid on large screens (5/7 split)

### Content Structure

#### Page Header
- Label: "Toolkit" (lime, JetBrains Mono, uppercase, tracking-wider, text-xs)
- Title: "Technical Stack" (Space Grotesk, text-5xl md:text-6xl, white, tracking-tighter)
- Border bottom separator

#### Main Content Grid

**Left Column** (5 cols):
- Description paragraph: "I choose tools that balance power with maintainability. My preference leans towards robust, industry-standard technologies that you can own and scale." (zinc-400, text-lg, font-light, leading-relaxed)
- Link: "View Github Profile" (lime, JetBrains Mono, text-sm, hover underline, with arrow icon)

**Right Column** (7 cols):
- Grid: 2 columns, gap-4
- Tech Cards (6 total):
  1. **Frontend**: "Next.js, TypeScript, Tailwind"
  2. **Backend**: "Node.js, Postgres, Supabase"
  3. **Payments**: "Stripe, Lemon Squeezy"
  4. **Infrastructure**: "Vercel, Docker, Coolify"
  5. **AI/ML**: "OpenAI, Langchain, Pinecone"
  6. **Low Code**: "Zapier, Make, Retool"

**Tech Card Styling**:
- Padding: p-6
- Border: zinc-800, hover to zinc-600
- Background: #050505
- Title: text-sm, semibold, white
- Tech list: text-xs, zinc-500, JetBrains Mono

---

## PAGE 6: CONTACT PAGE

### Route
`/contact` or `contact.html`

### Layout
- Centered content, full viewport height
- Single glass panel card

### Content Structure

#### Contact Card
- Glass panel with rounded-2xl
- Padding: p-12 md:p-24
- Max width: max-w-5xl
- Decorative background: Large lime blur circle (absolute, top center)

**Content**:
- Label: "Get in touch" (lime, JetBrains Mono, uppercase, tracking-wider, text-xs)
- Heading: "Ready to scale?" (Space Grotesk, text-4xl md:text-7xl, white, tracking-tighter, leading-none)
- Description: "Whether you need a full systems overhaul or a specific technical implementation, let's discuss how we can create measurable impact." (zinc-400, text-xl, font-light, max-w-2xl, centered)

**CTA Buttons**:
- Primary: "Start a Project" (lime background, black text, hover to white, with arrow icon)
- Secondary: "Copy Email" (border only, zinc-300, hover border-white, includes copy functionality)

**Social Links**:
- LinkedIn (actual link to https://www.linkedin.com/in/michelle-ackers-/)
- Twitter (placeholder)
- GitHub (placeholder)
- Icons: Lucide, w-5 h-5, zinc-500, hover to lime

---

## TECHNICAL REQUIREMENTS

### Framework & Libraries
- **Framework**: React/Next.js (or HTML with Tailwind)
- **Styling**: Tailwind CSS (via CDN or build)
- **Icons**: Lucide Icons (via CDN: `https://unpkg.com/lucide@latest`)
- **Fonts**: Google Fonts (Inter, Space Grotesk, JetBrains Mono)

### Responsive Breakpoints
- **Mobile**: < 768px (single column, stacked)
- **Tablet**: 768px - 1024px (2 columns where appropriate)
- **Desktop**: > 1024px (full multi-column layouts)

### Interactive Features
- Smooth scroll behavior
- Hover effects on all interactive elements
- Active navigation state highlighting
- Mobile menu toggle (hamburger)
- Copy email functionality on Contact page
- Icon initialization (Lucide.createIcons())

### Performance
- Fast page load times
- Optimized animations
- Lazy loading for below-fold content
- Efficient CSS (Tailwind utilities)

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus states on interactive elements

---

## STYLING SPECIFICATIONS

### Custom CSS Classes Required

```css
.bg-noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,...");
}

.glass-panel {
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
```

### Tailwind Configuration
- Use arbitrary values for fonts: `font-['Space_Grotesk']`, `font-['JetBrains_Mono']`
- Custom colors: `bg-[#bef264]`, `bg-[#050505]`
- Custom spacing and sizing as needed

---

## NAVIGATION BEHAVIOR

### Active States
- Current page link should be white (text-white)
- Other links should be zinc-500, hover to white
- Logo always links to home

### Mobile Menu
- Hamburger icon (Lucide menu icon)
- Hidden on desktop (md:hidden)
- Should toggle mobile menu (implementation depends on framework)

### Link Structure
- Home: `/` or `index.html`
- About: `/about` or `about.html`
- Services: `/services` or `services.html`
- Process: `/process` or `process.html`
- Tech: `/tech` or `tech.html`
- Contact: `/contact` or `contact.html`
- Book Discovery button: Links to Contact page

---

## CONTENT DETAILS

### Contact Information
- **Email**: ackers.ml@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/michelle-ackers-/
- **Location**: London, UK

### Key Messages
1. "I see what others miss: The exact steps needed to turn meaningful visions into accessible reality."
2. "80% reduction in manual admin, 10× capacity growth"
3. "Systems that deliver measurable outcomes"
4. "Available for Q4 Partnerships"

---

## IMPLEMENTATION CHECKLIST

### Home Page
- [ ] Status badge with pulsing dot
- [ ] Large hero heading with line break
- [ ] Description paragraph
- [ ] Two CTA buttons
- [ ] Quote card (desktop only)
- [ ] Slide-up animation

### About Page
- [ ] Page header with label and title
- [ ] Two-column layout
- [ ] Story paragraphs
- [ ] Two stat cards (80% and 10×)
- [ ] Hover effects on cards

### Services Page
- [ ] Page header with description
- [ ] Three service cards with icons
- [ ] Feature lists with checkmarks
- [ ] Hover effects (translate-y, border color change)
- [ ] Icon color transitions

### Process Page
- [ ] Page header
- [ ] Three process steps
- [ ] Numbered columns (desktop)
- [ ] Tag badges
- [ ] Hover effects

### Tech Page
- [ ] Page header
- [ ] Two-column layout
- [ ] Description paragraph
- [ ] GitHub link
- [ ] Six tech category cards
- [ ] Hover border effects

### Contact Page
- [ ] Centered glass panel
- [ ] Decorative background blur
- [ ] Heading and description
- [ ] Two CTA buttons
- [ ] Copy email functionality
- [ ] Social media links

### Global Elements
- [ ] Fixed navigation bar
- [ ] Logo with hover effect
- [ ] Active navigation states
- [ ] Footer with copyright and status
- [ ] Noise texture background
- [ ] Custom scrollbar styling
- [ ] Lucide icons initialized
- [ ] Responsive breakpoints
- [ ] Mobile menu (if applicable)

---

## FINAL NOTES

### Design Philosophy
- **Dark & Modern**: Ultra-dark background with lime green accents
- **Minimal & Clean**: Generous whitespace, clear hierarchy
- **Professional**: Outcome-focused, no fluff
- **Interactive**: Smooth animations and hover states
- **Consistent**: Same design language across all pages

### Content Tone
- Professional but approachable
- Outcome-focused messaging
- Confident and clear
- Technical without jargon overload
- Authentic and personal

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

---

**END OF PROMPT**

This prompt contains all specifications needed to rebuild the complete multi-page portfolio website in Lovable. Each page is detailed with exact content, styling, layout, and interactive requirements. Use this as your complete reference for building all 6 pages.

