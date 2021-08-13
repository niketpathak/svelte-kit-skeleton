/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  VITE_APP_ANALYSE_BUNDLE: boolean;
  VITE_DISABLE_DOCKER: boolean;
  VITE_NO_DOCKER_APP_PORT: number;
  VITE_NO_DOCKER_API_PORT: number;
}
