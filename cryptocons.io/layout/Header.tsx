import { createIcon } from '@cryptocons'

export const Header = () => (
  <header>
    <Logo size="28" />
  </header>
)

const Logo = createIcon({
  path: (
    <>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="10"
        fill="url(#paint0_linear_8_926)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9616 10.0384C12.8783 8.95499 11.1217 8.95499 10.0384 10.0384C8.95498 11.1218 8.95498 12.8783 10.0384 13.9616C11.1217 15.045 12.8783 15.045 13.9616 13.9616C14.6626 13.2607 15.7991 13.2607 16.5 13.9616C17.201 14.6626 17.201 15.7991 16.5 16.5C14.0147 18.9853 9.98528 18.9853 7.5 16.5C5.01471 14.0147 5.01471 9.98529 7.5 7.5C9.98528 5.01472 14.0147 5.01472 16.5 7.5C17.201 8.20095 17.201 9.33742 16.5 10.0384C15.7991 10.7393 14.6626 10.7393 13.9616 10.0384Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8_926"
          x1="9.95299"
          y1="2.44859"
          x2="14.2619"
          y2="21.4041"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BD01FF" />
          <stop offset="1" stopColor="#0157FF" />
        </linearGradient>
      </defs>
    </>
  ),
})
