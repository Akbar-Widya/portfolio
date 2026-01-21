/**
 * @copyright 2025 akbarwidya
 * @license Apache-2.0
 */

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
   if (href) {
      return (
         <a
            href={href}
            target={target}
            className={"btn btn-primary " + classes}
         >
            {label}

            {icon ? (
               <span className="material-symbols-rounded" aria-hidden="true">
                  {icon}
               </span>
            ) : undefined}
         </a>
      );
   } else {
      return (
         <button className={"btn btn-primary " + classes}>
            {label}

            {icon ? (
               <span className="material-symbols-rounded" aria-hidden="true">
                  {icon}
               </span>
            ) : undefined}
         </button>
      );
   }
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
   if (href) {
      return (
         <a
            href={href}
            target={target}
            className={"btn btn-outline " + classes}
         >
            {label}

            {icon ? (
               <span className="material-symbols-rounded" aria-hidden="true">
                  {icon}
               </span>
            ) : undefined}
         </a>
      );
   } else {
      return (
         <button className={"btn btn-outline " + classes}>
            {label}

            {icon ? (
               <span className="material-symbols-rounded" aria-hidden="true">
                  {icon}
               </span>
            ) : undefined}
         </button>
      );
   }
};

export { ButtonPrimary, ButtonOutline };
