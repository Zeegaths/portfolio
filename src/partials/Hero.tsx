import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mary</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a full-stack{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            blockchain developer
          </a>{' '}
          specializing in Web3 technologies and smart contract development. Proficient in Solidity, Rust, and Motoko for blockchain systems, along with TypeScript and{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            React
          </a>{' '}
          or frontend development. I create technical documentation and am currently exploring Zero-Knowledge Proofs to expand my expertise in blockchain scaling solutions.
        </>
      }
      avatar={
        <img
          className="h-80 w-auto"
          src="/assets/images/zee.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://x.com/gathoni_zarah">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>         
          <a href="https://www.linkedin.com/in/mary-wangui--/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
