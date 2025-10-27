import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <div className="relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-slate-200/20 blur-3xl dark:bg-slate-800/20" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-100/20 blur-3xl dark:bg-amber-900/10" />
      </div>

      <HeroAvatar
        title={
          <>
            <span className="text-slate-800 dark:text-slate-100">
              Hi there, I'm{' '}
            </span>
            <GradientText>Mary</GradientText>
            <span className="inline-block animate-wave origin-[70%_70%]"> 👋</span>
          </>
        }
        description={
          <>
            <span className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I'm a full-stack{' '}
              <a
                className="font-medium text-slate-900 underline decoration-amber-500/30 decoration-2 underline-offset-4 transition-all hover:decoration-amber-500 dark:text-slate-100 dark:decoration-amber-400/30 dark:hover:decoration-amber-400"
                href="/"
              >
                blockchain developer
              </a>{' '}
              specializing in Web3 technologies and smart contract development.
              Proficient in Solidity, Rust, and Motoko for blockchain systems,
              along with TypeScript and{' '}
              <a
                className="font-medium text-slate-900 underline decoration-amber-500/30 decoration-2 underline-offset-4 transition-all hover:decoration-amber-500 dark:text-slate-100 dark:decoration-amber-400/30 dark:hover:decoration-amber-400"
                href="/"
              >
                React
              </a>{' '}
              for frontend development. I create technical documentation and am
              currently exploring Zero-Knowledge Proofs to expand my expertise in
              blockchain scaling solutions.
            </span>
          </>
        }
        avatar={
          // Hero.tsx - Update just the avatar section
          <div className="group relative">
            {/* Glowing background */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-orange-600/30 opacity-75 blur-3xl transition-all group-hover:opacity-100" />

            {/* Glassmorphism frame */}
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl">
              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent" />

              {/* Glass border */}
              <div className="absolute inset-[1px] rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl" />

              <img
                className="relative h-80 w-auto transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/zee.png"
                alt="Mary - Blockchain Developer"
                loading="lazy"
              />
            </div>
          </div>
        }
        socialButtons={
          <div className="flex gap-4">
            <a
              href="https://x.com/gathoni_zarah"
              className="group relative"
              aria-label="Twitter Profile"
            >
              <div className="absolute -inset-2 rounded-full bg-slate-200/0 transition-all group-hover:bg-slate-200/50 dark:group-hover:bg-slate-700/50" />
              <HeroSocial
                src="/assets/images/twitter-icon.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mary-wangui--/"
              className="group relative"
              aria-label="LinkedIn Profile"
            >
              <div className="absolute -inset-2 rounded-full bg-slate-200/0 transition-all group-hover:bg-slate-200/50 dark:group-hover:bg-slate-700/50" />
              <HeroSocial
                src="/assets/images/linkedin-icon.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Zeegaths"
              className="group relative"
              aria-label="GitHub Profile"
            >
              <div className="absolute -inset-2 rounded-full bg-slate-200/0 transition-all group-hover:bg-slate-200/50 dark:group-hover:bg-slate-700/50" />
              <HeroSocial
                src="/assets/images/gittt.png"
                alt="GitHub"
              />
            </a>
          </div>
        }
      />
    </div>
  </Section>
);

export { Hero };