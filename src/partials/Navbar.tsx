// Navbar.tsx
import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/" className="group">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-slate-800 transition-all group-hover:stroke-orange-500 dark:stroke-slate-100 dark:group-hover:stroke-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          }
          name="Mary Wangui"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">
          <span className="relative font-medium text-slate-700 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400">
            Blogs
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full dark:bg-orange-400"></span>
          </span>
        </NavMenuItem>
        <NavMenuItem href="https://github.com/Zeegaths">
          <span className="relative font-medium text-slate-700 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400">
            GitHub
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full dark:bg-orange-400"></span>
          </span>
        </NavMenuItem>
        <NavMenuItem href="https://x.com/gathoni_zarah">
          <span className="relative font-medium text-slate-700 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400">
            X
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full dark:bg-orange-400"></span>
          </span>
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };