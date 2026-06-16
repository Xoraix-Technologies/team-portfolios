export function DbIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function PythonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      {/* Top snake */}
      <path
        d="M12 3c-3.5 0-4 2-4 3.5V9h6c1.5 0 2.5-1 2.5-2.5V6c0-1.5-1-3-4.5-3z"
        fill="currentColor"
      />
      <circle cx="10" cy="6" r="0.8" fill="white" />

      {/* Bottom snake */}
      <path
        d="M12 21c3.5 0 4-2 4-3.5V15h-6c-1.5 0-2.5 1-2.5 2.5v.5c0 1.5 1 3 4.5 3z"
        fill="currentColor"
      />
      <circle cx="14" cy="18" r="0.8" fill="white" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.2c0-.9.3-1.6.8-2-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.9 5.5-5.6 5.8.5.4.9 1.3.9 2.6V22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 18 3 12l6-6M15 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function LinuxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      {/* Head */}
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />

      {/* Eyes */}
      <circle cx="10.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="13.5" cy="7.5" r="0.5" fill="currentColor" />

      {/* Body */}
      <path
        d="M8 14c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5v3c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Feet */}
      <path
        d="M9 19.5c0 .8-.8 1.5-1.8 1.5S5.5 20.3 5.5 19.5M15 19.5c0 .8.8 1.5 1.8 1.5s1.7-.7 1.7-1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CodeBracketsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 9 5 12l3 3M16 9l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7 11 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DockerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      {/* Containers */}
      <rect x="3" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="7" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="11" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="7" y="6" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="11" y="6" width="3" height="3" rx="0.5" fill="currentColor" />

      {/* Whale body */}
      <path d="M2 14h14c0 3-2.5 5-6 5-4 0-7-2-8-5z" fill="currentColor" />

      {/* Whale tail */}
      <path d="M16 14c1-2 3-2 4-1-1 1-2 2-4 1z" fill="currentColor" />
    </svg>
  );
}

export function ReactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="1.7" fill="currentColor" />
      <path
        d="M12 7c3.6 0 6.7 1.6 7.8 4.1.4.9.4 1.8 0 2.8C18.7 16.4 15.6 18 12 18s-6.7-1.6-7.8-4.1c-.4-.9-.4-1.8 0-2.8C5.3 8.6 8.4 7 12 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.9"
      />
      <path
        d="M9.2 8.6c1.8-3.1 4.6-5 6.9-4.6 1 .2 1.7.8 2.2 1.7 1.8 3.1 1 7-2 10.8-3 3.7-6.6 5.7-8.9 5.1-1-.2-1.7-.8-2.2-1.7"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.75"
      />
      <path
        d="M14.8 8.6c-1.8-3.1-4.6-5-6.9-4.6-1 .2-1.7.8-2.2 1.7-1.8 3.1-1 7 2 10.8 3 3.7 6.6 5.7 8.9 5.1 1-.2 1.7-.8 2.2-1.7"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.75"
      />
    </svg>
  );
}

export function PaletteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3a9 9 0 1 0 0 18c1.7 0 2.3-1 2.3-2 0-1.2-1-1.8-2.1-1.8h-.6a2 2 0 0 1 0-4h2.2c3 0 5.2-2 5.2-5 0-3-3.1-5.2-6.4-5.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="8.5" cy="10" r="1" fill="currentColor" />
      <circle cx="11.5" cy="8.3" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6a3 3 0 0 1 6 0v1H9V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 9h16v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 13h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
