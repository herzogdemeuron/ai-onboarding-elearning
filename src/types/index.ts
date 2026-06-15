export interface Module {
  id: number;
  title: string;
  shortTitle: string;
  duration: string;
  content: ModuleContent;
}

export interface ModuleContent {
  heading: string;
  description: string;
  sections: ContentSection[];
  keyTakeaways?: string[];
  interactiveElements?: InteractiveElement[];
  videoTutorial?: VideoTutorial;
  collaborativeReflection?: CollaborativeReflection;
  quiz?: QuizQuestion[];
  principleCards?: PrincipleCard[];
  clickDemo?: ClickDemo;
  sortingActivity?: SortingActivity;
  reflectionActivity?: ReflectionActivity;
}

export interface PrincipleCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface ClickDemoStep {
  id: string;
  stepNumber: number;
  instruction: string;
  screenshot: string;
  clickArea?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  typingSimulation?: {
    text: string;
    inputPosition: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    screenshotDuringTyping?: string;
  };
}

export interface ClickDemo {
  title: string;
  totalSteps: number;
  estimatedTime: string;
  steps: ClickDemoStep[];
}

export interface SortingCard {
  id: string;
  text: string;
  correctCategory: 'good' | 'risky';
}

export interface SortingActivity {
  title: string;
  instruction: string;
  categories: {
    good: string;
    risky: string;
  };
  cards: SortingCard[];
}

export interface SharedReflection {
  id: string;
  authorInitials: string;
  authorDepartment: string;
  content: string;
}

export interface ReflectionActivity {
  prompt: string;
  supportingQuestions: string[];
  privacyNotice: string;
  placeholderText: string;
  confirmationMessage: string;
  sharedReflections: SharedReflection[];
}

export interface ContentSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface InteractiveElement {
  type: 'quiz' | 'reflection' | 'example';
  question?: string;
  options?: string[];
  correctAnswer?: number;
  prompt?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface VideoTutorial {
  title: string;
  duration: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  hasTranscript?: boolean;
}

export interface CollaborativeReflection {
  prompt: string;
  communityResponses: CommunityResponse[];
}

export interface CommunityResponse {
  id: string;
  authorInitials: string;
  authorName: string;
  timeAgo: string;
  content: string;
  likes: number;
}

export interface ProgressState {
  currentModule: number;
  completedModules: number[];
  startedAt?: Date;
}
