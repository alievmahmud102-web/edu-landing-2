import type { Template } from "@/types";

export const templates: Template[] = [
  {
    id: "1",
    slug: "beginner-english",
    title: "Beginner English",
    description:
      "A friendly start for children who are new to English or need a solid foundation. We build vocabulary, listening, and simple speaking through games and short dialogues.",
    price: 150,
    displayPrice: "$150",
    oldPrice: "$190",
    badge: "Popular",
    demoUrl: "",
    features: [
      "Small groups with lots of speaking time",
      "Clear levels from first words to short stories",
      "Weekly progress notes for parents",
      "Online or in-person options",
      "No rote memorization — we learn by doing",
      "Supportive teachers trained for ages 6–16"
    ],
    category: "Beginner"
  },
  {
    id: "2",
    slug: "speaking-english",
    title: "Speaking English",
    description:
      "Confidence-first course focused on real conversation: role-plays, discussions, and pronunciation so your child can use English naturally in daily situations.",
    price: 150,
    displayPrice: "$150",
    oldPrice: "$180",
    badge: "Top pick",
    demoUrl: "",
    features: [
      "Speaking in every lesson",
      "Pronunciation and fluency drills",
      "Themed projects and mini-presentations",
      "Peer practice in small groups",
      "Teacher feedback after each class",
      "Materials matched to your child’s level"
    ],
    category: "Speaking"
  },
  {
    id: "3",
    slug: "ielts-preparation",
    title: "IELTS Preparation",
    description:
      "Structured preparation for older students targeting IELTS or similar exams. We balance all four skills with exam strategies and timed practice.",
    price: 150,
    displayPrice: "$150",
    oldPrice: "$200",
    badge: null,
    demoUrl: "",
    features: [
      "Diagnostic test and score roadmap",
      "Academic and general training tracks",
      "Writing and speaking with detailed feedback",
      "Full mock tests with review sessions",
      "Exam techniques and time management",
      "Small groups or one-on-one add-on"
    ],
    category: "Exams"
  },
  {
    id: "4",
    slug: "school-support-english",
    title: "School Support English",
    description:
      "Helps learners keep up with school English, homework, and tests while building stronger speaking alongside the curriculum.",
    price: 150,
    displayPrice: "$150",
    oldPrice: "$170",
    badge: null,
    demoUrl: "",
    features: [
      "Aligned with typical school programs",
      "Grammar and vocabulary made clear",
      "Test and project preparation",
      "Extra speaking to go beyond the textbook",
      "Regular check-ins with parents",
      "Flexible schedule on weekdays or weekends"
    ],
    category: "School support"
  },
  {
    id: "5",
    slug: "one-on-one-lessons",
    title: "One-on-one lessons",
    description:
      "Fully personalized lessons for faster progress or specific goals — from catching up to intensive exam prep, with a plan built around your child.",
    price: 150,
    displayPrice: "$150",
    oldPrice: "$220",
    badge: null,
    demoUrl: "",
    features: [
      "Custom plan after a diagnostic lesson",
      "Flexible booking with your teacher",
      "100% attention on your child’s needs",
      "Fast feedback on homework and speaking",
      "Optional focus on IELTS or school exams",
      "Online or in-person available"
    ],
    category: "Private"
  }
];
