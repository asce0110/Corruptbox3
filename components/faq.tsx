'use client'

// FAQ 数据
const faqData = [
  {
    question: "What is Sprunki Corruptbox 3?",
    answer: "Sprunki Corruptbox 3 is an innovative online music creation game that lets you create beats and music through an interactive gaming experience. It combines gaming elements with music production tools."
  },
  {
    question: "How do I play Sprunki Corruptbox 3?",
    answer: "Simply use your mouse to drag and drop musical elements, create beats, and mix sounds in real-time. No music experience or downloads required - it works directly in your web browser."
  },
  {
    question: "Is Sprunki Corruptbox 3 free to play?",
    answer: "Yes, Sprunki Corruptbox 3 is completely free to play online. Just visit the website and start creating music immediately."
  },
  {
    question: "Can I save my music creations in Sprunki Corruptbox 3?",
    answer: "Yes, you can save and share your musical creations with the Sprunki Corruptbox 3 community. Your beats are stored online and can be accessed anytime."
  },
  {
    question: "What makes Sprunki Corruptbox 3 unique?",
    answer: "Sprunki Corruptbox 3 stands out with its game-like interface, professional sound library, real-time mixing capabilities, and active creator community. It makes music creation fun and accessible for everyone."
  }
]

export function FAQ() {
  return (
    <div className="bg-black/50 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-[#2EE59D]/10">
        <h2 className="text-2xl font-semibold text-[#2EE59D]">Frequently Asked Questions</h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-[#2EE59D]/10 pb-6 last:border-0">
              <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
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
    </div>
  )
} 