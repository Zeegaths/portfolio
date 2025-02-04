import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1"
        description="Strimz is a token streaming platform for automated salaries, subscriptions and utility payments. Employers can upload csvs with employee details and set streaming intervals."
        link="https://strimz-85ux.vercel.app/"
        img={{
          src: '/assets/images/strimz.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Solidity</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Project 2"
        description="AntiKorrupt is an AI driven platform, trained on UN anti-corruption materials and gamefied to help students learn about corruption."
        link="https://px7id-byaaa-aaaak-albiq-cai.icp0.io/"
        img={{ src: '/assets/images/antikorrupt.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Svelte</Tags>
            <Tags color={ColorTags.EMERALD}>Motoko</Tags>
            <Tags color={ColorTags.YELLOW}>Tailwinds.css</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="P2P Farmers is a blockchain marketplace connecting farmers to consumers with dual rewards for sustainable practices, winning 3rd place in ICP MEGA-HACKATHON."
        link="https://pm4fe-4iaaa-aaaak-ao7bq-cai.icp0.io/"
        img={{ src: '/assets/images/p2pfarmers.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.INDIGO}>Motoko</Tags>
            <Tags color={ColorTags.ROSE}>Tailwinds.css</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
