// ProjectList.tsx
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
    <div className="relative">
      {/* Background glow effects */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      
      <div className="relative flex flex-col gap-8">
        {/* Project 1 - Strimz */}
        <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all hover:-translate-y-2">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-900/30 via-black/80 to-black opacity-90 transition-opacity group-hover:opacity-100" />
          
          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/40 to-amber-500/40 opacity-0 blur-xl transition-opacity group-hover:opacity-60" />
          
          {/* Glass border */}
          <div className="absolute inset-[2px] rounded-2xl border border-orange-500/20 bg-black/60 backdrop-blur-xl" />
          
          {/* Content */}
          <div className="relative z-10 p-6">
            <Project
              name="Strimz"
              description="A token streaming platform for automated salaries, subscriptions and utility payments. Employers can upload CSVs with employee details and set streaming intervals for seamless payment automation."
              link="https://strimz-85ux.vercel.app/"
              img={{
                src: '/assets/images/strimz.png',
                alt: 'Strimz - Token Streaming Platform',
              }}
              category={
                <>
                  <Tags color={ColorTags.ORANGE}>Next.js</Tags>
                  <Tags color={ColorTags.SLATE}>Solidity</Tags>
                  <Tags color={ColorTags.AMBER}>Tailwind.css</Tags>
                  <Tags color={ColorTags.ZINC}>TypeScript</Tags>
                </>
              }
            />
          </div>
        </div>

        {/* Project 2 - AntiKorrupt */}
        <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all hover:-translate-y-2">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-900/30 via-black/80 to-black opacity-90 transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/40 to-amber-500/40 opacity-0 blur-xl transition-opacity group-hover:opacity-60" />
          <div className="absolute inset-[2px] rounded-2xl border border-orange-500/20 bg-black/60 backdrop-blur-xl" />
          
          <div className="relative z-10 p-6">
            <Project
              name="AntiKorrupt"
              description="An AI-driven educational platform trained on UN anti-corruption materials and gamified to help students learn about corruption through interactive experiences and real-world scenarios."
              link="https://px7id-byaaa-aaaak-albiq-cai.icp0.io/"
              img={{ 
                src: '/assets/images/antikorrupt.png', 
                alt: 'AntiKorrupt - AI Educational Platform' 
              }}
              category={
                <>
                  <Tags color={ColorTags.ORANGE}>Svelte</Tags>
                  <Tags color={ColorTags.SLATE}>Motoko</Tags>
                  <Tags color={ColorTags.AMBER}>Tailwind.css</Tags>
                </>
              }
            />
          </div>
        </div>

        {/* Project 3 - P2P Farmers */}
        <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all hover:-translate-y-2">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-900/30 via-black/80 to-black opacity-90 transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/40 to-amber-500/40 opacity-0 blur-xl transition-opacity group-hover:opacity-60" />
          <div className="absolute inset-[2px] rounded-2xl border border-orange-500/20 bg-black/60 backdrop-blur-xl" />
          
          <div className="relative z-10 p-6">
            <Project
              name="P2P Farmers"
              description="A blockchain marketplace connecting farmers directly to consumers with dual rewards for sustainable practices. Winner of 3rd place in the ICP MEGA-HACKATHON, promoting sustainable agriculture."
              link="https://pm4fe-4iaaa-aaaak-ao7bq-cai.icp0.io/"
              img={{ 
                src: '/assets/images/p2pfarmers.png', 
                alt: 'P2P Farmers - Blockchain Marketplace' 
              }}
              category={
                <>
                  <Tags color={ColorTags.ORANGE}>React.js</Tags>
                  <Tags color={ColorTags.SLATE}>Motoko</Tags>
                  <Tags color={ColorTags.AMBER}>Tailwind.css</Tags>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { ProjectList };