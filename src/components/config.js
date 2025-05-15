const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1432", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter love Code", // Title displayed on the passcode entry page
  successMessage: "Love Success!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting To Our love...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect love Code, hint: I Love You 2!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf Piyush is so cute?", // Example trending search query
    "Why does Sandhya love him more?", // Another example query
    `Why does piyush call sandhya shree jii`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Our Love Story" ;)', // Helpful tip for users // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2023-12-14", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Meri banogi Kya", // Title of the song
      artist: "Rito Riba,Rajat nagpal", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Mahiye jinna sohna",
      artist: "Darshan rawal",
      left: "40%",
      top: "15%",
    },
    {
      title: "Tumhare hi rahenge hum",
      artist: "Varun jain,Shilpa rao",
      left: "15%",
      top: "40%",
    },
    {
      title: "Ishq di Baajiyan",
      artist: "Diljit Dosanjh",
      left: "30%",
      top: "75%",
    },
    {
      title: "Fakira",
      artist: "Sanam puri",
      left: "5%",
      top: "65%",
    },
    {
      title: "Chand si mehbooba ho- meri",
      artist: "Mukesh",
      left: "25%",
      top: "90%",
    },
    {
      title: "Ranjheya ve",
      artist: "Zain zohaib",
      left: "35%",
      top: "50%",
    },
    {
      title: "Mahila Mittar",
      artist: "Masoom Sharma",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Best Pics!!", // Title for the messages recap page
    messageGallery: [
      { title: "February 13, 2025", description: "#love ❤️" }, // Message entry
      { title: "February 19, 2025", description: " #moment" },
      { title: "February 25, 2025", description: "A beautiful day to remember." },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Goal Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "March 10, 2025", description: "First Meeting 🎉" }, // Picture entry
      { title: "March 20, 2025", description: "First Night Walk 💕" },
      { title: "March 30, 2025", description: "Vrindavan trip memories 🏖️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, My pyari shree jii I love you so much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Our Love Story", // Example of a correct search query
    "Our Love Story", // Another example of a correct search query
  ],
};

export default config;
