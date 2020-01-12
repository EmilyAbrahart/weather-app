/* eslint-disable camelcase */
// VARIABLES
// Colors
export const color_light = '#ffffff';
export const color_dark = '#131b24';
export const color_dark_blue = '#273648';
export const color_accent = '#fE512E';
export const color_subtle = '#F8F8F8';
export const color_light_blue = '#1fd1c3'

// Media Queries
export const mobile = '(max-device-width : 480px)';
export const tablet = '(max-device-width : 1024px)';

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
  return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};
