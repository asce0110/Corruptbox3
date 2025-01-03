'use client'

const faqData = [
  {
    question: "What is Sprunki Corruptbox 3 and how does it work?",
    answer: "Sprunki Corruptbox 3 is an innovative online music creation platform that combines gaming elements with professional music production tools. It features an intuitive drag-and-drop interface where you can mix beats, create melodies, and produce complete tracks. The game includes multiple sound libraries, real-time effects processing, and various music styles to explore."
  },
  {
    question: "What are the key features of Sprunki Corruptbox 3?",
    answer: "Sprunki Corruptbox 3 offers numerous features including: a comprehensive sound library with high-quality samples, real-time mixing and effects processing, customizable beat patterns, multiple music genres and styles, cloud save functionality, community sharing options, and an intuitive user interface designed for both beginners and experienced musicians."
  },
  {
    question: "Is Sprunki Corruptbox 3 suitable for beginners?",
    answer: "Absolutely! Sprunki Corruptbox 3 is designed to be accessible for users of all skill levels. Beginners can easily start creating music using the intuitive drag-and-drop interface and pre-made sound patterns. The game includes helpful tutorials and guides to help you understand music creation basics. As you progress, you can explore more advanced features and techniques."
  },
  {
    question: "How do I save and share my music creations?",
    answer: "Sprunki Corruptbox 3 provides multiple options for saving and sharing your music. Your creations are automatically saved to your account in the cloud, allowing you to access them from any device. You can share your tracks directly with the Sprunki community, export them in various formats, or share them on social media platforms. The platform also supports collaborative features for making music with other users."
  },
  {
    question: "What makes Sprunki Corruptbox 3 different from other music games?",
    answer: "Sprunki Corruptbox 3 stands out with its unique combination of gaming elements and professional music production tools. Unlike traditional music games, it offers real creative freedom while maintaining an engaging, game-like experience. The platform features high-quality sound libraries, advanced mixing capabilities, and a vibrant community of music creators."
  },
  {
    question: "Can I use Sprunki Corruptbox 3 on mobile devices?",
    answer: "Yes, Sprunki Corruptbox 3 is fully optimized for mobile devices. The responsive design adapts to different screen sizes, and the touch interface works seamlessly on smartphones and tablets. You can create, edit, and share music on any device with a web browser, making it perfect for music creation on the go."
  },
  {
    question: "Are there any system requirements for running Sprunki Corruptbox 3?",
    answer: "Sprunki Corruptbox 3 runs entirely in your web browser, requiring no downloads or installations. For the best experience, we recommend using an updated version of Chrome, Firefox, Safari, or Edge. A stable internet connection is needed for saving projects and accessing the sound library. The game is optimized to run smoothly on most modern devices."
  },
  {
    question: "How often is Sprunki Corruptbox 3 updated with new content?",
    answer: "We regularly update Sprunki Corruptbox 3 with new features, sounds, and improvements. Our team actively listens to community feedback and releases updates that include new sound packs, music styles, creation tools, and performance enhancements. Users can expect fresh content and exciting features added regularly to keep the music creation experience engaging."
  },
  {
    question: "Can I collaborate with other users in Sprunki Corruptbox 3?",
    answer: "Yes, collaboration is a key feature in Sprunki Corruptbox 3. You can connect with other creators, share projects, remix tracks, and work together on music productions. The platform includes features for real-time collaboration, project sharing, and community feedback, making it easy to create music together with users worldwide."
  },
  {
    question: "What kind of support is available for Sprunki Corruptbox 3 users?",
    answer: "We provide comprehensive support for all Sprunki Corruptbox 3 users. This includes detailed tutorials, user guides, community forums, and direct support channels. Our active community members also share tips, tricks, and creative ideas. Whether you're facing technical issues or seeking creative advice, help is readily available."
  }
]

export function FAQ() {
  return (
    <section className="bg-black/50 rounded-xl overflow-hidden" aria-labelledby="faq-title">
      <div className="p-6 border-b border-[#2EE59D]/10">
        <h2 id="faq-title" className="text-2xl font-semibold text-[#2EE59D]">Frequently Asked Questions About Sprunki Corruptbox 3</h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <article key={index} className="border-b border-[#2EE59D]/10 pb-8 last:border-0">
              <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
} 