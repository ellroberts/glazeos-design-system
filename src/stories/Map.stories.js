export default {
  title: 'Components/Map',
  render: ({ variant, size }) => `<div class="gos-map gos-map--${variant} gos-map--${size}" style="max-width:640px">
    <span class="gos-tag gos-tag--light gos-map__pill"><i class="gos-tag__dot"></i>Roughly 25 miles from Leeds</span></div>
    <p style="font-size:13px;color:var(--mute)">The grid is the fallback shown behind the Google Maps iframe (left out of the story so it works offline).</p>`,
  argTypes: {
    variant: { control: 'inline-radio', options: ['grid', 'plain'] },
    size: { control: 'inline-radio', options: ['md', 'lg'] },
  },
  args: { variant: 'grid', size: 'md' },
};

export const Grid = {};
export const PlainLarge = { args: { variant: 'plain', size: 'lg' } };
