import { css } from 'glamor';

const pulse = css.keyframes({
  '0%': { opacity: '.075' },
  '50%': { opacity: '.125' },
  '100%': { opacity: '.075' },
});

export default css({
  animation: `${pulse} 3500ms infinite linear`,
  background: '#000',
  position: 'relative',
});
