export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Nikah Sunnah" | "Choosing Partner" | "Mahr & Rights" | "Family & Rights" | "Pre-Marriage" | "Post-Nikah";
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_CATEGORIES = [
  "All",
  "Nikah Sunnah",
  "Choosing Partner",
  "Mahr & Rights",
  "Family & Rights",
  "Pre-Marriage",
  "Post-Nikah",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-sunnah-of-nikah-spiritual-practical-foundations",
    title: "Understanding the Sunnah of Nikah: Spiritual & Practical Foundations",
    excerpt: "Discover the profound wisdom behind Nikah in Islam. Learn how aligning your marriage with the Sunnah brings barakah, peace, and lifelong harmony.",
    category: "Nikah Sunnah",
    publishedAt: "August 12, 2024",
    readTime: "6 min read",
    featured: true,
    author: {
      name: "Ustadh Imran Farooqui",
      role: "Islamic Family Counselor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    tags: ["Nikah", "Sunnah", "Barakah", "Islamic Advice"],
    content: `
      <h2>The Sacred Covenant of Nikah</h2>
      <p>Nikah is described in the Holy Qur'an as a <em>Mithaqan Ghalizha</em>—a solemn, sacred covenant. It is not merely a social contract, but a profound act of worship (Ibadah) that completes half of a Muslim's faith.</p>
      
      <p>The Prophet Muhammad (peace and blessings be upon him) said: <em>"Marriage is part of my Sunnah, and whoever does not follow my Sunnah has nothing to do with me."</em> (Sunan Ibn Majah). When entered with pure intentions and adherence to Islamic principles, marriage becomes a continuous source of reward and spiritual elevation for both spouses.</p>

      <h3>1. Simplicity & Barakah in Nikah</h3>
      <p>One of the core teachings of the Prophet (ﷺ) regarding Nikah is simplicity. Today's cultural expectations often add immense financial and emotional burdens on families. However, Islamic teachings remind us that the Nikah with the most barakah (blessings) is the one that is simplest in burden.</p>
      <blockquote>"The most blessed marriage is the one with the least burden." — Prophet Muhammad (ﷺ)</blockquote>

      <h3>2. Essential Pillars of an Islamic Nikah</h3>
      <ul>
        <li><strong>Mutual Consent (Ijab & Qabul):</strong> Clear offer and acceptance by both the bride and groom with full free will.</li>
        <li><strong>The Wali (Guardian):</strong> Protection and involved guidance of the bride's family to safeguard her honor and rights.</li>
        <li><strong>Witnesses (Shuhood):</strong> At least two upright Muslim adult male witnesses to ensure transparency and public announcement.</li>
        <li><strong>Mahr (Bridal Gift):</strong> An obligatory gift given directly to the bride as a token of respect and commitment.</li>
      </ul>

      <h3>3. Building a Home Founded on Mawaddah & Rahmah</h3>
      <p>In Surah Ar-Rum (30:21), Allah SWT states that He created spouses so that you may find tranquility (Sakinah) in them, and He placed between you affection (Mawaddah) and mercy (Rahmah). True success in marriage relies on nurturing these three divine ingredients daily through patience, forgiveness, and mutual encouragement in Deen.</p>
    `,
  },
  {
    id: "2",
    slug: "choosing-the-right-life-partner-islamic-guidelines",
    title: "Choosing the Right Life Partner: Essential Qualities & Red Flags",
    excerpt: "Navigating spouse selection with clarity. Learn what criteria the Prophet (ﷺ) prioritized and how to evaluate compatibility with wisdom and modesty.",
    category: "Choosing Partner",
    publishedAt: "August 05, 2024",
    readTime: "5 min read",
    featured: false,
    author: {
      name: "Dr. Aishah Siddiqui",
      role: "Relationship & Deen Advisor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    tags: ["Matchmaking", "Spouse Selection", "Character", "Deen"],
    content: `
      <h2>The Prophetic Formula for Spouse Selection</h2>
      <p>When searching for a marriage partner, emotional attraction and cultural compatibility are important, but Islam provides a clear compass for long-term marital success.</p>
      
      <p>The Prophet Muhammad (ﷺ) advised: <em>"A woman is married for four things: her wealth, her family status, her beauty and her religion. So you should marry the religious woman; otherwise you will be a loser."</em> (Sahih al-Bukhari). The same principle applies when sisters evaluate potential suitors.</p>

      <h3>Key Qualities to Look For</h3>
      <ul>
        <li><strong>Deen & Character (Akhlaq):</strong> How they treat elders, handle anger, fulfill obligations to Allah, and practice honesty.</li>
        <li><strong>Emotional Maturity:</strong> Ability to communicate calmly, take accountability, and show empathy.</li>
        <li><strong>Alignment in Core Values:</strong> Shared vision regarding family lifestyle, finances, upbringing of children, and spiritual goals.</li>
      </ul>

      <h3>Red Flags to Notice Early</h3>
      <p>Pay attention to how a prospective partner speaks about their family, handles disagreement, or responds when asked direct questions about their habits and expectations. Lack of transparency, disrespect toward elders, and anger issues are significant warnings that should never be ignored.</p>
    `,
  },
  {
    id: "3",
    slug: "mahr-in-islam-meaning-significance-modern-practices",
    title: "Mahr in Islam: Meaning, Significance, and Modern Best Practices",
    excerpt: "Understanding the true purpose of Mahr. Learn about Islamic rulings, common misconceptions, and how to agree on a meaningful gift gracefully.",
    category: "Mahr & Rights",
    publishedAt: "July 28, 2024",
    readTime: "7 min read",
    featured: false,
    author: {
      name: "Mufti Bilal Ahmad",
      role: "Islamic Jurisprudence Scholar",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200",
    tags: ["Mahr", "Islamic Law", "Nikah Rights", "Financial Clarity"],
    content: `
      <h2>What is Mahr?</h2>
      <p>In Islamic law, Mahr is a compulsory financial gift or property given by the groom to the bride upon Nikah. It becomes her exclusive property, which she is free to use or invest as she sees fit, with no obligation to share it with her husband or family.</p>

      <h3>Common Misconceptions About Mahr</h3>
      <ul>
        <li><strong>Myth 1: Mahr is a price for the bride.</strong> False. Mahr is a symbol of honor, respect, and serious commitment from the groom.</li>
        <li><strong>Myth 2: Unreasonably high Mahr is better.</strong> Excessively high demands can create hardship and delay Nikah, contrary to Sunnah recommendations.</li>
        <li><strong>Myth 3: Mahr must only be gold or money.</strong> Mahr can be anything of value agreed upon, including teaching Quran, property, or investments.</li>
      </ul>

      <h3>Practical Advice for Families</h3>
      <p>Discuss Mahr with open communication, realistic expectations, and mutual respect. The goal is to honor the bride while ensuring the groom can fulfill his commitment without falling into debt.</p>
    `,
  },
  {
    id: "4",
    slug: "role-of-wali-and-family-involvement-in-blessed-nikah",
    title: "The Role of Wali & Family Involvement in a Blessed Nikah",
    excerpt: "Why family support matters in Islamic matrimony. How the Wali protects rights, offers wisdom, and ensures transparent, respectful Nikah proceedings.",
    category: "Family & Rights",
    publishedAt: "July 18, 2024",
    readTime: "5 min read",
    featured: false,
    author: {
      name: "Ustadh Imran Farooqui",
      role: "Islamic Family Counselor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    tags: ["Wali", "Family Values", "Nikah Ethics", "Respect"],
    content: `
      <h2>The Wisdom Behind the Wali</h2>
      <p>In Islamic tradition, the Wali (guardian) plays a protective and supportive role in the Nikah process. Rather than acting as a barrier, a righteous Wali acts as a shield, conducting background checks, asking important questions, and safeguarding the bride's interests.</p>

      <h3>Balancing Respect & Individual Consent</h3>
      <p>While the Wali's presence and consent are essential in Sunnah, Islam strictly forbids forced marriages. The bride's explicit, unforced consent is mandatory for any Nikah to be valid in Sharia.</p>

      <h3>Tips for Smooth Family Alignment</h3>
      <ul>
        <li>Involve parents and guardians early in conversations.</li>
        <li>Maintain polite, respectful dialogue even when opinions differ.</li>
        <li>Focus on shared spiritual goals and long-term marital success.</li>
      </ul>
    `,
  },
  {
    id: "5",
    slug: "pre-nikah-checklist-essential-conversations-for-muslim-couples",
    title: "Pre-Nikah Checklist: Essential Conversations Every Couple Should Have",
    excerpt: "Important questions regarding finances, family dynamics, lifestyle, and spiritual goals to discuss in a respectful, chaperoned environment before Nikah.",
    category: "Pre-Marriage",
    publishedAt: "July 10, 2024",
    readTime: "8 min read",
    featured: false,
    author: {
      name: "Dr. Aishah Siddiqui",
      role: "Relationship & Deen Advisor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1200",
    tags: ["Pre-Marriage", "Communication", "Compatibility", "Checklist"],
    content: `
      <h2>Why Pre-Nikah Dialogue Matters</h2>
      <p>Entering Nikah with clear mutual understanding prevents future misunderstandings. Having structured, chaperoned conversations before finalizing your commitment builds trust and confidence.</p>

      <h3>Top Topics to Cover Before Nikah</h3>
      <ol>
        <li><strong>Spiritual Habits:</strong> Daily prayers, Islamic education goals, Quran recitation habits.</li>
        <li><strong>Financial Expectations:</strong> Household expenses, savings goals, financial obligations to extended family.</li>
        <li><strong>Living Arrangement:</strong> Living independently vs. with extended family after Nikah.</li>
        <li><strong>Career & Studies:</strong> Short and long-term personal and professional ambitions.</li>
        <li><strong>Conflict Resolution Style:</strong> How each person handles stress, disagreements, and seeking advice.</li>
      </ol>
    `,
  },
  {
    id: "6",
    slug: "building-harmony-after-nikah-rights-kindness-ethics",
    title: "Building Harmony After Nikah: Rights, Kindness & Islamic Marriage Ethics",
    excerpt: "Nurturing love and compassion in everyday life. Timeless Islamic advice on communication, patience, appreciation, and fulfilling mutual rights with joy.",
    category: "Post-Nikah",
    publishedAt: "June 30, 2024",
    readTime: "6 min read",
    featured: false,
    author: {
      name: "Mufti Bilal Ahmad",
      role: "Islamic Jurisprudence Scholar",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    tags: ["Post-Nikah", "Harmony", "Love & Kindness", "Spousal Rights"],
    content: `
      <h2>The Daily Work of a Blessed Marriage</h2>
      <p>Nikah is the beginning of a lifelong journey of growth. A successful Islamic marriage requires active effort, gentleness (Rifq), and constant gratitude for one another.</p>

      <h3>Golden Rules for Daily Marital Harmony</h3>
      <ul>
        <li><strong>Express Gratitude Frequently:</strong> The Prophet (ﷺ) encouraged acknowledging the good actions of your spouse daily.</li>
        <li><strong>Never Sleep Over Unresolved Anger:</strong> Address misunderstandings gently before taking rest.</li>
        <li><strong>Pray Together:</strong> Praying Tahajjud or congregational prayers at home strengthens the spiritual bond between husband and wife.</li>
      </ul>
    `,
  },
];
