import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 1,
    title: 'Welcome & AI Basics',
    shortTitle: 'Welcome & AI Basics',
    duration: '3 min',
    content: {
      heading: 'Welcome & AI Basics: How AI Actually works',
      description: 'Welcome to the AI Learning Journey. This first module introduces the course and the fundamentals of AI — what large language models are, why they predict rather than "know," and how to recognize their key limitations, hallucinations and bias.',
      videoTutorial: {
        title: 'Introduction',
        duration: '3 min',
        videoUrl: '/videos/Module1_video.mp4',
        hasTranscript: true
      },
      sections: [
        {
          title: 'What You\'ll Learn',
          content: 'This module will give you the foundational knowledge you need to use AI effectively and responsibly in your day-to-day work at Herzog & de Meuron.',
          bullets: [
            'Core concepts behind modern AI assistants',
            'How AI can support architectural work',
            'The H&dM AI ecosystem and tools',
            'Safety, security, and responsible use guidelines'
          ]
        }
      ],
      keyTakeaways: [
        'AI is a tool to augment your capabilities, not replace them',
        'Effective use requires understanding both strengths and limitations',
        'Responsible use protects you and the firm'
      ],
      quiz: [
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
        },
        {
          id: 'b2',
          question: 'What is a "hallucination" in the context of AI?',
          options: [
            'When the AI refuses to answer',
            'When AI generates plausible but incorrect information',
            'When the AI runs slowly',
            'When the AI asks too many questions'
          ],
          correctAnswer: 1
        },
        {
          id: 'b3',
          question: 'Why might AI not know about recent events?',
          options: [
            'AI chooses not to discuss current events',
            'AI models have a training cutoff date',
            'Recent events are too complex for AI',
            'AI only knows about technology topics'
          ],
          correctAnswer: 1
        },
        {
          id: 'b4',
          question: 'What should you NEVER share with AI tools?',
          options: [
            'General design questions',
            'Confidential client or firm data',
            'Public information',
            'Questions about building codes'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Understanding the EU AI Act',
    shortTitle: 'The EU AI Act',
    duration: '3 min',
    content: {
      heading: 'Understanding the EU AI Act',
      description: 'Now that you know what AI can do — and where it falls short — what are the rules for using it? The EU AI Act sorts AI uses by risk, from minimal and limited to high-risk and prohibited. Here is how that framework shapes our work, and the core rule behind it: use AI as support, not unchecked authority.',
      videoTutorial: {
        title: 'The EU AI Act',
        duration: '3 min',
        hasTranscript: true
      },
      sections: [
        {
          title: 'What is Artificial Intelligence?',
          content: 'Artificial Intelligence refers to computer systems that can perform tasks typically requiring human intelligence.',
          bullets: [
            'AI models learn patterns from vast amounts of training data',
            'They predict what words should come next based on context',
            'They don\'t truly "understand" like humans do',
            'Responses are generated, not retrieved from a database'
          ]
        },
        {
          title: 'Large Language Models (LLMs)',
          content: 'LLMs are the technology behind AI assistants like ChatGPT, Claude, and Copilot.',
          bullets: [
            'Trained on billions of text examples from the internet',
            'Can generate human-like text, code, and analysis',
            'Have a knowledge cutoff date and may not know recent events',
            'Can "hallucinate" — generate plausible but incorrect information'
          ]
        },
        {
          title: 'Risks to Watch For',
          content: 'Understanding AI limitations is essential for responsible use.',
          bullets: [
            'Bias — AI can reflect biases present in training data',
            'Hallucinations — AI may fabricate facts, citations, or details',
            'Confidentiality — Never share sensitive client or firm data',
            'Over-reliance — Always verify AI outputs with your expertise'
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: 'AI Usage Principles',
    shortTitle: 'AI Usage Principle',
    duration: '3 min',
    content: {
      heading: 'AI Usage Principle',
      description: 'AI can support our work, but it does not replace professional judgment. These six principles guide how AI should be used at H&dM: responsibly, transparently, and in alignment with our design values.',
      sections: [],
      principleCards: [
        {
          id: 'p1',
          title: 'Human Accountability',
          subtitle: 'AI can assist, but you remain responsible for all outcomes.',
          description: 'You are responsible for reviewing, correcting, and deciding what to use.',
          details: [
            'AI tools may still generate inaccurate, incomplete, or biased outputs.Users must independently verify all factual, technical, and regulatory information for any biases, omissions, or hallucinations in AI-generated works.'
      
          ]
        },
        {
          id: 'p2',
          title: 'Design Quality',
          subtitle: 'AI should enhance, not compromise, our design standards.Maintain the high quality and integrity of H&dM design work.',
          description: 'AI-enerated content should be refined to meet H&dM quality standards.',
          details: [
            
            'Use AI as a starting point, not a final product.',
            'Always apply professional judgment to evaluate AI suggestions.'
          ]
        },
        {
          id: 'p3',
          title: 'Authorship & IP',
          subtitle: 'Understand ownership and attribution of AI-assisted work.',
          description: 'Be mindful of intellectual property considerations when using AI.',
          details: [
            'AI-generated content may have complex ownership implications.',
            'Always disclose AI assistance when required.',
            'Respect copyright and licensing in training data and outputs.'
          ]
        },
        {
          id: 'p4',
          title: 'Efficient Use',
          subtitle: 'Use AI to enhance productivity without creating dependencies.',
          description: 'AI should streamline workflows while maintaining human expertise.',
          details: [
            'Choose the right tool for each task.',
            'Avoid over-reliance on AI for critical decisions.',
            'Balance AI efficiency with skill development.'
          ]
        },
        {
          id: 'p5',
          title: 'Security',
          subtitle: 'Protect sensitive information when using AI tools.',
          description: 'Never share confidential client or firm data with AI systems.',
          details: [
            'Use only approved AI tools for firm work.',
            'Be cautious about what data you input into AI systems.',
            'Follow H&dM data protection policies at all times.'
          ]
        },
        {
          id: 'p6',
          title: 'Transparency',
          subtitle: 'Be open about AI use in your work.',
          description: 'Communicate clearly when AI has been used in projects.',
          details: [
            'Document AI assistance in project records when appropriate.',
            'Be honest with clients and colleagues about AI involvement.',
            'Support informed decision-making through transparency.'
          ]
        }
      ],
      keyTakeaways: [
        'Human Accountability — You remain responsible for all outcomes',
        'Design Quality — Maintain H&dM standards in all AI-assisted work',
        'Authorship & IP — Understand ownership implications',
        'Efficient Use — Balance AI assistance with human expertise',
        'Security — Protect confidential information',
        'Transparency — Be open about AI involvement'
      ]
    }
  },
  {
    id: 4,
    title: 'AI Ecosystem',
    shortTitle: 'AI Ecosystem',
    duration: '2 min',
    content: {
      heading: 'AI Ecosystem',
      description: 'Follow along the click demo to learn how to use the H&dM AI Ecosystem.',
      sections: [],
      clickDemo: {
        title: 'H&dM AI Ecosystem Tutorial',
        totalSteps: 5,
        estimatedTime: '2 min',
        steps: [
          {
            id: 'step1',
            stepNumber: 1,
            instruction: 'Click AI Hub to access H&dM AI Index Page',
            screenshot: '/images/portal-screenshot.png',
            clickArea: { x: 43, y: 72, width: 14, height: 8 }
          },
          {
            id: 'step2',
            stepNumber: 2,
            instruction: 'Click on the search bar to ask a question',
            screenshot: '/images/ai-index-searchbar.png',
            clickArea: { x: 2, y: 17, width: 40, height: 6 },
            typingSimulation: {
              text: 'What AI tools are available at H&dM?',
              inputPosition: { x: 5, y: 17, width: 50, height: 8 },
              screenshotDuringTyping: '/images/ai-index-typing.png'
            }
          },
          {
            id: 'step3',
            stepNumber: 3,
            instruction: 'Click the + button to see more information about the models available on H&dM Chat',
            screenshot: '/images/ai-index-searchbar.png',
            clickArea: { x: 14.5, y: 29.5, width: 2.5, height: 4 }
          },
          {
            id: 'step4',
            stepNumber: 4,
            instruction: 'Browse and filter the available AI models in the side panel',
            screenshot: '/images/ai-index-chat-models.png',
            clickArea: { x: 79.8, y: 6, width: 6.2, height: 4 }
          },
          {
            id: 'step5',
            stepNumber: 5,
            instruction: 'Click on the close button to go back to the index page',
            screenshot: '/images/ai-index-chat-models-filter.png',
            clickArea: { x: 96.5, y: 1, width: 3, height: 4 }
          }
        ]
      },
      keyTakeaways: [
        'The AI Hub is your central resource for AI at H&dM',
        'Use only approved AI tools for firm work',
        'Documentation and guidelines are available in the Hub',
        'Request new capabilities through proper channels'
      ]
    }
  },
  {
    id: 5,
    title: 'Getting Started: H&dM Chat',
    shortTitle: 'Getting Started: H&dM Chat',
    duration: '4 min',
    content: {
      heading: 'Getting Started: H&dM Chat',
      description: 'Follow along the click demo to learn how to use H&dM Chat.',
      sections: [],
      clickDemo: {
        title: 'H&dM Chat Tutorial',
        totalSteps: 20,
        estimatedTime: '4 min',
        steps: [
          {
            id: 'bp-step1',
            stepNumber: 1,
            instruction: 'Click to open H&dM Chat',
            screenshot: '/images/ai-index-searchbar.png',
            clickArea: { x: 2, y: 30, width: 15, height: 22 }
          },
          {
            id: 'bp-step2',
            stepNumber: 2,
            instruction: 'Click to open sidebar',
            screenshot: '/images/hdmchat-1.png',
            clickArea: { x: 0.5, y: 2, width: 2.5, height: 6 }
          },
          {
            id: 'bp-step3',
            stepNumber: 3,
            instruction: 'Click the dropdown menu to see the available models',
            screenshot: '/images/hdmchat-2.png',
            clickArea: { x: 18, y: 1, width: 7, height: 8 }
          },
          {
            id: 'bp-step4',
            stepNumber: 4,
            instruction: 'Click to choose a model',
            screenshot: '/images/hdmchat-models-dropdown.png',
            clickArea: { x: 19, y: 15, width: 32, height: 6 }
          },
          {
            id: 'bp-step5',
            stepNumber: 5,
            instruction: 'Click the + button to attach files, webpages, notes, knowledge, or previous chats to your message',
            screenshot: '/images/hdmchat-2.png',
            clickArea: { x: 35, y: 46, width: 2, height: 5 }
          },
          {
            id: 'bp-step6',
            stepNumber: 6,
            instruction: 'Click the Integrations icon to open additional chat tools or web and image search toggle.',
            screenshot: '/images/hdmchat-plus.png',
            clickArea: { x: 37.5, y: 46, width: 2, height: 5 }
          },
          {
            id: 'bp-step7',
            stepNumber: 7,
            instruction: 'Click on tools to see the list of availalbe tools ',
            screenshot: '/images/hdmchat-tools.png',
            clickArea: { x: 38, y: 52, width: 17, height: 6 }
          },
          {
            id: 'bp-step8',
            stepNumber: 8,
            instruction: 'Click on Workspace',
            screenshot: '/images/hdmchat-tools-2.png',
            clickArea: { x: 0.5, y: 23, width: 15, height: 6 }
          },
          {
            id: 'bp-step9',
            stepNumber: 9,
            instruction: 'Click on Skills',
            screenshot: '/images/hdmchat-models.png',
            clickArea: { x: 32, y: 2, width: 5, height: 6 }
          },
          {
            id: 'bp-step10',
            stepNumber: 10,
            instruction: 'Create a new skill',
            screenshot: '/images/skills1.png',
            clickArea: { x: 92.5, y: 7, width: 7, height: 6.5 }
          },
          {
            id: 'bp-step11',
            stepNumber: 11,
            instruction: 'Type in the skill instruction. For example we can create a skill to summarize meeting notes.',
            screenshot: '/images/skills2.png',
            clickArea: { x: 18, y: 17, width: 80, height: 50 }
          },
          {
            id: 'bp-step12',
            stepNumber: 12,
            instruction: 'Click save and create button',
            screenshot: '/images/hdmchat-skills-meetingnotes.png',
            clickArea: { x: 90, y: 90, width: 10, height: 10 }
          },
          {
            id: 'bp-step13',
            stepNumber: 13,
            instruction: 'See the skill has been created, click on the New Chat button',
            screenshot: '/images/hdmchat-skills-meetingnotes-2.png',
            clickArea: { x: 0.5, y: 5, width: 10, height: 8 }
          },
          {
            id: 'bp-step14',
            stepNumber: 14,
            instruction: 'Click on the chat bar and type $ to look for the skill you just created',
            screenshot: '/images/hdmchat-skills-meetingnotes-3.png',
            clickArea: { x: 34, y: 40, width: 20, height: 8 }
          },
          {
            id: 'bp-step15',
            stepNumber: 15,
            instruction: 'Click on the skill you just created.',
            screenshot: '/images/hdmchat-skills-meetingnotes-4.png',
            clickArea: { x: 35, y: 34, width: 20, height: 8 }
          },
          {
            id: 'bp-step16',
            stepNumber: 16,
            instruction: 'Copy paste or attach the meeting notes into the chat bar and click send.',
            screenshot: '/images/hdmchat-skills-meetingnotes-5.png',
            clickArea: { x: 79, y: 86, width: 4, height: 8 }
          },
          {
            id: 'bp-step17',
            stepNumber: 17,
            instruction: 'Once it is done, you will find the summary in the notes section. Click on Notes button.',
            screenshot: '/images/hdmchat-skills-meetingnotes-6.png',
            clickArea: { x: 0.5, y:16, width: 15, height:8 }
          },
          {
            id: 'bp-step18',
            stepNumber: 18,
            instruction: 'Click on the newly created meeting summary.',
            screenshot: '/images/hdmchat-skills-meetingnotes-7.png',
            clickArea: { x: 18, y: 29, width: 30, height: 10 }
          },
          {
            id: 'bp-step19',
            stepNumber: 19,
            instruction: 'You can download the summary if needed.',
            screenshot: '/images/hdmchat-skills-meetingnotes-8.png',
            clickArea: { x: 91, y: 0.5, width: 3, height: 8 }
          },
          {
            id: 'bp-step20',
            stepNumber: 20,
            instruction: 'Click to download.',
            screenshot: '/images/hdmchat-skills-meetingnotes-9.png',
            clickArea: { x: 82, y: 6, width: 10, height: 8 }
          }
        ]
      },
      keyTakeaways: [
        'Access H&dM Chat from the AI Hub',
        'Choose the right model for your task',
        'Attach files and context to improve responses',
        'Use tools and integrations for enhanced capabilities'
      ]
    }
  },
  {
    id: 6,
    title: 'Getting Started: XFigura',
    shortTitle: 'Getting Started: XFigura',
    duration: '3 min',
    content: {
      heading: 'Getting Started: XFigura',
      description: 'Follow along the click demo to learn how to use XFigura.',
      sections: [],
      clickDemo: {
        title: 'XFigura Tutorial',
        totalSteps: 19,
        estimatedTime: '3 min',
        steps: [
          {
            id: 'xf-step1',
            stepNumber: 1,
            instruction: 'Go to AI INDEX and click to open XFigura',
            screenshot: '/images/ai-index-searchbar.png',
            clickArea: { x: 18.5, y: 30, width: 14.5, height: 25 }
          },
          {
            id: 'xf-step2',
            stepNumber: 2,
            instruction: 'Attention! As a first time user, click sign up instead of sign in',
            screenshot: '/images/xfigura-click demo/xfigura1.png',
            clickArea: { x: 77, y: 63.5, width: 6, height: 10 }
          },
          {
            id: 'xf-step3',
            stepNumber: 3,
            instruction: 'Be sure to see create your account window, and click Microsoft and use your H&dM account',
            screenshot: '/images/xfigura-click demo/xfigura2.png',
            clickArea: { x: 50, y: 25, width: 12, height: 10 }
          },
          {
            id: 'xf-step4',
            stepNumber: 4,
            instruction: 'Once you are in Xfigura, click on the Boards tab',
            screenshot: '/images/xfigura-click demo/xfigura3.png',
            clickArea: { x: 36, y: 2, width: 7.5, height: 10 }
          },
          {
            id: 'xf-step5',
            stepNumber: 5,
            instruction: 'Click on Start Blank!',
            screenshot: '/images/xfigura-click demo/xfigura4.png',
            clickArea: { x: 4.3, y: 15, width: 12.5, height: 28 }
          },
          {
            id: 'xf-step6',
            stepNumber: 6,
            instruction: 'Type in the board name and assign to project.',
            screenshot: '/images/xfigura-click demo/xfigura4-1.png',
            clickArea: { x: 30, y: 30, width: 40, height: 40 }
          },
          {
            id: 'xf-step7',
            stepNumber: 7,
            instruction: 'Attention! If you don\'t see your project, please write to ai@herzogdemeuron.com.',
            screenshot: '/images/xfigura-click demo/xfigura4-2.png',
            clickArea: { x: 30, y: 30, width: 40, height: 50 }
          },
          {
            id: 'xf-step8',
            stepNumber: 8,
            instruction: 'Once you have created the board, use the templates button to access H&dM Templates',
            screenshot: '/images/xfigura-click demo/xfigura4-4.png',
            clickArea: { x: 0.5, y: 56, width: 5, height: 10 }
          },
          {
            id: 'xf-step9',
            stepNumber: 9,
            instruction: 'H&dM Templates will show automatically. Select a template.',
            screenshot: '/images/xfigura-click demo/xfigura4-5.png',
            clickArea: { x: 20, y: 60, width: 20, height: 20 }
          },
          {
            id: 'xf-step10',
            stepNumber: 10,
            instruction: 'Click Use Now to apply the template.',
            screenshot: '/images/xfigura-click demo/xfigura4-5-1.png',
            clickArea: {  x: 20, y: 73, width: 10, height: 8 }
          },
          {
            id: 'xf-step11',
            stepNumber: 11,
            instruction: 'Once the template is applied,click on the component to see the bar menu below each component.',
            screenshot: '/images/xfigura-click demo/xfigura4-6.png',
            clickArea: { x: 25, y: 10, width: 25, height: 60 }
          },
          {
            id: 'xf-step12',
            stepNumber: 12,
            instruction: 'In the bar menu, you can replace input image. ',
            screenshot: '/images/xfigura-click demo/xfigura4-7.png',
            clickArea: { x: 27, y: 70, width: 3, height: 7 }
          },
          {
            id: 'xf-step13',
            stepNumber: 13,
            instruction: 'You can modify the text prompt by clicking on the Input button.',
            screenshot: '/images/xfigura-click demo/xfigura4-8.png',
            clickArea: { x: 68, y: 48, width: 5, height: 6 }
          },
          {
            id: 'xf-step14',
            stepNumber: 14,
            instruction: 'Click the Generate button to run the template.',
            screenshot: '/images/xfigura-click demo/xfigura4-8.png',
            clickArea: { x: 75.5, y: 48, width: 3, height: 6 }
          },
          {
            id: 'xf-step15',
            stepNumber: 15,
            instruction: 'Click on the top left XFigura icon to open the menu.',
            screenshot: '/images/xfigura-click demo/xfigura4-8.png',
            clickArea: { x: 0.5, y: 1, width: 4, height: 10 }
          },
          {
            id: 'xf-step16',
            stepNumber: 16,
            instruction: 'Click Boards button to go back to the list of boards.',
            screenshot: '/images/xfigura-click demo/xfigura4-9.png',
            clickArea: { x: 8, y: 7, width: 8, height: 10 }
          },
          {
            id: 'xf-step17',
            stepNumber: 17,
            instruction: 'By default, you will find HdM-Template. Click on HdM-Template.',
            screenshot: '/images/xfigura-click demo/xfigura4 -9.png',
            clickArea: { x: 16.5, y: 17, width: 14, height: 25 }
          },
          {
            id: 'xf-step18',
            stepNumber: 18,
            instruction: 'Once the teamplate is open, toggle light mode to see better.',
            screenshot: '/images/xfigura-click demo/xfigura7.png',
            clickArea: { x: 88.5, y: 89, width: 4.5, height: 10 }
          },
          {
            id: 'xf-step19',
            stepNumber: 19,
            instruction: 'Scroll and pan to view various ways to use XFigura!',
            screenshot: '/images/xfigura-click demo/xfigura8.png',
            clickArea: { x: 30, y: 50, width: 50, height: 45 }
          }
        ]
      },
      keyTakeaways: [
        'Access XFigura from the AI Hub',
        'Understand the XFigura interface',
        'Learn basic XFigura workflows'
      ]
    }
  },
  {
    id: 7,
    title: 'Responsible AI Use',
    shortTitle: 'Responsible Use',
    duration: '4 min',
    content: {
      heading: 'Responsible AI Use',
      description: 'Sort each AI practice into the correct category to demonstrate your understanding of responsible AI use.',
      sections: [],
      sortingActivity: {
        title: 'AI Practices Sorting Activity',
        instruction: 'Drag each practice card to the correct category, or click on the category to sort.',
        categories: {
          good: 'Good Practice',
          risky: 'Risky Practice'
        },
        cards: [
          {
            id: 'card-1',
            text: 'Use approved office AI tools where possible.',
            correctCategory: 'good'
          },
          {
            id: 'card-2',
            text: 'Paste confidential project information into a public AI chatbot.',
            correctCategory: 'risky'
          },
          {
            id: 'card-3',
            text: 'Check AI outputs against reliable sources before using them.',
            correctCategory: 'good'
          },
          {
            id: 'card-4',
            text: 'Assume an AI answer is correct because it sounds confident.',
            correctCategory: 'risky'
          },
          {
            id: 'card-5',
            text: 'Use AI to improve clarity, structure, translation, or alternative phrasing.',
            correctCategory: 'good'
          },
          {
            id: 'card-6',
            text: 'Let AI make final professional judgments for you.',
            correctCategory: 'risky'
          },
          {
            id: 'card-7',
            text: 'Anonymise or generalise sensitive prompts before using AI.',
            correctCategory: 'good'
          },
          {
            id: 'card-8',
            text: 'Include personal data, client-sensitive content, unreleased project material, fees, contracts, or internal decisions in an unapproved tool.',
            correctCategory: 'risky'
          },
          {
            id: 'card-9',
            text: 'Be transparent when AI has significantly contributed to a work product, where relevant.',
            correctCategory: 'good'
          },
          {
            id: 'card-10',
            text: 'Present AI-generated content as independently verified expert knowledge.',
            correctCategory: 'risky'
          },
          {
            id: 'card-11',
            text: 'Treat AI-generated images and text as draft material.',
            correctCategory: 'good'
          },
          {
            id: 'card-12',
            text: 'Use AI-generated outputs without checking accuracy, bias, rights, and suitability.',
            correctCategory: 'risky'
          }
        ]
      },
      keyTakeaways: [
        'Always use approved AI tools for work tasks',
        'Never share confidential information with public AI tools',
        'Verify AI outputs before using them',
        'Treat AI as a helpful tool, not a replacement for professional judgment',
        'Be transparent about AI involvement in your work'
      ]
    }
  },
  {
    id: 8,
    title: 'Final Reflections',
    shortTitle: 'Final Reflections',
    duration: '5 min',
    content: {
      heading: 'Final Reflections',
      description: 'Complete your learning journey by sharing your perspective on responsible AI use in architectural practice.',
      sections: [],
      reflectionActivity: {
        prompt: 'How should AI be used responsibly and meaningfully in architectural work?',
        supportingQuestions: [
          'Where can AI genuinely support your work?',
          'Where should human judgment remain central?',
          'What risks should we be careful about?',
          'What would responsible AI use look like in your daily practice?'
        ],
        privacyNotice: 'Your response will be shared. This reflection will be posted in a shared thread visible to other participants. Please do not include confidential project information, client names, personal data, unreleased material, fees, contracts, or internal decisions.',
        placeholderText: 'I think AI can support architectural work by… However, it should not replace… To use it responsibly, we should…',
        confirmationMessage: 'Thank you for contributing. Your reflection has been added to the shared thread. As you read other responses, notice where people see opportunities, risks, and responsibilities differently.',
        sharedReflections: [
          {
            id: 'ref-1',
            authorInitials: 'MK',
            authorName: 'Michael König',
            authorDepartment: 'Senior Architect',
            date: '06/10/2026',
            content: 'AI is incredibly useful for generating early design variations and handling repetitive documentation tasks. However, the critical judgment about spatial quality, cultural context, and client relationships must remain with experienced architects. After 15 years in practice, I see AI as a tool that amplifies our expertise, not replaces it.'
          },
          {
            id: 'ref-2',
            authorInitials: 'SL',
            authorName: 'Sophie Laurent',
            authorDepartment: 'Legal Counsel',
            date: '06/09/2026',
            content: 'From a legal perspective, the liability implications of AI use are still evolving. I advise caution with anything touching contracts, client communication, or intellectual property. Our professional responsibility doesn\'t transfer to the AI - if something goes wrong, the firm and individuals remain accountable.'
          },
          {
            id: 'ref-3',
            authorInitials: 'JH',
            authorName: 'Jonas Huber',
            authorDepartment: 'Intern',
            date: '06/08/2026',
            content: 'As someone just starting my career, I worry about becoming dependent on AI before building foundational skills. I want to learn how to think through design problems myself, not just prompt an AI for answers. But AI is helpful for research and understanding precedents faster.'
          },
          {
            id: 'ref-4',
            authorInitials: 'AR',
            authorName: 'Anna Richter',
            authorDepartment: 'Architect',
            date: '06/07/2026',
            content: 'AI helps me explore design options and material combinations much faster than before. But I always present these as starting points for discussion with clients and senior team members, never as final recommendations. The human conversation about preferences and meaning cannot be automated.'
          },
          {
            id: 'ref-5',
            authorInitials: 'TW',
            authorName: 'Thomas Weber',
            authorDepartment: 'IT Services Manager',
            date: '06/05/2026',
            content: 'From an IT perspective, security is paramount. We must ensure that confidential project data never enters public AI tools. I also see opportunities to integrate approved AI tools into our workflows more seamlessly, but only with proper data governance and user training in place.'
          }
        ]
      },
      keyTakeaways: [
        'Reflect on how AI can genuinely support your architectural work',
        'Consider where human judgment must remain central',
        'Learn from colleagues\' diverse perspectives on AI use',
        'Form your own position on responsible AI in practice'
      ]
    }
  }
];
