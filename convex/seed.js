import { internalMutation } from "./_generated/server";

// Sample events data with Unsplash images, using US locations and English content
const SAMPLE_EVENTS = [
  {
    title: "React 19 Workshop: Master the New Features",
    description: `Join us for an intensive hands-on workshop diving deep into React 19's revolutionary features! 

In this session, you'll learn about:
- The new Actions API and how it simplifies form handling
- Server Components and their impact on performance
- The improved use() hook and its practical applications
- Asset loading improvements for better UX
- Migration strategies from React 18

Whether you're a seasoned React developer or just getting started, this workshop will equip you with the knowledge to build faster, more efficient applications. Bring your laptop and be ready to code!

Light refreshments will be provided. Limited seats available.`,
    category: "tech",
    tags: ["tech", "react", "javascript", "frontend"],
    city: "San Francisco",
    state: "CA",
    venue: "https://maps.google.com/?q=The+Warfield+Theatre,+San+Francisco",
    address: "The Warfield Theatre, 982 Market St, San Francisco, CA 94102",
    capacity: 50,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI & Machine Learning Meetup - Building with LLMs",
    description: `Explore the exciting world of Large Language Models (LLMs) and learn how to integrate them into your applications!

This meetup covers:
- Introduction to LLM APIs (OpenAI, Anthropic, Google)
- Best practices for prompt engineering
- Building RAG applications
- Fine-tuning strategies
- Real-world use cases and demos

Network with other AI enthusiasts and developers. Q&A session included.

Pizza and drinks provided!`,
    category: "tech",
    tags: ["tech", "ai", "machine-learning", "llm"],
    city: "New York",
    state: "NY",
    venue: "https://maps.google.com/?q=The+New+York+Public+Library",
    address: "The New York Public Library, 476 5th Ave, New York, NY 10018",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "Indie Music Night - Acoustic Sessions",
    description: `An evening of soulful acoustic performances by indie artists from across the US!

Featuring:
- 5 curated indie acts
- Intimate acoustic sets
- Open mic session (limited slots)
- Meet and greet with the artists

Experience the raw talent of emerging musicians in an intimate setting. Perfect for music lovers who appreciate authentic, heartfelt performances.

Food and drinks available for purchase on site.`,
    category: "music",
    tags: ["music", "indie", "acoustic", "live"],
    city: "Los Angeles",
    state: "CA",
    venue: "https://maps.google.com/?q=The+Troubadour,+West+Hollywood",
    address: "The Troubadour, 9081 Santa Monica Blvd, West Hollywood, CA 90069",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 49.99,
    coverImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Startup Networking Breakfast",
    description: `Connect with fellow entrepreneurs, investors, and startup enthusiasts over breakfast!

What to expect:
- Speed networking sessions
- Pitch practice opportunities
- One-on-one mentor meetings
- Funding insights from VCs
- Success stories from local founders

This is your chance to expand your professional network, find potential co-founders, or get valuable feedback on your startup idea.

Continental breakfast is included with registration.`,
    category: "business",
    tags: ["business", "networking", "startup", "entrepreneurship"],
    city: "Austin",
    state: "TX",
    venue: "https://maps.google.com/?q=Capital+Factory,+Austin",
    address: "Capital Factory, 701 Brazos St, Austin, TX 78701",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 29.99,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Weekend Photography Walk - Street Stories",
    description: `Capture the vibrant streets of Chicago through your lens!

Our photo walk features:
- The bustling Magnificent Mile
- Hidden architectural gems
- Street portraits and candid moments
- Golden hour shooting techniques
- Post-processing tips

Suitable for all skill levels. Bring your camera (phone cameras welcome too!). Our experienced photographer will guide you through composition and storytelling with images.

Tea/coffee stops included along the way!`,
    category: "art",
    tags: ["art", "photography", "culture", "walking-tour"],
    city: "Chicago",
    state: "IL",
    venue: "https://maps.google.com/?q=Millennium+Park,+Chicago",
    address: "Millennium Park, 201 E Randolph St, Chicago, IL 60601",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 79.99,
    coverImage:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Full Stack Development Bootcamp - Day 1",
    description: `Kickstart your journey to becoming a full-stack developer!

Day 1 covers:
- Setting up your development environment
- Git and GitHub fundamentals
- HTML5 and CSS3 essentials
- Introduction to JavaScript
- Building your first web page

This is the first session of our 6-week bootcamp. Perfect for beginners looking to enter the tech field. No prior coding experience required!

Laptop required. Training materials provided.`,
    category: "education",
    tags: ["education", "coding", "fullstack", "beginner"],
    city: "Seattle",
    state: "WA",
    venue: "https://maps.google.com/?q=University+of+Washington+Seattle",
    address: "University of Washington, Seattle, WA 98195",
    capacity: 30,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Sunday Flag Football Tournament",
    description: `A 5v5 flag football tournament for recreational players!

Tournament details:
- 8 teams competing
- Round-robin + knockout format
- Prizes for the top 3 teams
- MVP award
- Free jersey for all participants

Register as a team (5 players + 2 subs) or as an individual (we'll place you on a team).

Referee provided. Water and sports drinks available. On-site medical assistance.`,
    category: "sports",
    tags: ["sports", "football", "tournament", "fitness"],
    city: "Miami",
    state: "FL",
    venue: "https://maps.google.com/?q=Bayfront+Park,+Miami",
    address: "Bayfront Park, 301 Biscayne Blvd, Miami, FL 33132",
    capacity: 56,
    ticketType: "paid",
    ticketPrice: 35.0,
    coverImage:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Healthy Cooking Workshop - Plant-Based Cuisine",
    description: `Learn how to create delicious and nutritious plant-based meals!

Workshop includes:
- 5 full recipes to master
- Tips on ingredient sourcing
- Meal prep strategies
- Nutritional balancing
- Take-home recipe booklet

Our chef will guide you through cooking a complete plant-based meal from appetizer to dessert. All ingredients and kitchen equipment provided.

Taste everything you make! Great for health enthusiasts and curious foodies.`,
    category: "food",
    tags: ["food", "cooking", "health", "vegan"],
    city: "Boston",
    state: "MA",
    venue: "https://maps.google.com/?q=Boston+Public+Market",
    address: "Boston Public Market, 100 Hanover St, Boston, MA 02108",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 120.0,
    coverImage:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Morning Yoga & Meditation Retreat",
    description: `Start your weekend with serenity and mindfulness!

Session includes:
- 60-minute Hatha Yoga practice
- 30-minute guided meditation
- Breathing techniques (Pranayama)
- Sound healing session
- Healthy breakfast spread

Suitable for all levels—modifications provided for beginners. Our certified instructor creates a nurturing space for all.

Yoga mats provided. Please wear comfortable attire.`,
    category: "health",
    tags: ["health", "yoga", "meditation", "wellness"],
    city: "Denver",
    state: "CO",
    venue: "https://maps.google.com/?q=Red+Rocks+Amphitheatre",
    address: "Red Rocks Amphitheatre, 18300 W Alameda Pkwy, Morrison, CO 80465",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 45.0,
    coverImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Gaming Tournament - Valorant Championship",
    description: `Compete in the ultimate Valorant showdown!

Tournament format:
- 16 teams (5v5)
- Single elimination bracket
- Best-of-3 matches
- Prize pool: $5,000
- Live-streamed on Twitch

All skill levels welcome. Bring your own peripherals (mouse, headset). High-performance PCs and stable internet provided.

Energy drinks and snacks available. Featuring exciting commentary and crowd engagement!`,
    category: "gaming",
    tags: ["gaming", "esports", "valorant", "tournament"],
    city: "Las Vegas",
    state: "NV",
    venue: "https://maps.google.com/?q=The+Esports+Arena,+Las+Vegas",
    address: "HyperX Esports Arena, 3900 S Las Vegas Blvd, Las Vegas, NV 89119",
    capacity: 80,
    ticketType: "paid",
    ticketPrice: 20.0,
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Women in Tech: Leadership Panel Discussion",
    description: `Inspirational stories and insights from women leaders in technology!

Panel features:
- CTOs from leading startups
- Engineering Managers from FAANG companies
- Successful tech entrepreneurs
- VC partners focusing on women-led ventures

Topics discussed:
- Breaking barriers in tech
- Building inclusive teams
- Work-life integration
- Career growth strategies
- The importance of mentorship

Open to all genders. Q&A session and networking lunch included.`,
    category: "networking",
    tags: ["networking", "women-in-tech", "leadership", "career"],
    city: "San Jose",
    state: "CA",
    venue: "https://maps.google.com/?q=San+Jose+Convention+Center",
    address: "San Jose Convention Center, 150 W San Carlos St, San Jose, CA 95113",
    capacity: 40,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Hiking the Grand Canyon - Weekend Adventure",
    description: `Experience the majesty of the Grand Canyon on this beginner-friendly hike!

Itinerary:
- Day 1: Mather Point to Ooh Aah Point (Moderate hike)
- Overnight camping under the stars
- Day 2: Sunrise viewing and descent

Package includes:
- Experienced hiking guide
- Camping gear (tents, sleeping bags)
- All meals during the hike
- First aid assistance
- Photography guidance

Moderate fitness level required. Recommended age 16+.

Transportation from Las Vegas available for an additional fee.`,
    category: "outdoor",
    tags: ["outdoor", "hiking", "adventure", "camping"],
    city: "Flagstaff",
    state: "AZ",
    venue: "https://maps.google.com/?q=Grand+Canyon+South+Rim",
    address: "Grand Canyon National Park, South Rim Visitor Center, AZ",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 250.0,
    coverImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Community Clean-up Drive - Park Edition",
    description: `Let's join forces to keep our city parks clean and beautiful!

Activity plan:
- Park clean-up (2 hours)
- Waste sorting workshop
- Talk on urban ecology conservation
- Group photo session
- Certificate of participation

All cleaning materials provided. Wear comfortable clothes that you don't mind getting dirty. Sunscreen and hats recommended.

Snacks provided. A great way to give back while meeting like-minded individuals!`,
    category: "community",
    tags: ["community", "environment", "volunteer", "park"],
    city: "Portland",
    state: "OR",
    venue: "https://maps.google.com/?q=Washington+Park,+Portland",
    address: "Washington Park, 4033 SW Canyon Rd, Portland, OR 97221",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "JavaScript Performance Optimization Masterclass",
    description: `Elevate your JS skills with advanced performance optimization techniques!

Topics covered:
- Memory management and garbage collection
- Deep dive into the event loop
- Web Workers and multi-threading
- Code splitting strategies
- Bundle optimization with Webpack/Vite
- React performance patterns
- Profiling with Chrome DevTools

Intermediate JavaScript knowledge required. Bring your laptop with Node.js installed.

Code samples and cheat sheets provided.`,
    category: "tech",
    tags: ["tech", "javascript", "performance", "advanced"],
    city: "Boston",
    state: "MA",
    venue: "https://maps.google.com/?q=MIT+Sloan+School+of+Management",
    address: "MIT Sloan School of Management, 100 Main St, Cambridge, MA 02142",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 99.99,
    coverImage:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Indie Game Dev Jam - 48 Hour Challenge",
    description: `Build a game from scratch in 48 hours!

Event highlights:
- Theme announced at the start
- Compete solo or in teams (max 4 people)
- Mentorship from industry developers
- Workshops on game engines (Unity/Godot)
- Asset creation support
- Final showcase and judging

Prizes for:
- Best Overall Game
- Most Innovative Mechanic
- Best Art Style
- People's Choice

Sleeping bags welcome. Food and drinks provided throughout the event.`,
    category: "gaming",
    tags: ["gaming", "game-development", "hackathon", "indie"],
    city: "Seattle",
    state: "WA",
    venue: "https://maps.google.com/?q=Museum+of+Pop+Culture,+Seattle",
    address: "Museum of Pop Culture, 325 5th Ave N, Seattle, WA 98109",
    capacity: 60,
    ticketType: "paid",
    ticketPrice: 50.0,
    coverImage:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI Product Building Workshop - From Idea to MVP",
    description: `Learn how to build AI-powered products from the ground up in this hands-on workshop!

What you'll build:
- An AI-powered customer support chatbot
- An intelligent document summarizer
- A smart recommendation engine prototype

Skills covered:
- Product ideation with AI capabilities
- API integration (OpenAI, Anthropic, Google)
- Production-level prompt engineering
- UI/UX for AI products
- Deployment and scaling basics

Perfect for product managers, entrepreneurs, and developers looking to add AI to their toolkit. No prior ML experience needed—we focus on practical application!

Lunch and snacks included. Bring your laptop!`,
    category: "tech",
    tags: ["tech", "ai", "product", "startup"],
    city: "San Francisco",
    state: "CA",
    venue: "https://maps.google.com/?q=Piers+38+Startup+Space,+San+Francisco",
    address: "Piers 38 Startup Space, 792-882 The Embarcadero, San Francisco, CA 94107",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 149.99,
    coverImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Startup Founder's Breakfast - Funding & Growth Stories",
    description: `Network with fellow founders and learn from successful entrepreneurs over breakfast!

Featured speakers:
- A Series B founder sharing funding journey insights
- An Angel Investor discussing what they look for
- A Growth Hacker with proven scaling strategies
- A failed startup founder sharing lessons learned

Agenda:
- 8:00 AM – Breakfast and Networking
- 9:00 AM – Panel Discussion
- 10:00 AM – Q&A Session
- 10:30 AM – One-on-one speed networking

This intimate gathering is perfect for early-stage founders, aspiring entrepreneurs, and anyone interested in the startup ecosystem.

Continental breakfast and unlimited coffee included!`,
    category: "business",
    tags: ["business", "startup", "networking", "entrepreneurship"],
    city: "Austin",
    state: "TX",
    venue: "https://maps.google.com/?q=The+Long+Center,+Austin",
    address: "The Long Center, 701 W Riverside Dr, Austin, TX 78704",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 39.99,
    coverImage:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Weekend Photography Masterclass - Portrait & Street",
    description: `Elevate your photography skills with professional techniques!

Day 1 – Portrait Photography:
- Lighting setup (natural and artificial)
- Posing and directing models
- Camera settings for portraits
- Live shoot session with a model
- Post-processing in Lightroom

Day 2 – Street Photography:
- Finding compelling stories
- Composition techniques
- Candid vs. posed shots
- Photo walk through Downtown Austin
- Ethics in street photography

Equipment: DSLR/Mirrorless camera required (phones are not suitable for this masterclass). Tripod optional.

All skill levels welcome. You will leave with a portfolio of stunning images!

Snacks and beverages provided on both days.`,
    category: "art",
    tags: ["art", "photography", "workshop", "creative"],
    city: "Austin",
    state: "TX",
    venue: "https://maps.google.com/?q=Texas+State+Capitol,+Austin",
    address: "Texas State Capitol, 1100 Congress Ave, Austin, TX 78701",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 249.99,
    coverImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Corporate Soccer Tournament - Season 3",
    description: `The biggest corporate soccer showdown in Seattle is back!

Tournament format:
- 12 corporate teams competing
- 7v7 format
- Group stage + knockout rounds
- Professional referees and scoring
- Live commentary

Prizes:
- Winner: $10,000 + Trophy
- Runner-up: $5,000
- Best Striker, Goalkeeper, and MVP awards

Register your company team (7 players + 4 subs). Individual registrations also open—we'll form mixed teams.

What's included:
- Professional soccer field
- Match balls and equipment
- Snacks throughout the event
- Team jerseys
- Photo and video coverage

Perfect for team building and corporate bonding!`,
    category: "sports",
    tags: ["sports", "soccer", "corporate", "tournament"],
    city: "Seattle",
    state: "WA",
    venue: "https://maps.google.com/?q=Lumen+Field,+Seattle",
    address: "Lumen Field, 800 Occidental Ave S, Seattle, WA 98134",
    capacity: 180,
    ticketType: "paid",
    ticketPrice: 50.0,
    coverImage:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Mindfulness & Stress Management for Professionals",
    description: `Combat workplace stress with science-backed mindfulness techniques!

This workshop is designed for busy professionals who want to:
- Reduce anxiety and stress
- Improve focus and productivity
- Better manage work-life balance
- Develop emotional resilience
- Enhance decision-making clarity

Session includes:
- Understanding the stress response
- Guided meditation practice
- Breathing techniques for instant calm
- Mindful communication at work
- Creating daily wellness rituals
- Apps and tools to continue your practice

Led by a certified mindfulness coach with over 10 years of experience in corporate wellness.

Yoga mats and meditation cushions provided. Please wear comfortable attire.

Healthy snacks and herbal teas included.`,
    category: "health",
    tags: ["health", "wellness", "mindfulness", "corporate"],
    city: "San Francisco",
    state: "CA",
    venue: "https://maps.google.com/?q=Golden+Gate+Park,+San+Francisco",
    address: "Golden Gate Park, San Francisco, CA 94121",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 89.99,
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Pizza Palooza: A Slice of Heaven",
    description: `Join us for an evening of pizza making and tasting! Learn the secrets to crafting the perfect pizza dough and explore a variety of delicious toppings. You'll leave with new skills and a full stomach.`,
    category: "food",
    tags: ["food"],
    city: "New York",
    state: "NY",
    venue: "https://maps.google.com/?q=Eataly+Flatiron,+New+York",
    address: "Eataly Flatiron, 200 5th Ave, New York, NY 10010",
    capacity: 10,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjkyNzJ8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwwfHx8fDE3NjI5NTA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    themeColor: "#831843",
  },
  {
    title: "React & Next.js: Building the Future of Web Applications",
    description: `Explore the latest advancements in React and Next.js and how these technologies are shaping modern web development. This event provides insights into server-side rendering, performance optimization, and the future roadmap for building scalable and efficient web applications. Attendees will gain hands-on knowledge and learn best practices for utilizing these powerful tools.`,
    category: "tech",
    tags: ["tech"],
    city: "Seattle",
    state: "WA",
    venue: "https://maps.google.com/?q=Microsoft+Campus,+Redmond",
    address:
      "Microsoft Campus, Building 92, 15010 NE 36th St, Redmond, WA 98052",
    capacity: 75,
    ticketType: "paid",
    ticketPrice: 25.0,
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjkyNzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGpzfGVufDB8fHx8MTc2Mjk0NjQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    themeColor: "#1e3a8a",
  },
];

