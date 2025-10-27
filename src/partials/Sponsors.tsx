// Sponsors.tsx
import { GradientText, Section } from 'astro-boilerplate-components';

import cairoLogo from '../../public/assets/images/cairo.svg';
import jsLogo from '../../public/assets/images/js.png';
import motokoLogo from '../../public/assets/images/moto.png';
import rustLogo from '../../public/assets/images/rust.png';
import solidityLogo from '../../public/assets/images/solidity.png';
import tssLogo from '../../public/assets/images/tss.png';

const techStack = [
  { name: 'Rust', logo: rustLogo, description: 'Systems programming' },
  { name: 'Cairo', logo: cairoLogo, description: 'StarkNet development' },
  { name: 'JavaScript', logo: jsLogo, description: 'Web development' },
  { name: 'TypeScript', logo: tssLogo, description: 'Type-safe development' },
  { name: 'Motoko', logo: motokoLogo, description: 'Internet Computer' },
  { name: 'Solidity', logo: solidityLogo, description: 'Smart contracts' },
];

const Sponsors = () => (
  <Section
    title={
      <>
        Tech <GradientText>Stack</GradientText>
      </>
    }
  >
    <div className="relative">
      {/* Glowing orbs for depth */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          >
            {/* Glassmorphism card with orange gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/50 via-amber-500/30 to-orange-600/50 opacity-0 blur-xl transition-opacity group-hover:opacity-60" />

            {/* Glass border */}
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8">
              {/* Logo container with glass effect */}
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-500/50">
                <img
                  src={tech.logo.src}
                  alt={tech.name}
                  className="h-full w-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Tech name */}
              <h3 className="mb-2 text-center text-xl font-bold text-white drop-shadow-lg transition-all duration-300 group-hover:text-orange-400">
                {tech.name}
              </h3>

              {/* Description */}
              <p className="text-center text-sm text-gray-300 drop-shadow">
                {tech.description}
              </p>

              {/* Decorative shine effect */}
              <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 opacity-0 shadow-lg shadow-orange-500/50 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export { Sponsors };
