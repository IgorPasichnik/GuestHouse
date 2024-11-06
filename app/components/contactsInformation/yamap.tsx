// import React, { ReactNode } from "react";
// import { Reactify } from "@yandex/ymaps3-types/reactify";
// import {
//   YMap,
//   YMapDefaultFeaturesLayer,
//   YMapDefaultSchemeLayer,
// } from "@yandex/ymaps3-types/imperative";
// import { YMapComponentsProvider } from "ymap3-components";

// interface YMapComponentsProviderProps {
//   apiKey?: string;
//   lang?: string;
//   onLoad?: (params: {
//     reactify: Reactify;
//     ymaps: typeof import("@yandex/ymaps3-types/index");
//   }) => any;
//   children: ReactNode | ReactNode[];
// }

// function Map({ children, ...props }: YMapComponentsProviderProps) {
//   return (
//     <YMapComponentsProvider
//       apiKey={process.env.REACT_APP_YMAP_KEY}
//     ></YMapComponentsProvider>
//   );
// }

// export default Map;
