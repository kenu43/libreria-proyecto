import { SVGProps } from "react";

export function IconoPrueba(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from BoxIcons by Atisa - https://creativecommons.org/licenses/by/4.0/ */}
      <path
        d="M2.6 13.083l3.452 1.511L16 9.167l-6 7l8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z"
        fill="currentColor"
      />
    </svg>
  );
}
