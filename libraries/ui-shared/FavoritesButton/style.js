import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const buttonProto = {
  display: 'block',
  position: 'relative',
  background: '#fff',
  borderRadius: '50%',
  padding: 0,
  fontSize: 20,
  lineHeight: 1,
  color: themeConfig.colors.accent,
  outline: 0,
  zIndex: 15, // Should overlap the gallery bullets
};

const buttonFlat = css(buttonProto).toString();

const button = css({
  ...buttonProto,
  boxShadow: '0 8px 13px rgba(0, 0, 0, 0.25)',
}).toString();

const ripple = css({
  padding: 6,
}).toString();

export default {
  buttonFlat,
  button,
  ripple,
};
