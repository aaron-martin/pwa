import { css } from 'glamor';
import color from 'color';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors: { shade7 } } = themeConfig;

const pulse = css.keyframes({
  '0%': { backgroundPosition: '100% 0' },
  '100%': { backgroundPosition: '-100% 0' },
});

const light = color(shade7).lighten(0.025);

export default css({
  background: [
    shade7,
    `linear-gradient(to right, ${light} 20%, ${shade7} 50%, ${light} 80%)`,
  ],
  backgroundSize: '200% 100%',
  animation: `${pulse} 1000ms linear infinite forwards`,
  position: 'relative',
});
