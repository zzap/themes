/** @jsx jsx */
import { jsx, css } from "theme-ui"
import { SkipNavLink } from "@reach/skip-nav"

const Header = ({ children, title, ...props }) => (
  <header>
    <SkipNavLink sx={{ variant: `styles.a` }} />
    <div
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        pt: 4,
      })}
    >
      <div
        css={css({
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          mb: 4,
        })}
      >
        {children}
      </div>
      {/* {props.location.pathname === rootPath && <Bio />} */}
    </div>
  </header>
)

export default Header
