import { Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-black/80 to-black/90 p-12 shadow-2xl">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Shoot me a <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">DM</span>
        </h2>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          Want to discuss a project or just connect? Feel free to reach out via email or my socials.
        </p>
        
        
          <a href="mailto:zarahgathon76@gmail.com"
          className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-105"
        >
          Send me an Email
        </a>
        
        <p className="mt-6 text-sm text-gray-400">
          zarahgathon76@gmail.com
        </p>
        
        <div className="mt-8 flex justify-center gap-6">
          <a 
            href="https://x.com/gathoni_zarah" 
            className="text-white transition-colors hover:text-orange-400"
          >
            X
          </a>
          <a 
            href="https://www.linkedin.com/in/mary-wangui--/" 
            className="text-white transition-colors hover:text-orange-400"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Zeegaths" 
            className="text-white transition-colors hover:text-orange-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { CTA };