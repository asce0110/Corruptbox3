import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-8 py-6 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} <Link href="/" className="text-[#2EE59D] font-semibold hover:text-[#1cc77f] transition-colors">Corruptbox 3</Link> - Play <Link href="/" className="text-[#2EE59D] font-semibold hover:text-[#1cc77f] transition-colors">Corruptbox 3</Link>, The Ultimate Music Creation Game.
          </div>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-400 hover:text-[#2EE59D] transition-colors"
              title="Corruptbox 3 Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-400 hover:text-[#2EE59D] transition-colors"
              title="Learn About Corruptbox 3"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-400 hover:text-[#2EE59D] transition-colors"
              title="Contact Corruptbox 3 Support"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}