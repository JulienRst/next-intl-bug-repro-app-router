import { Link as NextIntlLink } from './navigation';
import React from 'react';

const Link = React.forwardRef<React.ElementRef<typeof NextIntlLink>, React.PropsWithoutRef<typeof NextIntlLink>>((props, ref) => (
  <NextIntlLink ref={ref} {...props} />
));

export default Link;