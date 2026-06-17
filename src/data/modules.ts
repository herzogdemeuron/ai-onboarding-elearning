import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 1,
    title: 'AI Basics',
    shortTitle: 'AI Basics',
    duration: '2 min',
    content: {
      heading: 'AI Basics: What AI is and how we use it',
      description: 'This first module introduces the fundamentals of AI: what AI models are, how predictive, generative, and agentic AI differ, and how tools such as large language models and image-generation systems are currently used at H&dM.',
      videoTutorial: {
        title: 'Introduction',
        duration: '2 min',
        videoUrl: '/videos/Module1_video.mp4',
        captionsUrl: '/videos/Module1_video.vtt',
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
          question: 'What is generative AI mainly used for?',
          options: [
            'Only storing project files',
            'Creating new content such as text, images, code, video, diagrams, or sound',
            'Replacing all human decisions',
            'Checking internet connection speed'
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
          question: 'Which of the following is an example of a common AI use at H&dM described in the video?',
          options: [
            'Automatically approving construction documents',
            'Drafting, summarizing, translating, or rephrasing text',
            'Replacing design reviews',
            'Guaranteeing regulatory compliance'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Responsible AI',
    shortTitle: 'Responsible AI',
    duration: '2 min',
    content: {
      heading: 'Responsible AI: Risks, Policy, and Accountability',
      description: 'Now that you know what AI can do — and where it falls short — what are the rules for using it? This module explains the key risks of using AI, including bias, hallucination, confidentiality, legal obligations, and environmental impact, and introduces the H&dM policy framework for responsible AI use.',
      videoTutorial: {
        title: 'Responsible AI',
        duration: '2 min',
        videoUrl: '/videos/Module2_video.mp4',
        captionsUrl: '/videos/Module2_video.vtt',
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
          subtitle: 'AI can produce inaccurate, incomplete, biased, or hallucinated results, so human review is essential before anything is used. AI can assist, but you remain responsible for the outcome.',
          description: 'How this applies in daily work:',
          details: [
            'Treat AI output as a draft, not as a final answer.',
            'Review, correct, and adapt AI-generated content before sharing or using it.',
            'Verify factual, technical, and regulatory information independently.',
            'Use your professional judgment to decide what is appropriate for the project.'
          ]
        },
        {
          id: 'p2',
          title: 'Design Quality',
          subtitle: 'AI-generated work must align with H&dM\'s design values, quality expectations, and the specific intent of each project.',
          description: 'How this applies in daily work:',
          details: [
            'Use AI for early exploration, variations, mood boards, diagrams, or visual communication.',
            'Do not accept generic, clichéd, or misaligned AI results.',
            'Refine AI outputs so they meet project-specific design standards.',
            'Use AI as a starting point for thinking, not as a substitute for design authorship.'
          ]
        },
        {
          id: 'p3',
          title: 'Authorship & IP',
          subtitle: 'AI raises questions around intellectual property and authorship; we protect H&dM\'s work and respect the IP rights of others.',
          description: 'How this applies in daily work:',
          details: [
            'Do not claim purely human authorship for work that is substantially AI-generated.',
            'Avoid using AI to imitate the protected work, style, or authorship of others.',
            'We do not allow the use of AI models that train on H&dM data, you can find a list of approved tools on ai.herzogdemeuron.com.'
          ]
        },
        {
          id: 'p4',
          title: 'Efficient Use',
          subtitle: 'AI consumes computing resources, energy, and water. Using it efficiently reduces cost and environmental impact. Use AI purposefully, skillfully, and with awareness of its impact.',
          description: 'How this applies in daily work:',
          details: [
            'Prompt with intent: think before generating, define a strategy for your task, and provide the AI model with the right context.',
            'Choose the right AI tool for the right purpose; for example, do not use the highest-quality image generation model for early drafts.',
            'Avoid unnecessary repetitions or large batches of outputs.',
            'Save and share helpful prompts and workflows so teams can learn from each other.'
          ]
        },
        {
          id: 'p5',
          title: 'Security',
          subtitle: 'Non-approved AI tools may create legal, contractual, data protection, information security, and financial risks for H&dM.',
          description: 'How this applies in daily work:',
          details: [
            'Use only H&dM-approved AI tools for work.',
            'Do not upload sensitive personal data about clients or colleagues.',
            'As a Project Manager or Project Director, be aware of your project\'s contractual obligations regarding AI use.'
          ]
        },
        {
          id: 'p6',
          title: 'Transparency',
          subtitle: 'We must not misrepresent AI-generated or AI-enhanced work as purely human, especially in formal client communication and publications.',
          description: 'How this applies in daily work:',
          details: [
            'Document AI assistance for design content.',
            'Clearly indicate AI-enhanced images when they are published or client-facing.',
            'Use the appropriate disclaimer for AI-enhanced images when required. The disclaimer can be found on the portal.',
            'Be open with colleagues about how AI contributed to the work.'
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
        totalSteps: 7,
        estimatedTime: '2 min',
        steps: [
          {
            id: 'step1',
            stepNumber: 1,
            instruction: 'Click AI Hub to access H&dM AI Index Page',
            screenshot: '/images/portal-screenshot.webp',
            clickArea: { x: 43, y: 72, width: 14, height: 8 }
          },
          {
            id: 'step2',
            stepNumber: 2,
            instruction: 'AI Index page offers a search bar and a quick filter to see the available AI tools',
            screenshot: '/images/ai-index-searchbar.webp',
            isOverview: true,
            overviewAreas: [
              {
                label: 'AI Search Bar',
                description: 'Write your AI needs here to get suggestions',
                rects: [{ x: 2, y: 18, width: 40, height: 5 }]
              },
              {
                label: 'Quick Filter',
                description: 'Quick Filter to see the available AI tools',
                rects: [{ x: 2, y: 24, width: 40, height: 5 }]
              }
            ]
          },
          {
            id: 'step3',
            stepNumber: 3,
            instruction: '4 Categories show various tools and resources available at H&dM',
            screenshot: '/images/ai-index-searchbar.webp',
            isOverview: true,
            overviewAreas: [
              {
                label: 'Available AI Tools',
                description: 'Direct links to the available AI tools',
                rects: [{ x: 2, y: 30, width: 79.5, height: 24 }]
              },
              {
                label: 'On Request',
                description: 'Tools that are available on request',
                rects: [
                  { x: 84, y: 30, width: 14, height: 24 },
                  { x: 2, y: 55, width: 30, height: 24 }
                ]
              },
              {
                label: 'Knowledge',
                description: 'Wiki page for more information',
                rects: [{ x: 35, y: 55, width: 30, height: 24 }]
              },
              {
                label: 'Suggestion',
                description: 'Write to propose a new tool',
                rects: [{ x: 67.5, y: 55, width: 14, height: 24 }]
              }
            ]
          },
          {
            id: 'step4',
            stepNumber: 4,
            instruction: 'Click on the search bar to ask a question',
            screenshot: '/images/ai-index-searchbar.webp',
            clickArea: { x: 2, y: 17, width: 40, height: 6 },
            typingSimulation: {
              text: 'What AI tools are available at H&dM?',
              inputPosition: { x: 5, y: 17, width: 50, height: 8 },
              screenshotDuringTyping: '/images/ai-index-typing.webp'
            }
          },
          {
            id: 'step5',
            stepNumber: 5,
            instruction: 'Click the + button to see more information about the models available on H&dM Chat',
            screenshot: '/images/ai-index-searchbar.webp',
            clickArea: { x: 14.5, y: 29.5, width: 2.5, height: 4 }
          },
          {
            id: 'step6',
            stepNumber: 6,
            instruction: 'Browse and filter the available AI models in the side panel',
            screenshot: '/images/ai-index-chat-models.webp',
            clickArea: { x: 79.8, y: 6, width: 6.2, height: 4 }
          },
          {
            id: 'step7',
            stepNumber: 7,
            instruction: 'Click on the close button to go back to the index page',
            screenshot: '/images/ai-index-chat-models-filter.webp',
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
      description: 'Follow along the click demo to learn how to use H&dM Chat. As an example, you will learn how to use the Skills feature that are reusable AI instructions to automate repetitive tasks .',
      sections: [],
      clickDemo: {
        title: 'H&dM Chat Tutorial',
        totalSteps: 24,
        estimatedTime: '5 min',
        steps: [
          {
            id: 'bp-step1',
            stepNumber: 1,
            instruction: 'Click to open H&dM Chat',
            screenshot: '/images/ai-index-searchbar.webp',
            clickArea: { x: 2, y: 30, width: 15, height: 22 }
          },
          {
            id: 'bp-step2',
            stepNumber: 2,
            instruction: 'Click to open sidebar',
            screenshot: '/images/hdmchat-1.webp',
            clickArea: { x: 0.5, y: 2, width: 2.5, height: 6 }
          },
          {
            id: 'bp-step3',
            stepNumber: 3,
            instruction: 'Click the dropdown menu to see the available models',
            screenshot: '/images/hdmchat-2.webp',
            clickArea: { x: 18, y: 1, width: 7, height: 8 }
          },
          {
            id: 'bp-step4',
            stepNumber: 4,
            instruction: 'Click to choose a model',
            screenshot: '/images/hdmchat-models-dropdown.webp',
            clickArea: { x: 19, y: 15, width: 32, height: 6 }
          },
          {
            id: 'bp-step5',
            stepNumber: 5,
            instruction: 'Click the + button to attach files, webpages, notes, knowledge, or previous chats to your message',
            screenshot: '/images/hdmchat-2.webp',
            clickArea: { x: 35, y: 46, width: 2, height: 5 }
          },
          {
            id: 'bp-step6',
            stepNumber: 6,
            instruction: 'Click the Integrations icon to open additional chat tools or web and image search toggle.',
            screenshot: '/images/hdmchat-plus.webp',
            clickArea: { x: 37.5, y: 46, width: 2, height: 5 }
          },
          {
            id: 'bp-step7',
            stepNumber: 7,
            instruction: 'Click on tools to see the list of availalbe tools ',
            screenshot: '/images/hdmchat-tools.webp',
            clickArea: { x: 38, y: 52, width: 17, height: 6 }
          },
          {
            id: 'bp-step8',
            stepNumber: 8,
            instruction: 'Let\'s try to make a skill to automate summarizing meeting notes. Click on the chat bar to type.',
            screenshot: '/images/hdmchat-2.webp',
            clickArea: { x: 35, y: 40, width: 15, height: 6 }
          },
          {
            id: 'bp-step9',
            stepNumber: 9,
            instruction: 'Describe the skill you want to create and click send.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill1.webp',
            clickArea: { x: 79, y: 49, width: 4, height: 8 }
          },
          {
            id: 'bp-step10',
            stepNumber: 10,
            instruction: 'Copy the skill instruction to the clipboard.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill2.webp',
            clickArea: { x: 86, y: 27, width: 4, height: 6.5 }
          },
          {
            id: 'bp-step11',
            stepNumber: 11,
            instruction: 'With the skill instruction copied to clipboard, go to workspace.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill2.webp',
            clickArea: { x: 0.5, y: 21, width: 10, height: 8 }
          },
          {
            id: 'bp-step12',
            stepNumber: 12,
            instruction: 'Click Skills.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill3.webp',
            clickArea: { x: 32, y: 1, width: 5, height: 6 }
          },
          {
            id: 'bp-step13',
            stepNumber: 13,
            instruction: 'Here we can create a new skill by clicking on the + button.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill4.webp',
            clickArea: { x: 92, y: 5, width: 7, height: 8 }
          },
          {
            id: 'bp-step14',
            stepNumber: 14,
            instruction: 'Here you can paste the skill instruction you copied from the clipboard.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill5.webp',
            clickArea: { x: 18, y: 16, width: 20, height: 8 }
          },
          {
            id: 'bp-step15',
            stepNumber: 15,
            instruction: 'Save and create the skill.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill6.webp',
            clickArea: { x: 90, y: 92, width: 10, height: 8 }
          },
          {
            id: 'bp-step16',
            stepNumber: 16,
            instruction: 'Once the skill is created you can use it in your chat. Create a new chat.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill8.webp',
            clickArea: { x: 0.5, y:6, width: 15, height:8 }
          },
          {
            id: 'bp-step17',
            stepNumber: 17,
            instruction: 'In the chat bar, type $ sign to see the list of available skills.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill9.webp',
            clickArea: { x: 35, y: 40, width: 20, height: 6 }
          },
          {
            id: 'bp-step18',
            stepNumber: 18,
            instruction: 'Find the skill that you just created and click to select it.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill10.webp',
            clickArea: {  x: 35, y: 35, width: 20, height: 6 }
          },
          {
            id: 'bp-step19',
            stepNumber: 19,
            instruction: 'In the chat bar, copy paste your rough meeting notes to test the skill.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill11.webp',
            clickArea: { x: 55, y: 40, width: 20, height: 6 }
          },
          {
            id: 'bp-step20',
            stepNumber: 20,
            instruction: 'Send the message to apply the skill.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill12.webp',
            clickArea: { x: 79, y: 86, width: 4, height: 8 }
          },
          {
            id: 'bp-step21',
            stepNumber: 21,
            instruction: 'Once completed, you will find the summary in the reply or in notes depending on your instruction.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill13.webp',
            clickArea: { x: 0.5, y:16, width: 15, height:8 }
          },
          {
            id: 'bp-step22',
            stepNumber: 22,
            instruction: 'Find the new meeting notes summary created from the skill.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill14.webp',
            clickArea: { x: 18, y: 30, width: 30, height: 8 }
          },
          {
            id: 'bp-step23',
            stepNumber: 23,
            instruction: 'You can view your summary here, but also you can save it locally.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill15.webp',
            clickArea: { x: 91.2, y: 0.5, width: 3, height: 8 }
          },
          {
            id: 'bp-step24',
            stepNumber: 24,
            instruction: 'Click on download button.',
            screenshot: '/images/hdmchat-skill/hdmchat-skill16.webp',
            clickArea: { x: 82, y: 8, width: 10, height: 5 }
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
        totalSteps: 30,
        estimatedTime: '4 min',
        steps: [
          {
            id: 'xf-step1',
            stepNumber: 1,
            instruction: 'Go to AI INDEX and click to open XFigura',
            screenshot: '/images/ai-index-searchbar.webp',
            clickArea: { x: 18.5, y: 30, width: 14.5, height: 25 }
          },
          {
            id: 'xf-step2',
            stepNumber: 2,
            instruction: 'Attention! As a first time user, click sign up instead of sign in',
            screenshot: '/images/xfigura-click demo/xfigura1.webp',
            clickArea: { x: 77, y: 63.5, width: 6, height: 10 }
          },
          {
            id: 'xf-step3',
            stepNumber: 3,
            instruction: 'Be sure to see create your account window, and click Microsoft and use your H&dM account',
            screenshot: '/images/xfigura-click demo/xfigura2.webp',
            clickArea: { x: 50, y: 25, width: 12, height: 10 }
          },
          {
            id: 'xf-step4',
            stepNumber: 4,
            instruction: 'Once you are in Xfigura, click on the Boards tab',
            screenshot: '/images/xfigura-click demo/xfigura3.webp',
            clickArea: { x: 36, y: 2, width: 7.5, height: 10 }
          },
          {
            id: 'xf-step5',
            stepNumber: 5,
            instruction: 'Click on Start Blank!',
            screenshot: '/images/xfigura-click demo/xfigura4.webp',
            clickArea: { x: 4.3, y: 15, width: 12.5, height: 28 }
          },
          {
            id: 'xf-step6',
            stepNumber: 6,
            instruction: 'Type in the board name and assign to project.',
            screenshot: '/images/xfigura-click demo/xfigura4-1.webp',
            clickArea: { x: 30, y: 30, width: 40, height: 40 }
          },
          {
            id: 'xf-step7',
            stepNumber: 7,
            instruction: 'Attention! If you don\'t see your project, please write to ai@herzogdemeuron.com.',
            screenshot: '/images/xfigura-click demo/xfigura4-2.webp',
            clickArea: { x: 30, y: 30, width: 40, height: 50 }
          },
          {
            id: 'xf-step8',
            stepNumber: 8,
            instruction: 'Once you have created the board, use the templates button to access H&dM Templates',
            screenshot: '/images/xfigura-click demo/xfigura4-4.webp',
            clickArea: { x: 0.5, y: 56, width: 5, height: 10 }
          },
          {
            id: 'xf-step9',
            stepNumber: 9,
            instruction: 'H&dM Templates will show automatically. Select a template.',
            screenshot: '/images/xfigura-click demo/xfigura4-5.webp',
            clickArea: { x: 20, y: 60, width: 20, height: 20 }
          },
          {
            id: 'xf-step10',
            stepNumber: 10,
            instruction: 'Click Use Now to apply the template.',
            screenshot: '/images/xfigura-click demo/xfigura4-5-1.webp',
            clickArea: {  x: 20, y: 73, width: 10, height: 8 }
          },
          {
            id: 'xf-step11',
            stepNumber: 11,
            instruction: 'Once the template is applied, click on a image to select the group.',
            screenshot: '/images/xfigura-click demo/xfigura4-6.webp',
            clickArea: { x: 23, y: 9, width: 25, height: 62 }
          },
          {
            id: 'xf-step12',
            stepNumber: 12,
            instruction: 'Right click on the group to show the menu options.',
            screenshot: '/images/xfigura-click demo/xfigura4-6-1.webp',
            clickArea: { x: 48, y: 10, width: 3, height: 6 },
            clickType: 'right'
          },
          {
            id: 'xf-step13',
            stepNumber: 13,
            instruction: 'Click Ungroup Items to separate the group into individual items.',
            screenshot: '/images/xfigura-click demo/xfigura4-6-2.webp',
            clickArea: { x: 50, y: 37, width: 12, height: 6 }
          },
          {
            id: 'xf-step14',
            stepNumber: 14,
            instruction: 'Click on the background to release the outline',
            screenshot: '/images/xfigura-click demo/xfigura4-6-3.webp',
            clickArea: { x: 80, y: 50, width: 10, height: 10 }
          },
          {
            id: 'xf-step15',
            stepNumber: 15,
            instruction: 'Click on the Image Uploader',
            screenshot: '/images/xfigura-click demo/xfigura4-6-4.webp',
            clickArea: { x: 22, y: 8, width: 26, height: 65 }
          },
          {
            id: 'xf-step16',
            stepNumber: 16,
            instruction: 'You can change the input image by clicking the upload button',
            screenshot: '/images/xfigura-click demo/xfigura4-6-3-1.webp',
            clickArea: { x: 25.5, y: 69, width: 3, height: 8 }
          },
          {
            id: 'xf-step17',
            stepNumber: 17,
            instruction: 'Click on the Image panel to show the menu below',
            screenshot: '/images/xfigura-click demo/xfigura4-6-4.webp',
            clickArea: { x: 60, y: 7, width: 17, height: 41 }
          },
          {
            id: 'xf-step18',
            stepNumber: 18,
            instruction: 'In the bar menu, you can change the text prompt. Toggle text window by clicking Input button. ',
            screenshot: '/images/xfigura-click demo/xfigura4-7.webp',
            clickArea: { x: 67, y: 48, width: 4, height: 7 }
          },
          {
            id: 'xf-step19',
            stepNumber: 19,
            instruction: 'You can modify the text prompt here.',
            screenshot: '/images/xfigura-click demo/xfigura4-8.webp',
            clickArea: { x: 61, y: 10, width: 15, height: 30 }
          },
          {
            id: 'xf-step20',
            stepNumber: 20,
            instruction: 'You can also adjust the number of images to generate, credit will be counted accordingly.',
            screenshot: '/images/xfigura-click demo/xfigura4-8.webp',
            clickArea: { x: 64.5, y: 48, width: 3, height: 6 }
          },
          {
            id: 'xf-step21',
            stepNumber: 21,
            instruction: 'You can also change the model if needed.',
            screenshot: '/images/xfigura-click demo/xfigura4-9.webp',
            clickArea: { x: 62.5, y: 48, width: 3, height: 6 }
          },
          {
            id: 'xf-step22',
            stepNumber: 22,
            instruction: 'Select the model here. Mind the number of credits shown on the right.',
            screenshot: '/images/xfigura-click demo/xfigura4-10.webp',
            clickArea: { x: 62.5, y: 61, width: 15, height: 6  }
          },
          {
            id: 'xf-step23',
            stepNumber: 23,
            instruction: 'In the settings panel, you can adjust the image ratio and resolution. Number of credits will change accordingly.',
            screenshot: '/images/xfigura-click demo/xfigura4-11.webp',
            clickArea: { x: 78, y: 10, width: 21, height: 42 }
          },
          {
            id: 'xf-step24',
            stepNumber: 24,
            instruction: 'You can also toggle the settings window by clicking the button here.',
            screenshot: '/images/xfigura-click demo/xfigura4-11.webp',
            clickArea: { x: 60.5, y: 48.5, width: 3, height: 6  }
          },
          {
            id: 'xf-step25',
            stepNumber: 25,
            instruction: 'Click the blue icon below to generate the image.',
            screenshot: '/images/xfigura-click demo/xfigura4-12.webp',
            clickArea: { x: 74, y: 48.5, width: 3, height: 6  }
          },
          {
            id: 'xf-step26',
            stepNumber: 26,
            instruction: 'Click on the top left button to open the menu.',
            screenshot: '/images/xfigura-click demo/xfigura4-12.webp',
            clickArea: { x: 0.5, y: 2, width: 4, height: 8 }
          },
          {
            id: 'xf-step27',
            stepNumber: 27,
            instruction: 'Click Boards to go back to the list of boards.',
            screenshot: '/images/xfigura-click demo/xfigura4-13.webp',
            clickArea: { x: 8, y: 9, width: 8, height: 8 }
          },
          {
            id: 'xf-step28',
            stepNumber: 28,
            instruction: 'By default, you will find HdM-Template. Click on HdM-Template.',
            screenshot: '/images/xfigura-click demo/xfigura4 -9.webp',
            clickArea: { x: 16.5, y: 17, width: 14, height: 25 }
          },
          {
            id: 'xf-step29',
            stepNumber: 29,
            instruction: 'Once the teamplate is open, toggle light mode to see better.',
            screenshot: '/images/xfigura-click demo/xfigura7.webp',
            clickArea: { x: 88.5, y: 89, width: 4.5, height: 10 }
          },
          {
            id: 'xf-step30',
            stepNumber: 30,
            instruction: 'Scroll and pan to view various ways to use XFigura!',
            screenshot: '/images/xfigura-click demo/xfigura8.webp',
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
            text: 'Assume an AI answer is correct because it sounds confident.',
            correctCategory: 'risky'
          },
          {
            id: 'card-3',
            text: 'Anonymise or generalise sensitive prompts before using AI.',
            correctCategory: 'good'
          },
          {
            id: 'card-4',
            text: 'Paste confidential project information into a public AI chatbot.',
            correctCategory: 'risky'
          },
          {
            id: 'card-5',
            text: 'Let AI make final professional judgments for you.',
            correctCategory: 'risky'
          },
          {
            id: 'card-6',
            text: 'Check AI outputs against reliable sources before using them.',
            correctCategory: 'good'
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
            authorInitials: 'MA',
            authorName: 'Michael Abajobir',
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
            authorInitials: 'JS',
            authorName: 'June Song',
            authorDepartment: 'Intern',
            date: '06/08/2026',
            content: 'As someone just starting my career, I worry about becoming dependent on AI before building foundational skills. I want to learn how to think through design problems myself, not just prompt an AI for answers. But AI is helpful for research and understanding precedents faster.'
          },
          {
            id: 'ref-4',
            authorInitials: 'RC',
            authorName: 'Ray Chen',
            authorDepartment: 'Architect',
            date: '06/07/2026',
            content: 'AI helps me explore design options and material combinations much faster than before. But I always present these as starting points for discussion with clients and senior team members, never as final recommendations. The human conversation about preferences and meaning cannot be automated.'
          },
          {
            id: 'ref-5',
            authorInitials: 'JM',
            authorName: 'Juan Martinez',
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
