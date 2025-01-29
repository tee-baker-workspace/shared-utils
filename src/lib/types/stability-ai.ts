export type TStableImageOutputFormat = 'jpeg' | 'png' | 'webp';
export type TStableImageAspectRatios =
  | '16:9'
  | '1:1'
  | '21:9'
  | '2:3'
  | '3:2'
  | '4:5'
  | '5:4'
  | '9:16'
  | '9:21';

export type TStableImageStylePreset =
  | '3d-model'
  | 'analog-film'
  | 'anime'
  | 'cinematic'
  | 'comic-book'
  | 'digital-art'
  | 'enhance'
  | 'fantasy-art'
  | 'isometric'
  | 'line-art'
  | 'low-poly'
  | 'modeling-compound'
  | 'neon-punk'
  | 'origami'
  | 'photographic'
  | 'pixel-art'
  | 'tile-texture';

export interface IStableImagePayload {
  prompt: string;
  output_format?: TStableImageOutputFormat;
  aspect_ratio?: TStableImageAspectRatios;
  style_preset?: TStableImageStylePreset;
  seed?: number;
  negative_prompt?: string;
}

export interface IStableImageResponse {
  image: string;
  finish_reason: string;
  seed?: number;
}

export interface IStableImageErrorResponse {
  id: string;
  name: string;
  error: string[];
}
