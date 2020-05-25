/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Text = ({ variant = "heading", ...props }) => (
  <Styled.p
    {...props}
    sx={{
      m: 0,
      variant: `text.${variant}`,
    }}
  />
)

export default Text