// Footer.tsx
import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="border-t border-slate-200 pt-8 dark:border-slate-700">
      <FooterCopyright site_name={AppConfig.site_name} />
      
      <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center text-sm text-slate-600 dark:text-slate-400">
        <p className="flex items-center gap-2">
          Built with 
          <span className="text-orange-500 dark:text-orange-400">♥</span> 
          using Next.js, React & Tailwind CSS
        </p>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/Zeegaths" 
            className="transition-colors hover:text-orange-600 dark:hover:text-orange-400"
          >
            GitHub
          </a>
          <a 
            href="https://x.com/gathoni_zarah" 
            className="transition-colors hover:text-orange-600 dark:hover:text-orange-400"
          >
            Twitter
          </a>
          <a 
            href="https://www.linkedin.com/in/mary-wangui--/" 
            className="transition-colors hover:text-orange-600 dark:hover:text-orange-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { Footer };