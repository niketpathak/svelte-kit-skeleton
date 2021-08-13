import { dev, mode } from '$app/env';

export const isProduction = mode === 'production';
export const isDev = dev;
export const isTest = mode === 'test';