// Helper functions
function getRandomFutureDate(minDays = 7, maxDays = 90) {
  const now = Date.now();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays) + minDays);
  return now + randomDays * 24 * 60 * 60 * 1000;
}

function getEventEndTime(startTime) {
  const durationHours = Math.floor(Math.random() * 3) + 2;
  return startTime + durationHours * 60 * 60 * 1000;
}

function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    `-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
}

// RUN THIS DIRECTLY FROM THE CONVEX DASHBOARD
// Go to Dashboard > Functions > seed:run > Run
export const run = internalMutation({
  handler: async (ctx) => {
    // First, get or create the default organizer user
    let organizer = await ctx.db.query("users").first();

    if (!organizer) {
      // Create a default organizer if no users exist
      const organizerId = await ctx.db.insert("users", {
        email: "organizer@eventhub.com",
        tokenIdentifier: "seed-user-token",
        name: "EventHub Team",
        hasCompletedOnboarding: true,
        location: {
          city: "San Francisco",
          state: "CA",
          country: "USA",
        },
        interests: ["tech", "music", "business"],
        freeEventsCreated: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      organizer = await ctx.db.get(organizerId);
    }

    const createdEvents = [];

    for (const eventData of SAMPLE_EVENTS) {
      const startDate = getRandomFutureDate();
      const endDate = getEventEndTime(startDate);
      const registrationCount = Math.floor(
        Math.random() * eventData.capacity * 0.7
      );

      const event = {
        ...eventData,
        slug: generateSlug(eventData.title),
        organizerId: organizer._id,
        organizerName: organizer.name,
        startDate,
        endDate,
        // Set US timezone and country
        timezone: "America/Los_Angeles",
        locationType: "physical",
        country: "USA",
        registrationCount,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const eventId = await ctx.db.insert("events", event);
      createdEvents.push(eventData.title);
    }

    console.log(`✅ Successfully seeded ${createdEvents.length} events!`);
    return {
      success: true,
      count: createdEvents.length,
      events: createdEvents,
    };
  },
});

// Optional: Clear all events
export const clear = internalMutation({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    let count = 0;

    for (const event of events) {
      // Delete associated registrations
      const regs = await ctx.db
        .query("registrations")
        .withIndex("by_event", (q) => q.eq("eventId", event._id))
        .collect();

      for (const reg of regs) {
        await ctx.db.delete(reg._id);
      }

      // Delete the event itself
      await ctx.db.delete(event._id);
      count++;
    }

    console.log(`🗑️ Cleared ${count} events`);
    return { success: true, deleted: count };
  },
});