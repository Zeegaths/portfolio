import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Shoot me a <GradientText>DM</GradientText>
        </>
      }
      description="Wanna talk about a project? connect? shoot me a dm on my socials or email"
    />
  </Section>
);

export { CTA };
